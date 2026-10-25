/**
 * CONFIGURACIÓN CENTRAL DE LA PÁGINA
 * =====================================
 * Este archivo contiene TODO el contenido, enlaces, productos, servicios y colores de la web.
 * Para adaptar la página a un nuevo cliente o emprendimiento, solo editas este archivo.
 * 
 * Ventajas:
 * 1. Cero residuos de colores: El tema se aplica 100% mediante variables CSS dinámicas.
 * 2. Módulos activables: Puedes activar o desactivar secciones con `enabled: true/false`.
 * 3. Enlace directo a WhatsApp: Genera mensajes estructurados automáticos listos para venta.
 */

export const siteConfig = {
  // 1. PALETA DE COLORES Y ESTILO VISUAL (Basada en el Escudo Orcasua)
  // Tonos pergamino lino, marrón tostado profundo, dorado bronce, verde esmeralda y cereza madura
  theme: {
    fontBrand: "'Cinzel', 'Playfair Display', Georgia, serif",
    fontScript: "'Alex Brush', cursive",
    fontSerif: "'Playfair Display', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    
    bgPrimary: "#FAF7F2",       // Fondo pergamino lino cálido idéntico al logo
    bgSecondary: "#F3EBE0",     // Fondo secundario / secciones alternas
    bgCard: "#FFFFFF",          // Fondo de tarjetas y elementos elevados
    
    textMain: "#2A180E",        // Marrón café tostado profundo (idéntico a la tipografía ORCASUA)
    textMuted: "#6B5545",       // Tono café arcilla suave
    
    accent: "#B37A2B",          // Dorado / bronce cálido del marco del escudo
    accentHover: "#935F1A",     // Hover de acento
    accentSoft: "#F4EBD9",      // Fondo dorado suave para insignias y resaltados
    
    goldBorder: "#D4AF37",      // Dorado metálico de realce
    cherryRed: "#A82222",       // Rojo cereza madura del logo
    forestGreen: "#235028",     // Verde esmeralda de las montañas y hojas del escudo
    
    border: "#E5DACB",          // Bordes sutiles y elegantes
    borderLight: "#EFE6DA",     // Divisores ultra-tenues
    
    success: "#235028",         // Verde cafeto
  },

  // 2. DATOS DE MARCA Y CONTACTO
  brand: {
    name: "Café Orcasua",
    shortName: "Orcasua",
    logo: "./assets/logo.jpg",
    subtagline: "Café Especial",
    tagline: "Café de Especialidad · Origen Marsella, Risaralda",
    location: "Pinares de Marsella, Marsella, Risaralda — Colombia",
    altitude: "1.700 m.s.n.m.",
    whatsappNumber: "573105559876", // Número en formato internacional sin símbolos (ej: 57 + número)
    socials: {
      instagram: "https://www.instagram.com/orcasua_cafe/",
      facebook: "https://facebook.com",
      googleMaps: "https://maps.google.com"
    }
  },

  // 3. SECCIÓN HERO (PORTADA)
  hero: {
    badge: "Cosecha Fresca 2026 · SUDÁN RUMÉ",
    title: "El alma de la montaña andina en cada taza.",
    subtitle: "Cultivado con paciencia bajo sombra a 1.700 metros de altitud en Pinares de Marsella. Cosechado a mano por familias caficultoras y tostado artesanalmente en origen.",
    primaryCtaText: "Ver Productos & Pedir",
    primaryCtaTarget: "#productos",
    secondaryCtaText: "Galería del Proceso",
    secondaryCtaTarget: "#galeria",
    heroImage: "./assets/logo.jpg",
    heroLandscapeImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Escudo Oficial · Café Orcasua Especial",
    featuresPills: [
      { icon: "mountain", text: "1.700 msnm" },
      { icon: "award", text: "Puntaje SCA 86.5" },
      { icon: "leaf", text: "100% Variedad Arábica" },
      { icon: "heart", text: "Comercio Justo Campesino" }
    ]
  },

  // 4. HISTORIA & ORIGEN (STORYTELLING)
  story: {
    enabled: true,
    tag: "NUESTRA HISTORIA & ESCUDO",
    title: "Más que café: tres generaciones cuidando la tierra.",
    paragraphs: [
      "En las laderas empinadas del Paisaje Cultural Cafetero de Marsella, el viento fresco de la cordillera y los suelos fértiles crean un microclima excepcional. Aquí madura lentamente cada fruto, concentrando azúcares naturales y aromas complejos.",
      "Cuidamos cada fase del camino: recolección grano a grano en su punto exacto de maduración, fermentación limpia con aguas de nacimiento propio y secado lento al sol andino en marquesinas tradicionales.",
      "Al comprarnos directamente, apoyas a familias campesinas de Risaralda y garantizas un precio transparente y digno, sin intermediarios."
    ],
    stats: [
      { value: "3ra", label: "Generación de caficultores" },
      { value: "1.700m", label: "Altitud de cultivo" },
      { value: "86.5", label: "Puntos en cata especial" },
      { value: "100%", label: "Trazabilidad de origen" }
    ],
    shieldPillars: {
      title: "La Simbología de Nuestro Escudo",
      subtitle: "Cada cuadrante de nuestro escudo representa un pilar sagrado de Café Orcasua:",
      items: [
        {
          symbol: "☀️ Montañas y Sol",
          title: "El Terroir Andino",
          desc: "El sol naciente sobre la cordillera y el rocío de Marsella a 1.700 msnm."
        },
        {
          symbol: "🌿 Granos y Flor",
          title: "La Cosecha Viva",
          desc: "Cerezas maduras y la flor blanca del cafeto que perfuma nuestros campos."
        },
        {
          symbol: "☕ La Taza Servida",
          title: "La Experiencia Sensorial",
          desc: "Notas dulces a chocolate artesanal, miel silvestre y cuerpo aterciopelado."
        },
        {
          symbol: "👨‍🌾 El Caficultor",
          title: "Nuestra Gente",
          desc: "Canasto al hombro y sombrero campesino: respeto y gratitud por quienes cultivan."
        }
      ]
    },
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Tradición campesina cafetera · Finca Orcasua"
  },

  // 5. PROCESO DE PRODUCCIÓN (PASO A PASO)
  process: {
    enabled: true,
    tag: "PROCESO ARTESANAL",
    title: "El viaje del grano a tu taza.",
    subtitle: "La excelencia no es casualidad; es el resultado de atención minuciosa en cada etapa de la cosecha.",
    steps: [
      {
        number: "01",
        title: "Recolección Selectiva",
        description: "Únicamente recolectamos las cerezas en su estado de maduración óptimo (rojo púrpura), garantizando alta concentración de azúcares.",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80"
      },
      {
        number: "02",
        title: "Beneficio & Fermentación",
        description: "Despulpado cuidadoso y fermentación controlada de 36 horas en tanques limpios para resaltar notas florales y acidez brillante.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      },
      {
        number: "03",
        title: "Secado al Sol Andino",
        description: "Secado lento y uniforme en camas elevadas de madera protegidas bajo el sol de montaña hasta alcanzar 11% de humedad perfecta.",
        image: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80"
      },
      {
        number: "04",
        title: "Tueste Medio de Origen",
        description: "Tostamos en pequeños lotes de 5kg semanalmente para garantizar frescura absoluta, revelando notas a chocolate amargo, caramelo y panela.",
        image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // 6. CATÁLOGO DE PRODUCTOS (CON PEDIDO INTERACTIVO A WHATSAPP)
  products: {
    enabled: true,
    tag: "NUESTRA COSECHA",
    title: "Elige tu presentación favorita.",
    subtitle: "Envíos directos a toda Colombia. Tostado bajo pedido para que lo recibas en su pico máximo de aroma y frescura.",
    items: [
      {
        id: "prod-SudanRumeLavado",
        name: "Sudán Rumé · Lavado",
        badge: "Más Exclusivo",
        description: "Una variedad exótica de perfil floral complejo, acidez sedosa y postgusto prolongado a miel silvestre y durazno.",
        tastingNotes: ["Miel Silvestre", "Durazno", "Jazmín", "Cítrico Dulce"],
        altitude: "1.700 msnm",
        processType: "Lavado Extendido",
        image: "./assets/SudanRumeLavado-500g.jpeg",
        variants: [
          { size: "250g", priceCOP: 25000, label: "Bolsa 250 gramos" }
        ],
        grindOptions: [
          "En Grano (Recomendado)",
          "Molienda Media (Cafetera de Goteo / V60)",
          "Molienda Gruesa (Prensa Francesa / Cold Brew)",
          "Molienda Fina (Espresso / Moka Italiana)"
        ]
      },
      {
        id: "prod-SudanRumeHoney",
        name: "Sudán Rumé · Honey",
        badge: "Micro-Lote Limitado",
        description: "Secado lentamente al sol andino con su mucílago natural dulce. Notas excepcionales a miel de caña, frutas amarillas, acidez vinosa y cuerpo aterciopelado.",
        tastingNotes: ["Miel de Caña", "Frutas Amarillas", "Cacao", "Mora silvestre"],
        altitude: "1.700 msnm",
        processType: "Proceso Honey Amarillo",
        image: "./assets/SudanRumeHoney-500g.jpeg",
        variants: [
          { size: "250g", priceCOP: 25000, label: "Bolsa 250 gramos" }
        ],
        grindOptions: [
          "En Grano (Recomendado)",
          "Molienda Media (Cafetera de Goteo / V60)",
          "Molienda Gruesa (Prensa Francesa / Cold Brew)",
          "Molienda Fina (Espresso / Moka Italiana)"
        ]
      },
      {
        id: "prod-castillo",
        name: "Castillo Rosario",
        badge: "El Favorito de la Casa",
        description: "Cuerpo redondo y equilibrado con notas clásicas reconfortantes de chocolate oscuro, panela caramelizada y avellanas tostadas.",
        tastingNotes: ["Chocolate Oscuro", "Panela", "Avellana", "Vainilla"],
        altitude: "1.700 msnm",
        processType: "Lavado Clásico",
        image: "./assets/Castillo-500g-250g.jpeg",
        variants: [
          { size: "250g", priceCOP: 25000, label: "Bolsa 250 gramos" },
          { size: "500g", priceCOP: 48000, label: "Bolsa 500 gramos" }
        ],
        grindOptions: [
          "En Grano (Recomendado)",
          "Molienda Media (Cafetera de Goteo / V60)",
          "Molienda Gruesa (Prensa Francesa / Cold Brew)",
          "Molienda Fina (Espresso / Moka Italiana)"
        ]
      }
    ]
  },

  // 7. SECCIÓN MODULAR DE SERVICIOS ADICIONALES (TOUR DESACTIVADO TEMPORALMENTE)
  services: {
    enabled: false,
    id: "tour-finca",
    tag: "EXPERIENCIA VIVENCIAL",
    badge: "Abierto al Público con Reserva",
    title: "Tour Cafetero: La Ruta del Grano a la Taza",
    subtitle: "Visita nuestra finca en Marsella, Risaralda. Camina entre cafetales centenarios, aprende a catar como un barista profesional y disfruta de la gastronomía campesina.",
    priceText: "$85.000 COP",
    priceUnit: "por persona",
    duration: "4 Horas de Inmersión",
    schedule: "Viernes, Sábados y Domingos (9:00 AM)",
    groupSize: "Grupos reducidos (máx. 8 personas)",
    includes: [
      "Recorrido guiado por el bosque de niebla y los cafetales",
      "Canasto tradicional y taller práctico de recolección de cerezas",
      "Visita a la estación de beneficio ecológico y secado",
      "Laboratorio de catación sensorial guiada con barista certificado",
      "Almuerzo campesino tradicional y degustación de café ilimitada",
      "Obsequio: Bolsa de 250g de café recién tostado de la finca"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
    ],
    whatsappBookingMessage: "¡Hola Café Orcasua! Me gustaría recibir información del Tour Cafetero. ¡Gracias!"
  },

  // 8. GALERÍA MULTIMEDIA DEL PROCESO DE PRODUCCIÓN (FOTOS Y VIDEOS)
  mediaGallery: {
    enabled: true,
    tag: "PROCESO & ORIGEN",
    title: "Galería del Proceso de Producción",
    subtitle: "Desliza horizontalmente para conocer el proceso artesanal de Café Orcasua: desde el fruto en rama hasta el secado en marquesinas y beneficio.",
    items: [
      {
        type: "image",
        title: "Cerezas rojas en óptimo punto de maduración",
        category: "Cosecha",
        url: "./assets/Galeria/Imagenes/CafeRojo01.jpeg"
      },
      {
        type: "image",
        title: "Recolección selectiva grano a grano en cafetal",
        category: "Cosecha",
        url: "./assets/Galeria/Imagenes/CafeRojo02.jpeg"
      },
      {
        type: "video",
        title: "Vista panorámica de la finca cafetera",
        category: "Finca",
        videoUrl: "./assets/Galeria/PanoramicaMute.mp4"
      },
      {
        type: "image",
        title: "Marquesina tradicional de secado al sol andino",
        category: "Secado",
        url: "./assets/Galeria/Imagenes/Marquesina01.jpeg"
      },
      {
        type: "image",
        title: "Camas elevadas de secado con ventilación natural",
        category: "Secado",
        url: "./assets/Galeria/Imagenes/Marquesina02.jpeg"
      },
      {
        type: "image",
        title: "Control artesanal de secado en marquesina",
        category: "Secado",
        url: "./assets/Galeria/Imagenes/Marquesina03.jpeg"
      },
      {
        type: "image",
        title: "Café pergamino seco en punto óptimo del 11%",
        category: "Calidad",
        url: "./assets/Galeria/Imagenes/CafeSeco01.jpeg"
      },
      {
        type: "image",
        title: "Frutos verdes en formación bajo la niebla andina",
        category: "Cultivo",
        url: "./assets/Galeria/Imagenes/CafeVerde01.jpeg"
      },
      {
        type: "image",
        title: "Cosecha viva en las laderas de Marsella",
        category: "Cultivo",
        url: "./assets/Galeria/Imagenes/CafeVerde02.jpeg"
      }
    ]
  },

  // 9. PREGUNTAS FRECUENTES (ENVÍOS, GARANTÍAS Y PREPARACIÓN)
  faqs: {
    enabled: true,
    tag: "DUDAS FRECUENTES",
    title: "Todo lo que necesitas saber antes de pedir.",
    items: [
      {
        q: "¿A qué ciudades realizan envíos y cuánto tarda?",
        a: "Hacemos envíos a toda Colombia a través de Servientrega y Coordinadora. A ciudades principales (Bogotá, Medellín, Cali, Pereira, Manizales) llega en 2 a 3 días hábiles. Para otras regiones, entre 3 y 5 días."
      },
      {
        q: "¿El café se despacha en grano o molido?",
        a: "¡Tú eliges! Si cuentas con molino en casa, siempre recomendamos en grano para preservar al máximo los compuestos aromáticos. Si prefieres molido, lo molemos al momento de empacar según el método que uses (Filtro, Espresso o Prensa Francesa)."
      },
      {
        q: "¿Cuál es la fecha de tueste del café que recibo?",
        a: "Tostamos cada lunes en lotes pequeños. Tu café nunca tendrá más de 5 a 10 días de haber sido tostado al momento del despacho, lo cual está en su ventana ideal de desgasificación y aroma."
      },
      {
        q: "¿Cómo se coordina el pago de los pedidos?",
        a: "Al dar clic en 'Hacer Pedido', se te abrirá WhatsApp con el resumen de tu compra. Te confirmamos disponibilidad y te compartimos datos para transferencia por Bancolombia, Nequi, Daviplata o PSE."
      }
    ]
  },

  // 10. PIE DE PÁGINA (FOOTER)
  footer: {
    copy: "© 2026 Café Orcasua. Cosechado con amor en las montañas de Colombia.",
    madeFor: "By EscoTools®"
  }
};
