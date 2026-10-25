import { siteConfig } from './config.js';
import { translations } from './translations.js';

/**
 * ESTADO GLOBAL DE IDIOMA Y FILTROS
 */
let currentLang = 'es';
let currentGalleryFilter = 'all';
let currentModalIndex = 0;
let currentFilteredList = [];

const savedLang = localStorage.getItem('orcasua_lang');
if (savedLang === 'en' || savedLang === 'es') {
  currentLang = savedLang;
}

/**
 * INICIALIZADOR DE LA APLICACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
  applyThemeColors(siteConfig.theme);
  setLanguage(currentLang, false);
  setupGlobalEvents();
});

/**
 * CAMBIO DE IDIOMA DINÁMICO
 * Actualiza el DOM instantáneamente sin recarga y persiste la preferencia.
 */
function setLanguage(lang, persist = true) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;
  if (persist) {
    try {
      localStorage.setItem('orcasua_lang', lang);
    } catch {
      // Ignorar errores en modo incógnito estricto
    }
  }

  // Atributo de idioma en el documento
  document.documentElement.lang = lang;

  // Actualizar título de la página
  if (lang === 'en') {
    document.title = "Specialty Coffee · Café Orcasua | Colombian Origin";
  } else {
    document.title = "Café de Especialidad · Café Orcasua | Origen Colombia";
  }

  // Actualizar botones de idioma (activo)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.lang-btn-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = translations[lang] || translations.es;
  renderAll(t);
}

/**
 * RENDERIZADO GLOBAL DE TODAS LAS SECCIONES
 */
function renderAll(t) {
  renderBrandAndNav(t);
  renderHero(t);
  renderStory(t);
  renderProcess(t);
  renderGallery(t);
  renderProducts(t);
  renderServicesTour(t);
  renderFAQs(t);
  renderFooter(t);
}

/**
 * 1. APLICACIÓN DE COLORES DINÁMICOS
 * Inyecta las variables en el :root para garantizar un cambio de tema limpio y sin residuos.
 */
function applyThemeColors(theme) {
  if (!theme) return;
  const root = document.documentElement;

  if (theme.bgPrimary) root.style.setProperty('--bg-primary', theme.bgPrimary);
  if (theme.bgSecondary) root.style.setProperty('--bg-secondary', theme.bgSecondary);
  if (theme.bgCard) root.style.setProperty('--bg-card', theme.bgCard);
  if (theme.textMain) root.style.setProperty('--text-main', theme.textMain);
  if (theme.textMuted) root.style.setProperty('--text-muted', theme.textMuted);
  if (theme.accent) root.style.setProperty('--accent', theme.accent);
  if (theme.accentHover) root.style.setProperty('--accent-hover', theme.accentHover);
  if (theme.accentSoft) root.style.setProperty('--accent-soft', theme.accentSoft);
  if (theme.goldBorder) root.style.setProperty('--gold-border', theme.goldBorder);
  if (theme.cherryRed) root.style.setProperty('--cherry-red', theme.cherryRed);
  if (theme.forestGreen) root.style.setProperty('--forest-green', theme.forestGreen);
  if (theme.border) root.style.setProperty('--border', theme.border);
  if (theme.borderLight) root.style.setProperty('--border-light', theme.borderLight);
  if (theme.fontBrand) root.style.setProperty('--font-brand', theme.fontBrand);
  if (theme.fontScript) root.style.setProperty('--font-script', theme.fontScript);
  if (theme.fontSerif) root.style.setProperty('--font-serif', theme.fontSerif);
  if (theme.fontSans) root.style.setProperty('--font-sans', theme.fontSans);
}

/**
 * 2. NAVEGACIÓN Y MARCA
 */
function renderBrandAndNav(t) {
  const brandTitleEl = document.getElementById('nav-brand-title');
  const brandScriptEl = document.getElementById('nav-brand-script');
  const brandLogoEl = document.getElementById('nav-brand-logo');

  if (brandLogoEl && siteConfig.brand.logo) {
    brandLogoEl.src = siteConfig.brand.logo;
    brandLogoEl.alt = siteConfig.brand.name;
  }
  if (brandTitleEl) brandTitleEl.textContent = siteConfig.brand.shortName || siteConfig.brand.name;
  if (brandScriptEl) brandScriptEl.textContent = t.brand.subtagline;

  // Enlaces de navegación de escritorio
  const storyLink = document.getElementById('nav-link-story');
  const processLink = document.getElementById('nav-link-process');
  const galleryLink = document.getElementById('nav-link-gallery');
  const productsLink = document.getElementById('nav-link-products');
  const faqsLink = document.getElementById('nav-link-faqs');

  if (storyLink) storyLink.textContent = t.nav.story;
  if (processLink) processLink.textContent = t.nav.process;
  if (galleryLink) galleryLink.textContent = t.nav.gallery;
  if (productsLink) productsLink.textContent = t.nav.products;
  if (faqsLink) faqsLink.textContent = t.nav.faqs;

  // Enlaces de navegación móvil
  const mobStory = document.getElementById('mob-link-story');
  const mobProcess = document.getElementById('mob-link-process');
  const mobGallery = document.getElementById('mob-link-gallery');
  const mobProducts = document.getElementById('mob-link-products');
  const mobFaqs = document.getElementById('mob-link-faqs');
  const mobCta = document.getElementById('mobile-cta-btn');

  if (mobStory) mobStory.textContent = t.nav.story;
  if (mobProcess) mobProcess.textContent = t.nav.process;
  if (mobGallery) mobGallery.textContent = t.nav.gallery;
  if (mobProducts) mobProducts.textContent = t.nav.products;
  if (mobFaqs) mobFaqs.textContent = t.nav.faqs;
  if (mobCta) mobCta.textContent = t.nav.mobileCta;

  // Botón flotante de WhatsApp inferior derecho
  const floatingWaBtn = document.getElementById('floating-whatsapp-btn');
  const floatingTooltip = document.getElementById('floating-whatsapp-tooltip');
  if (floatingTooltip) {
    floatingTooltip.textContent = t.floatingWhatsapp.tooltip;
  }
  if (floatingWaBtn) {
    const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(t.floatingWhatsapp.chatGreeting)}`;
    floatingWaBtn.setAttribute('href', waUrl);
  }
}

/**
 * 3. HERO (PORTADA)
 */
function renderHero(t) {
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroPrimaryCta = document.getElementById('hero-primary-cta');
  const heroSecondaryCta = document.getElementById('hero-secondary-cta');
  const heroImg = document.getElementById('hero-img');
  const heroCaption = document.getElementById('hero-caption');
  const heroFeatures = document.getElementById('hero-features');

  if (heroBadge) heroBadge.textContent = t.hero.badge;
  if (heroTitle) heroTitle.textContent = t.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

  if (heroPrimaryCta) {
    heroPrimaryCta.textContent = t.hero.primaryCta;
    heroPrimaryCta.setAttribute('href', siteConfig.hero.primaryCtaTarget);
  }

  if (heroSecondaryCta) {
    heroSecondaryCta.textContent = t.hero.secondaryCta;
    heroSecondaryCta.setAttribute('href', siteConfig.hero.secondaryCtaTarget || '#galeria');
  }

  if (heroImg) {
    heroImg.src = siteConfig.hero.heroImage;
    heroImg.alt = siteConfig.brand.name;
  }
  if (heroCaption) heroCaption.textContent = t.hero.caption;

  if (heroFeatures && t.hero.pills) {
    heroFeatures.innerHTML = t.hero.pills.map(f => `
      <div class="hero-feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f.text}</span>
      </div>
    `).join('');
  }
}

/**
 * 4. HISTORIA & ORIGEN (STORYTELLING)
 */
function renderStory(t) {
  const storySec = document.getElementById('historia');
  if (!storySec || !siteConfig.story || !siteConfig.story.enabled) {
    if (storySec) storySec.style.display = 'none';
    return;
  }

  const storyTag = document.getElementById('story-tag');
  const storyTitle = document.getElementById('story-title');
  const storyParas = document.getElementById('story-paragraphs');
  const storyStats = document.getElementById('story-stats');
  const storyImg = document.getElementById('story-img');
  const shieldPillarsEl = document.getElementById('story-shield-pillars');

  if (storyTag) storyTag.textContent = t.story.tag;
  if (storyTitle) storyTitle.textContent = t.story.title;

  if (storyParas && t.story.paragraphs) {
    storyParas.innerHTML = t.story.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  if (storyStats && t.story.stats) {
    storyStats.innerHTML = t.story.stats.map(s => `
      <div class="stat-item">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  if (shieldPillarsEl && t.story.shieldPillars) {
    const sp = t.story.shieldPillars;
    shieldPillarsEl.innerHTML = `
      <div class="shield-pillars-header">
        <h3 class="shield-pillars-title font-brand">${sp.title}</h3>
        <p class="shield-pillars-sub">${sp.subtitle}</p>
      </div>
      <div class="shield-pillars-grid">
        ${sp.items.map(item => `
          <div class="shield-pillar-card">
            <span class="pillar-symbol">${item.symbol}</span>
            <h4 class="pillar-title font-brand">${item.title}</h4>
            <p class="pillar-desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
      <div class="mobile-scroll-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span>Desliza para ver los 4 pilares</span>
      </div>
    `;
  }
}

/**
 * 5. PROCESO DE PRODUCCIÓN
 */
function renderProcess(t) {
  const processSec = document.getElementById('proceso');
  if (!siteConfig.process.enabled) {
    if (processSec) processSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('process-tag');
  const titleEl = document.getElementById('process-title');
  const subEl = document.getElementById('process-subtitle');
  const gridEl = document.getElementById('process-grid');

  if (tagEl) tagEl.textContent = t.process.tag;
  if (titleEl) titleEl.textContent = t.process.title;
  if (subEl) subEl.textContent = t.process.subtitle;

  if (gridEl && t.process.steps) {
    gridEl.innerHTML = t.process.steps.map((step, idx) => {
      const configStep = siteConfig.process.steps[idx] || {};
      const stepImg = configStep.image || '';
      return `
        <div class="process-card">
          <div class="process-img">
            <img src="${stepImg}" alt="${step.title}" loading="lazy">
          </div>
          <div class="process-num">${step.number}</div>
          <h3 class="process-title">${step.title}</h3>
          <p class="process-desc">${step.description}</p>
        </div>
      `;
    }).join('');
  }
}

/**
 * 6. GALERÍA MULTIMEDIA DEL PROCESO DE PRODUCCIÓN
 */
function renderGallery(t) {
  const gallSec = document.getElementById('galeria');
  if (!siteConfig.mediaGallery || !siteConfig.mediaGallery.enabled) {
    if (gallSec) gallSec.style.display = 'none';
    return;
  }
  if (gallSec) gallSec.style.display = '';

  const tagEl = document.getElementById('gallery-tag');
  const titleEl = document.getElementById('gallery-title');
  const subEl = document.getElementById('gallery-subtitle');

  if (tagEl) tagEl.textContent = t.mediaGallery.tag;
  if (titleEl) titleEl.textContent = t.mediaGallery.title;
  if (subEl) subEl.textContent = t.mediaGallery.subtitle;

  // Actualizar textos de los botones de filtro y pista de scroll
  const filterAll = document.getElementById('gallery-filter-all');
  const filterImages = document.getElementById('gallery-filter-images');
  const filterVideos = document.getElementById('gallery-filter-videos');
  const hintText = document.getElementById('gallery-hint-text');

  if (filterAll) filterAll.textContent = t.mediaGallery.filterAll || 'Todos';
  if (filterImages) filterImages.textContent = t.mediaGallery.filterImages || '📸 Fotografías';
  if (filterVideos) filterVideos.textContent = t.mediaGallery.filterVideos || '🎥 Videos';
  if (hintText && t.mediaGallery.scrollHint) hintText.textContent = t.mediaGallery.scrollHint;

  renderGalleryItems(currentGalleryFilter, t);
}

function renderGalleryItems(filter, t) {
  const gridEl = document.getElementById('gallery-grid');
  if (!gridEl || !siteConfig.mediaGallery || !siteConfig.mediaGallery.items) return;

  const items = siteConfig.mediaGallery.items.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  currentFilteredList = items;

  const photoBadgeText = t.mediaGallery.photoBadge || 'Foto';
  const videoBadgeText = t.mediaGallery.videoBadge || 'Video';

  gridEl.innerHTML = items.map((item, idx) => {
    const isVideo = item.type === 'video';
    const badgeText = isVideo ? `🎥 ${videoBadgeText}` : `📸 ${photoBadgeText}`;
    const badgeClass = isVideo ? 'video-badge' : '';

    let mediaMarkup = '';
    if (isVideo) {
      if (item.thumbnail) {
        mediaMarkup = `<img src="${item.thumbnail}" alt="${item.title}" loading="lazy">`;
      } else {
        mediaMarkup = `<video preload="metadata" muted loop autoplay playsinline src="${item.videoUrl}" class="gallery-card-thumb-video"></video>`;
      }
    } else {
      mediaMarkup = `<img src="${item.url}" alt="${item.title}" loading="lazy">`;
    }

    return `
      <article class="gallery-card" data-index="${idx}">
        <div class="gallery-card-media">
          ${mediaMarkup}
          <span class="gallery-type-badge ${badgeClass}">${badgeText}</span>
          ${isVideo ? `
            <div class="gallery-play-btn" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
            </div>
          ` : ''}
        </div>
        <div class="gallery-card-body">
          ${item.category ? `<span class="gallery-card-category">${item.category}</span>` : ''}
          <h3 class="gallery-card-title">${item.title}</h3>
        </div>
      </article>
    `;
  }).join('');

  // Event listeners para abrir modal de foto o video
  gridEl.querySelectorAll('.gallery-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      showModalItem(idx);
    });
  });
}

function showModalItem(index) {
  if (!currentFilteredList || currentFilteredList.length === 0) return;

  // Navegación circular
  if (index < 0) {
    currentModalIndex = currentFilteredList.length - 1;
  } else if (index >= currentFilteredList.length) {
    currentModalIndex = 0;
  } else {
    currentModalIndex = index;
  }

  const item = currentFilteredList[currentModalIndex];
  const modal = document.getElementById('gallery-modal');
  const modalBody = document.getElementById('gallery-modal-body');
  const modalTitle = document.getElementById('gallery-modal-title');
  const modalCategory = document.getElementById('gallery-modal-category');
  const modalCounter = document.getElementById('gallery-modal-counter');
  if (!modal || !modalBody) return;

  // Detener video previo
  modalBody.innerHTML = '';

  if (item.type === 'video') {
    let videoUrl = item.videoUrl || '';
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const glue = videoUrl.includes('?') ? '&' : '?';
      videoUrl += `${glue}autoplay=1&rel=0`;
      modalBody.innerHTML = `
        <iframe src="${videoUrl}" title="${item.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `;
    } else {
      modalBody.innerHTML = `
        <video controls autoplay playsinline src="${videoUrl}"></video>
      `;
    }
  } else {
    modalBody.innerHTML = `
      <img src="${item.url}" alt="${item.title}">
    `;
  }

  if (modalTitle) {
    modalTitle.textContent = item.title;
  }
  if (modalCategory) {
    modalCategory.textContent = item.category || '';
  }
  if (modalCounter) {
    modalCounter.textContent = `${currentModalIndex + 1} / ${currentFilteredList.length}`;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function nextModalItem() {
  showModalItem(currentModalIndex + 1);
}

function prevModalItem() {
  showModalItem(currentModalIndex - 1);
}

function closeGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  const modalBody = document.getElementById('gallery-modal-body');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (modalBody) {
    modalBody.innerHTML = '';
  }
}

/**
 * 7. PRODUCTOS Y PEDIDO DIRECTO
 */
function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

function renderProducts(t) {
  const prodSec = document.getElementById('productos');
  if (!siteConfig.products.enabled) {
    if (prodSec) prodSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('products-tag');
  const titleEl = document.getElementById('products-title');
  const subEl = document.getElementById('products-subtitle');
  const gridEl = document.getElementById('products-grid');

  if (tagEl) tagEl.textContent = t.products.tag;
  if (titleEl) titleEl.textContent = t.products.title;
  if (subEl) subEl.textContent = t.products.subtitle;

  const ui = t.products.ui;

  if (gridEl && t.products.items) {
    gridEl.innerHTML = t.products.items.map(product => {
      const baseProduct = siteConfig.products.items.find(p => p.id === product.id) || siteConfig.products.items[0];
      const defaultVariant = baseProduct.variants[0];

      return `
        <article class="product-card" id="card-${product.id}" data-product-id="${product.id}">
          <div class="product-image-container">
            <img src="${baseProduct.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="product-badge-overlay">${product.badge}</span>` : ''}
          </div>
          <div class="product-body">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>

            <div class="tasting-notes-wrap">
              ${product.tastingNotes.map(n => `<span class="tasting-note-tag">${n}</span>`).join('')}
            </div>

            <div class="product-configurator">
              <div class="config-group">
                <span class="config-label">${ui.presentation}</span>
                <div class="variant-pills" id="variants-${product.id}">
                  ${baseProduct.variants.map((v, idx) => {
                    const isAvailable = v.available !== false;
                    const disabledAttr = isAvailable ? '' : 'disabled aria-disabled="true"';
                    const disabledClass = isAvailable ? '' : 'is-disabled';
                    const titleAttr = isAvailable ? '' : (currentLang === 'en' ? 'title="Temporarily unavailable in this presentation"' : 'title="No disponible por el momento en esta presentación"');
                    const statusText = isAvailable ? '' : `<span class="variant-pill-status">(${currentLang === 'en' ? 'No disp.' : 'Agotado'})</span>`;

                    return `
                      <button type="button" 
                        class="variant-pill-btn ${idx === 0 && isAvailable ? 'active' : ''} ${disabledClass}" 
                        data-product-id="${product.id}" 
                        data-size="${v.size}" 
                        data-price="${v.priceCOP}"
                        data-available="${isAvailable}"
                        ${disabledAttr}
                        ${titleAttr}>
                        <span class="variant-pill-size">${v.size}</span>
                        ${statusText}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <div class="config-group">
                <label class="config-label" for="grind-${product.id}">${ui.grind}</label>
                <select class="config-select" id="grind-${product.id}">
                  ${t.products.grindOptions.map(g => `<option value="${g}">${g}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="product-footer">
              <div class="price-display">
                <span class="price-amount" id="price-display-${product.id}">${formatCOP(defaultVariant.priceCOP)}</span>
                <span class="price-subtitle">${ui.shippingNote}</span>
              </div>
              <button type="button" class="btn btn-whatsapp order-btn" data-product-id="${product.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.352.226-.653.075-1.554-.778-2.56-1.385-3.568-3.11-.266-.457.266-.424.764-1.42.083-.17.042-.32-.021-.446-.063-.125-.678-1.633-.929-2.238-.244-.59-.493-.51-.678-.52-.176-.008-.377-.01-.578-.01-.2 0-.528.075-.804.376-.276.3-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.15 4.553 2.05.888 2.846.962 3.864.81 1.096-.164 2.378-.972 2.715-1.91.336-.938.336-1.742.236-1.91-.101-.168-.302-.268-.603-.418zM12 2C6.48 2 2 6.48 2 12c0 1.84.498 3.56 1.365 5.04L2 22l5.12-1.344C8.544 21.493 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                <span>${ui.orderBtn}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Listener para cambio de variantes (250g, 500g, etc.)
    gridEl.querySelectorAll('.variant-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.currentTarget.disabled || e.currentTarget.dataset.available === 'false') {
          return;
        }
        const prodId = e.currentTarget.dataset.productId;
        const price = parseInt(e.currentTarget.dataset.price, 10);

        // Actualizar clase activa
        const container = document.getElementById(`variants-${prodId}`);
        if (container) {
          container.querySelectorAll('.variant-pill-btn').forEach(b => b.classList.remove('active'));
        }
        e.currentTarget.classList.add('active');

        // Actualizar precio mostrado
        const priceEl = document.getElementById(`price-display-${prodId}`);
        if (priceEl) priceEl.textContent = formatCOP(price);
      });
    });

    // Listener para botón "Pedir"
    gridEl.querySelectorAll('.order-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.productId;
        handleProductOrder(prodId);
      });
    });
  }
}

/**
 * GENERADOR DE PEDIDO A WHATSAPP MULTI-IDIOMA
 */
function handleProductOrder(productId) {
  const t = translations[currentLang] || translations.es;
  const prodTranslated = t.products.items.find(p => p.id === productId);
  const baseProduct = siteConfig.products.items.find(p => p.id === productId);
  if (!prodTranslated || !baseProduct) return;

  const activeVariantBtn = document.querySelector(`#variants-${productId} .variant-pill-btn.active`);
  const selectedSize = activeVariantBtn ? activeVariantBtn.dataset.size : baseProduct.variants[0].size;
  const selectedPrice = activeVariantBtn ? parseInt(activeVariantBtn.dataset.price, 10) : baseProduct.variants[0].priceCOP;

  const grindSelect = document.getElementById(`grind-${productId}`);
  const selectedGrind = grindSelect ? grindSelect.value : t.products.grindOptions[0];

  const om = t.orderMessage;
  const message = [
    om.greeting,
    om.intro,
    '',
    `📦 *${om.prodLabel}:* ${prodTranslated.name}`,
    `⚖️ *${om.sizeLabel}:* ${selectedSize}`,
    `⚙️ *${om.grindLabel}:* ${selectedGrind}`,
    `💵 *${om.priceLabel}:* ${formatCOP(selectedPrice)}`,
    '',
    om.closing
  ].join('\n');

  const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

/**
 * 8. SECCIÓN MODULAR: TOUR POR LA FINCA (SI ESTÁ ACTIVA)
 */
function renderServicesTour(t) {
  const tourSec = document.getElementById('tour-finca');
  if (!tourSec) return;
  if (!siteConfig.services || !siteConfig.services.enabled) {
    tourSec.style.display = 'none';
    return;
  }
  tourSec.style.display = '';

  const s = t.services;
  const badgeEl = document.getElementById('tour-badge');
  const titleEl = document.getElementById('tour-title');
  const subEl = document.getElementById('tour-subtitle');
  const durationLabelEl = document.getElementById('tour-duration-label');
  const durationEl = document.getElementById('tour-duration');
  const scheduleLabelEl = document.getElementById('tour-schedule-label');
  const scheduleEl = document.getElementById('tour-schedule');
  const includesTitleEl = document.getElementById('tour-includes-title');
  const includesListEl = document.getElementById('tour-includes-list');
  const priceEl = document.getElementById('tour-price');
  const unitEl = document.getElementById('tour-unit');
  const bookBtn = document.getElementById('tour-book-btn');
  const bookBtnText = document.getElementById('tour-book-btn-text');
  const tourMainImg = document.getElementById('tour-main-img');

  if (badgeEl) badgeEl.textContent = s.badge;
  if (titleEl) titleEl.textContent = s.title;
  if (subEl) subEl.textContent = s.subtitle;
  if (durationLabelEl) durationLabelEl.textContent = s.durationLabel;
  if (durationEl) durationEl.textContent = s.duration;
  if (scheduleLabelEl) scheduleLabelEl.textContent = s.scheduleLabel;
  if (scheduleEl) scheduleEl.textContent = s.schedule;
  if (includesTitleEl) includesTitleEl.textContent = s.includesTitle;

  if (includesListEl && s.includes && s.includes.length > 0) {
    includesListEl.innerHTML = s.includes.map(inc => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  if (priceEl) priceEl.textContent = siteConfig.services.priceText;
  if (unitEl) unitEl.textContent = s.priceUnit;
  if (bookBtnText) bookBtnText.textContent = s.bookBtn;

  if (tourMainImg && siteConfig.services.galleryImages && siteConfig.services.galleryImages.length > 0) {
    tourMainImg.src = siteConfig.services.galleryImages[0];
    tourMainImg.alt = s.title;
  }

  if (bookBtn) {
    const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(s.whatsappMsg)}`;
    bookBtn.setAttribute('href', waUrl);
  }
}

/**
 * 9. FAQS (ACORDEÓN MINIMALISTA)
 */
function renderFAQs(t) {
  const faqsSec = document.getElementById('faqs');
  if (!siteConfig.faqs.enabled) {
    if (faqsSec) faqsSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('faqs-tag');
  const titleEl = document.getElementById('faqs-title');
  const containerEl = document.getElementById('faqs-container');

  if (tagEl) tagEl.textContent = t.faqs.tag;
  if (titleEl) titleEl.textContent = t.faqs.title;

  if (containerEl && t.faqs.items) {
    containerEl.innerHTML = t.faqs.items.map((faq, idx) => `
      <div class="faq-card ${idx === 0 ? 'open' : ''}">
        <button class="faq-question-btn" type="button">
          <span>${faq.q}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    containerEl.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.currentTarget.closest('.faq-card');
        const isOpen = card.classList.contains('open');

        // Cierra los otros
        containerEl.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));

        if (!isOpen) {
          card.classList.add('open');
        }
      });
    });
  }
}

/**
 * 10. FOOTER
 */
function renderFooter(t) {
  const footLogo = document.getElementById('footer-brand-logo');
  const footTitle = document.getElementById('footer-brand-title');
  const footDesc = document.getElementById('footer-brand-desc');
  const footLocTitle = document.getElementById('footer-loc-title');
  const footLocation = document.getElementById('footer-location');
  const footShipping = document.getElementById('footer-shipping');
  const footOrders = document.getElementById('footer-orders');
  const footSocialsTitle = document.getElementById('footer-socials-title');
  const footCopy = document.getElementById('footer-copy');
  const footMadeFor = document.getElementById('footer-made-for');
  const footIg = document.getElementById('footer-ig');

  if (footLogo && siteConfig.brand.logo) {
    footLogo.src = siteConfig.brand.logo;
    footLogo.alt = siteConfig.brand.name;
  }

  if (footTitle) footTitle.textContent = siteConfig.brand.shortName || siteConfig.brand.name;
  if (footDesc) footDesc.textContent = t.footer.desc;
  if (footLocTitle) footLocTitle.textContent = t.footer.locationTitle;
  if (footLocation) footLocation.textContent = t.footer.locationText;
  if (footShipping) footShipping.textContent = t.footer.shippingText;
  if (footOrders) footOrders.textContent = t.footer.orderText;
  if (footSocialsTitle) footSocialsTitle.textContent = t.footer.socialsTitle;
  if (footCopy) footCopy.textContent = t.footer.copy;
  if (footMadeFor && t.footer.madeFor) footMadeFor.textContent = t.footer.madeFor;

  if (footIg && siteConfig.brand.socials.instagram) {
    footIg.setAttribute('href', siteConfig.brand.socials.instagram);
    footIg.textContent = 'Instagram (@orcasua_cafe)';
  }
}

/**
 * 11. EVENTOS GLOBALES, SELECTOR DE IDIOMA Y MENÚ MÓVIL
 */
function setupGlobalEvents() {
  // Selector de idioma (Desktop y Móvil)
  document.querySelectorAll('.lang-btn, .lang-btn-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.dataset.lang;
      if (selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang, true);
      }
    });
  });

  // Filtros de la Galería Multimedia
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentGalleryFilter = e.currentTarget.dataset.filter || 'all';
      const t = translations[currentLang] || translations.es;
      renderGalleryItems(currentGalleryFilter, t);
    });
  });

  // Botones de desplazamiento horizontal de la galería
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const track = document.getElementById('gallery-grid');

  if (prevBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // Navegación dentro del modal / lightbox de galería
  const modalCloseBtn = document.getElementById('gallery-modal-close');
  const modalOverlay = document.getElementById('gallery-modal-overlay');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeGalleryModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeGalleryModal);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevModalItem);
  if (modalNextBtn) modalNextBtn.addEventListener('click', nextModalItem);

  // Navegación táctil / swipe en móviles para el modal
  const modalDialog = document.querySelector('.gallery-modal-dialog');
  if (modalDialog) {
    let touchStartX = 0;
    let touchEndX = 0;
    modalDialog.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    modalDialog.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextModalItem();
        } else {
          prevModalItem();
        }
      }
    }, { passive: true });
  }

  // Teclado: Escape para cerrar modal o menú, flechas para navegar en la galería abierta
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('gallery-modal');
    const isModalOpen = modal && modal.classList.contains('is-open');

    if (e.key === 'Escape') {
      closeGalleryModal();
      closeMenu();
    } else if (isModalOpen && e.key === 'ArrowLeft') {
      prevModalItem();
    } else if (isModalOpen && e.key === 'ArrowRight') {
      nextModalItem();
    }
  });

  // Menú hamburguesa móvil
  const hamburgerBtn = document.getElementById('nav-hamburger-btn');
  const menuOverlay = document.getElementById('mobile-menu-overlay');

  const closeMenu = () => {
    if (!hamburgerBtn || !menuOverlay) return;
    hamburgerBtn.classList.remove('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    menuOverlay.classList.remove('is-open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    if (!hamburgerBtn || !menuOverlay) return;
    hamburgerBtn.classList.add('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    menuOverlay.classList.add('is-open');
    menuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  if (hamburgerBtn && menuOverlay) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menuOverlay.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar al dar clic en el fondo oscuro
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });

    // Cerrar si la pantalla se redimensiona a escritorio
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 840) {
        closeMenu();
      }
    });
  }

  // Manejo de scroll suave en todos los enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        closeMenu();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
