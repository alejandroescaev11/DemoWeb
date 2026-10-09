# 🌿 Escaparate & Landing Modular para Emprendedores de Origen · ByEscoTools

> **Demo:** Café de Especialidad en Montañas Colombianas (Café Orcasua)  
> **Estilo de Diseño:** Minimalismo cálido, editorial y artesanal (sin sobrecarga visual ni estilos artificiales de IA).  
> **Conversión:** Catálogo interactivo con checkout directo y estructurado a WhatsApp + Sección de Servicios/Experiencias (Tour por la Finca).

---

## 🚀 1. Cómo Ejecutar el Demo en Local

Puedes visualizarlo de dos formas muy sencillas:

### Opción A: Con Node / Vite (Recomendado para desarrollo)
Abre una terminal en esta carpeta y ejecuta:
```bash
npm install
npm run dev
```
Se abrirá automáticamente en `http://localhost:5173`.

### Opción B: Con cualquier servidor web estático (o extensión Live Server de VS Code)
Al ser una aplicación basada en estándares web puros (`HTML5`, `CSS3` con variables y `ES Modules`), no requiere compilación pesada ni backends. Puedes abrirlo directamente con **Live Server** en tu editor.

---

## 🎨 2. Personalización para Nuevos Clientes (Sin Residuos de Estilos Anteriores)

Todo el contenido, enlaces, productos, servicios y **paleta de colores** se controlan desde un solo archivo:
👉 **[`js/config.js`](file:///c:/Users/HP/Desktop/Alejandro/Desarrollos/Antigravity/WebPages/js/config.js)**

### A. Cambio de Paleta de Colores en 30 Segundos
Las variables de color se inyectan dinámicamente al `:root` del navegador. Si cambias el cliente (por ejemplo, a miel de abejas, panadería artesanal, cerveza de autor o artesanías), solo cambias estos valores en `config.js` y **no queda ningún residuo del tema anterior**:

```javascript
theme: {
  bgPrimary: "#FAF8F5",       // Fondo general cálido
  bgSecondary: "#F3EDE6",     // Fondo para alternar secciones
  bgCard: "#FFFFFF",          // Fondo de tarjetas
  textMain: "#221C18",        // Color principal del texto (cálido, no negro puro)
  textMuted: "#6D645D",       // Textos secundarios
  accent: "#96522E",          // Color de acento de marca (botones, resaltados)
  accentHover: "#7D4222",     // Hover de botones
  accentSoft: "#F4EBE3",      // Fondos de etiquetas y badges
}
```

### B. Activar, Desactivar o Modificar Secciones Modulares
Cada sección tiene una propiedad `enabled: true/false`.

#### Ejemplo: La Sección del "Tour por la Finca" (Servicios / Experiencias)
Si el emprendedor no ofrece tours o vende otro tipo de producto, puedes:
* Cambiar los textos para ofrecer otro servicio (ej: *Catering corporativo*, *Taller de barismo*, *Cajas de regalo empresariales*).
* O simplemente poner `enabled: false` en `services` dentro de `js/config.js` y la sección desaparece limpiamente del sitio y la navegación.

```javascript
services: {
  enabled: true,
  title: "Tour Cafetero: La Ruta del Grano a la Taza",
  priceText: "$85.000 COP",
  priceUnit: "por persona",
  duration: "4 Horas",
  includes: [ ... ],
  whatsappBookingMessage: "¡Hola! Quisiera reservar el tour..."
}
```

### C. Catálogo de Productos y Pedidos a WhatsApp
En `config.js` configuras cada producto con sus variantes (gramajes o tamaños) y opciones de molienda.
Cuando el cliente pulsa el botón **"Pedir"**, el sistema genera automáticamente un mensaje estructurado y abre WhatsApp:

```text
¡Hola Café Orcasua! ☕
Quiero realizar un pedido desde su sitio web:

📦 Producto: Bourbon Rosado · Edición Especial
⚖️ Presentación: 500g
⚙️ Molienda: Molienda Media (Cafetera de Goteo / V60)
💵 Valor: $ 70.000

¿Me confirman disponibilidad y los datos para realizar el pago y envío? ¡Muchas gracias!
```

---

## 🌐 3. Despliegue del Demo en Dominio Público (Gratis)

Puedes publicar este demo en menos de 2 minutos para mostrárselo a potenciales clientes:

### Vercel (Recomendado):
1. Instala el CLI de Vercel si no lo tienes: `npm i -g vercel`
2. En la carpeta del proyecto ejecuta:
   ```bash
   npx vercel
   ```
3. Te entregará una URL pública con certificado SSL gratuito (ejemplo: `cafe-orcasua.vercel.app`).

### Alternativas gratuitas:
* **Netlify**: Arrastra la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop) y queda en línea al instante.
* **Cloudflare Pages** o **GitHub Pages**.

---

## 🏷️ 4. Configuración de Dominio Propio para el Cliente Final

Cuando el cliente apruebe la página y compre su dominio (ejemplo: `cafeorcasua.com` o `.co` en DonDominio, GoDaddy o Namecheap):

1. En el panel de **Vercel** o **Cloudflare Pages**, ve a **Settings > Domains**.
2. Escribe el dominio del cliente (ej. `cafeorcasua.com`).
3. La plataforma te indicará dos registros DNS sencillos para poner en el registrador de dominio:
   * **Registro A:** Apuntando a la IP de Vercel (`76.76.21.21`).
   * **Registro CNAME:** `www` apuntando a `cname.vercel-dns.com`.
4. En cuestión de minutos, el dominio propio del cliente estará funcionando con certificado SSL automático y renovación gratis de por vida. **Costo de mantenimiento mensual de hosting: $0.**
