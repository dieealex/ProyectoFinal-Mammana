# Fútbol Store - Proyecto Final React JS

Este proyecto fue desarrollado como entrega final del curso de **React JS** de **Coderhouse**. Consiste en una tienda e-commerce de productos de fútbol, incluyendo camisetas, botines y pelotas, con funcionalidades completas de carrito y compra.

---

## 🌟 Funcionalidades Principales

* Visualización de productos con detalles e imágenes.
* Filtrado por categoría usando React Router.
* Detalle individual de productos con selector de cantidad (ItemCount).
* Carrito de compras con suma de cantidades y precios.
* Confirmación de orden con formulario de datos del comprador.
* Almacenamiento de datos en Firebase Firestore.
* Visualización del ID de orden generada.

---

## 🚀 Tecnologías y Librerías

* **React JS** con Vite
* **React Router DOM** para navegación
* **Context API** para manejo global del carrito
* **Firebase Firestore** para backend (productos y órdenes)
* **Tailwind CSS** para estilos rápidos y responsivos

---

## 📄 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/futbol-store.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en modo desarrollo:

```bash
npm run dev
```

4. Acceder a: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Configuración de Firebase

Crear un archivo `.env` (si se desea ocultar las credenciales) o configurar directamente en `firebaseConfig.js` con los datos de tu proyecto de Firebase.

```js
// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 📊 Estado actual

* [x] Productos cargados desde Firestore.
* [x] Checkout funcional con registro de orden.
* [x] Interfaz responsive.
* [x] Sin errores en consola.

---

## 🎉 Autor

Proyecto desarrollado por **Diego Alexander** como entrega final para **Coderhouse**.