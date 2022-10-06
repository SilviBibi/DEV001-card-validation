# Validación número de tarjeta de crédito.

## 1. Descripción

Página web para validar si el numero de una tarjeta de crédito es valido o no, se utilizo el algoritmo de Luhn para la validacion de los numeros de tarjeta.
Es una página de compra electronica de celulares, televisores y computadores con el nombre “Electroniclife” donde los usuarios pueden realizar la compra virtual de sus productos electronicos en la página web sin necesidad de salir de su casa, para eso deberá realizar el pago donde puede escoger “efectivo” o “tarjeta de crédito”, sin embargo el método en efectivo exige ir a la tienda principal, la tarjeta de credito lo hace mucho más fácil y desde la comodidad de su casa.

## 2. Interfaz de usuario (UI)

La interfaz permite al usuario:

* Insertar el número de tarjeta a validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 dígitos.
* No podrá ingresar un campo vacío.

## 3 Archivos 

##### (HTML y CSS)
En el archivo de HTML y CSS se encuentra maquetado con algunos cambios el prototipo final, se utiliza colores suaves a la pagina.

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Se encuentran 3 etiquetas principales.
de cero:

* `<header>`: encabezado de tu proyecto.
* `<div>`: contenido principal de tu proyecto.
* `<form>`: formulario para agregar la información de la tarjeta de crédito.

##### `src/style.css`

Este archivo contiene las reglas de estilo sin ninguna libreria.

#### Funcionalmente (JavaScript )

* La lógica del proyecto esta implementada completamente en Vanilla JavaScript.
* Se encuentran  2 archivos JavaScript separando responsabilidades:

##### `src/validator.js`

En este archivo esta las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función es pura e independiente del DOM.

Para esto se implemento el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función retorna un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función retorna un `string` donde todos menos
los últimos cuatro caracteres son reemplazados por un numeral (`#`).
Esta función siempre mantiene los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

##### `src/index.js`

En este archivo se encuentra todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).

***
