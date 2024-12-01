Ejercicio 3: Formulario de Registro
Enunciado:
Crea un formulario de registro con los siguientes campos:

Nombre (debe ser un campo de texto)
Correo electrónico (debe ser un campo de texto, con validación básica de formato de email)
Contraseña (debe ser un campo de contraseña)
Además, el formulario debe tener:

Un botón para enviar.
Un mensaje de error si los campos no se completan correctamente.
Un mensaje de éxito que se muestra cuando el formulario se envía correctamente (sin errores).
Pistas:
Usa el useState para almacenar los valores de los campos del formulario.
El onSubmit del formulario puede ser manejado con una función que valide los valores antes de permitir el envío.
Puedes usar una expresión regular básica para validar el correo electrónico.
En lugar de usar un solo estado para todos los campos, puedes tener un estado separado para cada campo, o bien un objeto que contenga todos los valores del formulario.
Para las validaciones, puedes mostrar un mensaje de error debajo de cada campo que no pase la validación.