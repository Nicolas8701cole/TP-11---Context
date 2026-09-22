# CatFighters 2D Mobile - TP08 EFSI

> El proyecto usa Expo + React Native con React Navigation. `App.jsx` e `index.js` están en la raíz; no se usa `main.jsx`, `App.css`, `index.html` ni Vite. La carpeta `app/` contiene la implementación del TP.


CatFighters 2D Mobile es la migración del clon web del TP anterior a React Native con Expo.

La lógica y el contenido siguen girando alrededor de CatFighters 2D y Fighters 2D, pero la interfaz de esta versión busca copiar con mucha más fidelidad la aplicación móvil de Instagram: modo oscuro, encabezados, historias, publicaciones a ancho completo, barra de acciones, navegación inferior y perfil.

## Referencias visuales

Para la versión móvil usamos capturas exactas de Instagram Android como guía visual. Están incluidas en:

```txt
assets/referencias/
├── feed-arriba.jpg
├── feed-acciones.jpg
├── feed-completo.jpg
├── perfil.jpg
└── aro-historias.png
```

Estas capturas se usaron porque la consigna permite entregar capturas equivalentes a la referencia de Figma.

El Figma del TP web anterior no se usa como referencia principal de esta versión porque era una interfaz web y este TP pide copiar Instagram para celulares.

## Organización

```txt
app/
├── api/
│   └── catsApi.js
├── data/
│   ├── perfil.js
│   └── posteos.js
├── components/
│   ├── AccionesPosteo.jsx
│   ├── ErrorMessage.jsx
│   ├── HeaderFeed.jsx
│   ├── HeaderPerfil.jsx
│   ├── Historia.jsx
│   ├── Historias.jsx
│   ├── Loader.jsx
│   ├── PerfilInfo.jsx
│   ├── Posteo.jsx
│   ├── Sugerencias.jsx
│   └── TabsPerfil.jsx
├── navigation/
│   ├── AppNavigator.jsx
│   └── MainTabs.jsx
└── screens/
    ├── BuscarScreen.jsx
    ├── DetallePostScreen.jsx
    ├── FeedScreen.jsx
    ├── MensajesScreen.jsx
    ├── PerfilScreen.jsx
    └── ReelsScreen.jsx
```

## Componentes y responsabilidades

### HeaderFeed

Copia la estructura superior del feed móvil de Instagram. Muestra el botón de crear, el nombre Instagram y el corazón.

### Historia

Representa una sola historia. Recibe la información de la historia por props y dibuja el avatar circular. Las historias ajenas tienen un aro degradado.

### Historias

Recibe los posteos cargados y arma la fila horizontal de historias. Usa una FlatList horizontal.

### Posteo

Representa una publicación individual del feed. Recibe el objeto `posteo` y las funciones `abrirPosteo` y `abrirPerfil` mediante props.

Muestra avatar, usuario, ubicación, verificado, botón Seguir, imagen, caption y acciones.

### AccionesPosteo

Se separó de Posteo porque la barra de acciones ya contiene varias interacciones: Me gusta, comentar, repost, compartir y guardar.

### HeaderPerfil

Copia el encabezado de perfil de Instagram móvil con usuario, candado, flecha, Threads simulado y menú.

### PerfilInfo

Muestra avatar, nombre, publicaciones, seguidores, seguidos, biografía y botones visuales de perfil.

### Sugerencias

Copia la sección "Descubrir personas" de la referencia. Se muestra con FlatList horizontal.

### TabsPerfil

Representa los tres botones visuales sobre la grilla del perfil.

### Loader y ErrorMessage

Muestran de forma visual los estados de carga y error.

## Props

Las props se usan para pasar datos o funciones desde un componente que tiene esa información hacia otro componente.

Ejemplo del feed:

```jsx
<Posteo
  posteo={item}
  abrirPosteo={abrirPosteo}
  abrirPerfil={abrirPerfil}
/>
```

`FeedScreen` tiene las funciones de navegación. `Posteo` no necesita volver a escribirlas. Las recibe y las ejecuta cuando el usuario toca la imagen o el perfil.

## Hooks

### useState

Se usa para publicaciones, carga, errores y varias interacciones.

Por ejemplo, cada posteo maneja:

```jsx
const [likeActivo, setLikeActivo] = useState(false)
const [cantidadLikes, setCantidadLikes] = useState(posteo.likes)
```

También se usa para seguir usuarios, guardar publicaciones y marcar un repost.

### useEffect

Se usa para llamar a The Cat API cuando una pantalla que necesita imágenes aparece por primera vez.

```jsx
useEffect(() => {
  cargarPosteos()
}, [])
```

## API y Axios

`catsApi.js` realiza la petición a The Cat API mediante Axios.

La variable de entorno es:

```env
EXPO_PUBLIC_CAT_API_KEY=tu_api_key
```

La API devuelve las imágenes. Los usuarios, captions, ubicaciones, comentarios y cantidades simuladas se encuentran en `app/data/posteos.js`.

## Feed con FlatList

El feed no usa `ScrollView + .map()` para dibujar publicaciones.

Usa obligatoriamente:

```jsx
<FlatList
  data={posteos}
  renderItem={({ item }) => (
    <Posteo posteo={item} />
  )}
/>
```

El `.map()` que aparece al armar `posteosArmados` solamente transforma datos de la API. No renderiza el feed.

## Visualización individual

Al tocar una publicación:

```jsx
navigation.navigate("Detalle", {
  posteo: posteo,
})
```

La pantalla de detalle recibe el objeto:

```jsx
const { posteo } = route.params
```

Detalle muestra imagen grande, usuario, ubicación, caption, etiquetas, comentarios, fecha, likes y acciones.

El like del detalle se modifica en tiempo real con useState.

## Perfil emulado

No existe un login real. El usuario activo está cargado en:

```txt
app/data/perfil.js
```

Se muestran:

- usuario
- nombre
- avatar
- biografía
- cantidad dinámica de publicaciones
- seguidores
- seguidos
- botón Editar perfil
- botón Compartir perfil
- grilla de publicaciones

## Perfil con tres columnas

La grilla usa una FlatList con:

```jsx
numColumns={3}
```

Esto cumple de forma literal el requisito de la consigna.

## Navegación

Se usa React Navigation.

`AppNavigator` contiene el Native Stack principal.

`MainTabs` contiene la navegación inferior de Feed, Reels, Mensajes, Buscar y Perfil.

El detalle queda fuera de las tabs y se abre sobre la navegación principal.

## StyleSheet

No existe App.css ni se utiliza className.

Todos los estilos visuales están creados con:

```jsx
StyleSheet.create()
```

## SplashScreen, icono y StatusBar

`app.json` configura una SplashScreen personalizada y un icono propio utilizando `gatoFranco.png`.

`App.jsx` configura:

```jsx
<StatusBar style="light" />
```

porque la interfaz usa fondo oscuro.

## SafeAreaView

Las pantallas están envueltas en SafeAreaView para evitar que el contenido choque con la barra de estado, notch u otras zonas físicas del celular.

## Cómo ejecutar

Crear un archivo `.env` usando `.env.example` como base.

Después:

```bash
npm install
npx expo start
```

Para abrir en navegador:

```bash
npm run web
```

En una red que bloquee la conexión entre celular y computadora:

```bash
npx expo start --tunnel
```
