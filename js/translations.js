/**
 * DICCIONARIO MULTI-IDIOMA / INTERNATIONALIZATION (i18n)
 * =======================================================
 * Idiomas disponibles:
 * - Español (ES): Mercado local colombiano y de habla hispana.
 * - English (EN): Mercado internacional de café de especialidad y turismo cafetero.
 */

export const translations = {
  es: {
    nav: {
      story: "Historia & Escudo",
      process: "Proceso",
      gallery: "Galería",
      products: "Nuestra Cosecha",
      faqs: "Preguntas",
      mobileCta: "Ver Productos & Pedir"
    },
    brand: {
      subtagline: "Café Especial",
      tagline: "Café de Especialidad · Origen Marsella, Risaralda",
      location: "Pinares de Marsella, Marsella, Risaralda — Colombia",
      altitude: "1.700 m.s.n.m."
    },
    hero: {
      badge: "Cosecha Fresca 2026 · SUDÁN RUMÉ",
      title: "El alma de la montaña andina en cada taza.",
      subtitle: "Cultivado con paciencia bajo sombra a 1.700 metros de altitud en Pinares de Marsella. Cosechado a mano por familias caficultoras y tostado artesanalmente en origen.",
      primaryCta: "Ver Productos & Pedir",
      secondaryCta: "Galería del Proceso",
      caption: "Escudo Oficial · Café Orcasua Especial",
      pills: [
        { icon: "mountain", text: "1.700 msnm" },
        { icon: "award", text: "Puntaje SCA 86.5" },
        { icon: "leaf", text: "100% Variedad Arábica" },
        { icon: "heart", text: "Comercio Justo Campesino" }
      ]
    },
    story: {
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
      imageCaption: "Tradición campesina cafetera · Finca Orcasua"
    },
    process: {
      tag: "PROCESO ARTESANAL",
      title: "El viaje del grano a tu taza.",
      subtitle: "La excelencia no es casualidad; es el resultado de atención minuciosa en cada etapa de la cosecha.",
      steps: [
        {
          number: "01",
          title: "Recolección Selectiva",
          description: "Únicamente recolectamos las cerezas en su estado de maduración óptimo (rojo púrpura), garantizando alta concentración de azúcares."
        },
        {
          number: "02",
          title: "Beneficio & Fermentación",
          description: "Despulpado cuidadoso y fermentación controlada de 36 horas en tanques limpios para resaltar notas florales y acidez brillante."
        },
        {
          number: "03",
          title: "Secado al Sol Andino",
          description: "Secado lento y uniforme en camas elevadas de madera protegidas bajo el sol de montaña hasta alcanzar 11% de humedad perfecta."
        },
        {
          number: "04",
          title: "Tueste Medio de Origen",
          description: "Tostamos en pequeños lotes de 5kg semanalmente para garantizar frescura absoluta, revelando notas a chocolate amargo, caramelo y panela."
        }
      ]
    },
    products: {
      tag: "NUESTRA COSECHA",
      title: "Elige tu presentación favorita.",
      subtitle: "Envíos directos a toda Colombia y al exterior. Tostado bajo pedido para que lo recibas en su pico máximo de frescura.",
      ui: {
        presentation: "Presentación",
        grind: "Tipo de Molienda",
        shippingNote: "Envío directo desde la finca",
        orderBtn: "Pedir",
        bag250: "Bolsa 250 gramos",
        bag500: "Bolsa 500 gramos",
        bag1000: "Bolsa 1 Kilo"
      },
      grindOptions: [
        "En Grano (Recomendado)",
        "Molienda Media (Cafetera de Goteo / V60)",
        "Molienda Gruesa (Prensa Francesa / Cold Brew)",
        "Molienda Fina (Espresso / Moka Italiana)"
      ],
      items: [
        {
          id: "prod-SudanRumeLavado",
          name: "Sudán Rumé · Lavado",
          badge: "Más Exclusivo",
          description: "Una variedad exótica de perfil floral complejo, acidez sedosa y postgusto prolongado a miel silvestre y durazno.",
          tastingNotes: ["Miel Silvestre", "Durazno", "Jazmín", "Cítrico Dulce"]
        },
        {
          id: "prod-castillo",
          name: "Castillo Tradicional · Finca Seleccionada",
          badge: "El Favorito de la Casa",
          description: "Cuerpo redondo y equilibrado con notas clásicas reconfortantes de chocolate oscuro, panela caramelizada y avellanas tostadas.",
          tastingNotes: ["Chocolate Oscuro", "Panela", "Avellana", "Vainilla"]
        },
        {
          id: "prod-SudanRumeHoney",
          name: "Sudán Rumé · Honey",
          badge: "Micro-Lote Limitado",
          description: "Secado lentamente al sol andino con su mucílago natural dulce. Notas excepcionales a miel de caña, frutas amarillas, acidez vinosa y cuerpo aterciopelado.",
          tastingNotes: ["Miel de Caña", "Frutas Amarillas", "Cacao", "Mora silvestre"]
        }
      ]
    },
    services: {
      tag: "EXPERIENCIA VIVENCIAL",
      badge: "Abierto al Público con Reserva",
      title: "Tour Cafetero: La Ruta del Grano a la Taza",
      subtitle: "Visita nuestra finca en Marsella, Risaralda.",
      durationLabel: "Duración",
      duration: "4 Horas de Inmersión",
      scheduleLabel: "Días Disponibles",
      schedule: "Viernes, Sábados y Domingos (9:00 AM)",
      includesTitle: "La experiencia incluye:",
      priceUnit: "por persona",
      bookBtn: "Reservar Cupo",
      includes: [],
      whatsappMsg: ""
    },
    mediaGallery: {
      tag: "PROCESO & ORIGEN",
      title: "Galería del Proceso de Producción",
      subtitle: "Desliza horizontalmente para conocer el proceso artesanal de Café Orcasua: desde el fruto en rama hasta el secado en marquesinas y beneficio.",
      filterAll: "Todos",
      filterImages: "📸 Fotografías",
      filterVideos: "🎥 Videos",
      videoBadge: "Video",
      photoBadge: "Foto",
      scrollHint: "Desliza horizontalmente para ver más"
    },
    faqs: {
      tag: "DUDAS FRECUENTES",
      title: "Todo lo que necesitas saber antes de pedir.",
      items: [
        {
          q: "¿A qué ciudades realizan envíos y cuánto tarda?",
          a: "Hacemos envíos a toda Colombia a través de Servientrega y Coordinadora (2 a 3 días hábiles a ciudades principales). También coordinamos despachos internacionales bajo solicitud."
        },
        {
          q: "¿El café se despacha en grano o molido?",
          a: "¡Tú eliges! Si cuentas con molino en casa, siempre recomendamos en grano para preservar al máximo los compuestos aromáticos. Si prefieres molido, lo molemos al momento de empacar según tu método favorito."
        },
        {
          q: "¿Cuál es la fecha de tueste del café que recibo?",
          a: "Tostamos cada semana en lotes pequeños. Tu café nunca tendrá más de 5 a 10 días de haber sido tostado al momento del despacho, asegurando su ventana óptima de aroma y frescura."
        },
        {
          q: "¿Cómo se coordina el pago de los pedidos?",
          a: "Al dar clic en 'Pedir', se abrirá WhatsApp con el resumen de tu compra. Te confirmamos disponibilidad y te compartimos datos para transferencia por Bancolombia, Nequi, Daviplata o PSE."
        }
      ]
    },
    footer: {
      desc: "Café de Especialidad · Origen Marsella, Risaralda. Cultivado con orgullo y respeto por la tierra.",
      locationTitle: "Ubicación & Contacto",
      locationText: "Pinares de Marsella, Marsella, Risaralda",
      shippingText: "Envíos a toda Colombia y al exterior",
      orderText: "Pedidos directos vía WhatsApp",
      socialsTitle: "Redes Sociales",
      copy: "© 2026 Café Orcasua. Cosechado en las montañas de Colombia.",
      madeFor: "By EscoTools®"
    },
    floatingWhatsapp: {
      tooltip: "¿Deseas pedir o tienes dudas? Escríbenos",
      chatGreeting: "¡Hola Café Orcasua! Estoy visitando su sitio web y me gustaría recibir información sobre su café."
    },
    orderMessage: {
      greeting: "¡Hola Café Orcasua! ☕",
      intro: "Quiero realizar un pedido desde su sitio web:",
      prodLabel: "Producto",
      sizeLabel: "Presentación",
      grindLabel: "Molienda",
      priceLabel: "Valor",
      closing: "¿Me confirman disponibilidad y los datos para realizar el pago y envío? ¡Muchas gracias!"
    }
  },

  en: {
    nav: {
      story: "Story & Crest",
      process: "Process",
      gallery: "Gallery",
      products: "Our Harvest",
      faqs: "FAQs",
      mobileCta: "Explore Products & Order"
    },
    brand: {
      subtagline: "Specialty Coffee",
      tagline: "Single-Origin Specialty Coffee · Marsella, Risaralda",
      location: "Pinares de Marsella, Marsella, Risaralda — Colombia",
      altitude: "1,700 m.a.s.l."
    },
    hero: {
      badge: "Fresh Harvest 2026 · SUDÁN RUMÉ",
      title: "The soul of the Andean mountains in every cup.",
      subtitle: "Patiently shade-grown at 1,700 meters above sea level in Pinares de Marsella. Handpicked by local coffee-growing families and artisanally roasted at origin.",
      primaryCta: "Explore Products & Order",
      secondaryCta: "Process Gallery",
      caption: "Official Crest · Café Orcasua Specialty",
      pills: [
        { icon: "mountain", text: "1,700 m.a.s.l." },
        { icon: "award", text: "SCA Score 86.5" },
        { icon: "leaf", text: "100% Arabica Variety" },
        { icon: "heart", text: "Direct Fair Trade" }
      ]
    },
    story: {
      tag: "OUR STORY & CREST",
      title: "More than coffee: three generations stewarding the land.",
      paragraphs: [
        "On the steep slopes of Colombia's Coffee Cultural Landscape in Marsella, fresh Andean breezes and fertile mountain soils nurture an exceptional microclimate where coffee cherries ripen slowly, concentrating rich natural sugars and nuanced aromas.",
        "We oversee every step of the journey: selective handpicking cherry by cherry at optimum ripeness, pristine spring-water fermentation, and slow sun-drying in traditional raised beds.",
        "By buying directly from us, you empower rural coffee-farming families in Risaralda and ensure fair, transparent compensation without middlemen."
      ],
      stats: [
        { value: "3rd", label: "Generation of growers" },
        { value: "1,700m", label: "Growing altitude" },
        { value: "86.5", label: "Specialty cup score" },
        { value: "100%", label: "Origin traceability" }
      ],
      shieldPillars: {
        title: "The Symbolism Behind Our Crest",
        subtitle: "Each quadrant of our crest represents a sacred pillar of Café Orcasua:",
        items: [
          {
            symbol: "☀️ Mountains & Sunrise",
            title: "The Andean Terroir",
            desc: "The morning sun rising over the emerald ranges of Marsella at 1,700 meters altitude."
          },
          {
            symbol: "🌿 Beans & Blossom",
            title: "The Living Harvest",
            desc: "Ripe crimson cherries and fragrant white coffee blossoms that perfume our hillsides."
          },
          {
            symbol: "☕ The Served Cup",
            title: "Sensory Experience",
            desc: "Delicate notes of artisan dark chocolate, raw cane sugar, and a velvety smooth body."
          },
          {
            symbol: "👨‍🌾 Traditional Grower",
            title: "Our People",
            desc: "Woven shoulder basket and aguadeño hat: gratitude and dignity for those who nurture the earth."
          }
        ]
      },
      imageCaption: "Traditional coffee farming heritage · Finca Orcasua"
    },
    process: {
      tag: "ARTISANAL CRAFT",
      title: "The journey from seed to your cup.",
      subtitle: "Excellence is never accidental; it is the fruit of relentless dedication at every step of the harvest.",
      steps: [
        {
          number: "01",
          title: "Selective Handpicking",
          description: "We pick only fully ripe, deep purple-red cherries, ensuring high sugar content and pristine sweetness."
        },
        {
          number: "02",
          title: "Washing & Fermentation",
          description: "Gentle pulping and 36-hour temperature-controlled fermentation in clean tanks to unveil vibrant florality and crisp acidity."
        },
        {
          number: "03",
          title: "Andean Sun Drying",
          description: "Slow, uniform drying on raised wooden beds protected under high-altitude sunshine until reaching a precise 11% moisture."
        },
        {
          number: "04",
          title: "Medium Roast at Origin",
          description: "Small-batch roasted in 5kg lots each week for unmatched freshness, accentuating notes of rich cacao, caramel, and panela."
        }
      ]
    },
    products: {
      tag: "OUR HARVEST",
      title: "Choose your favorite presentation.",
      subtitle: "Direct shipping nationwide and abroad. Freshly roasted to order so you receive it at its absolute aromatic peak.",
      ui: {
        presentation: "Size",
        grind: "Grind Type",
        shippingNote: "Direct from the farm",
        orderBtn: "Order",
        bag250: "250g Bag",
        bag500: "500g Bag",
        bag1000: "1kg Bag"
      },
      grindOptions: [
        "Whole Bean (Recommended)",
        "Medium Grind (Drip Coffee Maker / V60)",
        "Coarse Grind (French Press / Cold Brew)",
        "Fine Grind (Espresso / Moka Pot)"
      ],
      items: [
        {
          id: "prod-SudanRumeLavado",
          name: "Sudan Rume · Washed",
          badge: "Most Exclusive",
          description: "An exotic variety celebrated for its complex floral notes, silky acidity, and prolonged finish of wild honey and peach.",
          tastingNotes: ["Wild Honey", "Peach", "Jasmine", "Sweet Citrus"]
        },
        {
          id: "prod-castillo",
          name: "Traditional Castillo · Estate Select",
          badge: "House Favorite",
          description: "Round, balanced body with comforting classic notes of dark artisan cacao, caramelized panela, and roasted hazelnuts.",
          tastingNotes: ["Dark Chocolate", "Panela Cane", "Hazelnut", "Vanilla"]
        },
        {
          id: "prod-SudanRumeHoney",
          name: "Sudan Rume · Honey",
          badge: "Limited Micro-Lot",
          description: "Slowly sun-dried with its natural sweet mucilage. Exceptional sweetness of sugar cane, yellow fruits, winey brightness, and a velvety smooth body.",
          tastingNotes: ["Cane Honey", "Yellow Fruits", "Cacao Nibs", "Wild Blackberry"]
        }
      ]
    },
    services: {
      tag: "LIVING EXPERIENCE",
      badge: "Open to Visitors with Booking",
      title: "Coffee Farm Tour: The Bean-to-Cup Journey",
      subtitle: "Visit our estate in Marsella, Risaralda.",
      durationLabel: "Duration",
      duration: "4-Hour Immersion",
      scheduleLabel: "Available Days",
      schedule: "Friday, Saturday & Sunday (9:00 AM)",
      includesTitle: "The experience includes:",
      priceUnit: "per person",
      bookBtn: "Book Tour",
      includes: [],
      whatsappMsg: ""
    },
    mediaGallery: {
      tag: "PROCESS & ORIGIN",
      title: "Production Process Gallery",
      subtitle: "Swipe horizontally to explore Café Orcasua's artisanal process: from cherries on the tree to marquesina sun-drying and eco-milling.",
      filterAll: "All",
      filterImages: "📸 Photos",
      filterVideos: "🎥 Videos",
      videoBadge: "Video",
      photoBadge: "Photo",
      scrollHint: "Swipe horizontally to see more"
    },
    faqs: {
      tag: "FREQUENT QUESTIONS",
      title: "Everything you need to know before ordering.",
      items: [
        {
          q: "What cities do you ship to and how long does it take?",
          a: "We ship across all of Colombia via national carriers (2-3 business days to major cities). We also arrange international shipping for overseas coffee lovers upon request."
        },
        {
          q: "Is the coffee shipped as whole bean or pre-ground?",
          a: "You decide! If you have a grinder at home, whole bean is always recommended to preserve volatile aromatics. If you prefer ground, we grind it freshly right before packing according to your brew method."
        },
        {
          q: "What is the roast date of the coffee I receive?",
          a: "We roast weekly in small batches. Your bag is dispatched within 5 to 10 days from roasting, which is the perfect window for degassing and flavor brilliance."
        },
        {
          q: "How are order payments handled?",
          a: "Clicking 'Order' opens WhatsApp with your order summary ready. We confirm availability and share secure bank transfer or online payment details with you directly."
        }
      ]
    },
    footer: {
      desc: "Single-Origin Specialty Coffee · Marsella, Risaralda. Grown with pride and profound respect for the land.",
      locationTitle: "Location & Contact",
      locationText: "Pinares de Marsella, Marsella, Risaralda",
      shippingText: "Domestic & international delivery",
      orderText: "Direct orders via WhatsApp",
      socialsTitle: "Follow Us",
      copy: "© 2026 Café Orcasua. Harvested in the Colombian Andes.",
      madeFor: "By EscoTools®"
    },
    floatingWhatsapp: {
      tooltip: "Questions or orders? Chat with us",
      chatGreeting: "Hello Café Orcasua! I am visiting your website and would love more information about your coffee."
    },
    orderMessage: {
      greeting: "Hello Café Orcasua! ☕",
      intro: "I would like to place an order from your website:",
      prodLabel: "Product",
      sizeLabel: "Size",
      grindLabel: "Grind",
      priceLabel: "Price",
      closing: "Could you please confirm availability and payment/shipping details? Thank you!"
    }
  }
};
