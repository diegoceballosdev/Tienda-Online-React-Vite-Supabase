# 🤖 Aplicación de Ecommerce con React y Supabase

Construido con React y Supabase, este proyecto es una aplicación de ecommerce completa que permite a los usuarios explorar productos, agregarlos al carrito, realizar compras y gestionar sus pedidos.

## 🚀 Demo (Deploy)

- Vercel: https://celltech-snowy.vercel.app/

---

# ⚙️ Tech Stack

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Tipado estático para JavaScript y mejor experiencia de desarrollo.
- **Vite**: Bundler y entorno de desarrollo rápido.
- **Supabase**: Backend as a Service con base de datos Postgres, Auth y Storage.
- **Tailwind CSS**: Framework CSS para diseño rápido y responsivo.
- **TanStack Query**: Manejo eficiente de datos, caché, reintentos y estados asíncronos.
- **Zustand**: Manejo del estado global (carrito, totales, etc.).
- **React Hook Form**: Gestión de formularios performante en React.
- **Zod**: Validación de esquemas TypeScript-first.
- *(Opcional / según tu proyecto)* React Router, sonner/toast, etc.

---

# 🔋 Características

👉 **Autenticación de Usuarios**: Registro e inicio de sesión con Supabase Auth y validaciones con Zod.

👉 **Gestión de Productos**: Listado de productos, filtrado por categorías, búsqueda y detalle individual.

👉 **Carrito de Compras**: Añadir / eliminar productos del carrito con Zustand, cálculo de totales y persistencia (si aplica).

👉 **Checkout / Procesamiento de Pedidos**: Finalizar compras y crear órdenes, con manejo de estados usando TanStack Query.

👉 **Validación de Formularios**: Formularios robustos con React Hook Form y Zod (dirección, datos del usuario, etc.).

👉 **Panel de Administración**: Gestión de productos/categorías/pedidos (si aplica, según roles).

👉 **Responsive Design**: UI adaptable a desktop/tablet/mobile con Tailwind CSS.

👉 **Manejo de Estados y Caché**: Cacheo, invalidación y sincronización de datos con TanStack Query.

👉 **Buenas prácticas**: Componentización, separación por capas (actions/services/hooks), tipado, validaciones y manejo de errores.

---

# ✅ Requisitos

- Node.js **18+** (recomendado)
- React.js **18+** (recomendado)
- Una cuenta/proyecto en **Supabase**

---

# 🧰 Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPO>
   cd <NOMBRE_DEL_PROYECTO>

2. Instalar dependencias:
   ```bash
   npm install

3. Configurar variables de entorno:
   ```bash
    VITE_PROJECT_URL_SUPABASE
    VITE_SUPABASE_API_KEY

4. Ejecutar en desarrollo:
   ```bash
   npm run dev

