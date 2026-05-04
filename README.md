# 💪 Trabajo Práctico - Sprint 5 - URL:https://nododiplo-m4-tp5.netlify.app/

## 🌟 Objetivo

Desarrollar una aplicación completa con **React + Vite + TailwindCSS** que implemente un **CRUD completo** sobre una colección de recursos, integrando:

- React Router DOM (rutas estáticas, dinámicas y navegación programática)
- Context API para manejo de estado global
- Axios + async/await para peticiones HTTP
- Formularios controlados y validados
- Eliminación con confirmación visual (SweetAlert2)
- Notificaciones visuales (react-toastify)
- Buenas prácticas de organización de carpetas y componentes

---

## 🔄 Tema libre

Pueden elegir cualquier temática creativa para su aplicación, por ejemplo:

- Gestor de héroes
- Países favoritos
- Mascotas adoptables
- Juegos, recetas, libros, equipos de fútbol, etc.

📌 **Recomendación**: pueden usar [MockAPI](https://mockapi.io/) para crear su propia API REST o bien usar las APIs que crearon en el módulo anterior de backend.

---

## ✅ Requisitos funcionales

### 🧽 Rutas

- `/` → Página principal o bienvenida
- `/items` → Listado general de elementos (`GET`)
- `/items/:id` → Detalle de un elemento (`GET`)
- `/items/create` → Formulario para crear nuevo elemento (`POST`)
- `/items/:id/edit` → Formulario para editar (`PUT`)
- `*` → Página 404 o redirección

### 📦 CRUD

- Crear nuevo recurso (formulario con validación)
- Editar recurso existente (precarga del formulario)
- Eliminar recurso con confirmación (`sweetalert2`)
- Ver detalles del recurso
- Mostrar lista de recursos desde API

### 🔧 Técnicas y herramientas requeridas

- Peticiones `GET`, `POST`, `PUT` y `DELETE` usando **Axios**
- Formularios controlados con **validación básica**
- **React Router**: rutas estáticas, dinámicas, `useNavigate`, `useParams`
- Manejo de estado con **Context API**
- Estilo con **TailwindCSS**
- **Feedback visual** usando `react-toastify`
- Confirmaciones con `sweetalert2`
- Código ordenado y dividido por componentes

---

## 🧱 Sugerencia de estructura de carpetas

```
/src
 ├── components
 │   ├── ItemCard.jsx
     ├── pages
 │      ├── ItemList.jsx
 │      ├── ItemDetail.jsx
 │      ├── ItemCreate.jsx
 │      ├── ItemEdit.jsx
 │      └── NotFound.jsx
 ├── context
 │   └── ItemContext.jsx
 ├── Router
 │   └── AppRouter.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🎨 Estilo

- Diseño **responsivo** y agradable (usar TailwindCSS)
- Botones y formularios accesibles y claros
- UX fluida y moderna

---

## 📦 Evaluación&#x20;

| Criterio                            |   |
| ----------------------------------- | - |
| CRUD funcional completo con API     |   |
| Navegación fluida entre vistas      |   |
| Formularios controlados y validados |   |
| Estado global con Context           |   |
| Confirmaciones + Toasts             |   |
| Estilo responsive y limpio          |   |
| Código ordenado y reutilizable      |   |

---

## 🚀 Entrega

- Repositorio en GitHub con instrucciones en el README
- Link de despliegue en Netlify (link en el README)



---

## 💡 Consejo final

Sean creativos. No se limiten a copiar el ejemplo del profe. Este sprint es ideal para mostrar lo que aprendieron y experimentar con algo propio.

🚀 ¡Vamos que se puede! 💪✨

