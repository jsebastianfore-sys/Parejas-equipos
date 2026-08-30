# Parejas Clubes 🃏⚽

¡Bienvenido a **Parejas Clubes**! Un clásico juego de memoria (Memorama) con una estética moderna, vibrante y *premium*, desarrollado utilizando tecnologías de vanguardia para plataformas móviles y web.

## 🚀 Características

- **Diseño Moderno (Premium Aesthetic):** Interfaz vibrante con fondos dinámicos, *glassmorphism* (efecto cristal) y animaciones fluidas al revelar y emparejar cartas.
- **Mecánica Clásica:** Encuentra las 8 parejas ocultas en el menor número de intentos posibles.
- **Sistema de Estadísticas:** Contador de pares encontrados y de intentos realizados en tiempo real.
- **Totalmente Responsivo y Multiplataforma:** Optimizado tanto para navegadores web como para dispositivos móviles (Android nativo integrado vía Capacitor).
- **Arquitectura Moderna:** Desarrollado utilizando **Angular Standalone Components** (sin `NgModules`), lo que hace que el código sea más ligero y fácil de mantener.

## 🛠️ Tecnologías Utilizadas

- [Ionic Framework](https://ionicframework.com/) - Componentes de UI multiplataforma.
- [Angular 20+](https://angular.io/) - Framework frontend (Standalone).
- [Capacitor](https://capacitorjs.com/) - Compilación nativa para Android.
- **SCSS** - Estilos avanzados y animaciones personalizadas.

## 📦 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu máquina local:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/jsebastianfore-sys/Parejas-equipos.git
   cd Parejas-equipos
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   ionic serve
   ```
   *La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8100`.*

## 📱 Compilar para Android

Este proyecto ya cuenta con la plataforma Android configurada. Para abrir el proyecto en Android Studio y compilar el APK:

1. Sincroniza los archivos web con Capacitor:
   ```bash
   npx cap sync android
   ```
2. Abre el proyecto en Android Studio:
   ```bash
   npx cap open android
   ```

---
*Desarrollado con ❤️ y Angular.*
