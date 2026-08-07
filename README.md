# CineFlix 🎬

Aplicación web de catálogo de películas con **backend (Express + MySQL)** y **frontend (React + TypeScript + Vite)**.

## Estructura del proyecto

```
Peliculas/
├── Backend/                 # API REST (Node.js + Express)
│   ├── app.js               # Entrada de la app, monta /movies
│   ├── config/db.js         # Configuración de conexión a MySQL (desde .env)
│   ├── controllers/         # Capa de controladores
│   ├── models/
│   │   ├── local/movie.js     # Modelo con datos desde movies.json (alternativo)
│   │   └── mysql/movie.js     # Modelo con acceso a MySQL (usado por defecto)
│   ├── routes/movies.js      # Definición de rutas /movies
│   ├── utils/ReadJson.js     # Helper para leer el JSON
│   ├── movies.json           # Datos locales de prueba
│   └── .env                  # Variables de entorno (no lo subas al repositorio)
└── frontend/                 # SPA (React 19 + Vite + Tailwind)
    └── src/
        ├── components/        # Navbar, Hero, Grid, Card, Search, GenreBar, Footer
        ├── context/           # MoviesContext (state compartido de películas)
        ├── hooks/useMovies    # Hook para consumir el contexto
        ├── services/          # Llamadas API (axios)
        ├── pages/             # Home, Not-found
        └── types/             # Tipos de TypeScript (Movie, MoviesContextValue)
```

## Requisitos previos

- Node.js (LTS recomendado) y npm/pnpm
- MySQL (o una BD compatible) corriendo en local

## Backend

### 1. Instalar dependencias

```bash
cd Backend
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en `Backend/` (ya existe uno de ejemplo; ajusta los valores):

```env
DB_PORT=3306
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234
DB_NAME=moviesdb

PORT=3000
```

> `PORT` es el puerto del servidor HTTP; `DB_PORT` es el puerto de MySQL.

### 3. Base de datos

Con el modelo `mysql`, el backend consulta la tabla `movies` de la base `moviesdb`.
Puedes crearla a partir de los datos de ejemplo de `movies.json` (los IDs se almacenan
como `BINARY(16)` y se devuelven con `bin_to_uuid`).

> Alternativa sin base de datos: en `app.js` cambia la importación a
> `./models/local/movie.js` para usar `movies.json`.

### 4. Levantar el servidor

```bash
npm run dev        # nodemon app.js
```

El servidor queda en `http://localhost:3000`.

### Endpoints

| Método | Ruta            | Descripción                          |
|--------|-----------------|--------------------------------------|
| GET    | `/movies`       | Todas las películas                  |
| GET    | `/movies?genre=`| Películas filtradas por género       |
| GET    | `/movies/:id`   | Película por id                      |

## Frontend

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Configurar el API

El puerto del API está configurado en `src/services/api.ts` (por defecto `http://localhost:3000`). Ajústalo si cambias el `PORT` del backend.

### 3. Levantar el frontend

```bash
npm run dev
```

Queda en `http://localhost:5173`.

### Scripts disponibles

```bash
npm run dev       # servidor de desarrollo (Vite)
npm run build     # build de producción (tsc + vite build)
npm run lint      # análisis con ESLint
npm run preview   # vista previa del build
```

## Cómo funciona el estado (Context)

El frontend comparte el listado de películas mediante React Context:

- `src/context/movies-context.ts` — define el contexto (`MoviesContext`).
- `src/context/MovieContext.tsx` — el `MoviesProvider` hace **una sola** petición `GET /movies` y expone `movies`, `loading`, `error`.
- `src/hooks/useMovies.ts` — hook de acceso; lanza un error si se usa fuera del `Provider`.

Los componentes `GridMovie` y `GenreBar` consumen este contexto, evitando peticiones duplicadas.