crearProducto = function() {
    // 1. Crear producto1
    let producto1 = {
        nombre: "Laptop HP",
        precio: 850.50,
        stock: 15
    };

    // 2. Crear producto2
    let producto2 = {
        nombre: "Tablet Samsung",
        precio: 450.75,
        stock: 20
    };

    // 3. Imprimir nombre del producto1
    console.log("Nombre del producto 1:", producto1.nombre);

    // 4. Imprimir precio del producto2
    console.log("Precio del producto 2:", producto2.precio);

    // 5. Comparar el stock
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}