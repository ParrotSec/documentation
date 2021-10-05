\

<h1 align="center">¿Qué es Parrot OS?</h1>


Parrot Security (Parrot OS, Parrot) es una distribución GNU/Linux de código abierto y gratuito basada en *Debian Testing* diseñada para expertos en seguridad, desarrolladores y personas conscientes de la privacidad.

Incluye un arsenal portátil completo para operaciones de seguridad informática y análisis forense digital. También incluye todo lo que necesitas para desarrollar tus propios programas o proteger tu privacidad mientras navegas por la red.

Parrot está disponible en sus ediciones [Security](https://parrotsec.org/security-edition) y [Home](https://parrotsec.org/home-edition), incluso como VM y también en Docker.

El sistema operativo viene de forma predeterminada con los entornos de escritorio MATE, KDE y XFCE (solo Home Edition).

\
\

![Escritorio de ParrotOS](./images/parrot_desktop.png)

<h5 align="center">Parrot Security 4.11 con Escritorio MATE</h5>

\

## Historia y Equipo ##

El primer lanzamiento público apareció el 10 de abril de 2013 como resultado del trabajo de Lorenzo Faletra, quien continúa liderando el desarrollo.

Desarrollado originalmente como parte de Frozenbox (un foro comunitario del mismo creador de Parrot), el esfuerzo ha crecido para incluir una comunidad de desarrolladores de código abierto, profesionales expertos en seguridad, defensores de los derechos digitales y entusiastas de Linux de todo el mundo.

El proyecto tiene su sede en Palermo, Italia y está gobernado por Parrot Security CIC, una empresa de interés comunitario registrada en el Reino Unido.

### ¿Para quién está diseñado? ###

El sistema está diseñado para ser familiar para el experto en seguridad y fácil de usar para el nuevo estudiante de ingreso, pero no intenta ocultar sus partes internas como lo intentan otras distribuciones de propósito general.

Parrot se puede utilizar como sistema diario. Proporciona todos los programas para las tareas del día a día, incluida una edición dedicada del sistema ([Parrot Home Edition](../en/download-parrot.html#security-or-home-edition-which-one-should-i-choose)) que no incluye herramientas de seguridad.

 
### Gestión de Software ###

El sistema tiene su propio repositorio de aplicaciones que incluye todos los paquetes compatibles con Debian, además de muchas otras aplicaciones y herramientas que Debian aún no puede proporcionar. Todos ellos son accesibles directamente desde el administrador de paquetes APT.

Adicionalmente, Parrot incluye soporte para [Snap](https://snapcraft.io/), un sistema de distribución de paquetes que proporciona fácil acceso a muchos otros programas que las distribuciones GNU/Linux no siempre envían en sus archivos de software.

[Flatpak](https://flatpak.org/) es una tienda de software universal similar a Snap. Se puede instalar desde el repositorio oficial de Parrot.

Además Parrot da soporte para [Wine](https://www.winehq.org/), una capa de compatibilidad para ejecutar aplicaciones de Windows en entornos GNU/Linux.
 
## ¿Debería usar Parrot? ##

### Por qué Parrot es diferente ###

Incluso si quisiéramos que todos usen Parrot o, al menos, que lo prueben, hay algunas consideraciones importantes que debemos tener en cuenta sobre quiénes esperamos que usen Parrot y quiénes pueden tener una mala experiencia con él.

En primer lugar, incluso si Parrot proporciona versiones de uso general, su núcleo sigue sintonizado para las operaciones de seguridad y forenses. En esta sección explicaremos en qué se diferencia Parrot de otras distribuciones de propósito general y qué tan diferente es de otras distribuciones de Pentest y Forensics. Luego presentaremos algunas categorías de personas y qué tipo de experiencia pueden tener al usar este sistema..

### Distribuciones de propósito general ###

Parrot es diferente a una distribución de propósito general (es decir, Ubuntu) porque no intenta de ninguna manera ocultar sus componentes internos.

Lo que significa que muchas herramientas de automatización están incluidas en el sistema para facilitar su uso, pero exponen bastante bien lo que el sistema tiene bajo el capó.

Un buen ejemplo es el recordatorio de actualización de Parrot: es un programa simple pero poderoso que solicita al usuario que verifique las actualizaciones del sistema una vez a la semana. pero en lugar de ocultar el proceso de actualización detrás de una barra de progreso, muestra al usuario el proceso de actualización completo desde la salida de apt.

Otra diferencia importante es que Parrot desactiva por defecto todos los servicios de red preinstalados en el sistema, no solo para mantener una huella RAM muy baja y ofrecer un mejor rendimiento, sino también para evitar la exposición de los servicios en una red objetivo. Cada servicio de red debe iniciarse manualmente cuando el usuario lo necesite.

### Distribuciones de Pentest ###

Las distribuciones de Pentest son famosas por integrar solo herramientas de seguridad, lo que permite un fácil acceso a la raíz y elimina todas las barreras del sistema de seguridad que pueden influir en el flujo de trabajo de un pentester.

Parrot fue diseñado para ser un entorno muy cómodo para expertos e investigadores en seguridad. Incluye muchos programas básicos para uso diario que las distribuciones de pentesting generalmente excluyen (a un costo de menos de un gigabyte adicional de almacenamiento). Esta elección se tomó para hacer de Parrot no solo un buen sistema para realizar pruebas de seguridad, sino también un buen entorno donde puedes escribir informes, crear tus propias herramientas y comunicarte sin problemas con tus compañeros de equipo, sin la necesidad de computadoras, sistemas operativos o configuración adicionales.

Nuestro objetivo es permitir que cualquier pentester profesional realice una prueba de seguridad completa desde el principio, hasta el informe con solo una ISO de Parrot y una computadora portátil promedio.

### Distribuciones seguras ###

Parrot Security viene con configuraciones y perfiles de refuerzo personalizados para AppArmor y otras tecnologías de refuerzo de Linux, y se inspira en el éxito de otros proyectos que brindan el más alto nivel de seguridad en el escenario GNU/Linux, como Tails y Whonix para aislar el sistema y entregar una capa de seguridad por encima de la media.

Las aplicaciones de usuario en Parrot están protegidas y "enjauladas" para limitar los daños en caso de que el sistema se vea comprometido.

Toda esta seguridad adicional tiene un costo: es más difícil adoptar malos comportamientos en Parrot. Por ejemplo, no es posible iniciar sesión como root con todo el entorno de escritorio o iniciar aplicaciones críticas como navegadores, reproductores multimedia o lectores de documentos avanzados con permisos privilegiados innecesarios.

El usuario aún puede abrir consolas raíz, lanzar herramientas de seguridad con permisos privilegiados y usar el sistema sin límites. Lo único que cambia es que todas las aplicaciones críticas del usuario ahora están protegidas de muy malos comportamientos y técnicas de exploits comunes, o incluso de zero days, y los daños causados ​​por exploits avanzados son muy limitados.

### Distribuciones forenses ###

Los expertos en análisis forense digital necesitan un entorno que no comprometa sus pruebas.

Parrot viene con funciones de montaje automático deshabilitadas por defecto, para permitir que los trabajos forenses se realicen de forma segura. La política global de montaje automático se configura de forma redundante en todas las capas de la pila del sistema, desde la opción de kernel sin montaje automático que se pasa por defecto en el arranque, hasta la configuración específica del administrador de archivos para deshabilitar las funciones de montaje automático y plug & play.

No olvide que el sistema aún reconoce los discos, y el sistema los montará sin protecciones si el usuario los abre accidentalmente.

El comportamiento sin montaje automático es consistente y estable, pero no se proporciona protección en caso de montajes accidentales. Siempre se recomienda un bloqueador de escritura en cualquier escenario de análisis forense digital.

En resumen, Parrot está hecho para:

- Expertos en seguridad
- Expertos en forense digital
- Estudiantes de Ciencias de la Computación / Ingeniería
- Investigadores
- Aspirantes a hackers
- Desarrolladores de software
- Periodistas, hacktivistas y denunciantes
- Agentes de policía y agencias de seguridad
