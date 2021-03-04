(function(){

  /* ----------------------------*/
  /* Variables y Objetos Generales */
  /* ----------------------------*/

  var app = document.getElementById('app');
  var inputCaracteres = document.getElementById('numero-caracteres');

  var configuracion = { 
    caracteres: parseInt(inputCaracteres.value),
    simbolos:true,
    numeros:true,
    mayusculas:true,
    minusculas:true
  }

  var caracteres = {
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos:"! @ # $ % & / ) = ( ) , . - _ : ; + - * { } [ ] ^",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
    
  }


  /* ----------------------------*/
  /* Eventos */
  /* ----------------------------*/

  //Evento para evitar que la app haga un submit
  app.addEventListener('submit',function(e){
    e.preventDefault();
  });

  //Eventos del boton menos uno de los caracteres
  app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
    if(configuracion.caracteres < 20){
      configuracion.caracteres++;
      inputCaracteres.value = configuracion.caracteres;
    }
  });

  //Eventos del boton menos uno de los caracteres
  app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
    if(configuracion.caracteres > 4){
      configuracion.caracteres--;
      inputCaracteres.value = configuracion.caracteres;
    }
  });

  //Eventos del Boton de simbolos
  app.elements.namedItem('btn-simbolos').addEventListener('click',function(){
    btnToggle(this);
    configuracion.simbolos  = !configuracion.simbolos;
  });

  //Eventos del boton numeros
  app.elements.namedItem('btn-numeros').addEventListener('click',function(){
    btnToggle(this);
    configuracion.numeros  = !configuracion.numeros;
  });

  //Eventos del boton de mayuscula y minusculas
  app.elements.namedItem('btn-mayuscula').addEventListener('click',function(){
    btnToggle(this);
    configuracion.mayusculas  = !configuracion.mayusculas;
  });



  //Eventos del boton generar
  app.elements.namedItem('btn-generar').addEventListener('click',function(){
    generarPassword();
  });

  app.elements.namedItem('input-password').addEventListener(`click`, function(){
    copiarPassword();
  });


  /* ----------------------------*/
  /* Funciones */
  /* ----------------------------*/

  //Funcion para cambiar el color y los iconos del boton
  function btnToggle(btn){
    btn.classList.toggle('false');
    btn.children[0].classList.toggle('fa-check');
    btn.children[0].classList.toggle('fa-times');
  }



  function generarPassword(){
    var caracteresFinales ="";
    var password ="";

    for(prop in configuracion){
      if(configuracion[prop] == true){
        caracteresFinales+= caracteres[prop] + '';
      }
    }
    
    caracteresFinales= caracteresFinales.trim();
    caracteresFinales= caracteresFinales.split(' ');

    for(var i = 0; i < configuracion.caracteres; i++){
      password = password +caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }

    app.elements.namedItem('input-password').value = password;
  }

  //Funcion para copiar la contraseña y poder agregarla a tu aplicacion
  function copiarPassword(){
    app.elements.namedItem('input-password').select();
    document.execCommand('copy');
    document.getElementById('alerta-copiado').classList.add('active');

    setTimeout(function(){
      document.getElementById('alerta-copiado').classList.remove('active');
    },2000);

  }
  generarPassword();
}())