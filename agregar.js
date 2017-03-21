
function agregarFruta(){
    var nuevaFruta = document.getElementById("fruta").value;
    if(nuevaFruta.length>0)
    {
      var fruta = document.createElement('li');
      fruta.id = nuevaFruta;
      fruta.innerHTML = nuevaFruta;
      document.getElementById("lista").appendChild(fruta);
    }
    return false;
}
