// app.js - Application Logic for TinyWonders Online Toy Store

(function () {
  'use strict';

  // State Management
  const state = {
    currentView: 'home', // 'home', 'shop', 'product', 'admin'
    currentProduct: null,
    cart: [],
    wishlist: new Set(),
    activeFilterOccasion: null,
    activeFilterAge: null,
    activeFilterCategory: null,
    filterPriceMax: 3000,
    filterInStockOnly: false,
    sortBy: 'popular',
    viewMode: 'grid', // 'grid' | 'list'
    searchQuery: '',
    checkoutStep: 1,
    orders: [
      {
        id: 'ORD-9824',
        customer: 'Siddharth Rao',
        phone: '+91 98450 11223',
        address: 'Koramangala 4th Block, Bengaluru',
        items: [{ name: 'Wooden Rainbow Stacker & Arch', qty: 1, price: 799 }],
        total: 898,
        payment: 'UPI (GPay)',
        status: 'Processing', // Processing, Dispatched, In Transit, Delivered, Cancelled
        date: '13 Nov 2026, 10:15 AM'
      },
      {
        id: 'ORD-9823',
        customer: 'Meera Nambiar',
        phone: '+91 97110 44556',
        address: 'Bandra West, Mumbai',
        items: [
          { name: 'Classic Championship Carrom Board', qty: 1, price: 2499 },
          { name: 'Diwali Festive Sparkle Art Kit', qty: 2, price: 399 }
        ],
        total: 3297,
        payment: 'Credit Card',
        status: 'Dispatched',
        date: '12 Nov 2026, 04:45 PM'
      },
      {
        id: 'ORD-9822',
        customer: 'Ankit Gupta',
        phone: '+91 99887 66554',
        address: 'Sector 45, Gurgaon',
        items: [{ name: 'Plush Baby Elephant Balaram', qty: 1, price: 549 }],
        total: 648,
        payment: 'Cash on Delivery',
        status: 'In Transit',
        date: '11 Nov 2026, 02:20 PM'
      }
    ],
    occasionSectionCollapsed: false,
    occasionFilterCollapsed: false
  };

  // Helper Functions
  function formatPrice(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function switchView(viewName) {
    state.currentView = viewName;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`${viewName}-view`);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Update nav active states
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('data-view');
      link.classList.toggle('active', href === viewName);
    });
  }

  // Render Product Card
  function createProductCardHTML(p) {
    const isWishlisted = state.wishlist.has(p.id);
    const hasDiscount = p.originalPrice && p.originalPrice > p.price;
    const discountPercent = hasDiscount ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const isOutOfStock = p.stock <= 0;

    return `
      <div class="product-card" data-product-id="${p.id}">
        <div class="product-image-container" onclick="window.storeApp.openProduct(${p.id})">
          <img src="${p.images[0]}" alt="${p.name}" class="product-img" onerror="window.handleImgError(this, ${p.id})">
          ${isOutOfStock ? `<span class="out-of-stock-badge">Out of Stock</span>` : (hasDiscount ? `<span class="sale-badge">-${discountPercent}%</span>` : '')}
          <div class="card-actions-top" onclick="event.stopPropagation()">
            <button class="action-icon-btn ${isWishlisted ? 'active' : ''}" onclick="window.storeApp.toggleWishlist(${p.id}, this)" title="Add to Wishlist" aria-label="Add to Wishlist">
              <svg viewBox="0 0 24 24" fill="${isWishlisted ? '#FF6B6B' : 'none'}" stroke="${isWishlisted ? '#FF6B6B' : 'currentColor'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button class="action-icon-btn" onclick="window.storeApp.quickView(${p.id})" title="Quick View" aria-label="Quick View">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-tags-row">
            <span class="age-tag">${p.ageGroup} Yrs</span>
            <span class="product-category-text">${p.category}</span>
          </div>
          <h3 class="product-name" onclick="window.storeApp.openProduct(${p.id})">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
            <span class="review-count">(${p.reviewCount})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">${formatPrice(p.price)}</span>
            ${hasDiscount ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn" onclick="window.storeApp.addToCart(${p.id})" ${isOutOfStock ? 'disabled' : ''}>
            ${isOutOfStock ? 'Out of Stock' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Add to Cart'}
          </button>
        </div>
      </div>
    `;
  }

  // Render Home Page Components
  function renderHome() {
    // Render Hero Shapes
    const heroVisual = document.getElementById('hero-shapes-container');
    if (heroVisual && window.HERO_SHAPES_SVG) {
      heroVisual.innerHTML = window.HERO_SHAPES_SVG;
    }

    // Render Trust Strip
    const trustStrip = document.getElementById('trust-strip');
    if (trustStrip && window.TRUST_SVGS) {
      trustStrip.innerHTML = `
        <div class="trust-item">
          <div class="trust-icon-box">${window.TRUST_SVGS.certified}</div>
          <div>
            <div class="trust-title">Safe & BIS Certified</div>
            <div class="trust-desc">100% Non-toxic materials</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon-box">${window.TRUST_SVGS.returns}</div>
          <div>
            <div class="trust-title">Easy 7-Day Returns</div>
            <div class="trust-desc">Hassle-free pickups</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon-box">${window.TRUST_SVGS.secure}</div>
          <div>
            <div class="trust-title">Secure Payments</div>
            <div class="trust-desc">UPI, Cards & Cash on Delivery</div>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon-box">${window.TRUST_SVGS.delivery}</div>
          <div>
            <div class="trust-title">Express Delivery</div>
            <div class="trust-desc">Free shipping above ₹999</div>
          </div>
        </div>
      `;
    }

    // Render Occasion Tiles
    const occasionsContainer = document.getElementById('occasions-container');
    if (occasionsContainer && window.OCCASIONS) {
      occasionsContainer.innerHTML = window.OCCASIONS.map(occ => `
        <div class="occasion-tile" onclick="window.storeApp.filterByOccasion('${occ}')">
          <div class="occasion-icon-wrap" style="background-color: ${window.OCCASION_COLORS[occ] || '#FFE0B2'}20">
            ${window.OCCASION_SVGS[occ] || ''}
          </div>
          <div class="occasion-name">${occ}</div>
        </div>
      `).join('');
    }

    // Render Age Pills
    const ageContainer = document.getElementById('age-pills-container');
    if (ageContainer && window.AGE_GROUPS) {
      ageContainer.innerHTML = window.AGE_GROUPS.map(age => `
        <button class="age-pill" onclick="window.storeApp.filterByAge('${age}')">${age} Years</button>
      `).join('');
    }

    // Render Featured Carousel
    const featuredTrack = document.getElementById('featured-track');
    if (featuredTrack && window.PRODUCTS) {
      const featuredList = window.PRODUCTS.slice(0, 8);
      featuredTrack.innerHTML = featuredList.map(p => createProductCardHTML(p)).join('');
    }

    // Render Testimonials
    const testContainer = document.getElementById('testimonials-container');
    if (testContainer && window.SAMPLE_REVIEWS) {
      testContainer.innerHTML = window.SAMPLE_REVIEWS.slice(0, 3).map(rev => `
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote">"${rev.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${rev.name.charAt(0)}</div>
            <div>
              <div class="author-name">${rev.name}</div>
              <div class="author-city">Verified Buyer</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Render Footer Social Media Icons dynamically
    const footerSocial = document.getElementById('footer-social-links');
    if (footerSocial && window.SOCIAL_SVGS) {
      footerSocial.innerHTML = `
        <a href="#" class="social-icon" aria-label="Facebook" onclick="event.preventDefault(); showToast('TinyWonders Facebook Page', 'info');">${window.SOCIAL_SVGS.facebook}</a>
        <a href="#" class="social-icon" aria-label="Instagram" onclick="event.preventDefault(); showToast('TinyWonders Instagram (@tinywonders)', 'info');">${window.SOCIAL_SVGS.instagram}</a>
        <a href="#" class="social-icon" aria-label="Twitter" onclick="event.preventDefault(); showToast('TinyWonders Twitter', 'info');">${window.SOCIAL_SVGS.twitter}</a>
        <a href="#" class="social-icon" aria-label="YouTube" onclick="event.preventDefault(); showToast('TinyWonders Play & Learn Channel', 'info');">${window.SOCIAL_SVGS.youtube}</a>
      `;
    }
  }

  // Render Shop Filters and Products
  function renderShop() {
    // Populate Sidebar Category Checkboxes
    const categoryFilterBox = document.getElementById('filter-categories-box');
    if (categoryFilterBox && window.CATEGORIES) {
      categoryFilterBox.innerHTML = window.CATEGORIES.map(cat => `
        <label class="filter-option">
          <input type="checkbox" value="${cat}" ${state.activeFilterCategory === cat ? 'checked' : ''} onchange="window.storeApp.toggleCategoryFilter('${cat}')">
          <span>${cat}</span>
        </label>
      `).join('');
    }

    // Populate Sidebar Occasion Checkboxes
    const occasionFilterBox = document.getElementById('filter-occasions-box');
    if (occasionFilterBox && window.OCCASIONS) {
      occasionFilterBox.innerHTML = window.OCCASIONS.map(occ => `
        <label class="filter-option">
          <input type="checkbox" value="${occ}" ${state.activeFilterOccasion === occ ? 'checked' : ''} onchange="window.storeApp.toggleOccasionFilter('${occ}')">
          <span>${occ}</span>
        </label>
      `).join('');
    }

    // Populate Sidebar Age Checkboxes
    const ageFilterBox = document.getElementById('filter-ages-box');
    if (ageFilterBox && window.AGE_GROUPS) {
      ageFilterBox.innerHTML = window.AGE_GROUPS.map(age => `
        <label class="filter-option">
          <input type="checkbox" value="${age}" ${state.activeFilterAge === age ? 'checked' : ''} onchange="window.storeApp.toggleAgeFilter('${age}')">
          <span>${age} Yrs</span>
        </label>
      `).join('');
    }

    applyShopFilters();
  }

  function applyShopFilters() {
    let list = [...(window.PRODUCTS || [])];

    // Occasion Filter
    if (state.activeFilterOccasion) {
      list = list.filter(p => p.occasions && p.occasions.includes(state.activeFilterOccasion));
    }

    // Age Filter
    if (state.activeFilterAge) {
      list = list.filter(p => p.ageGroup === state.activeFilterAge);
    }

    // Category Filter
    if (state.activeFilterCategory) {
      list = list.filter(p => p.category === state.activeFilterCategory);
    }

    // Price Filter
    if (state.filterPriceMax) {
      list = list.filter(p => p.price <= state.filterPriceMax);
    }

    // In Stock Only
    if (state.filterInStockOnly) {
      list = list.filter(p => p.stock > 0);
    }

    // Search Query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }

    // Sorting
    if (state.sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    // Render active filter chips
    const chipsContainer = document.getElementById('active-filter-chips');
    if (chipsContainer) {
      const chips = [];
      if (state.activeFilterOccasion) {
        chips.push(`<span class="filter-chip">Occasion: ${state.activeFilterOccasion} <span class="filter-chip-remove" onclick="window.storeApp.clearFilter('occasion')">&times;</span></span>`);
      }
      if (state.activeFilterAge) {
        chips.push(`<span class="filter-chip">Age: ${state.activeFilterAge} Yrs <span class="filter-chip-remove" onclick="window.storeApp.clearFilter('age')">&times;</span></span>`);
      }
      if (state.activeFilterCategory) {
        chips.push(`<span class="filter-chip">Category: ${state.activeFilterCategory} <span class="filter-chip-remove" onclick="window.storeApp.clearFilter('category')">&times;</span></span>`);
      }
      if (state.filterPriceMax < 3000) {
        chips.push(`<span class="filter-chip">Up to ${formatPrice(state.filterPriceMax)} <span class="filter-chip-remove" onclick="window.storeApp.clearFilter('price')">&times;</span></span>`);
      }
      if (state.filterInStockOnly) {
        chips.push(`<span class="filter-chip">In Stock Only <span class="filter-chip-remove" onclick="window.storeApp.clearFilter('stock')">&times;</span></span>`);
      }
      chipsContainer.innerHTML = chips.join('');
    }

    // Result count text
    const resultCount = document.getElementById('shop-result-count');
    if (resultCount) {
      resultCount.textContent = `Showing ${list.length} toys`;
    }

    // Render Grid
    const shopGrid = document.getElementById('shop-products-grid');
    if (shopGrid) {
      if (list.length === 0) {
        shopGrid.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🧸</div>
            <h3>No toys match your criteria</h3>
            <p>Try resetting some filters or searching for something else!</p>
            <button class="btn btn-primary" onclick="window.storeApp.clearAllFilters()">Reset All Filters</button>
          </div>
        `;
      } else {
        shopGrid.innerHTML = list.map(p => createProductCardHTML(p)).join('');
      }
    }
  }

  // Open Product Page View
  function openProduct(id) {
    const p = (window.PRODUCTS || []).find(item => item.id === id);
    if (!p) return;
    state.currentProduct = p;

    // Update JSON-LD structured schema
    const schemaScript = document.getElementById('product-json-ld');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": p.name,
        "image": p.images,
        "description": p.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": p.price,
          "availability": p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.rating,
          "reviewCount": p.reviewCount
        }
      });
    }

    // Populate Breadcrumbs
    const bcCategory = document.getElementById('product-bc-category');
    const bcTitle = document.getElementById('product-bc-title');
    if (bcCategory) bcCategory.textContent = p.category;
    if (bcTitle) bcTitle.textContent = p.name;

    // Gallery Main Image & Fallback
    const mainImgBox = document.getElementById('product-detail-main-img');
    if (mainImgBox) {
      mainImgBox.innerHTML = `
        <img src="${p.images[0]}" alt="${p.name}" class="product-img" onerror="window.handleImgError(this, ${p.id})">
      `;
    }

    // Thumbnails
    const thumbContainer = document.getElementById('product-thumbnail-strip');
    if (thumbContainer) {
      thumbContainer.innerHTML = p.images.map((img, idx) => `
        <div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="window.storeApp.switchProductThumb('${img}', this)">
          <img src="${img}" alt="Thumbnail ${idx + 1}" onerror="window.handleImgError(this, ${p.id})">
        </div>
      `).join('') + `
        <div class="thumbnail-item" onclick="window.storeApp.openVideoModal()" title="Play Product Video">
          <div class="video-thumb-overlay"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
      `;
    }

    // Details info
    document.getElementById('detail-title').textContent = p.name;
    document.getElementById('detail-stars').textContent = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));
    document.getElementById('detail-reviews-num').textContent = `(${p.reviewCount} customer reviews)`;
    document.getElementById('detail-price-val').textContent = formatPrice(p.price);
    
    const origPriceEl = document.getElementById('detail-orig-price-val');
    const discountEl = document.getElementById('detail-discount-tag');
    if (p.originalPrice && p.originalPrice > p.price) {
      origPriceEl.textContent = formatPrice(p.originalPrice);
      origPriceEl.style.display = 'inline';
      const pct = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
      discountEl.textContent = `Save ${pct}%`;
      discountEl.style.display = 'inline-block';
    } else {
      origPriceEl.style.display = 'none';
      discountEl.style.display = 'none';
    }

    document.getElementById('detail-desc-text').textContent = p.description;

    // Reset qty
    const qtyInput = document.getElementById('detail-qty-input');
    if (qtyInput) qtyInput.value = 1;

    // You May Also Like
    const relatedContainer = document.getElementById('related-products-row');
    if (relatedContainer) {
      const related = (window.PRODUCTS || []).filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);
      relatedContainer.innerHTML = related.map(item => createProductCardHTML(item)).join('');
    }

    switchView('product');
  }

  // Cart Drawer Logic
  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

    // Badges
    const badgeEl = document.getElementById('cart-badge');
    if (badgeEl) {
      badgeEl.textContent = totalCount;
      badgeEl.classList.remove('bounce');
      void badgeEl.offsetWidth; // trigger reflow
      badgeEl.classList.add('bounce');
    }

    // Free delivery progress (Target ₹999)
    const needed = 999 - subtotal;
    const progressText = document.getElementById('delivery-progress-msg');
    const progressBar = document.getElementById('delivery-progress-fill');
    if (progressText && progressBar) {
      if (needed <= 0) {
        progressText.innerHTML = `🎉 Congratulations! You have unlocked <strong>FREE Delivery</strong>!`;
        progressBar.style.width = '100%';
      } else {
        progressText.innerHTML = `Add <strong>${formatPrice(needed)}</strong> more for <strong>FREE Delivery</strong>`;
        const pct = Math.min(100, Math.round((subtotal / 999) * 100));
        progressBar.style.width = pct + '%';
      }
    }

    // Subtotal
    const subtotalEl = document.getElementById('cart-subtotal-val');
    if (subtotalEl) {
      subtotalEl.textContent = formatPrice(subtotal);
    }

    // Cart items list
    const cartContainer = document.getElementById('cart-items-list');
    if (cartContainer) {
      if (state.cart.length === 0) {
        cartContainer.innerHTML = `
          <div style="text-align: center; padding: 48px 0; color: var(--gray-500);">
            <div style="font-size: 3rem; margin-bottom: 12px;">🛒</div>
            <p style="font-size: 1.1rem; font-weight: 600;">Your cart is empty</p>
            <p style="font-size: 0.9rem; margin-top: 6px;">Discover exciting BIS certified toys for your little ones!</p>
          </div>
        `;
      } else {
        cartContainer.innerHTML = state.cart.map(item => {
          const p = item.product;
          return `
            <div class="cart-item">
              <div class="cart-item-img">
                <img src="${p.images[0]}" alt="${p.name}" onerror="window.handleImgError(this, ${p.id})">
              </div>
              <div class="cart-item-details">
                <div class="cart-item-name">${p.name}</div>
                <div class="cart-item-price">${formatPrice(p.price)}</div>
                <div class="cart-item-bottom">
                  <div class="quantity-stepper" style="transform: scale(0.85); transform-origin: left center;">
                    <button class="qty-btn" onclick="window.storeApp.updateCartQty(${p.id}, -1)">-</button>
                    <input type="text" class="qty-input" value="${item.qty}" readonly>
                    <button class="qty-btn" onclick="window.storeApp.updateCartQty(${p.id}, 1)">+</button>
                  </div>
                  <span class="cart-remove-btn" onclick="window.storeApp.removeCartItem(${p.id})">Remove</span>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  function addToCart(productId, quantity = 1) {
    const p = (window.PRODUCTS || []).find(item => item.id === productId);
    if (!p) return;
    if (p.stock <= 0) {
      showToast('Sorry, this toy is currently out of stock!', 'error');
      return;
    }

    const existing = state.cart.find(item => item.product.id === productId);
    if (existing) {
      existing.qty += quantity;
    } else {
      state.cart.push({ product: p, qty: quantity });
    }

    updateCartUI();
    showToast(`Added "${p.name}" to your cart! 🛍️`);
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.add('open');
      document.body.classList.add('cart-open');
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.remove('open');
      document.body.classList.remove('cart-open');
    }
  }

  // Wishlist Logic
  function toggleWishlist(productId, btn) {
    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      showToast('Removed from wishlist');
      if (btn) btn.classList.remove('active');
    } else {
      state.wishlist.add(productId);
      showToast('Saved to your wishlist! ❤️');
      if (btn) btn.classList.add('active');
    }
    const wishlistBadge = document.getElementById('wishlist-badge');
    if (wishlistBadge) {
      wishlistBadge.textContent = state.wishlist.size;
    }
  }

  // Live Search Suggestions
  function handleSearchInput(value) {
    const suggestionsBox = document.getElementById('search-suggestions');
    if (!suggestionsBox) return;

    if (!value || value.trim().length < 2) {
      suggestionsBox.classList.remove('show');
      return;
    }

    const q = value.toLowerCase();
    const matches = (window.PRODUCTS || []).filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 5);

    if (matches.length === 0) {
      suggestionsBox.innerHTML = `<div style="padding: 12px 16px; font-size: 0.85rem; color: var(--gray-500);">No toys found matching "${value}"</div>`;
    } else {
      suggestionsBox.innerHTML = matches.map(p => {
        return `
          <div class="suggestion-item" onclick="window.storeApp.openProduct(${p.id}); document.getElementById('search-suggestions').classList.remove('show');">
            <div class="suggestion-thumb">
              <img src="${p.images[0]}" alt="${p.name}" onerror="window.handleImgError(this, ${p.id})">
            </div>
            <div>
              <div class="suggestion-title">${p.name}</div>
              <div class="suggestion-meta">${p.category} &bull; ${formatPrice(p.price)}</div>
            </div>
          </div>
        `;
      }).join('');
    }
    suggestionsBox.classList.add('show');
  }

  // Checkout Modal Logic
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Your cart is empty! Please add some toys first.', 'info');
      return;
    }
    closeCartDrawer();
    state.checkoutStep = 1;
    renderCheckoutStep();
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.classList.add('modal-open');
    }
  }

  function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  }

  function setCheckoutStep(step) {
    state.checkoutStep = step;
    renderCheckoutStep();
  }

  function renderCheckoutStep() {
    for (let i = 1; i <= 3; i++) {
      const stepEl = document.getElementById(`step-indicator-${i}`);
      const paneEl = document.getElementById(`checkout-pane-${i}`);
      if (stepEl) {
        stepEl.classList.toggle('active', i === state.checkoutStep);
        stepEl.classList.toggle('completed', i < state.checkoutStep);
      }
      if (paneEl) {
        paneEl.classList.toggle('active', i === state.checkoutStep);
      }
    }

    if (state.checkoutStep === 3) {
      // Review pane subtotal
      const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
      const deliveryFee = subtotal >= 999 ? 0 : 99;
      const total = subtotal + deliveryFee;

      const reviewBox = document.getElementById('checkout-review-summary');
      if (reviewBox) {
        const itemsHtml = state.cart.map(item => {
          const p = item.product;
          return `
            <div style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid var(--gray-200);">
              <div style="width:48px; height:48px; border-radius:var(--radius-sm); overflow:hidden; background:var(--gray-50); flex-shrink:0;">
                <img src="${p.images[0]}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;" onerror="window.handleImgError(this, ${p.id})">
              </div>
              <div style="flex:1; min-width:0;">
                <div style="font-weight:700; font-size:0.9rem; color:var(--navy); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
                <div style="font-size:0.8rem; color:var(--gray-500);">${item.qty} &times; ${formatPrice(p.price)}</div>
              </div>
              <div style="font-weight:700; font-size:0.9rem; color:var(--navy); flex-shrink:0;">${formatPrice(p.price * item.qty)}</div>
            </div>
          `;
        }).join('');

        reviewBox.innerHTML = `
          <div style="margin-bottom: 16px; max-height: 200px; overflow-y: auto; padding-right: 4px;">
            ${itemsHtml}
          </div>
          <div style="background: var(--bg); padding: 18px; border-radius: var(--radius-md); margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;"><span>Items Total (${state.cart.length})</span><span>${formatPrice(subtotal)}</span></div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;"><span>Delivery Fee</span><span>${deliveryFee === 0 ? '<strong style="color:var(--teal)">FREE</strong>' : formatPrice(deliveryFee)}</span></div>
            <div style="border-top: 1px solid var(--gray-300); padding-top: 10px; display:flex; justify-content:space-between; font-weight:800; font-size:1.15rem; color:var(--navy);"><span>Total Payable</span><span>${formatPrice(total)}</span></div>
          </div>
        `;
      }
    }
  }

  function completeOrder() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const deliveryFee = subtotal >= 999 ? 0 : 99;
    const total = subtotal + deliveryFee;

    const newOrder = {
      id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      customer: 'Nirmal Kumar',
      phone: '+91 98765 43210',
      address: 'Flat 402, Green Meadows Apartment, Indiranagar, Bengaluru',
      items: state.cart.map(i => ({ name: i.product.name, qty: i.qty, price: i.product.price })),
      total: total,
      payment: 'UPI (GPay / PhonePe)',
      status: 'Processing',
      date: 'Just now'
    };

    // Deduct stock in real-time
    state.cart.forEach(item => {
      const p = (window.PRODUCTS || []).find(prod => prod.id === item.product.id);
      if (p) {
        p.stock = Math.max(0, p.stock - item.qty);
      }
    });

    state.orders.unshift(newOrder);

    showToast(`🎉 Order #${newOrder.id} placed successfully! Visible in Owner Dashboard.`, 'success');
    state.cart = [];
    updateCartUI();
    closeCheckout();
    applyShopFilters();
  }

  // Admin View Logic
  function renderAdmin() {
    const products = window.PRODUCTS || [];
    document.getElementById('admin-stat-products').textContent = products.length;
    document.getElementById('admin-stat-categories').textContent = (window.CATEGORIES || []).length;
    document.getElementById('admin-stat-stock').textContent = products.reduce((sum, p) => sum + p.stock, 0);

    const ordersCountEl = document.getElementById('admin-stat-orders');
    if (ordersCountEl) ordersCountEl.textContent = state.orders.length;
    const badgeEl = document.getElementById('admin-orders-count-badge');
    if (badgeEl) badgeEl.textContent = state.orders.length;

    renderAdminOrders();
    renderAdminProductsTable();

    // Populate category dropdown in admin form
    const catSelect = document.getElementById('admin-add-category-select');
    if (catSelect && window.CATEGORIES) {
      catSelect.innerHTML = window.CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    // Populate occasions multiselect in admin form
    const occMulti = document.getElementById('admin-add-occasions-select');
    if (occMulti && window.OCCASIONS) {
      occMulti.innerHTML = window.OCCASIONS.map(o => `<option value="${o}">${o}</option>`).join('');
    }
  }

  function renderAdminOrders() {
    const ordersBody = document.getElementById('admin-orders-table-body');
    if (!ordersBody) return;

    if (state.orders.length === 0) {
      ordersBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:var(--gray-500);">No orders placed yet.</td></tr>`;
      return;
    }

    ordersBody.innerHTML = state.orders.map(ord => {
      let statusColor = 'var(--yellow)';
      let statusBg = 'var(--yellow-light)';
      if (ord.status === 'Dispatched') {
        statusColor = 'var(--navy)';
        statusBg = '#E0F2FE';
      } else if (ord.status === 'In Transit') {
        statusColor = '#6366F1';
        statusBg = '#EEF2FF';
      } else if (ord.status === 'Delivered') {
        statusColor = 'var(--teal-dark)';
        statusBg = 'var(--teal-light)';
      } else if (ord.status === 'Cancelled') {
        statusColor = 'var(--coral)';
        statusBg = '#FEE2E2';
      }

      const itemsDesc = ord.items.map(it => `${it.qty}x ${it.name}`).join('<br>');

      return `
        <tr>
          <td><strong>#${ord.id}</strong><div style="font-size:0.75rem; color:var(--gray-500);">${ord.date}</div></td>
          <td>
            <strong>${ord.customer}</strong>
            <div style="font-size:0.75rem; color:var(--gray-500);">${ord.phone}</div>
            <div style="font-size:0.75rem; color:var(--gray-500); max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ord.address}</div>
          </td>
          <td style="font-size:0.85rem;">${itemsDesc}</td>
          <td><strong>${formatPrice(ord.total)}</strong></td>
          <td style="font-size:0.85rem;">${ord.payment}</td>
          <td>
            <span style="display:inline-block; padding:3px 10px; border-radius:var(--radius-full); font-size:0.8rem; font-weight:700; background:${statusBg}; color:${statusColor};">
              ${ord.status}
            </span>
          </td>
          <td>
            <select class="form-control" style="font-size:0.825rem; padding:4px 8px;" onchange="window.storeApp.updateOrderStatus('${ord.id}', this.value)">
              <option value="Processing" ${ord.status === 'Processing' ? 'selected' : ''}>Processing</option>
              <option value="Dispatched" ${ord.status === 'Dispatched' ? 'selected' : ''}>Dispatch</option>
              <option value="In Transit" ${ord.status === 'In Transit' ? 'selected' : ''}>In Transit</option>
              <option value="Delivered" ${ord.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
              <option value="Cancelled" ${ord.status === 'Cancelled' ? 'selected' : ''}>Cancel Order</option>
            </select>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderAdminProductsTable() {
    const products = window.PRODUCTS || [];
    const tableBody = document.getElementById('admin-products-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = products.map(p => `
      <tr>
        <td><strong>#${p.id}</strong></td>
        <td>
          <strong>${p.name}</strong>
          <div style="font-size:0.75rem; color:var(--gray-500);">${p.ageGroup} Yrs &bull; ${p.occasions ? p.occasions.join(', ') : ''}</div>
        </td>
        <td>${p.category}</td>
        <td>
          <input type="number" value="${p.price}" min="49" max="9999" style="width: 80px; padding: 4px 6px; border: 1px solid var(--gray-300); border-radius: var(--radius-sm);" onchange="window.storeApp.adminEditPrice(${p.id}, this.value)">
        </td>
        <td>
          <span style="color: ${p.stock > 0 ? 'var(--teal-dark)' : 'var(--coral)'}; font-weight: 700;">
            ${p.stock > 0 ? `${p.stock} units` : 'Out of Stock'}
          </span>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn btn-sm btn-secondary" style="padding:2px 8px;" onclick="window.storeApp.adminAdjustStock(${p.id}, -1)">-</button>
            <input type="number" value="${p.stock}" min="0" max="999" style="width: 60px; padding: 4px; text-align: center; border: 1px solid var(--gray-300); border-radius: var(--radius-sm);" onchange="window.storeApp.adminSetStock(${p.id}, this.value)">
            <button class="btn btn-sm btn-secondary" style="padding:2px 8px;" onclick="window.storeApp.adminAdjustStock(${p.id}, 1)">+</button>
          </div>
        </td>
        <td>
          <button class="btn btn-sm btn-secondary" style="color:var(--coral);" onclick="window.storeApp.adminDeleteProduct(${p.id})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  function handleAddProduct(e) {
    e.preventDefault();
    const name = document.getElementById('admin-p-name').value;
    const price = Number(document.getElementById('admin-p-price').value);
    const category = document.getElementById('admin-add-category-select').value;
    const ageGroup = document.getElementById('admin-p-age').value;
    const stock = Number(document.getElementById('admin-p-stock').value);
    const desc = document.getElementById('admin-p-desc').value;

    const occSelect = document.getElementById('admin-add-occasions-select');
    const selectedOccasions = Array.from(occSelect.selectedOptions).map(opt => opt.value);

    const newProduct = {
      id: (window.PRODUCTS.length ? Math.max(...window.PRODUCTS.map(p => p.id)) : 0) + 1,
      name,
      price,
      originalPrice: Math.round(price * 1.2),
      category,
      occasions: selectedOccasions.length ? selectedOccasions : ["Birthday"],
      ageGroup,
      rating: 5.0,
      reviewCount: 1,
      stock,
      description: desc || "Exciting new educational toy crafted for playful growth.",
      tags: ["new"],
      images: ["images/p_new.jpg", "images/p_new2.jpg"]
    };

    window.PRODUCTS.unshift(newProduct);
    showToast(`Added product "${name}" to store!`);
    renderAdmin();
    applyShopFilters();
    document.getElementById('admin-add-product-form').reset();
  }

  // Public API attached to window
  window.storeApp = {
    init: function () {
      renderHome();
      renderShop();
      updateCartUI();

      // Setup Sticky Header scroll shadow
      window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
          header.classList.toggle('header--scrolled', window.scrollY > 20);
        }
      });

      // Search debounce
      const searchInput = document.getElementById('search-input');
      let debounceTimer;
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            handleSearchInput(e.target.value);
          }, 250);
        });

        // Close suggestions on outside click
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.search-container')) {
            const suggestions = document.getElementById('search-suggestions');
            if (suggestions) suggestions.classList.remove('show');
          }
        });
      }

      // Escape key closes modals & drawers
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeCartDrawer();
          closeCheckout();
        }
      });
    },

    navigate: function (view) {
      switchView(view);
    },

    filterByOccasion: function (occ) {
      state.activeFilterOccasion = occ;
      state.activeFilterAge = null;
      state.activeFilterCategory = null;
      switchView('shop');
      renderShop();
    },

    filterByAge: function (age) {
      state.activeFilterAge = age;
      state.activeFilterOccasion = null;
      state.activeFilterCategory = null;
      switchView('shop');
      renderShop();
    },

    toggleCategoryFilter: function (cat) {
      state.activeFilterCategory = state.activeFilterCategory === cat ? null : cat;
      applyShopFilters();
    },

    toggleOccasionFilter: function (occ) {
      state.activeFilterOccasion = state.activeFilterOccasion === occ ? null : occ;
      applyShopFilters();
    },

    toggleAgeFilter: function (age) {
      state.activeFilterAge = state.activeFilterAge === age ? null : age;
      applyShopFilters();
    },

    setPriceMax: function (val) {
      state.filterPriceMax = Number(val);
      const display = document.getElementById('price-slider-display');
      if (display) display.textContent = formatPrice(val);
      applyShopFilters();
    },

    toggleInStock: function (checked) {
      state.filterInStockOnly = checked;
      applyShopFilters();
    },

    setSortBy: function (val) {
      state.sortBy = val;
      applyShopFilters();
    },

    clearFilter: function (type) {
      if (type === 'occasion') state.activeFilterOccasion = null;
      if (type === 'age') state.activeFilterAge = null;
      if (type === 'category') state.activeFilterCategory = null;
      if (type === 'price') {
        state.filterPriceMax = 3000;
        const slider = document.getElementById('price-range-input');
        if (slider) slider.value = 3000;
        const display = document.getElementById('price-slider-display');
        if (display) display.textContent = formatPrice(3000);
      }
      if (type === 'stock') {
        state.filterInStockOnly = false;
        const toggle = document.getElementById('in-stock-toggle');
        if (toggle) toggle.checked = false;
      }
      renderShop();
    },

    clearAllFilters: function () {
      state.activeFilterOccasion = null;
      state.activeFilterAge = null;
      state.activeFilterCategory = null;
      state.filterPriceMax = 3000;
      state.filterInStockOnly = false;
      state.searchQuery = '';
      const slider = document.getElementById('price-range-input');
      if (slider) slider.value = 3000;
      const toggle = document.getElementById('in-stock-toggle');
      if (toggle) toggle.checked = false;
      renderShop();
    },

    openProduct: openProduct,

    switchProductThumb: function (imgSrc, thumbEl) {
      const mainImg = document.querySelector('#product-detail-main-img img');
      if (mainImg) mainImg.src = imgSrc;
      document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
      if (thumbEl) thumbEl.classList.add('active');
    },

    changeDetailQty: function (delta) {
      const input = document.getElementById('detail-qty-input');
      if (!input) return;
      let val = parseInt(input.value) || 1;
      val = Math.max(1, val + delta);
      input.value = val;
    },

    addToCartFromDetail: function () {
      if (!state.currentProduct) return;
      const input = document.getElementById('detail-qty-input');
      const qty = parseInt(input.value) || 1;
      addToCart(state.currentProduct.id, qty);
    },

    buyNowFromDetail: function () {
      if (!state.currentProduct) return;
      const input = document.getElementById('detail-qty-input');
      const qty = parseInt(input.value) || 1;
      addToCart(state.currentProduct.id, qty);
      openCheckout();
    },

    checkPincode: function () {
      const input = document.getElementById('pincode-input');
      const msg = document.getElementById('pincode-msg');
      if (!input || !msg) return;
      const val = input.value.trim();
      if (!/^\d{6}$/.test(val)) {
        msg.textContent = 'Please enter a valid 6-digit Indian PIN code';
        msg.style.color = 'var(--coral)';
        return;
      }
      msg.textContent = `✓ Delivery available to ${val}! Estimated delivery in 3-5 business days.`;
      msg.style.color = 'var(--teal-dark)';
    },

    switchTab: function (tabName, btn) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const content = document.getElementById(`tab-content-${tabName}`);
      if (content) content.classList.add('active');
    },

    addReview: function (e) {
      e.preventDefault();
      const name = document.getElementById('review-author-name').value;
      const text = document.getElementById('review-text').value;
      if (!name || !text) return;

      const list = document.getElementById('reviews-list-container');
      if (list) {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
          <div class="review-header">
            <span class="reviewer-name">${name}</span>
            <span class="review-date">Just now</span>
          </div>
          <div style="color: #FFA41C; margin-bottom: 6px;">★★★★★</div>
          <p style="font-size: 0.95rem; color: var(--gray-700);">${text}</p>
        `;
        list.prepend(item);
      }
      showToast('Thank you for sharing your review! ⭐');
      document.getElementById('add-review-form').reset();
    },

    addToCart: addToCart,
    openCart: openCartDrawer,
    closeCart: closeCartDrawer,
    updateCartQty: function (productId, delta) {
      const item = state.cart.find(i => i.product.id === productId);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.product.id !== productId);
      }
      updateCartUI();
    },
    removeCartItem: function (productId) {
      state.cart = state.cart.filter(i => i.product.id !== productId);
      updateCartUI();
      showToast('Item removed from cart');
    },

    toggleWishlist: toggleWishlist,

    openCheckout: openCheckout,
    closeCheckout: closeCheckout,
    setCheckoutStep: setCheckoutStep,
    completeOrder: completeOrder,

    openAdmin: function () {
      switchView('admin');
      renderAdmin();
    },
    switchAdminTab: function (tab) {
      const ordersPane = document.getElementById('admin-pane-orders');
      const inventoryPane = document.getElementById('admin-pane-inventory');
      const addPane = document.getElementById('admin-pane-add');

      const btnOrders = document.getElementById('admin-tab-btn-orders');
      const btnInv = document.getElementById('admin-tab-btn-inventory');
      const btnAdd = document.getElementById('admin-tab-btn-add');

      if (ordersPane) ordersPane.style.display = tab === 'orders' ? 'block' : 'none';
      if (inventoryPane) inventoryPane.style.display = tab === 'inventory' ? 'block' : 'none';
      if (addPane) addPane.style.display = tab === 'add' ? 'block' : 'none';

      if (btnOrders) {
        btnOrders.className = tab === 'orders' ? 'btn btn-primary' : 'btn btn-secondary';
      }
      if (btnInv) {
        btnInv.className = tab === 'inventory' ? 'btn btn-primary' : 'btn btn-secondary';
      }
      if (btnAdd) {
        btnAdd.className = tab === 'add' ? 'btn btn-primary' : 'btn btn-secondary';
      }
    },
    renderAdminOrders: renderAdminOrders,
    updateOrderStatus: function (orderId, newStatus) {
      const ord = state.orders.find(o => o.id === orderId);
      if (ord) {
        ord.status = newStatus;
        showToast(`Order #${orderId} marked as "${newStatus}"!`);
        renderAdminOrders();
      }
    },
    adminSetStock: function (id, val) {
      const p = (window.PRODUCTS || []).find(prod => prod.id === id);
      if (p) {
        p.stock = Math.max(0, parseInt(val) || 0);
        showToast(`Stock for "${p.name}" updated to ${p.stock}`);
        renderAdmin();
        applyShopFilters();
      }
    },
    adminAdjustStock: function (id, delta) {
      const p = (window.PRODUCTS || []).find(prod => prod.id === id);
      if (p) {
        p.stock = Math.max(0, p.stock + delta);
        showToast(`Stock for "${p.name}" updated to ${p.stock}`);
        renderAdmin();
        applyShopFilters();
      }
    },
    adminEditPrice: function (id, newPrice) {
      const p = (window.PRODUCTS || []).find(prod => prod.id === id);
      if (p) {
        p.price = Math.max(1, parseInt(newPrice) || p.price);
        showToast(`Price for "${p.name}" updated to ${formatPrice(p.price)}`);
        renderAdmin();
        applyShopFilters();
      }
    },
    toggleOccasionSection: function () {
      state.occasionSectionCollapsed = !state.occasionSectionCollapsed;
      const container = document.getElementById('occasions-container');
      const btn = document.getElementById('occasion-toggle-btn');
      if (container) {
        container.style.display = state.occasionSectionCollapsed ? 'none' : 'grid';
      }
      if (btn) {
        btn.innerHTML = state.occasionSectionCollapsed ? 'Expand &#9662;' : 'Collapse &#9652;';
      }
    },
    toggleOccasionFilterCollapse: function () {
      state.occasionFilterCollapsed = !state.occasionFilterCollapsed;
      const box = document.getElementById('filter-occasions-box');
      const chevron = document.getElementById('occasion-filter-chevron');
      if (box) {
        box.style.display = state.occasionFilterCollapsed ? 'none' : 'block';
      }
      if (chevron) {
        chevron.innerHTML = state.occasionFilterCollapsed ? '&#9656;' : '&#9662;';
      }
    },
    toggleMobileFilters: function (open) {
      const sidebar = document.getElementById('shop-sidebar');
      if (!sidebar) return;
      const isOpen = open !== undefined ? open : !sidebar.classList.contains('open');
      sidebar.classList.toggle('open', isOpen);
      document.body.classList.toggle('modal-open', isOpen);
    },
    handleAddProduct: handleAddProduct,
    adminDeleteProduct: function (id) {
      window.PRODUCTS = window.PRODUCTS.filter(p => p.id !== id);
      showToast('Product deleted from inventory');
      renderAdmin();
      applyShopFilters();
    },
    adminAddCategory: function () {
      const input = document.getElementById('admin-new-cat-input');
      const val = input.value.trim();
      if (!val) return;
      if (!window.CATEGORIES.includes(val)) {
        window.CATEGORIES.push(val);
        showToast(`Category "${val}" added!`);
        input.value = '';
        renderAdmin();
        renderShop();
      }
    },
    adminAddOccasion: function () {
      const input = document.getElementById('admin-new-occ-input');
      const val = input.value.trim();
      if (!val) return;
      if (!window.OCCASIONS.includes(val)) {
        window.OCCASIONS.push(val);
        window.OCCASION_COLORS[val] = "#FFC857";
        showToast(`Occasion "${val}" added!`);
        input.value = '';
        renderAdmin();
        renderShop();
      }
    },

    quickView: function (productId) {
      openProduct(productId);
    },

    openVideoModal: function () {
      showToast('🎬 Product demo video preview modal (Demo placeholder)', 'info');
    },

    handleNewsletter: function (e) {
      e.preventDefault();
      showToast('🎉 Thank you for subscribing to TinyWonders newsletter!');
      e.target.reset();
    }
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.storeApp.init);
  } else {
    window.storeApp.init();
  }
})();
