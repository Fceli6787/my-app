# 🍋 Little Lemon Restaurant

Una aplicación web moderna para un restaurante mediterráneo familiar que combina recetas tradicionales con un toque contemporáneo.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Descripción

Little Lemon es una plataforma web completa para un restaurante mediterráneo ubicado en Chicago. La aplicación ofrece una experiencia de usuario fluida para explorar el menú, hacer reservaciones y realizar pedidos en línea.

## ✨ Características

- 🏠 **Página de inicio** con hero section y platos especiales
- 📖 **Menú interactivo** con información detallada de platos
- 📅 **Sistema de reservaciones** en línea
- 🛒 **Pedidos online** para delivery o takeaway
- ℹ️ **Página About** con información del restaurante
- 📱 **Diseño responsivo** optimizado para móviles y tablets
- 🎨 **UI moderna** con componentes de shadcn/ui

## 🛠️ Tecnologías

- **React** 18.3.1 - Biblioteca principal
- **React Scripts** 5.0.1 - Herramientas de desarrollo
- **TailwindCSS** 3.4.15 - Framework de CSS utility-first
- **PostCSS** 8.4.49 - Procesador de CSS
- **Autoprefixer** 10.4.20 - Prefijos automáticos CSS
- **shadcn/ui** 0.0.4 - Componentes de UI reutilizables

## 📦 Instalación

### Requisitos previos

- Node.js 14.x o superior
- npm 6.x o superior

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd my-app-main
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Tailwind CSS** (si es necesario)
   ```bash
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Instalar shadcn/ui** (opcional)
   ```bash
   npm install @shadcn/ui
   ```

## 🚀 Uso

### Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

- El servidor se recarga automáticamente al hacer cambios
- Los errores de lint aparecerán en la consola

### Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `build/`, listos para ser desplegados.

### Testing

Ejecuta las pruebas en modo interactivo:

```bash
npm test
```

## 📁 Estructura del proyecto

```
my-app-main/
├── public/
│   ├── image/              # Imágenes estáticas
│   │   ├── dish1.jpg
│   │   ├── dish2.jpg
│   │   ├── dish3.jpg
│   │   ├── logo.jpg
│   │   └── specialdish.jpg
│   ├── index.html
│   └── favicon.ico
├── src/
│   └── app/
│       ├── about/          # Página About
│       ├── menu/           # Página de Menú
│       ├── order/          # Página de Pedidos
│       ├── reservations/   # Página de Reservaciones
│       ├── layout/         # Componentes de layout
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── sections/       # Secciones de la página
│       │   ├── Hero.tsx
│       │   └── Specials.tsx
│       ├── layout.tsx      # Layout principal
│       └── page.tsx        # Página de inicio
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Paleta de colores

- **Verde principal**: `#495E57` - Header y elementos principales
- **Amarillo**: `#F4CE14` - Acentos y call-to-actions
- **Blanco**: `#FFFFFF` - Fondos y textos sobre oscuro
- **Negro**: `#000000` - Textos principales

## 🌐 Páginas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio con hero y especiales |
| `/about` | Información sobre el restaurante |
| `/menu` | Menú completo con platos disponibles |
| `/reservations` | Sistema de reservación de mesas |
| `/order` | Pedidos en línea |

## 🔧 Configuración adicional

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto para variables de entorno:

```env
REACT_APP_API_URL=tu_api_url
REACT_APP_GOOGLE_MAPS_KEY=tu_clave_de_google_maps
```

### Personalización de Tailwind

Edita `tailwind.config.js` para personalizar colores, fuentes y más:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#F4CE14',
      },
    },
  },
}
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm test` | Ejecuta las pruebas |
| `npm run build` | Crea la versión de producción |
| `npm run eject` | Expone la configuración (irreversible) |

## 🐛 Solución de problemas

### El servidor no inicia

```bash
# Limpia cache y reinstala dependencias
rm -rf node_modules package-lock.json
npm install
npm start
```

### Errores de compilación de Tailwind

```bash
# Reinicia la configuración de Tailwind
npx tailwindcss init -p --force
```

### Build falla al minificar

Revisa la [documentación oficial](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📚 Recursos adicionales

- [Documentación de React](https://reactjs.org/)
- [Documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- Andres Felipe Celi Jimenez

## 🙏 Agradecimientos

- Create React App por la configuración inicial
- La comunidad de React y Tailwind CSS
- Todos los contribuidores del proyecto

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ para Little Lemon Restaurant**
