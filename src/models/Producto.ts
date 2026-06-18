enum CategoriaProducto {
    TECNOLOGIA = "Tecnologia",
    HOGAR = "Hogar",
    SERVICIOS = "Servicios",
    ALIMENTOS = "Alimentos",
    ENTRETENIMIENTO = "Entretenimiento"
}

interface Producto {
    nombre: string;
    codigo: string;
    categoria: CategoriaProducto;
    precio: number;
}

export {CategoriaProducto, Producto};
