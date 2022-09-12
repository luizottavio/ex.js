window.onload = function () {

  var segundos = 00;
  var dezenas = 00;
  var acrescentardezens = document.getElementById('dezenas');
  var acrescentarsegundos = document.getElementById('segundos');
  var buttoniniciar = document.getElementById('button-iniciar');
  var buttonparar = document.getElementById('button-parar');
  var buttonrezetar = document.getElementById('button-rezetar');



  buttoniniciar.onclik = function() {

      clearInterval(intervalo);
      intervalo = setInterval(iniciarTempo, 10);
  
  }
  
  buttonparar.onclik = function() {
      clearInterval(intervalo);
  
  }
  
  buttonrezetar.onclik = function() {
      clearInterval(intervalo);
      primeiros = "00";
      dezenas = "00";
      appenddezenas.innerHTML = dezenas;
      appendsegundos.innerHTML = segundos;
  }
  
  function iniciarTempo () {
      dezenas++;
  
      if (dezenas <= 9){
        appenddezenas.innerHTML = "0" + dezenas;
      }
  
      if (dezenas > 9){
        appenddezenas.innerHTML = dezenas;
  
      }
  
      if (dezenas > 99){
          console.log("segundos");
          segundos++;
          appendsegundos.innerHTML = "0" + segundos;
          dezenas = 0;
          appenddezenas.innerHTML = "0" + "0";
      }
  
      if (segundos > 9){
          appendsegundos.innerHTML = segundos;
      }
  
  }

}



