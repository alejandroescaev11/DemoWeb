import { siteConfig } from './config.js';

/**
 * INICIALIZADOR DE LA APLICACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
  applyThemeColors(siteConfig.theme);
  renderBrandAndNav();
  renderHero();
  renderStory();
  renderProcess();
  renderProducts();
  renderServicesTour();
  renderGallery();
  renderFAQs();
  renderFooter();
  setupGlobalEvents();
});

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
  if (theme.border) root.style.setProperty('--border', theme.border);
  if (theme.borderLight) root.style.setProperty('--border-light', theme.borderLight);
  if (theme.fontSerif) root.style.setProperty('--font-serif', theme.fontSerif);
  if (theme.fontSans) root.style.setProperty('--font-sans', theme.fontSans);
}

/**
 * 2. NAVEGACIÓN Y MARCA
 */
function renderBrandAndNav() {
  const brandTitleEl = document.getElementById('nav-brand-title');
  const brandSubEl = document.getElementById('nav-brand-sub');
  const navWaBtn = document.getElementById('nav-whatsapp-btn');

  if (brandTitleEl) brandTitleEl.textContent = siteConfig.brand.name;
  if (brandSubEl) brandSubEl.textContent = `${siteConfig.brand.altitude} · ${siteConfig.brand.location.split('—')[0]}`;
  
  if (navWaBtn) {
    const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
      `¡Hola! Estoy visitando la web de ${siteConfig.brand.name} y me gustaría recibir información.`
    )}`;
    navWaBtn.setAttribute('href', waUrl);
  }
}

/**
 * 3. HERO (PORTADA)
 */
function renderHero() {
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroPrimaryCta = document.getElementById('hero-primary-cta');
  const heroSecondaryCta = document.getElementById('hero-secondary-cta');
  const heroImg = document.getElementById('hero-img');
  const heroCaption = document.getElementById('hero-caption');
  const heroFeatures = document.getElementById('hero-features');

  if (heroBadge) heroBadge.textContent = siteConfig.hero.badge;
  if (heroTitle) heroTitle.textContent = siteConfig.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;

  if (heroPrimaryCta) {
    heroPrimaryCta.textContent = siteConfig.hero.primaryCtaText;
    heroPrimaryCta.setAttribute('href', siteConfig.hero.primaryCtaTarget);
  }

  if (heroSecondaryCta) {
    heroSecondaryCta.textContent = siteConfig.hero.secondaryCtaText;
    heroSecondaryCta.setAttribute('href', siteConfig.hero.secondaryCtaTarget);
  }

  if (heroImg) {
    heroImg.src = siteConfig.hero.heroImage;
    heroImg.alt = siteConfig.brand.name;
  }
  if (heroCaption) heroCaption.textContent = siteConfig.hero.imageCaption;

  if (heroFeatures && siteConfig.hero.featuresPills) {
    heroFeatures.innerHTML = siteConfig.hero.featuresPills.map(f => `
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
function renderStory() {
  const storySec = document.getElementById('historia');
  if (!siteConfig.story.enabled) {
    if (storySec) storySec.style.display = 'none';
    return;
  }

  const storyTag = document.getElementById('story-tag');
  const storyTitle = document.getElementById('story-title');
  const storyParas = document.getElementById('story-paragraphs');
  const storyStats = document.getElementById('story-stats');
  const storyImg = document.getElementById('story-img');
  const storyCaption = document.getElementById('story-caption');

  if (storyTag) storyTag.textContent = siteConfig.story.tag;
  if (storyTitle) storyTitle.textContent = siteConfig.story.title;

  if (storyParas) {
    storyParas.innerHTML = siteConfig.story.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  if (storyStats && siteConfig.story.stats) {
    storyStats.innerHTML = siteConfig.story.stats.map(s => `
      <div class="stat-item">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  if (storyImg) storyImg.src = siteConfig.story.image;
  if (storyCaption) storyCaption.textContent = siteConfig.story.imageCaption;
}

/**
 * 5. PROCESO DE PRODUCCIÓN
 */
function renderProcess() {
  const processSec = document.getElementById('proceso');
  if (!siteConfig.process.enabled) {
    if (processSec) processSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('process-tag');
  const titleEl = document.getElementById('process-title');
  const subEl = document.getElementById('process-subtitle');
  const gridEl = document.getElementById('process-grid');

  if (tagEl) tagEl.textContent = siteConfig.process.tag;
  if (titleEl) titleEl.textContent = siteConfig.process.title;
  if (subEl) subEl.textContent = siteConfig.process.subtitle;

  if (gridEl && siteConfig.process.steps) {
    gridEl.innerHTML = siteConfig.process.steps.map(step => `
      <div class="process-card">
        <div class="process-img">
          <img src="${step.image}" alt="${step.title}" loading="lazy">
        </div>
        <div class="process-num">${step.number}</div>
        <h3 class="process-title">${step.title}</h3>
        <p class="process-desc">${step.description}</p>
      </div>
    `).join('');
  }
}

/**
 * 6. PRODUCTOS Y PEDIDO DIRECTO
 */
function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

function renderProducts() {
  const prodSec = document.getElementById('productos');
  if (!siteConfig.products.enabled) {
    if (prodSec) prodSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('products-tag');
  const titleEl = document.getElementById('products-title');
  const subEl = document.getElementById('products-subtitle');
  const gridEl = document.getElementById('products-grid');

  if (tagEl) tagEl.textContent = siteConfig.products.tag;
  if (titleEl) titleEl.textContent = siteConfig.products.title;
  if (subEl) subEl.textContent = siteConfig.products.subtitle;

  if (gridEl && siteConfig.products.items) {
    gridEl.innerHTML = siteConfig.products.items.map(product => {
      const defaultVariant = product.variants[0];
      return `
        <article class="product-card" id="card-${product.id}" data-product-id="${product.id}">
          <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
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
                <span class="config-label">Presentación</span>
                <div class="variant-pills" id="variants-${product.id}">
                  ${product.variants.map((v, idx) => `
                    <button type="button" 
                      class="variant-pill-btn ${idx === 0 ? 'active' : ''}" 
                      data-product-id="${product.id}" 
                      data-size="${v.size}" 
                      data-price="${v.priceCOP}">
                      ${v.size}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="config-group">
                <label class="config-label" for="grind-${product.id}">Tipo de Molienda</label>
                <select class="config-select" id="grind-${product.id}">
                  ${product.grindOptions.map(g => `<option value="${g}">${g}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="product-footer">
              <div class="price-display">
                <span class="price-amount" id="price-display-${product.id}">${formatCOP(defaultVariant.priceCOP)}</span>
                <span class="price-subtitle">Envío a toda Colombia</span>
              </div>
              <button type="button" class="btn btn-whatsapp order-btn" data-product-id="${product.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.352.226-.653.075-1.554-.778-2.56-1.385-3.568-3.11-.266-.457.266-.424.764-1.42.083-.17.042-.32-.021-.446-.063-.125-.678-1.633-.929-2.238-.244-.59-.493-.51-.678-.52-.176-.008-.377-.01-.578-.01-.2 0-.528.075-.804.376-.276.3-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.23 3.115.151.2 2.126 3.245 5.15 4.553 2.05.888 2.846.962 3.864.81 1.096-.164 2.378-.972 2.715-1.91.336-.938.336-1.742.236-1.91-.101-.168-.302-.268-.603-.418zM12 2C6.48 2 2 6.48 2 12c0 1.84.498 3.56 1.365 5.04L2 22l5.12-1.344C8.544 21.493 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Pedir
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Listener para cambio de variantes (250g, 500g, etc.)
    gridEl.querySelectorAll('.variant-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.productId;
        const size = e.currentTarget.dataset.size;
        const price = parseInt(e.currentTarget.dataset.price, 10);

        // Actualizar clase activa
        const container = document.getElementById(`variants-${prodId}`);
        container.querySelectorAll('.variant-pill-btn').forEach(b => b.classList.remove('active'));
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
 * GENERADOR DE PEDIDO A WHATSAPP
 */
function handleProductOrder(productId) {
  const product = siteConfig.products.items.find(p => p.id === productId);
  if (!product) return;

  const activeVariantBtn = document.querySelector(`#variants-${productId} .variant-pill-btn.active`);
  const selectedSize = activeVariantBtn ? activeVariantBtn.dataset.size : product.variants[0].size;
  const selectedPrice = activeVariantBtn ? parseInt(activeVariantBtn.dataset.price, 10) : product.variants[0].priceCOP;

  const grindSelect = document.getElementById(`grind-${productId}`);
  const selectedGrind = grindSelect ? grindSelect.value : 'En Grano';

  const message = [
    `¡Hola ${siteConfig.brand.name}! ☕`,
    `Quiero realizar un pedido desde su sitio web:`,
    ``,
    `📦 *Producto:* ${product.name}`,
    `⚖️ *Presentación:* ${selectedSize}`,
    `⚙️ *Molienda:* ${selectedGrind}`,
    `💵 *Valor:* ${formatCOP(selectedPrice)}`,
    ``,
    `¿Me confirman disponibilidad y los datos para realizar el pago y envío? ¡Muchas gracias!`
  ].join('\n');

  const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

/**
 * 7. SECCIÓN MODULAR: TOUR POR LA FINCA / SERVICIO PERSONALIZADO
 */
function renderServicesTour() {
  const tourSec = document.getElementById('tour-finca');
  if (!siteConfig.services || !siteConfig.services.enabled) {
    if (tourSec) tourSec.style.display = 'none';
    return;
  }

  const s = siteConfig.services;
  const badgeEl = document.getElementById('tour-badge');
  const titleEl = document.getElementById('tour-title');
  const subEl = document.getElementById('tour-subtitle');
  const durationEl = document.getElementById('tour-duration');
  const scheduleEl = document.getElementById('tour-schedule');
  const includesListEl = document.getElementById('tour-includes-list');
  const priceEl = document.getElementById('tour-price');
  const unitEl = document.getElementById('tour-unit');
  const bookBtn = document.getElementById('tour-book-btn');
  const tourMainImg = document.getElementById('tour-main-img');

  if (badgeEl) badgeEl.textContent = s.badge;
  if (titleEl) titleEl.textContent = s.title;
  if (subEl) subEl.textContent = s.subtitle;
  if (durationEl) durationEl.textContent = s.duration;
  if (scheduleEl) scheduleEl.textContent = s.schedule;

  if (includesListEl && s.includes) {
    includesListEl.innerHTML = s.includes.map(inc => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  if (priceEl) priceEl.textContent = s.priceText;
  if (unitEl) unitEl.textContent = s.priceUnit;

  if (tourMainImg && s.galleryImages && s.galleryImages.length > 0) {
    tourMainImg.src = s.galleryImages[0];
  }

  if (bookBtn) {
    const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(s.whatsappBookingMessage)}`;
    bookBtn.setAttribute('href', waUrl);
  }
}

/**
 * 8. GALERÍA
 */
function renderGallery() {
  const gallSec = document.getElementById('galeria');
  if (!siteConfig.mediaGallery.enabled) {
    if (gallSec) gallSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('gallery-tag');
  const titleEl = document.getElementById('gallery-title');
  const subEl = document.getElementById('gallery-subtitle');
  const gridEl = document.getElementById('gallery-grid');

  if (tagEl) tagEl.textContent = siteConfig.mediaGallery.tag;
  if (titleEl) titleEl.textContent = siteConfig.mediaGallery.title;
  if (subEl) subEl.textContent = siteConfig.mediaGallery.subtitle;

  if (gridEl && siteConfig.mediaGallery.items) {
    gridEl.innerHTML = siteConfig.mediaGallery.items.map(item => `
      <div class="gallery-item">
        <img src="${item.url}" alt="${item.title}" loading="lazy">
      </div>
    `).join('');
  }
}

/**
 * 9. FAQS (ACORDEÓN MINIMALISTA)
 */
function renderFAQs() {
  const faqsSec = document.getElementById('faqs');
  if (!siteConfig.faqs.enabled) {
    if (faqsSec) faqsSec.style.display = 'none';
    return;
  }

  const tagEl = document.getElementById('faqs-tag');
  const titleEl = document.getElementById('faqs-title');
  const containerEl = document.getElementById('faqs-container');

  if (tagEl) tagEl.textContent = siteConfig.faqs.tag;
  if (titleEl) titleEl.textContent = siteConfig.faqs.title;

  if (containerEl && siteConfig.faqs.items) {
    containerEl.innerHTML = siteConfig.faqs.items.map((faq, idx) => `
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
function renderFooter() {
  const footTitle = document.getElementById('footer-brand-title');
  const footDesc = document.getElementById('footer-brand-desc');
  const footCopy = document.getElementById('footer-copy');
  const footLoc = document.getElementById('footer-location');
  const footIg = document.getElementById('footer-ig');
  const footTk = document.getElementById('footer-tk');

  const footMadeFor = document.getElementById('footer-made-for');

  if (footTitle) footTitle.textContent = siteConfig.brand.name;
  if (footDesc) footDesc.textContent = siteConfig.brand.tagline;
  if (footCopy) footCopy.textContent = siteConfig.footer.copy;
  if (footMadeFor && siteConfig.footer.madeFor) footMadeFor.textContent = siteConfig.footer.madeFor;
  if (footLoc) footLoc.textContent = `${siteConfig.brand.location} (${siteConfig.brand.altitude})`;

  if (footIg) footIg.setAttribute('href', siteConfig.brand.socials.instagram);
  if (footTk) footTk.setAttribute('href', siteConfig.brand.socials.tiktok);
}

/**
 * 11. EVENTOS GLOBALES
 */
function setupGlobalEvents() {
  // Manejo de scroll suave en enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
