Ejercicio: Cronómetro con Pausa y Reinicio
Enunciado:

Crea un componente de React que actúe como un cronómetro. El cronómetro debe:

Mostrar en pantalla el tiempo transcurrido (en segundos).
Iniciar automáticamente al montar el componente.
Permitir pausar el cronómetro con un botón.
Permitir reiniciar el cronómetro con otro botón, estableciendo el tiempo en 0.
Usar useEffect para gestionar el temporizador.
Pistas:

Utiliza setInterval y clearInterval en combinación con useEffect para actualizar el tiempo cada segundo.
Controla el estado del cronómetro con un booleano (isRunning).
Asegúrate de limpiar el intervalo correctamente al desmontar el componente o cambiar el estado del cronómetro.