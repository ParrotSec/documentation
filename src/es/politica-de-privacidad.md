# Politica de Privacidad #


NOTA: Esta política está incompleta (aún no cubre toda la infraestructura del Proyecto Parrot), esperamos terminarla en breve.

### Parrot OS

El sistema operativo Parrot no incluye rastreadores o telemetría del equipo de Parrot o sus socios, y no rastreamos a nuestros usuarios en el sistema.


Parrot OS es un paquete de muchos programas y subsistemas complejos, y cada uno de los programas instalados en el sistema puede implementar sus propias "características" de telemetría.
El equipo de seguridad de Parrot hace todo lo posible para proporcionar un sistema completamente limpio de rastreadores, y no se recopilan datos de nuestros usuarios, pero los programas adicionales instalados en el sistema por el usuario final pueden cambiar esta declaración. Depende del usuario final asegurarse de que los programas recién instalados no envíen su propia telemetría si se requiere privacidad.

### Red de entrega de contenido de Parrot

¿Qué hacen realmente estos servidores? ¿Qué tipo de información privada se almacena? ¿Cómo se almacena? ¿Y qué sucede si se clona y analiza un nodo perimetral?

Los nodos perimetrales no alojan información privada de los usuarios, solo nuestros servidores maestros alojan información de usuario.

Los servidores perimetrales son de nuestra propiedad, podemos eliminar servidores, migrarlos, implementar otros nuevos, cambiar de proveedor, etc. Podemos obligar a los usuarios de un país a mantenerse alejados de un nodo en particular y transitar la red de Parrot desde un nodo en otro país si creemos que dichos países o proveedores pueden inspeccionar el tráfico de usuarios.

Registramos las actividades de los usuarios desde los registros del servidor web y utilizamos analizadores de registros para investigar actividades poco comunes (maliciosas) y detectar posibles intrusiones o ataques cibernéticos.

A veces recopilamos datos estadísticos de uso sobre el uso de nuestra infraestructura (descargas, visitas al sitio web, visitantes únicos, distribución geográfica, etc.). Dichos datos son agregados y no contienen información personal del usuario, y las direcciones IP y otros componentes útiles para identificar a usuarios específicos se eliminan antes de la agregación de datos, o a veces no se recopilan en absoluto.

NO registramos las actividades de los usuarios en algunos servicios, como los solucionadores de DNS, para respetar la privacidad del usuario, y no recopilamos información del usuario si no tenemos una razón técnica para registrarla.

Nuestro administrador de sistemas es la única persona autorizada para acceder a los servidores y manejar los registros, y ningún tercero tiene acceso a dichos datos.

La única información privada directamente visible desde goaccess es la dirección IP de los usuarios, pero los servidores ya cuentan con protecciones automáticas para prohibir el mal comportamiento de las direcciones IP, almacenamos las direcciones IP temporalmente en caso de ciberataques contra nuestra infraestructura web.

Los datos personales del usuario no se almacenan en nuestros nodos perimetrales de CDN, por lo que podemos mantener los datos del usuario lo más seguros posible en la infraestructura central donde las autoridades o terceros no pueden tomarlos sin nuestra aprobación.

Eliminamos periódicamente los registros de los servidores cuando estamos seguros de que no se recibieron ataques en ese período de tiempo, y los trituramos por seguridad antes de reiniciar el servicio.

Cuando descartamos un servidor dedicado o un VPS, trituramos manualmente el disco duro con datos aleatorios de una unidad de recuperación para hacer que los datos sean irrecuperables antes de la eliminación del servicio.

Nunca hemos recibido una orden judicial desde que comenzamos este proyecto. Tenga en cuenta nuestro.[warrant canary](<./warrant-canary.md>).


### Los Servidores Parrot DNS OpenNIC del proyecto


Proporcionamos solucionadores de DNS gratuitos para la red OpenNIC. Estos servidores tienen registros deshabilitados de forma predeterminada.

Hay un pequeño búfer de registro que aloja los últimos éxitos de servicio con fines técnicos, lo que permite al sistema identificar y prohibir automáticamente las direcciones IP que abusan del servicio.
El registro temporal es solo un búfer que mantiene un montón de elementos recientes y las entradas antiguas desaparecen. 
Automáticamente a medida que entran nuevas solicitudes. Es el comportamiento estándar del solucionador de DNS que utilizamos (PowerDNS).

Dado que los registros de DNS están deshabilitados y el sistema de prevención de abuso es completamente automático, no tenemos sistemas para analizar manualmente dichos registros y no realizamos análisis directos o indirectos del uso de los servicios de DNS. 

Última actualización: 25 abr 2019
