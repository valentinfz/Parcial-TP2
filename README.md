Proyecto: Servidor de Transacciones Bancarias

Descripción

Este proyecto examen parcial de TP2 es un servidor simple de transacciones bancarias desarrollado con Node.js y Express.js, siguiendo el patrón de diseño MVC (Model-View-Controller). El servidor permite realizar operaciones sobre transacciones bancarias, como agregar transacciones, obtener el total de transacciones, eliminar una transacción, y calcular el total de dinero movido.

Requisitos Indispensables

1. Agregar una transacción: Se puede insertar una nueva transacción con los datos tipo, monto y destinatario. El servidor genera un identificador único para cada transacción.
 Ruta: POST /transactions

2. Obtener todas las transacciones: Devuelve un listado de todas las transacciones agregadas hasta el momento.
 Ruta: GET /transactions

3. Obtener cantidad de transacciones: Devuelve el número total de transacciones realizadas, junto con un mensaje explicativo.
 Ruta: GET /transactions/count

4. Eliminar transacción (Opcional): Permite eliminar una transacción específica por su ID único.
 Ruta: DELETE /transactions/:id

Mejoras y Funcionalidades Extras

1. Persistencia en archivo JSON: El proyecto guarda todas las transacciones en un archivo transactions.json.

2. Validación de datos:
  Validación de que el tipo de transacción sea "deposito" o "retiro". 
  Validación de que el monto sea un número positivo mayor a 0.
  Validación de que existan fondos suficientes para realizar retiros.

3. Total de dinero movido:
 Ruta: GET /transactions/total
 Devuelve el total de dinero movido en la cuenta. Calcula la diferencia entre depósitos y retiros.

4. Manejo de errores: 
 Se manejan adecuadamente los errores con respuestas HTTP específicas, como 400 (solicitud inválida) y 404 (no encontrado).

Instalación:

Clona este repositorio:
 git clone https://github.com/valentinfz/Parcial-TP2.git

navega a la carpeta del proyecto clonado(En mi caso):
 cd C:\Users\valen\OneDrive\Escritorio\Parcial-TP2

Instala las dependencias:
 Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias
 npm install

Ejecuta el servidor:
 npm run watch
