$(document).ready(function () {
  /* ----------------------------*/
  /* Variables */
  /* ----------------------------*/
  let app = $('#app');
  
  let iCaracteres = $('#tNumCaracter');
  
  let config = {
    caracter: parseInt(iCaracteres.val()),
    simbolos:true,
    numeros:true,
    mayusculas:true,
    minusculas:true
  }

  let caracter = {
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos:"# $ % & ( ) * + , - . / [ ] ^ _ { | ~ } : ; < = > ? @ ¡"
  }
  //console.log(confi);


  /* ----------------------------*/
  /* Eventos */
  /* ----------------------------*/

  $(app).submit(function(e){ 
    e.preventDefault();
  });

  $('#btn_mas').click(function(){
    if(config.caracter <25){
      config.caracter++;
      iCaracteres.val(config.caracter);
    }
  });

  $('#btn_menos').click(function(){
    if(config.caracter >4){
      config.caracter--;
      iCaracteres.val(config.caracter);
    }
  });

  $('#btn_simbolos').click(function(){ 
    btnToggle(this);
    config.simbolos = !config.simbolos;
  });

  $('#btn_num').click(function(){ 
    btnToggle(this);
    config.numeros = !config.numeros;
  });

  $('#btn_mayus').click(function(){ 
    btnToggle(this);
    config.mayusculas = !config.mayusculas;
  });

  $("#btn_generar").click(function () {
    generarPassword();
    
  });

  $("#btn_copy").click(function () {
    if ($("#tPass").val().length > 0) {
      if(copyPass() == true){
        alertify.warning('Contraseña Copiada!');
      }
    }else{
      alertify.error('No se ha generado nada');
    }
    
  })

  /* ----------------------------*/
  /* Funciones  */
  /* ----------------------------*/
  function btnToggle(btn){
    btn.classList.toggle('btn-dark');
    btn.classList.toggle('btn-warning');
    btn.children[0].classList.toggle('fa-check');
    btn.children[0].classList.toggle('fa-times');
  }

  function generarPassword(){
    let carFinal = "";
    let password= "";

    for(prop in config){
      if(config[prop] == true){
        carFinal+= caracter[prop]+ '';
      }
    }

    carFinal=carFinal.trim();
    carFinal=carFinal.split(' ');

    for(let i= 0; i < config.caracter; i++){
      password= password + carFinal[Math.floor(Math.random() * carFinal.length)];
    }
    $("#tPass").val(password);
  }

  function copyPass(){
    $("#tPass").select();
    return document.execCommand('copy');
  }

  


});