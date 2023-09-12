# Juego de Blackjack !!!!!!

Este es un juego de blackjack en el que el objetivo es llegar a 21 antes que el oponente. El juego está diseñado para dos jugadores: uno y la computadora.



## Contenido

- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instrucciones de juego](#instrucciones-de-juego)
- [FAQ](#faq)
- [Cómo desplegué este proyecto en Github Pages ?](#cómo-desplegué-este-proyecto-en-github-pages)
- [Cómo desplegué este proyecto en Netlify ?](#cómo-desplegué-este-proyecto-en-netlify)



## Tecnologías utilizadas

Este juego ha sido desarrollado utilizando las siguientes tecnologías:

JavaScript: para la programación del juego.

Node.js: para el entorno de ejecución del juego.

Vite: para la generación de la aplicación web.

## Instrucciones de juego
Para comenzar el juego, abre la aplicación en tu navegador web.
Selecciona "Jugar" en la pantalla principal.
Ingresa tu nombre y presiona "Continuar".
Se te darán dos cartas al azar, y deberás decidir si quieres recibir más cartas para intentar llegar a 21 o si quieres plantarte y esperar a que la computadora juegue su turno.
La computadora jugará su turno y tratará de llegar a 21.
Si ningún jugador llega a 21, el jugador que tenga la puntuación más cercana a 21 será el ganador.
Si el jugador gana, se mostrará un mensaje de felicitación y se te dará la opción de jugar de nuevo. Si la computadora gana, se mostrará un mensaje de derrota y también tendrás la opción de jugar de nuevo.
Instalación y configuración




## FAQ

#### Si deseas clonar el repositorio y ejecutar el juego en tu máquina local, sigue estos pasos:

Clona este repositorio en tu máquina local.
Instala Node.js en tu máquina si aún no lo has hecho.
Desde la línea de comandos, navega hasta el directorio raíz del repositorio clonado y ejecuta el comando npm install para instalar las dependencias del proyecto.
Una vez que las dependencias se hayan instalado, ejecuta el comando npm run dev para iniciar el servidor de desarrollo.
Abre tu navegador web y navega a http://localhost:3000 para ver el juego en acción.
¡Diviértete jugando!

## Cómo desplegué este proyecto en Github Pages?

Para desplegar un proyecto en GitHub Pages, sigue estos pasos:

Crea un Repositorio en GitHub:

Si aún no tienes un repositorio en GitHub, crea uno para tu proyecto. Puedes hacerlo haciendo clic en el botón "New" en la página principal de GitHub.
Sube tu Código:

Asegúrate de que todo tu código esté en tu repositorio de GitHub. Puedes clonar el repositorio a tu computadora local y agregar o modificar archivos según sea necesario. Luego, realiza un git push para cargar los cambios a GitHub.
Configura la Rama gh-pages:

GitHub Pages utiliza una rama llamada gh-pages para construir y publicar tu sitio web. Debes crear esta rama en tu repositorio. Puedes hacerlo manualmente desde la interfaz de GitHub o mediante la línea de comandos de Git. Aquí tienes un ejemplo de cómo crear la rama gh-pages desde la línea de comandos:
bash
Copy code
git checkout -b gh-pages
git push origin gh-pages
Habilita GitHub Pages en la Configuración:

Ve a la página principal de tu repositorio en GitHub.
Haz clic en la pestaña "Settings" (Configuración) en la parte superior.
Desplázate hacia abajo hasta la sección "GitHub Pages".
En la opción "Source" (Origen), selecciona la rama gh-pages.
Elige una Carpeta de Despliegue (Opcional):

[![Opera-Instanta-nea-2023-09-01-203323-github-com.png](https://i.postimg.cc/W1hymmkP/Opera-Instanta-nea-2023-09-01-203323-github-com.png)](https://postimg.cc/sMCKshmn)

Si tu proyecto tiene una carpeta específica donde se encuentra el código que deseas publicar (por ejemplo, una carpeta llamada docs o public), puedes especificarla en la configuración de GitHub Pages.
Confirma el Despliegue:

Una vez que hayas seleccionado la rama gh-pages y, opcionalmente, la carpeta de despliegue, guarda la configuración. GitHub Pages comenzará a construir tu sitio web y lo publicará.
Accede a tu Sitio Web Publicado:

Después de unos minutos, podrás acceder a tu sitio web publicado. La URL será del tipo https://tuusuario.github.io/turepositorio (reemplaza tuusuario y turepositorio con tu nombre de usuario y el nombre de tu repositorio).
Actualiza y Publica tu Código:

Cada vez que realices cambios en tu código y los subas a GitHub, GitHub Pages volverá a construir y actualizará automáticamente tu sitio web publicado.
Recuerda que GitHub Pages es ideal para proyectos estáticos, como sitios web estáticos, documentación o proyectos de una sola página. Si tu proyecto es una aplicación web dinámica, es posible que necesites considerar otras opciones de alojamiento.

#### Como puedes ver este proyecto en Github pages?

sigue este link para poder ver y jugar al blackjack:

https://dramax8569.github.io/js-vite-blackjack/

## Cómo desplegué este proyecto en Netlify?

#### Registro en Netlify:
Si aún no tienes una cuenta en Netlify, ve al sitio web de Netlify (https://www.netlify.com/) y regístrate.

#### Inicio de sesión:
Inicia sesión en tu cuenta de Netlify con las credenciales que has proporcionado durante el registro.

#### Dashboard de Netlify:
Una vez que hayas iniciado sesión, serás dirigido al dashboard de Netlify.

[![Opera-Instanta-nea-2023-09-05-185851-app-netlify-com.png](https://i.postimg.cc/8c05Gv46/Opera-Instanta-nea-2023-09-05-185851-app-netlify-com.png)](https://postimg.cc/Wq0j6hQN)

#### Creación de un nuevo sitio:

Haz clic en el botón "New site from Git" o "New site" en la parte superior derecha del dashboard.

#### Conectar tu repositorio de Git:

Netlify permite conectar directamente tu repositorio de Git (por ejemplo, GitHub, GitLab o Bitbucket) para habilitar el despliegue automático cada vez que se actualice tu repositorio.
Selecciona la plataforma de control de versiones que estás utilizando.
Autentica tu cuenta de Git y otorga permisos para acceder a tus repositorios.

[![Opera-Instanta-nea-2023-09-05-185933-app-netlify-com.png](https://i.postimg.cc/g0W0GmVN/Opera-Instanta-nea-2023-09-05-185933-app-netlify-com.png)](https://postimg.cc/Mn9wDkrQ)

[![Opera-Instanta-nea-2023-09-05-190028-app-netlify-com.png](https://i.postimg.cc/qRmBcK95/Opera-Instanta-nea-2023-09-05-190028-app-netlify-com.png)](https://postimg.cc/phFtRmVf)

#### Seleccionar el repositorio y la rama:

Después de autenticar, selecciona el repositorio que deseas desplegar y la rama (normalmente, la rama principal) que quieres usar para el despliegue.

#### Configurar las opciones de construcción:

Configura las opciones de construcción según las necesidades de tu proyecto. Esto incluye el comando de construcción y la carpeta de distribución.

[![Opera-Instanta-nea-2023-09-05-190052-app-netlify-com.png](https://i.postimg.cc/dV8qHpbd/Opera-Instanta-nea-2023-09-05-190052-app-netlify-com.png)](https://postimg.cc/dhVPDHtt)

#### Iniciar el despliegue:
Haz clic en el botón "Deploy site" o una opción similar para iniciar el proceso de despliegue.

#### Esperar a que se complete el despliegue:
Netlify iniciará automáticamente el proceso de construcción y despliegue de tu proyecto. Puedes ver el progreso en el dashboard.

#### Acceder al sitio desplegado:
Una vez que el despliegue haya terminado con éxito, Netlify te proporcionará una URL única para tu sitio web desplegado. Puedes acceder a tu sitio web a través de esta URL.

[![Opera-Instanta-nea-2023-09-05-190133-app-netlify-com.png](https://i.postimg.cc/3wY3P9hq/Opera-Instanta-nea-2023-09-05-190133-app-netlify-com.png)](https://postimg.cc/gxt9hVny)

[![Opera-Instanta-nea-2023-09-05-190218-app-netlify-com.png](https://i.postimg.cc/DZznzZ8d/Opera-Instanta-nea-2023-09-05-190218-app-netlify-com.png)](https://postimg.cc/LqGrCmkn)

#### Acceder al sitio desplegado:
Una vez que el despliegue haya terminado con éxito, Netlify te proporcionará una URL única para tu sitio web desplegado. Puedes acceder a tu sitio web a través de esta URL.

#### Configuración de dominio personalizado (opcional):
Si deseas usar tu propio nombre de dominio en lugar de la URL proporcionada por Netlify, puedes configurar un dominio personalizado en la sección de configuración de tu sitio.

#### Gestionar y actualizar tu sitio:
A partir de este punto, Netlify seguirá supervisando tu repositorio de Git para detectar cambios y desplegar automáticamente las actualizaciones. Puedes configurar notificaciones y otras opciones en la configuración de tu sitio.
