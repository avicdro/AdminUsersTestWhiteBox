 Pseudo-sistema  administración de usuarios
-----------------------
###   Visión general  - Prueba técnica 
Pantalla 1: Login.
- Debes presentar un login social que permita al usuario logearse a través de
Facebook, Twitter o Google.
- El login debe funcionar.

Pantalla 2: Listado paginado.
- Para acceder a esta pantalla, el usuario debe haberse logeado en la pantalla 1.
- La pantalla debe mostrar algo de información obtenida de la API a través de la
que se haya logeado. (Nombre, email, foto…)
- Debe haber un listado, paginado de 5 en 5 registros que consuma de la API:
https://reqres.in (Reqres - A hosted REST-API ready to respond to your AJAX
requests):
o Listado de usuarios: GET /api/users (query params &quot;page&quot;, para la
paginación)

- Tu interfaz debe además incluir las siguientes funcionalidades:
	-  Obtener datos de un usuario: GET /api/users/{id}
	- Crear un usuario: POST /api/users (campos del body: name, job)
	- Editar usuario: PATCH /api/users/{id}
	-  Borrar usuario. DELETE /api/users/{id}

---------------

####  Entrega - Modo de empleo
 
 1. Descargar o clonar: ``git clone https://github.com/avicdro/AdminUsersTestWhiteBox.git``
2. Ingresar a la carpeta.
3. Instalar dependencias: ``npm install``
4. Ejecutar servidor de prueba: ``npm start``