# 🎵 Biblioteca Musical

Aplicación web para buscar artistas, explorar sus álbumes y ver el detalle de sus canciones, conectada a la API pública de [TheAudioDB](https://www.theaudiodb.com/).

---

## 🚀 Funcionalidades

- 🔍 Búsqueda de artistas en tiempo real
- 📀 Lista de canciones por álbum
- 🎵 Página de detalle con portada, año, género y tracklist completo
- ⏳ Indicador de carga mientras se obtienen los datos
- ⚠️ Manejo de errores con opción de reintentar
- 📱 Diseño responsive para móvil y escritorio

---

## 🛠️ Tecnologías utilizadas

- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [TheAudioDB API](https://www.theaudiodb.com/free_music_api)

---

## 📁 Estructura del proyecto
MusicLibrary/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── hooks/
    │   └── useFetch.js
    ├── components/
    │   ├── SearchBar.jsx
    │   └── SearchResults.jsx
    └── pages/
        ├── Home.jsx
        └── SongDetail.jsx

## 🌐 API utilizada

| Endpoint | Descripción |
|----------|-------------|
| `/searchalbum.php?s=artista` | Busca álbumes por nombre de artista |
| `/album.php?m=id` | Obtiene el detalle de un álbum por ID |

Documentación completa: https://www.theaudiodb.com/free_music_api

---

## 📌 Conceptos aplicados

- Custom Hook (`useFetch`) con manejo de estados: carga, error y éxito
- Formulario controlado con React (`useState`)
- Navegación con `React Router` (`BrowserRouter`, `Routes`, `Route`, `Link`)
- Obtención de parámetros de URL con `useParams`
- Proxy en Vite para evitar errores de CORS
- Renderizado condicional según el estado de la petición

---

## 👤 Autor

**Tu Nombre**  
[GitHub](https://github.com/XavierSantamaria052)        