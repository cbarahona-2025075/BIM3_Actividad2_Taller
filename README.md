# BIM3_Actividad2_Taller
Proyecto de Typescript Básico con funciones para calcular subtotal, IVA y total de una compra realizada con datos ingresados manualmente por el usuario

#Funcionalidad de las funciones
registrarProductos(): void
Pide al usuario cuántos productos compró y luego, uno por uno solicita nombre, código, categoría y precio, validando cada dato antes de aceptarlo. Al final guarda todos los productos en la lista interna llamada listaDeProductos.

Parámetros: ninguno (lee todo desde la consola)
Retorno: ninguno (void), su efecto es llenar listaDeProductos

calcularSubtotal(): number
Suma los precios de todos los productos que ya fueron registrados.

Parámetros: ninguno (usa listaDeProductos)
Retorno: number — la suma total de los precios de los productos ingresados anteriormente

calcularIVA(subtotal: number): number
Calcula el IVA aplicando la tasa del 12% sobre el subtotal recibido.

Parámetros: subtotal — el subtotal ya calculado
Retorno: number — el monto del IVA a pagar de la compra realizada

calcularTotal(subtotal: number, IVA: number): number
Suma el subtotal y el IVA para obtener el total final de la compra.

Parámetros: subtotal y IVA — ambos ya calculados anteriormente
Retorno: number — el monto total a pagar

resultadoCompra(): void
Llama en orden a calcularSubtotal, calcularIVA y calcularTotal y muestra en consola el listado de productos junto con el subtotal, IVA y total de la compra.

Parámetros: ninguno
Retorno: ninguno (void), su efecto es imprimir el resumen en consola
