# Gestión de software en Parrot #

En este capítulo, presentaremos el administrador de paquetes APT para Parrot. Un programa es una serie de instrucciones escritas en lenguajes de programación como C, Go, Nim o Rust (por nombrar algunos). Estas instrucciones se almacenan en archivos de texto llamados fuentes. Para que funcionen en nuestros sistemas, deben convertirse a lenguaje de máquina. Este paso se llama compilación. La compilación genera uno o varios archivos, entendibles por el sistema, llamados binarios.

El usuario no necesita compilar las fuentes de cada programa ya que los desarrolladores son responsables de compilar y generar los respectivos binarios. Un programa puede contener no solo el ejecutable, sino también una serie de archivos. Los desarrolladores combinan dicho software en un archivo llamado paquete. Dos de los más conocidos son los paquetes RPM y los paquetes DEB. RPM fue desarrollado por Red Hat y DEB por Debian. Parrot usa el formato DEB.

Para compilar programas, a menudo se necesitan bibliotecas de terceros y otros programas. Si intentáramos compilar un programa que tuviera dependencias con otras bibliotecas y otros programas, instalaríamos estas "dependencias" antes de su compilación. Asimismo, si queremos instalar un binario necesitaremos tener instaladas las dependencias necesarias para su correcto funcionamiento.

Para gestionar estas dependencias y la instalación del "paquete", se han creado administradores de paquetes. Existen numerosos administradores de paquetes, algunos gráficos y otros a través de la línea de comandos. En este capítulo, veremos uno de los más famosos, creado por los desarrolladores de Debian, y el utilizado por Parrot.: **APT**.

Las principales funciones de un administrador de paquetes deben ser:

- Búsqueda de software
- Instalación de software
- Actualización de software
- Actualizacion del sistema
- Gestión de dependencias
- Eliminación de software

El administrador de paquetes debe verificar la disponibilidad de dicho software en una ubicación determinada (puede ser un directorio local o una dirección de red). Las ubicaciones se denominan repositorios. El sistema mantiene archivos de configuración para verificar las ubicaciones de los repositorios.

## Lista de Repositorios ##

Aunque en Parrot no es necesario (ni recomendable) añadir nuevos repositorios o modificar los existentes, veremos dónde podemos configurarlos. En el sistema de archivos, bajo la ruta "/etc/sources.list.d", encontramos el archivo parrot.list. El contenido de este archivo debe ser:

	## stable repository
	deb http://deb.parrotsec.org/parrot stable main contrib non-free
	#deb-src http://archive.parrotsec.org/parrot stable contrib non-free

Con esto, nos aseguramos de tener la lista de repositorios correcta. En esta ubicación, los desarrolladores de Parrot mantienen los paquetes actualizados.

## Gestor de paquetes (APT) ##

El administrador de paquetes de Parrot es apto. Entre otras cosas, este administrador es responsable de instalar paquetes, verificar dependencias y actualizar el sistema. Veamos qué podemos hacer con él. Veremos las opciones más comunes a continuación. Para obtener instrucciones más detalladas, consulte las páginas de manual de cada uno de los siguientes comandos: apt, apt-get, apt-cache, dpkg.

Buscar un paquete o una cadena de texto:

    apt search <text_string>

\
Mostrar información de paquete:

    apt show <package>

\
Mostrar dependencias de paquete:

    apt depends <package>

\
Mostrar los nombres de todos los paquetes instalados en el sistema.:

    apt list --installed
	
\
Instalar un paquete:

    apt install <package>

\
Desinstalar un paquete:

    apt remove <package>

\
Eliminar un paquete, incluidos sus archivos de configuración:

    apt purge <package>

\
Eliminar automáticamente los paquetes que no se estén utilizando (ten cuidado con este comando, debido a la dependencia infernal de apt, puede eliminar los paquetes no deseados): 

    apt autoremove

\
Actualizar la información de los repositorios:

    apt update

\
Actualizar un paquete a la última versión disponible en el repositorio:

    apt upgrade <package>
	
\
Actualizar el sistema. Actualizará todos los paquetes que tengan una versión superior:

    apt update

\
Actualizar la distribución completa. Actualizará nuestro sistema a la próxima versión disponible:

    parrot-upgrade

\
Limpiar cachés, paquetes descargados, etc.:

    apt clean && apt autoclean

\
Estos son solo algunos ejemplos. Si se requiere más información, debes consultar la página del manual (man 8 apt).
