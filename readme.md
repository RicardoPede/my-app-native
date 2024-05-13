## REACT EXPO

## Conforma el Trabajo Practico N° 5

Para crear el presente proyecto se han ejecutado los siguientes comandos:
```bash
npx create-expo-app my-app
cd my-app
npm install -g expo-cli # Instalar Expo CLI: sirve para crear y gestionar proyectos de Expo
npx expo install react-dom react-native-web @expo/metro-runtime
```

Si la aplicación no esta cargando en su dispositivo?
Primero, asegúrese de estar en la misma red Wi-Fi en la computadora y el dispositivo.

Si todavía no funciona, puede deberse a la configuración del router, esto es común para las redes públicas. Puede trabajar alrededor de esto eligiendo el tipo de conexión del túnel al iniciar el servidor de desarrollo, luego escanear el código QR de nuevo.

```bash
npx expo start --tunnel
```
En mi caso configuré para dar inicio mediante 
```bash
npm run tunnel
```

Mejorar componentes de boton reutilizables
```bash
npx expo install @expo/vector-icons
```

Usar un recolector de imágenes
expo-image-pickerproporciona acceso a la interfaz de usuario del sistema para seleccionar imágenes y vídeos de la biblioteca del teléfono o tomar una foto con la cámara.
```bash
npx expo install expo-image-picker
```

La biblioteca React Native Gesture Handler proporciona una manera de interactuar con el sistema de respuesta de gestos de la plataforma nativa. Para animar entre estados de gestos, usaremos la biblioteca Reanimated.
```bash
npx expo install react-native-gesture-handler react-native-reanimated
```

Tomar una captura de pantalla: 
react-native-view-shotque permite tomar una captura de pantalla, y expo-media-libraryque permite acceder a la mediateca de un dispositivo para guardar una imagen.
```bash
npx expo install react-native-view-shot expo-media-library
```

Instala e importe dom-to-imagen
Para capturar una captura de pantalla en la web y guardarla como una imagen, utilizaremos una biblioteca de terceros llamada dom-to-imagen. Permite tomar una captura de pantalla de cualquier nodo DOM y convertirlo en una imagen vectorial (SVG) o raster (PNG o JPEG).
```bash
npm install dom-to-image
```


### TRABAJO PRACTICO N° 5

Como se esta trabajando en un proyecto, el cual aún esta desordenado, se ha aplicado:

## Ver en App.js
### React Navigation
### createNativeStackNavigation pero reemplazada por createBottomTabNavigator
se recorre entre los archivos contenidos en "page"
### Al .Screen se le han aplicado las prop

### TRABAJO PRACTICO N° 6

## Ver en MostrarApi.js
npm install --save react-native-size-matters

...se continuará y mejorará para cerrar una idea de hacia dónde se orienta la app