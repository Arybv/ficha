
var nombres= document.getElementById('nombres').value;
var apellidos= document.getElementById('apellidos').value;
var dni= document.getElementById('dni').value;
var direccion= document.getElementById('direccion').value;

  if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
    document.getElementById('imprime').innerHTML = "Nombre: "  + nombres +
                                                   "<br><br> Apellido: " + apellidos +
                                                   "<br><br> DNI: "  + dni +
                                                   "<br><br> Direccion: " + direccion;
   };
  };
