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
  // 1. PALETA DE COLORES Y ESTILO VISUAL (Minimalista, cálido y editorial)
  // Cambia estos códigos hexadecimales para cambiar toda la identidad sin dejar rastros del tema anterior.
  theme: {
    fontSerif: "'Playfair Display', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    
    // Tonos orgánicos y cálidos inspirados en café y tierra fértil
    bgPrimary: "#FAF8F5",       // Fondo principal: Crema suave lino
    bgSecondary: "#F3EDE6",     // Fondo secundario / secciones alternas
    bgCard: "#FFFFFF",          // Fondo de tarjetas y elementos elevados
    
    textMain: "#221C18",        // Texto principal: Café espresso tostado oscuro (no negro puro para menor fatiga)
    textMuted: "#6D645D",       // Texto secundario: Tono café arcilla suave
    
    accent: "#96522E",          // Acento principal: Terracota tostado cálido
    accentHover: "#7D4222",     // Hover de acento
    accentSoft: "#F4EBE3",      // Fondo suave para insignias y resaltados
    
    border: "#E7DFD5",          // Bordes sutiles y elegantes
    borderLight: "#F0EAE2",     // Divisores ultra-tenues
    
    success: "#3B5A38",         // Verde hoja de cafeto (para stock, confirmaciones)
  },

  // 2. DATOS DE MARCA Y CONTACTO
  brand: {
    name: "Café Orcasua",
    shortName: "Orcasua",
    tagline: "Café premium 100% Colombiano",
    location: "Pinares de Marsella, Marsella, Risaralda — Colombia",
    altitude: "1.700 m.s.n.m.",
    whatsappNumber: "573105559876", // Número en formato internacional sin símbolos (ej: 57 + número)
    socials: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      facebook: "https://facebook.com",
      googleMaps: "https://maps.google.com"
    }
  },

  // 3. SECCIÓN HERO (PORTADA)
  hero: {
    badge: "Cosecha Fresca 2026 · SUDÁN RUMÉ",
    title: "El alma de la montaña andina en cada taza.",
    subtitle: "Cultivado con paciencia bajo sombra a 1.700 metros de altitud. Cosechado a mano por familias caficultoras y tostado artesanalmente en origen.",
    primaryCtaText: "Ver Productos & Pedir",
    primaryCtaTarget: "#productos",
    secondaryCtaText: "Reservar Tour en Finca",
    secondaryCtaTarget: "#tour-finca",
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Amanecer sobre los cafetales · Finca Orcasua",
    featuresPills: [
      { icon: "mountain", text: "1.700 msnm" },
      { icon: "award", text: "Puntaje SCA 86.5" },
      { icon: "leaf", text: "100% Variedad Arábica" },
      { icon: "heart", text: "Comercio Justo Directo" }
    ]
  },

  // 4. HISTORIA & ORIGEN (STORYTELLING)
  story: {
    enabled: true,
    tag: "NUESTRA HISTORIA",
    title: "Más que café: tres generaciones cuidando la tierra.",
    paragraphs: [
      "En las laderas empinadas del Paisaje Cultural Cafetero, el viento fresco de la cordillera y los suelos volcánicos crean un microclima excepcional. Aquí madura lentamente cada fruto, concentrando azúcares naturales y aromas complejos.",
      "Cuidamos cada fase del camino: recolección grano a grano en su punto exacto de maduración, fermentación limpia con aguas de nacimiento propio y secado lento al sol andino en marquesinas tradicionales.",
      "Al comprarnos directamente, apoyas a 12 familias campesinas y garantizas un precio transparente y digno, sin intermediarios."
    ],
    stats: [
      { value: "3ra", label: "Generación de caficultores" },
      { value: "1.850m", label: "Altitud de cultivo" },
      { value: "86.5", label: "Puntos en cata especial" },
      { value: "100%", label: "Trazabilidad de origen" }
    ],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Selección tradicional de cerezas maduras de café en Finca Orcasua"
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
        id: "prod-bourbon",
        name: "Bourbon Rosado · Edición Especial",
        badge: "Más Exclusivo",
        description: "Una variedad exótica de perfil floral complejo, acidez sedosa y postgusto prolongado a miel silvestre y durazno.",
        tastingNotes: ["Miel Silvestre", "Durazno", "Jazmín", "Cítrico Dulce"],
        altitude: "1.850 msnm",
        processType: "Lavado Extendido",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
        variants: [
          { size: "250g", priceCOP: 38000, label: "Bolsa 250 gramos" },
          { size: "500g", priceCOP: 70000, label: "Bolsa 500 gramos" }
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
        name: "Castillo Tradicional · Finca Seleccionada",
        badge: "El Favorito de la Casa",
        description: "Cuerpo redondo y equilibrado con notas clásicas reconfortantes de chocolate oscuro, panela caramelizada y avellanas tostadas.",
        tastingNotes: ["Chocolate Oscuro", "Panela", "Avellana", "Vainilla"],
        altitude: "1.750 msnm",
        processType: "Lavado Clásico",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
        variants: [
          { size: "250g", priceCOP: 26000, label: "Bolsa 250 gramos" },
          { size: "500g", priceCOP: 48000, label: "Bolsa 500 gramos" },
          { size: "1000g", priceCOP: 90000, label: "Bolsa 1 Kilo" }
        ],
        grindOptions: [
          "En Grano (Recomendado)",
          "Molienda Media (Cafetera de Goteo / V60)",
          "Molienda Gruesa (Prensa Francesa / Cold Brew)",
          "Molienda Fina (Espresso / Moka Italiana)"
        ]
      },
      {
        id: "prod-honey",
        name: "Geisha Honey · Micro-Lote Reserva",
        badge: "Micro-Lote Limitado",
        description: "Secado con su mucílago natural al sol. Dulzura intensa de frutos rojos maduros, acidez vinosa y textura cremosa aterciopelada.",
        tastingNotes: ["Frutos Rojos", "Caña de Azúcar", "Cacao Nibs", "Mora silvestre"],
        altitude: "1.890 msnm",
        processType: "Proceso Honey Amarillo",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
        variants: [
          { size: "250g", priceCOP: 45000, label: "Bolsa 250 gramos" },
          { size: "500g", priceCOP: 84000, label: "Bolsa 500 gramos" }
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

  // 7. SECCIÓN MODULAR DE SERVICIOS ADICIONALES (Ej: Tour por la Finca / Catas / Talleres)
  // Permite al emprendedor mostrar experiencias turísticas o servicios personalizados.
  services: {
    enabled: true,
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
    whatsappBookingMessage: "¡Hola Café Orcasua! Me gustaría recibir información y consultar disponibilidad para reservar el Tour Cafetero 'Ruta del Grano a la Taza' para [indica número de personas] el día [indica fecha tentativa]. ¡Gracias!"
  },

  // 8. GALERÍA MULTIMEDIA Y VIDEO
  mediaGallery: {
    enabled: true,
    tag: "EN IMÁGENES",
    title: "La vida cotidiana en la montaña.",
    subtitle: "Rincones de nuestra finca, la arquitectura tradicional de bahareque y la calidez de nuestra gente.",
    items: [
      {
        type: "image",
        title: "Paisaje Cafetero al Atardecer",
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
      },
      {
        type: "image",
        title: "Floración blanca del cafetal",
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
      },
      {
        type: "image",
        title: "Cerezas en punto óptimo de cosecha",
        url: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80"
      },
      {
        type: "image",
        title: "Preparación artesanal en Chemex",
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
      }
    ],
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" // Reemplazable con video real de YouTube/Vimeo
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
    madeFor: "ByEscoTools"
  }
};
