import promptSync from "prompt-sync";
import { CategoriaProducto, Producto } from "../models/Producto";

const prompt = promptSync();
const TASA_IVA: number = 0.12;
let cantidadProductos: number;
let listaDeProductos: Producto[] = [];

//Función para leer un número desde la consola.
const readNumber = (message: string): number => {
    return Number(prompt(message));
};


export class Productos {
    /**Funcion para solicitarle al usuario cada producto de la compra que realizo anteriormente con los datos de cada producto
     * @returns void No retorna ningún valor ya que se encarga de llenar listaDeProductos
    */
    registrarProductos(): void {

        while (true) {
            cantidadProductos = readNumber("Cuantos Productos Compraste: ");
            if (!isNaN(cantidadProductos) && cantidadProductos > 0) {
                break;
            }
            console.log("Debes ingresar una cantidad de productos comprados válida (Debe ser mayor a 0)")
        }

        for (let i = 0; i < cantidadProductos; i++) {

            console.log(`\n--- Producto ${i + 1} ---`);

            let nombreProducto: string;
            while (true) {
                nombreProducto = prompt("Ingresa el nombre del producto: ");

                if (nombreProducto.trim() !== "" && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreProducto) && nombreProducto.length >= 2 && nombreProducto.length <= 20) {
                    break;
                }
                console.log("\nEl nombre no puede estar vacio, debe tener solo letras y debe tener entre 2 y 20 caracteres")
            }

            let codigoProducto: string;
            while (true) {
                codigoProducto = prompt("Ingresa el codigo del Producto: ");

                if (codigoProducto.trim() !== "" && /^[a-zA-Z0-9]+$/.test(codigoProducto) && codigoProducto.length >= 3 && codigoProducto.length <= 10) {
                    break;
                }
                console.log("\nEl codigo no puede estar vacio, solo puede contener numero y letras combinados y debe tener entre 3 y 10 caracteres")
            }

            let categoriaProducto: CategoriaProducto;
            while (true) {
                categoriaProducto = prompt("Ingresa la categoria del producto (Tecnologia, Hogar, Servicios, Alimentos, Entretenimiento): ") as CategoriaProducto;

                if (categoriaProducto === CategoriaProducto.ALIMENTOS || categoriaProducto === CategoriaProducto.ENTRETENIMIENTO || categoriaProducto === CategoriaProducto.HOGAR || categoriaProducto === CategoriaProducto.SERVICIOS || categoriaProducto === CategoriaProducto.TECNOLOGIA) {
                    break;
                }
                console.log("\nCategoria del Producto Invalido")
            }

            let precioProducto: number;
            while (true) {
                precioProducto = readNumber("Ingresa el precio del Producto: ");

                if (!isNaN(precioProducto) && precioProducto > 0) {
                    break;
                }
                console.log("\nPrecio Invalido")
            }

            const productoNuevo: Producto = {
                nombre: nombreProducto,
                codigo: codigoProducto,
                categoria: categoriaProducto,
                precio: precioProducto,
            }

            listaDeProductos.push(productoNuevo);
        }
        console.log("\nProductos Comprados:");
        console.table(listaDeProductos);
    }

    /**Función para calcular el subtotal de la compra realizada sumando todos los precios de los productos registrados anteriormente
     * @returns number retorna la suma total de los precios de los productos
    */
    calcularSubtotal(): number {
        const subtotal = listaDeProductos.reduce((sumaDePrecios, producto) =>
            sumaDePrecios + producto.precio, 0);
        return subtotal;
    }

    /**Función para calcular el monto del IVA aplicando la tasa del 12% sobre el subtotal recibido
     * @param subtotal El subtotal previamente calculado con calcularSubtotal()
     * @returns number El valor del IVA a pagar
    */
    calcularIVA(subtotal: number): number {
        const IVA = subtotal * TASA_IVA;
        return IVA;
    }

    /**Función para calcular el total final de la compra sumando el subtotal y el IVA
     * @param subtotal  El subtotal de la compra
     * @param IVA El IVA calculado sobre ese subtotal
     * @returns number El monto total a pagar
    */
    calcularTotal(subtotal: number, IVA: number): number {
        const totalCompra = subtotal + IVA;
        return totalCompra;
    }

    /**Función para mostrar el resultado final de todos los productos comprados junto con el subtotal de compra , el IVA y el total de la compra
     * @returns void No retorna ningún valor, su efecto es imprimir el resumen en consola.
    */
    resultadoCompra(): void {
        const subtotal = this.calcularSubtotal();
        const iva = this.calcularIVA(subtotal);
        const total = this.calcularTotal(subtotal, iva);

        console.log("=======COMPRA REALIZADA======")
        for (let i = 0; i < listaDeProductos.length; i++) {
            console.log(`Producto: ${listaDeProductos[i].nombre} con precio de: ${listaDeProductos[i].precio}`);
        }

        console.log("==============================");
        console.log(`Subtotal De Compra: Q${subtotal.toFixed(2)}`);
        console.log(`IVA: Q${iva.toFixed(2)}`);
        console.log(`Total de Compra: Q${total.toFixed(2)}`);
    }

}