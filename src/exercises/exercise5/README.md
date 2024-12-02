Ejercicio 5: Contador con efecto colateral
Enunciado
Crea un componente que muestre un contador que aumenta al hacer clic en un botón. Además, el componente debe mostrar en el título del navegador (document.title) el número actual del contador.

Cada vez que el contador cambie, el título del navegador debe actualizarse automáticamente.

Pistas:
Usa el hook useEffect para ejecutar código cuando el estado del contador cambie.
Recuerda que useEffect se ejecuta después de que el componente se renderiza.
document.title es la propiedad que controla el título de la pestaña del navegador.