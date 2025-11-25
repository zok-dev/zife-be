
Comandos importantes para correr el sistema o configurarlo.

PARA VER LA BASE DE DATOS (POSTGRES)

psql -U zife -d zife_db
----
Glosario Carpetas:
src: Fuente del programa
node_modules: Paquetes de node
src/dto: Data Transfer Object
src/../controllers: Encargada de las peticiones y respuestas
src/../services: Encargada de las operaciones del negocio
src/../entities: Encargada de la estructura de la db
src/../modules: Encargada del mapeo de los datos a la db

## En caso de problemas con la base de datos por problemas de zona horaria
 
### Ejecuta este comando pajero:
docker exec -it --user root mi_proyecto_postgres bash -c "ln -sf /usr/share/zoneinfo/America/Argentina/Buenos_Aires /usr/share/zoneinfo/America/Buenos_Aires"

