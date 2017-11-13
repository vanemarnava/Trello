
function list()
{

  var cont = document.getElementById("secAddList");
  var btn = document.getElementById("listButton");
  //el boton se quitara al momento de hacer click
  cont.removeChild(btn); 

  //se crea un div
  var newCont = document.createElement("div");
  //se crea un imput
  var input = document.createElement("input");
  //se le agregan atributo type con valor de texto al input
  input.setAttribute("type", "text");
  //se le agrega un placeholder, se vera escrito = Anade una lista
  input.setAttribute("placeholder", "Anade una lista");
  //se anade una clase inputList
  input.classList.add("class", "inputList");
  input.value;

  //boton para guardar
  //crear boton
  var buton = document.createElement("button");
  //crear nodo de texto Guardar
  var textButton= document.createTextNode("Guardar");
  //agregar atributo tipo boton
  buton.setAttribute("type", "button");
  //agregar clase al boton
  buton.classList.add("class", "botonCreado");

  //agregar los hijos
  card.appendChild(input); 
  card.appendChild(buton); 
  buton.appendChild(textButton);

  //crear evento
  buton.addEventListener("click", function()
  {
      var titleInput = document.getElementsByClassName("inputList")[0].value;
      //limpiar
      document.getElementsByClassName("inputList")[0].value = "";
      //crear un div cuando se le de un click
      var cont2 = document.createElement("div");
      cont2.classList.add("class","cont2"); 
      //mostrara lo que se ingreso en el input
      var title = document.createElement("span");
      title.classList.add("class", "titulospan");
          
      title.textContent = titleInput; 
   
      cont2.appendChild(title);
              
      //crear boton anadir
      var buto = document.createElement("button");
      cont2.appendChild(buto);
      buto.classList.add("class","button");
      buto.textContent = "Anadir";
      card.appendChild(cont2);

      //anadir una tarjeta
      //crear etiqueta a
      var anadir = document.createElement("a");
      //agregar atributo 
      anadir.setAttribute("href", "#");
      //agregar clase
      anadir.classList.add("class", "addCard");
      //agregar texto
      var textAddCard = document.createTextNode("Anadir una tarjeta");


      //textarea 
      var textarea = document.createElement("textarea");
      textarea.classList.add("class", "textarea");
      
      //evento
      buto.addEventListener("click",function()
      {
        //tomar valor
        var addTheCa = document.getElementsByClassName("textarea").value;
        //limpiar
        document.getElementsByClassName("textarea").value = "";
                
        //creo un div con la info de textarea
        var cont3 = document.createElement("div");
        //agregar clase
        cont3.classList.add("class", "cont3");
        cont3.appendChild(textarea);
        cont3.appendChild(textAddCard);

        //asignar padres//          
        card.appendChild(cont3);
        cont3.appendChild(addTheCa);
        tarea.appendChild(addTheCa);
      })
  })  
}