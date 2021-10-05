# Verificación de clave y hash #

## ¿Por qué debería alguien verificar claves y firmas?? ##

La mayoría de las personas, incluso los programadores, están confundidas acerca de los conceptos básicos que subyacen a las firmas digitales. Por lo tanto, la mayoría de la gente debería leer esta sección, incluso si parece trivial a primera vista.

Las firmas digitales pueden demostrar tanto la autenticidad como la integridad con un grado razonable de certeza. La autenticidad garantiza que un archivo determinado fue realmente creado por la persona que lo firmó (es decir, que no fue falsificado por un tercero). La integridad garantiza que el contenido del archivo no haya sido manipulado (es decir, que un tercero no haya alterado indetectablemente su contenido en el camino).

Las firmas digitales no pueden probar ninguna otra propiedad (por ejemplo, que el archivo firmado no es malicioso). No hay nada que pueda impedir que alguien firme un programa malicioso (y en realidad sucede de vez en cuando).

El punto es que debemos decidir en quién confiaremos (por ejemplo, Linus Torvalds, Microsoft o Parrot Project) y asumir que si un archivo determinado fue firmado por una parte de confianza, entonces no debería ser malicioso o con errores por negligencia. La decisión de confiar en una parte determinada está más allá del alcance de las firmas digitales. Es más una decisión sociológica y política.

Una vez que decidimos confiar en ciertas partes, las firmas digitales son útiles, porque nos permiten limitar nuestra confianza solo a esas pocas partes que elegimos y no preocuparnos por todas las cosas malas que pueden suceder entre nosotros y ellos, p. Ej. compromisos del servidor ([parrotsec.org] (https://parrotsec.org) seguramente se verá comprometido algún día, así que no confíe ciegamente en la versión en vivo de este sitio), personal de TI deshonesto en la empresa de alojamiento, personal deshonesto en el ISP, ataques Wi-Fi, etc.

Al verificar todos los archivos que descargamos que pretenden ser creados por una parte en la que hemos elegido confiar, eliminamos las preocupaciones sobre las cosas malas mencionadas anteriormente, ya que podemos detectar fácilmente si algún archivo ha sido manipulado (y posteriormente optar por abstenerse ejecutarlos, instalarlos o abrirlos).

Sin embargo, para que las firmas digitales tengan algún sentido, debemos asegurarnos de que las claves públicas que utilizamos para la verificación de firmas sean las originales. Cualquiera puede generar un par de claves GPG que pretenda pertenecer al "Parrot OS" pero, por supuesto, solo el par de claves que nosotros (es decir, el Parrot Team) generamos es el * legítimo *. La siguiente sección explica cómo verificar la validez de las claves de firma de ParrotOS en el proceso de verificación de una ISO de Parrot OS. Sin embargo, los mismos principios generales se aplican a todos los casos en los que es posible que desee verificar una firma PGP, como verificar repositorios, no solo ISO.

## Obtener la clave y verificar los repositorios##

Opcional: Complete los pasos a continuación si no está familiarizado con GnuPG o si aún no los ha realizado. Esto solucionará eventuales * GPG: ADVERTENCIA: advertencias de propiedad insegura *.

#### 1. En primer lugar, asegúrese de que GnuPG inicialice en su carpeta de datos de usuario ####

<img src="./images/hash-key_verification/gpg0.png" width="65%"/>

#### 2. Establecer permisos gratuitos de advertencia ####

    chmod --recursive og-rwx ~/.gnupg

#### 3. Obtén la clave ParrotOS ####

    wget -q -O - https://deb.parrotsec.org/parrot/misc/parrotsec.gpg | gpg --import

<img src="./images/hash-key_verification/gpg1.png" width="90%"/>

** Advertencia **: Verificar la marca de tiempo de la firma GPG tiene sentido. Por ejemplo, si anteriormente vio una firma de 2018 y ahora ve una firma de 2017, entonces esto podría ser una reversión dirigida (degradación) o un ataque de congelación indefinido.

## ISO Verificación## 

### md5sum hash verificación ###

Después de obtener el ISO de su elección, vaya a [aquí: https://download.parrot.sh/parrot/iso/4.11.2/signed-hashes.txt](https://download.parrot.sh/parrot/iso /4.11.2/signed-hashes.txt) para ver los hash firmados.

En la primera sección donde dice "MD5" busque el hash que coincida con su ISO descargado.

<img src="./images/hash-key_verification/hash0.png" width="80%"/>

Para el propósito de este tutorial usaremos **Parrot-home-4.11.2_amd64.iso**.
Ahora abra una ventana de terminal y ejecute el siguiente comando:

    md5sum Parrot-home-4.11.2_amd64.iso

<img src="./images/hash-key_verification/hash1.png" width="70%"/>

Compare el ** hash (la cadena alfanumérica a la izquierda) ** que su máquina calculó con el hash correspondiente en la página firmada-hashes.txt vinculada arriba.

<img src="./images/hash-key_verification/hash2.png" width="85%"/>

Una manera fácil de hacer esto es abrir la página "firmado-hashes.txt" en su navegador, luego copiar el hash que su máquina calculó desde la terminal en el cuadro "Buscar" en su navegador (en Firefox puede abrir el "Buscar "cuadro presionando CTRL + F).

<img src="./images/hash-key_verification/hash3.png" width="85%"/>

Cuando ambos hash coinciden exactamente, es casi seguro que el archivo descargado esté intacto. Si los hashes no coinciden, entonces hubo un problema con la descarga o un problema con el servidor. Debe descargar el archivo nuevamente desde el mismo espejo o desde un espejo diferente si sospecha que se trata de un error del servidor. Si recibe continuamente un archivo erróneo de un servidor, sea amable y notifique al equipo de Parrot de ese espejo para que podamos investigar el problema.

### Otros hashes ###

El método para otros hash como SHA256 o SHA512 es exactamente el mismo con las guías anteriores, solo que en lugar de md5, debe usar el hash adecuado que desee. Hagamos un ejemplo:

    sha512sum Parrot-home-4.11.2_amd64.iso

<img src="./images/hash-key_verification/hash4.png" width="85%"/>
