# Turismo Posadas

Sitio web oficial de turismo para la ciudad de Posadas, capital de Misiones, Argentina. Una plataforma moderna y completa que muestra las mejores experiencias, atracciones y servicios turísticos de la región.

## 🚀 Características

- **Arquitectura Limpia**: Estructura modular y organizada
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Navegación Intuitiva**: Menú desplegable con 8 secciones principales
- **Rutas Dinámicas**: Sistema de rutas anidadas para cada sección
- **UI Moderna**: Diseño minimalista con Tailwind CSS
- **Performance**: Optimizado con Vite para desarrollo rápido

## 📁 Estructura del Proyecto

```
turismo-posadas/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── destinos/
│   │       └── galeria/
│   │   └── icons/
│
│   ├── components/
│   │   └── Header.jsx          # Header principal con navegación
│   │   └── Navbar.jsx          # Menú de navegación con dropdowns
│   │   └── DropdownMenu.jsx    # Componente de menú desplegable
│   │   └── Footer.jsx          # Footer con enlaces y contacto
│   │   └── Hero.jsx            # Sección hero de la página principal
│   │   └── InfoCard.jsx        # Tarjeta de información reutilizable
│   │   └── DescriptionBlock.jsx # Bloque de descripción reutilizable
│
│   ├── pages/
│   │   └── OrganizaTuViaje.jsx     # Planificación de viajes
│   │   └── InformacionDestino.jsx  # Información sobre Posadas
│   │   └── QueHacer.jsx            # Actividades y atracciones
│   │   └── Experiencias.jsx        # Experiencias únicas
│   │   └── Galeria.jsx             # Galería de fotos y videos
│   │   └── MICE.jsx                # Eventos corporativos
│   │   └── Noticias.jsx            # Noticias y blog
│   │   └── Contacto.jsx            # Información de contacto
│
│   ├── routes/
│   │   └── AppRoutes.jsx       # Configuración de rutas
│
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
│
├── tailwind.config.js          # Configuración de Tailwind CSS
├── postcss.config.js           # Configuración de PostCSS
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
└── package.json                # Dependencias del proyecto
```

## 🎯 Secciones Principales

### 1. Organiza Tu Viaje
- Cómo llegar
- Dónde hospedarse
- Transporte
- Clima
- Mapas

### 2. Información del Destino
- Historia
- Cultura
- Gastronomía
- Arquitectura
- Población

### 3. Qué Hacer
- Atracciones
- Actividades
- Paseos
- Deportes
- Entretenimiento

### 4. Experiencias
- Aventura
- Naturaleza
- Culturales
- Gastronómicas
- Personalizadas

### 5. Galería
- Fotos
- Videos
- Vistas 360°
- Drone
- Artísticas

### 6. MICE
- Conferencias
- Eventos
- Incentivos
- Exposiciones
- Centros de Convenciones

### 7. Noticias
- Últimas noticias
- Eventos
- Blog
- Prensa
- Newsletter

### 8. Contacto
- Información de contacto
- Formulario
- Ubicación
- Horarios
- Redes sociales

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces de usuario
- **React Router DOM**: Enrutamiento para aplicaciones React
- **Tailwind CSS**: Framework de CSS utilitario
- **Vite**: Herramienta de construcción rápida
- **PostCSS**: Procesador de CSS
- **Autoprefixer**: Plugin para prefijos CSS automáticos

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/turismo-posadas.git
cd turismo-posadas
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... más tonos
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fdf4ff',
    // ... más tonos
    900: '#701a75',
  }
}
```

### Componentes
Los componentes están diseñados para ser reutilizables y personalizables. Puedes modificar:

- `InfoCard.jsx` - Para tarjetas de información
- `DescriptionBlock.jsx` - Para bloques de contenido
- `Header.jsx` - Para el encabezado
- `Footer.jsx` - Para el pie de página

## 📱 Responsive Design

El sitio está completamente optimizado para:
- **Desktop**: 1024px y superior
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuración de Producción

Para desplegar en producción:

1. Construye la aplicación:
```bash
npm run build
```

2. Los archivos de producción estarán en la carpeta `dist/`

3. Sube el contenido de `dist/` a tu servidor web

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@turismoposadas.com
- **Teléfono**: +54 376 412-3456
- **Dirección**: Av. Costanera 1234, Posadas, Misiones, Argentina

## 🙏 Agradecimientos

- Comunidad de React
- Equipo de Tailwind CSS
- Vite por la excelente herramienta de desarrollo
- Todos los contribuidores del proyecto

---

**Desarrollado con ❤️ para Posadas, Misiones** 