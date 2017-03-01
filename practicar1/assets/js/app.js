<script>
    var datos=function(){
      nombre=prompt("Nombre: ");
      apellido=prompt("Apellido: ");
      dni=prompt("DNI: ");
      direccion=prompt("Dirección: ");
    return "Nombre: " + nombre + "<br>" +
           "Apellido: " + apellido + "<br>" +
           "DNI: " + dni + "<br>" +
           "Dirección: " + direccion;
    }
    document.write(datos());
    var fin=datos.push(nombre,apellido,dni,direccion);
    document.write(fin);
</script>
