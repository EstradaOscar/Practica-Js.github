    const productos = [
        { nombre: "Coca-Cola Lata", precio: 5.25 },
        { nombre: "Pepsi Lata", precio: 5.00 },
        { nombre: "Fanta Lata", precio: 4.75 },
        { nombre: "Sprite Lata", precio: 4.50 },
        { nombre: "Agua Mineral", precio: 1.50 },
        { nombre: "Cerveza", precio: 10.00 },
        { nombre: "Jugo de Naranja", precio: 3.00 },
        { nombre: "Galletas", precio: 2.50 },
        { nombre: "Chips", precio: 1.75 },
        { nombre: "Chocolate", precio: 2.00 }
    ];

    // Función para mostrar los productos en la tabla
    function mostrarProductos() {
        const tableBody = document.getElementById('productos-table-body');
        tableBody.innerHTML = ''; // Limpiar la tabla

        productos.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border border-gray-300 p-2">${producto.nombre}</td>
                <td class="border border-gray-300 p-2">${producto.precio.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Llamar a la función para mostrar los productos al cargar la página
    document.addEventListener('DOMContentLoaded', mostrarProductos);
