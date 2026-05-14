# MusicLibrary — Aplicación React de Biblioteca Musical

Aplicación web desarrollada con React para búsqueda y gestión de música utilizando APIs REST externas.

---

# Tabla de contenidos

- Arquitectura
- Tecnologías
- Funcionalidades
- Estructura
- Instalación
- Consumo de API
- Componentes React
- Capturas
- Ejecución

---

# Arquitectura

```text
┌────────────────────────────┐
│          App.jsx           │
├────────────────────────────┤
│       Componentes UI       │
├────────────────────────────┤
│      Hooks personalizados  │
├────────────────────────────┤
│         Fetch API          │
├────────────────────────────┤
│      API Externa Música    │
└────────────────────────────┘
```

---

# Tecnologías

| Tecnología | Propósito |
|------------|-----------|
| React | Frontend |
| JavaScript | Lógica |
| CSS | Estilos |
| React Router | Navegación |
| Fetch API | Consumo REST |

---

# Funcionalidades

- Búsqueda de artistas
- Consulta de álbumes
- Visualización dinámica
- Biblioteca personalizada
- Consumo de APIs externas
- Navegación entre páginas

---

# Estructura del proyecto

```text
MusicLibrary/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

# Instalación

## Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/MusicLibrary.git
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar aplicación

```bash
npm run dev
```

---

# Consumo de API

La aplicación consume endpoints REST externos para obtener:

- Artistas
- Álbumes
- Información musical
- Imágenes

---

# Componentes React

| Componente | Función |
|------------|----------|
| SearchBar | Búsqueda |
| AlbumCard | Mostrar álbum |
| ArtistPage | Vista artista |
| Library | Biblioteca usuario |

---

# Autor

Xavier Santamaria
