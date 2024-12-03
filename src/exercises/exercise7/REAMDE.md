Enunciado:
Crea un componente llamado DataFetcher que realice lo siguiente:

1. Cuando el componente se monte, debe realizar una petición a la API de JSONPlaceholder para obtener una lista de publicaciones (endpoint: https://jsonplaceholder.typicode.com/posts).
2. Muestra la lista de publicaciones en una página, mostrando solo los títulos en una lista (<ul>).
3. Agrega un botón que permita recargar los datos, repitiendo la petición a la API.
4. Mientras los datos están cargando, muestra un mensaje de "Cargando...".
Pistas:
Usa useEffect para ejecutar la petición cuando el componente se monte y también cuando hagas clic en el botón de recarga.
Puedes usar fetch para hacer la petición.
Crea un estado para almacenar las publicaciones, otro para controlar si está cargando y otro para detectar errores.