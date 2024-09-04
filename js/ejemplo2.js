
var contactos = [  
    { nombre: "Juan", telefono: "12345678" },  
    { nombre: "Carmen", telefono: "87654321" },  
    { nombre: "Juan", telefono: "12345678" },  
    { nombre: "Carmen", telefono: "87654321" },  
    { nombre: "Juan", telefono: "12345678" },  
    { nombre: "Carmen", telefono: "87654321" },  
    { nombre: "Juan", telefono: "12345678" },  
    { nombre: "Carmen", telefono: "87654321" },  
    { nombre: "Juan", telefono: "12345678" },  
    { nombre: "Carmen", telefono: "87654321" }  
];

    for (var i = 0; i < contactos.length; i++) {
        var html = "<tr>";
        html += "  <td>" + contactos[i].nombre + "</td>";
        html += "  <td>" + contactos[i].telefono + "</td>";
        html += "</tr>";

        document.getElementById("tbodyContactos").innerHTML += html;
    }
