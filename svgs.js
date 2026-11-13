// svgs.js - Inline SVG Illustrations, Trust Icons, Occasion Icons, and Fallbacks for TinyWonders

// Trust Strip Icons (32x32)
window.TRUST_SVGS = {
  certified: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="trust-svg"><path d="M16 3l10 4.5v7.5c0 6.6-4.4 12.8-10 14-5.6-1.2-10-7.4-10-14V7.5L16 3z"/><path d="M11 15.5l3.5 3.5 7-7" stroke="#3FB8AF" stroke-width="2.5"/></svg>`,
  returns: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="trust-svg"><path d="M5 14h16a6 6 0 0 1 0 12h-8"/><path d="M9 10L5 14l4 4"/><circle cx="16" cy="16" r="1.5" fill="currentColor"/></svg>`,
  secure: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="trust-svg"><rect x="6" y="12" width="20" height="16" rx="3"/><path d="M10 12V8a6 6 0 1 1 12 0v4"/><circle cx="16" cy="20" r="2" fill="currentColor"/></svg>`,
  delivery: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="trust-svg"><path d="M2 7h18v14H2z"/><path d="M20 12h6l4 4v5h-10v-9z"/><circle cx="8" cy="24" r="3" fill="#FFC857"/><circle cx="24" cy="24" r="3" fill="#FFC857"/><path d="M13 14h3M7 11h4M5 14h2"/></svg>`
};

// Occasion SVGs (40x40)
window.OCCASION_SVGS = {
  Diwali: `<svg viewBox="0 0 40 40" fill="none" class="occ-svg">
    <ellipse cx="20" cy="26" rx="14" ry="7" fill="#E65100"/>
    <path d="M6 26c0 5 6 9 14 9s14-4 14-9" fill="#FFB74D"/>
    <path d="M20 7c3 4 5 7 5 11a5 5 0 0 1-10 0c0-4 2-7 5-11z" fill="#FFD54F"/>
    <path d="M20 11c1.5 2 2.5 3.5 2.5 5.5a2.5 2.5 0 0 1-5 0c0-2 1-3.5 2.5-5.5z" fill="#FF3D00"/>
    <circle cx="20" cy="5" r="1.5" fill="#FFE082"/>
  </svg>`,
  Christmas: `<svg viewBox="0 0 40 40" fill="none" class="occ-svg">
    <rect x="8" y="16" width="24" height="18" rx="2" fill="#D32F2F"/>
    <rect x="6" y="12" width="28" height="5" rx="1.5" fill="#B71C1C"/>
    <rect x="18" y="12" width="4" height="22" fill="#FFD54F"/>
    <rect x="8" y="23" width="24" height="4" fill="#FFD54F"/>
    <path d="M20 12c-3-4-8-3-8 0 0 3 8 4 8 0z" fill="#FFD54F"/>
    <path d="M20 12c3-4 8-3 8 0 0 3-8 4-8 0z" fill="#FFD54F"/>
  </svg>`,
  Pongal: `<svg viewBox="0 0 40 40" fill="none" class="occ-svg">
    <ellipse cx="20" cy="27" rx="13" ry="10" fill="#795548"/>
    <ellipse cx="20" cy="18" rx="10" ry="3" fill="#5D4037"/>
    <path d="M12 18c0-3 3-6 8-6s8 3 8 6" fill="#FFF8E1"/>
    <circle cx="16" cy="14" r="3" fill="#FFF9C4"/>
    <circle cx="24" cy="14" r="3.5" fill="#FFF9C4"/>
    <circle cx="20" cy="12" r="3" fill="#FFFDE7"/>
    <path d="M7 32c5 2 11 3 13 3s8-1 13-3" stroke="#FFC107" stroke-width="2"/>
    <path d="M28 8l4-5M32 12l5-2" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  Birthday: `<svg viewBox="0 0 40 40" fill="none" class="occ-svg">
    <rect x="8" y="22" width="24" height="14" rx="2" fill="#F06292"/>
    <path d="M8 22c3 2 5 2 8 0 3 2 5 2 8 0 3 2 5 2 8 0v4c-3 2-5 2-8 0-3 2-5 2-8 0-3 2-5 2-8 0z" fill="#F8BBD0"/>
    <rect x="11" y="14" width="18" height="8" rx="2" fill="#BA68C8"/>
    <rect x="18.5" y="8" width="3" height="6" fill="#FFEB3B"/>
    <path d="M20 4c1 1.5 1.5 2.5 1.5 3.5a1.5 1.5 0 0 1-3 0c0-1 .5-2 1.5-3.5z" fill="#FF5722"/>
    <circle cx="13" cy="27" r="1.5" fill="#FFF"/>
    <circle cx="20" cy="27" r="1.5" fill="#FFF"/>
    <circle cx="27" cy="27" r="1.5" fill="#FFF"/>
  </svg>`,
  "Back to School": `<svg viewBox="0 0 40 40" fill="none" class="occ-svg">
    <rect x="10" y="14" width="20" height="20" rx="5" fill="#1976D2"/>
    <path d="M15 14V9a4 4 0 0 1 8 0v5" stroke="#1565C0" stroke-width="2.5" fill="none"/>
    <rect x="13" y="22" width="14" height="9" rx="2" fill="#42A5F5"/>
    <path d="M10 20h20" stroke="#0D47A1" stroke-width="2"/>
    <circle cx="20" cy="26" r="1.5" fill="#FFD54F"/>
    <rect x="6" y="18" width="4" height="8" rx="1" fill="#1565C0"/>
    <rect x="30" y="18" width="4" height="8" rx="1" fill="#1565C0"/>
  </svg>`
};

// Social Media SVGs
window.SOCIAL_SVGS = {
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFF"/></svg>`
};

// Hero Floating Shapes SVG (600x500)
window.HERO_SHAPES_SVG = `
<svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-shapes">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3E0" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#E0F2F1" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1B3A5C" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background decorative cloud pill -->
  <rect x="60" y="40" width="480" height="420" rx="40" fill="url(#bgGrad)" filter="url(#softGlow)"/>

  <!-- Large Center Teddy Shape -->
  <g transform="translate(180, 100)">
    <g class="anim-float-1">
      <!-- Ears -->
      <circle cx="70" cy="70" r="28" fill="#FFC857"/>
      <circle cx="70" cy="70" r="16" fill="#FFE082"/>
      <circle cx="170" cy="70" r="28" fill="#FFC857"/>
      <circle cx="170" cy="70" r="16" fill="#FFE082"/>
      <!-- Head -->
      <circle cx="120" cy="120" r="65" fill="#FFB74D"/>
      <!-- Snout -->
      <ellipse cx="120" cy="135" rx="28" ry="22" fill="#FFF8E1"/>
      <ellipse cx="120" cy="125" rx="10" ry="7" fill="#1B3A5C"/>
      <path d="M120 132v8m-7 0c0 4 7 5 7 5s7-1 7-5" stroke="#1B3A5C" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Eyes -->
      <circle cx="98" cy="110" r="7" fill="#1B3A5C"/>
      <circle cx="96" cy="108" r="2" fill="#FFF"/>
      <circle cx="142" cy="110" r="7" fill="#1B3A5C"/>
      <circle cx="140" cy="108" r="2" fill="#FFF"/>
      <!-- Cheeks -->
      <ellipse cx="85" cy="125" rx="8" ry="5" fill="#FF8A80" opacity="0.6"/>
      <ellipse cx="155" cy="125" rx="8" ry="5" fill="#FF8A80" opacity="0.6"/>
      <!-- Bowtie -->
      <path d="M100 180l40 16v-16l-40 16z" fill="#FF6B6B"/>
      <circle cx="120" cy="188" r="6" fill="#FFD54F"/>
    </g>
  </g>

  <!-- Rainbow Stacker Arches -->
  <g transform="translate(360, 240)">
    <g class="anim-float-2">
      <path d="M20 140 A80 80 0 0 1 180 140" stroke="#FF6B6B" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M38 140 A62 62 0 0 1 162 140" stroke="#FFC857" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M56 140 A44 44 0 0 1 144 140" stroke="#3FB8AF" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M74 140 A26 26 0 0 1 126 140" stroke="#1B3A5C" stroke-width="16" fill="none" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Building Blocks (Left bottom) -->
  <g transform="translate(90, 260)">
    <g class="anim-float-3">
      <!-- Block 1 -->
      <rect x="10" y="80" width="70" height="50" rx="8" fill="#3FB8AF"/>
      <circle cx="32" cy="74" r="8" fill="#3FB8AF"/>
      <circle cx="58" cy="74" r="8" fill="#3FB8AF"/>
      <text x="45" y="112" font-family="Poppins, sans-serif" font-weight="bold" font-size="22" fill="#FFF" text-anchor="middle">A</text>
      <!-- Block 2 -->
      <rect x="75" y="50" width="60" height="50" rx="8" fill="#FFC857"/>
      <circle cx="95" cy="44" r="7" fill="#FFC857"/>
      <circle cx="115" cy="44" r="7" fill="#FFC857"/>
      <text x="105" y="82" font-family="Poppins, sans-serif" font-weight="bold" font-size="20" fill="#1B3A5C" text-anchor="middle">1</text>
      <!-- Block 3 -->
      <rect x="40" y="20" width="55" height="45" rx="8" fill="#FF6B6B"/>
      <circle cx="67" cy="14" r="7" fill="#FF6B6B"/>
      <text x="67" y="50" font-family="Poppins, sans-serif" font-weight="bold" font-size="18" fill="#FFF" text-anchor="middle">★</text>
    </g>
  </g>

  <!-- Floating Balloon (Top Left) -->
  <g transform="translate(90, 40)">
    <g class="anim-float-1">
      <ellipse cx="40" cy="50" rx="30" ry="38" fill="#FF6B6B"/>
      <ellipse cx="30" cy="38" rx="8" ry="14" fill="#FFF" opacity="0.4"/>
      <polygon points="36,88 44,88 40,94" fill="#E53935"/>
      <path d="M40 94 Q48 115 36 130 T44 160" stroke="#B0BEC5" stroke-width="2" fill="none"/>
    </g>
  </g>

  <!-- Floating Balloon (Top Right) -->
  <g transform="translate(450, 60)">
    <g class="anim-float-2">
      <ellipse cx="40" cy="45" rx="26" ry="34" fill="#3FB8AF"/>
      <ellipse cx="32" cy="34" rx="6" ry="12" fill="#FFF" opacity="0.4"/>
      <polygon points="37,79 43,79 40,84" fill="#00897B"/>
      <path d="M40 84 Q32 105 45 120 T36 145" stroke="#B0BEC5" stroke-width="2" fill="none"/>
    </g>
  </g>

  <!-- Sparkling Golden Stars & Little Orbs -->
  <g transform="translate(230, 40)">
    <g class="anim-float-3">
      <path d="M15 0L19 10L30 14L19 18L15 28L11 18L0 14L11 10Z" fill="#FFC857"/>
    </g>
  </g>
  <g transform="translate(420, 170)">
    <g class="anim-float-1">
      <path d="M12 0L15 8L24 11L15 14L12 22L9 14L0 11L9 8Z" fill="#FFC857"/>
    </g>
  </g>
  <g transform="translate(150, 200)">
    <g class="anim-float-2">
      <circle cx="8" cy="8" r="8" fill="#FFE082"/>
    </g>
  </g>
  <g transform="translate(470, 370)">
    <g class="anim-float-3">
      <circle cx="10" cy="10" r="10" fill="#80CBC4"/>
    </g>
  </g>
</svg>
`;

// 8 Distinct Designed SVG Fallback Illustrations for Products (200x200)
window.SVG_FALLBACKS = {
  // 1: Building Blocks Stacker
  blocks: (title = "Building Blocks") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradBlocks" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFF8E7"/>
          <stop offset="100%" stop-color="#FFE4BA"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradBlocks)"/>
      <g transform="translate(45, 35)">
        <!-- Base block -->
        <rect x="10" y="85" width="90" height="35" rx="6" fill="#3FB8AF"/>
        <circle cx="32" cy="79" r="6" fill="#2EA39B"/>
        <circle cx="55" cy="79" r="6" fill="#2EA39B"/>
        <circle cx="78" cy="79" r="6" fill="#2EA39B"/>
        <!-- Middle block -->
        <rect x="25" y="48" width="60" height="32" rx="6" fill="#FFC857"/>
        <circle cx="42" cy="42" r="6" fill="#E5B242"/>
        <circle cx="68" cy="42" r="6" fill="#E5B242"/>
        <!-- Top triangle roof / Arch -->
        <path d="M55 12L85 45H25Z" fill="#FF6B6B"/>
      </g>
    </svg>`,

  // 2: Teddy Bear
  teddy: (title = "Plush Soft Toy") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradTeddy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FCE4EC"/>
          <stop offset="100%" stop-color="#F8BBD0"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradTeddy)"/>
      <g transform="translate(50, 40)">
        <!-- Ears -->
        <circle cx="22" cy="30" r="16" fill="#BA8D63"/>
        <circle cx="22" cy="30" r="9" fill="#F48FB1"/>
        <circle cx="78" cy="30" r="16" fill="#BA8D63"/>
        <circle cx="78" cy="30" r="9" fill="#F48FB1"/>
        <!-- Head -->
        <circle cx="50" cy="55" r="35" fill="#C99B72"/>
        <!-- Muzzle -->
        <ellipse cx="50" cy="65" rx="16" ry="12" fill="#FFF3E0"/>
        <ellipse cx="50" cy="60" rx="5" ry="4" fill="#1B3A5C"/>
        <path d="M50 64v5m-4 0c0 2 4 3 4 3s4-1 4-3" stroke="#1B3A5C" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Eyes -->
        <circle cx="38" cy="50" r="4" fill="#1B3A5C"/>
        <circle cx="62" cy="50" r="4" fill="#1B3A5C"/>
        <!-- Body & Paws -->
        <path d="M26 88c0-10 10-18 24-18s24 8 24 18v25H26V88z" fill="#BA8D63"/>
        <ellipse cx="50" cy="100" rx="14" ry="12" fill="#FFF3E0"/>
        <circle cx="18" cy="98" r="9" fill="#C99B72"/>
        <circle cx="82" cy="98" r="9" fill="#C99B72"/>
      </g>
    </svg>`,

  // 3: Toy Car / RC Racer
  car: (title = "Toy Car") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradCar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E1F5FE"/>
          <stop offset="100%" stop-color="#B3E5FC"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradCar)"/>
      <g transform="translate(25, 60)">
        <!-- Car body -->
        <path d="M15 50L35 24C42 16 52 14 62 14H102C112 14 120 20 126 28L142 50H148C152 50 155 54 155 58V68C155 72 152 75 148 75H5C2 75 0 72 0 68V58C0 54 2 50 5 50H15Z" fill="#FF6B6B"/>
        <!-- Windows -->
        <path d="M42 45L54 22H96V45H42Z" fill="#E0F7FA"/>
        <path d="M102 22H118L132 45H102V22Z" fill="#E0F7FA"/>
        <!-- Headlight -->
        <circle cx="150" cy="56" r="4" fill="#FFEB3B"/>
        <!-- Wheels -->
        <circle cx="40" cy="75" r="18" fill="#1B3A5C"/>
        <circle cx="40" cy="75" r="9" fill="#CFD8DC"/>
        <circle cx="120" cy="75" r="18" fill="#1B3A5C"/>
        <circle cx="120" cy="75" r="9" fill="#CFD8DC"/>
      </g>
    </svg>`,

  // 4: Puzzle Piece
  puzzle: (title = "Jigsaw Puzzle") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradPuzzle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#EDE7F6"/>
          <stop offset="100%" stop-color="#D1C4E9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradPuzzle)"/>
      <g transform="translate(50, 45)">
        <path d="M15 15H42C41 7 47 0 55 0C63 0 69 7 68 15H95V42C87 41 80 47 80 55C80 63 87 69 95 68V95H68C69 103 63 110 55 110C47 110 41 103 42 95H15V68C23 69 30 63 30 55C30 47 23 41 15 42V15Z" fill="#3FB8AF"/>
        <circle cx="55" cy="55" r="12" fill="#FFF" opacity="0.4"/>
      </g>
    </svg>`,

  // 5: Robot
  robot: (title = "STEM Robot") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradRobot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E0F2F1"/>
          <stop offset="100%" stop-color="#A7FFEB"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradRobot)"/>
      <g transform="translate(55, 30)">
        <!-- Antenna -->
        <line x1="45" y1="8" x2="45" y2="24" stroke="#1B3A5C" stroke-width="3" stroke-linecap="round"/>
        <circle cx="45" cy="8" r="6" fill="#FF6B6B"/>
        <!-- Head -->
        <rect x="20" y="24" width="50" height="36" rx="8" fill="#1B3A5C"/>
        <!-- Visor / Eyes -->
        <rect x="28" y="34" width="34" height="12" rx="4" fill="#FFC857"/>
        <circle cx="36" cy="40" r="3" fill="#1B3A5C"/>
        <circle cx="54" cy="40" r="3" fill="#1B3A5C"/>
        <!-- Neck -->
        <rect x="40" y="60" width="10" height="6" fill="#78909C"/>
        <!-- Body -->
        <rect x="15" y="66" width="60" height="52" rx="10" fill="#3FB8AF"/>
        <!-- Chest gauge -->
        <circle cx="45" cy="92" r="14" fill="#FFF"/>
        <path d="M45 92L52 86" stroke="#FF6B6B" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Arms -->
        <rect x="2" y="72" width="9" height="28" rx="4" fill="#1B3A5C"/>
        <rect x="79" y="72" width="9" height="28" rx="4" fill="#1B3A5C"/>
      </g>
    </svg>`,

  // 6: Doll
  doll: (title = "Fabric Doll") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradDoll" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFF0F5"/>
          <stop offset="100%" stop-color="#FFE4E1"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradDoll)"/>
      <g transform="translate(60, 30)">
        <!-- Hair back -->
        <circle cx="40" cy="40" r="28" fill="#5D4037"/>
        <path d="M12 40v30c0 5 6 8 10 5" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
        <path d="M68 40v30c0 5-6 8-10 5" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
        <!-- Face -->
        <circle cx="40" cy="40" r="22" fill="#FFE0B2"/>
        <!-- Hair bangs -->
        <path d="M22 28c8 5 18 2 36-2-4 8-16 12-36 4z" fill="#5D4037"/>
        <!-- Eyes & Smile -->
        <circle cx="32" cy="40" r="2.5" fill="#1B3A5C"/>
        <circle cx="48" cy="40" r="2.5" fill="#1B3A5C"/>
        <ellipse cx="28" cy="45" rx="3" ry="1.5" fill="#FF8A80"/>
        <ellipse cx="52" cy="45" rx="3" ry="1.5" fill="#FF8A80"/>
        <path d="M37 48c1.5 2 4.5 2 6 0" stroke="#E65100" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Traditional Festive Kurta/Dress -->
        <path d="M24 64L10 115H70L56 64H24Z" fill="#FF6B6B"/>
        <path d="M40 64v51" stroke="#FFC857" stroke-width="2"/>
        <circle cx="40" cy="74" r="2" fill="#FFD54F"/>
        <circle cx="40" cy="86" r="2" fill="#FFD54F"/>
        <circle cx="40" cy="98" r="2" fill="#FFD54F"/>
      </g>
    </svg>`,

  // 7: Board Game
  board: (title = "Board Game") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradBoard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradBoard)"/>
      <g transform="translate(42, 42)">
        <!-- Board base -->
        <rect x="0" y="0" width="116" height="116" rx="12" fill="#795548"/>
        <rect x="8" y="8" width="100" height="100" rx="8" fill="#FFF8E1"/>
        <!-- Center Carrom / Board Circle -->
        <circle cx="58" cy="58" r="22" stroke="#FF6B6B" stroke-width="3" fill="none"/>
        <circle cx="58" cy="58" r="8" fill="#FF6B6B"/>
        <!-- Pockets -->
        <circle cx="18" cy="18" r="7" fill="#1B3A5C"/>
        <circle cx="98" cy="18" r="7" fill="#1B3A5C"/>
        <circle cx="18" cy="98" r="7" fill="#1B3A5C"/>
        <circle cx="98" cy="98" r="7" fill="#1B3A5C"/>
        <!-- Strikers / Coins -->
        <circle cx="46" cy="46" r="5" fill="#FFC857"/>
        <circle cx="70" cy="52" r="5" fill="#1B3A5C"/>
        <circle cx="52" cy="70" r="5" fill="#FFC857"/>
      </g>
    </svg>`,

  // 8: Ball / Activity Rattle
  ball: (title = "Activity Ball") => `
    <svg viewBox="0 0 200 200" fill="none" class="product-svg-tile" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="tileGradBall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="100%" stop-color="#FFE082"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="16" fill="url(#tileGradBall)"/>
      <g transform="translate(45, 45)">
        <!-- Ball sphere -->
        <circle cx="55" cy="55" r="50" fill="#3FB8AF"/>
        <path d="M55 5C27 5 5 27 5 55c0 28 22 50 50 50" fill="#FF6B6B"/>
        <path d="M55 5c15 15 24 33 24 50s-9 35-24 50c-15-15-24-33-24-50s9-35 24-50z" fill="#FFC857"/>
        <path d="M5 55c15-5 33-8 50-8s35 3 50 8c-15 5-33 8-50 8s-35-3-50-8z" fill="#1B3A5C" opacity="0.3"/>
        <circle cx="35" cy="35" r="6" fill="#FFF" opacity="0.5"/>
      </g>
    </svg>`
};

// Helper to retrieve fallback SVG string by product category / ID
window.getSVGFallback = function(productId, title) {
  const p = (window.PRODUCTS || []).find(item => item.id === productId);
  const name = title || (p ? p.name : "Toy");
  const category = p ? p.category : "";

  switch (category) {
    case "Building Blocks":
      return window.SVG_FALLBACKS.blocks(name);
    case "Soft Toys":
      return window.SVG_FALLBACKS.teddy(name);
    case "Remote Control":
      return window.SVG_FALLBACKS.car(name);
    case "Puzzles":
      return window.SVG_FALLBACKS.puzzle(name);
    case "Educational":
      return (productId % 2 === 0) ? window.SVG_FALLBACKS.robot(name) : window.SVG_FALLBACKS.blocks(name);
    case "Dolls":
      return window.SVG_FALLBACKS.doll(name);
    case "Board Games":
      return window.SVG_FALLBACKS.board(name);
    default:
      return window.SVG_FALLBACKS.ball(name);
  }
};

// Safe error handler that replaces the image element with SVG fallback
window.handleImgError = function(imgElement, productId, title) {
  if (!imgElement || imgElement.dataset.failed) return;
  imgElement.dataset.failed = "true";
  const svgHtml = window.getSVGFallback(Number(productId), title);
  const temp = document.createElement("div");
  temp.innerHTML = svgHtml.trim();
  const svgElement = temp.firstElementChild;
  if (svgElement && imgElement.parentNode) {
    // Preserve class for layout/styling
    if (imgElement.classList.contains("product-img")) {
      svgElement.classList.add("product-img");
    }
    imgElement.replaceWith(svgElement);
  }
};

