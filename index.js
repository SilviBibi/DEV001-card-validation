import validator from './validator.js';

const element = document.getElementById('btnSig');
element.addEventListener("click", showArticles);

function showArticles(){

  document.getElementById('btnSig').innerHTML = `Bienvenid@ a Electroniclife, por favor elige tu artículo preferido.`;
  document.getElementById('pantInicial').style.display = "none";
  document.getElementById('selectArticle').style.display = "block";
    
  }

 
  const element3 = document.getElementById('samsung');
element3.addEventListener("click", celSamsung);

function celSamsung(){

  document.getElementById('selectArticle').style.display = "none";
  document.getElementById('optionPay').style.display = "block";
    
  }

  const element4 = document.getElementById('iphone');
element4.addEventListener("click", celIphone);

function celIphone(){

  document.getElementById('selectArticle').style.display = "none";
  document.getElementById('optionPay').style.display = "block";
    
  }

  const element5 = document.getElementById('xiaomi');
  element5.addEventListener("click", celXiaomi);
  
  function celXiaomi(){
  
    document.getElementById('selectArticle').style.display = "none";
    document.getElementById('optionPay').style.display = "block";
      
    }

    const element6 = document.getElementById('phillips');
    element6.addEventListener("click", tvPhillips);
    
    function tvPhillips(){
    
      document.getElementById('selectArticle').style.display = "none";
      document.getElementById('optionPay').style.display = "block";
        
      }

    const element7 = document.getElementById('samsungtv');
    element7.addEventListener("click", tvSamsung);
    
    function tvSamsung(){
    
      document.getElementById('selectArticle').style.display = "none";
      document.getElementById('optionPay').style.display = "block";
        
      }

      const element8 = document.getElementById('lg');
    element8.addEventListener("click", tvLg);
    
    function tvLg(){
    
      document.getElementById('selectArticle').style.display = "none";
      document.getElementById('optionPay').style.display = "block";
        
      }
      
      const element9 = document.getElementById('asus');
      element9.addEventListener("click", pcAsus);
      
      function pcAsus(){
      
        document.getElementById('selectArticle').style.display = "none";
        document.getElementById('optionPay').style.display = "block";
          
        }

        const element10 = document.getElementById('acer');
        element10.addEventListener("click", pcAcer);
        
        function pcAcer(){
        
          document.getElementById('selectArticle').style.display = "none";
          document.getElementById('optionPay').style.display = "block";
            
          }

          const element11 = document.getElementById('hp');
        element11.addEventListener("click", pcHp);
        
        function pcHp(){
        
          document.getElementById('selectArticle').style.display = "none";
          document.getElementById('optionPay').style.display = "block";
            
          }

  const element12 = document.getElementById('payCash');
  element12.addEventListener("click", efectivo);
  
  function efectivo(){
  
    document.getElementById('optionPay').style.display = "none";
    document.getElementById('pagarEfectivo').style.display = "block";
      
    }

    const element13 = document.getElementById('payCredit');
  element13.addEventListener("click", credito);
  
  function credito(){
  
    document.getElementById('optionPay').style.display = "none";
    document.getElementById('pagarTarjeta').style.display = "block";
    
    }

    const tarjeta = document.querySelector('#tarjeta');
    const formulario = document.querySelector('#formulario');

    tarjeta.addEventListener('click', () => {
      tarjeta.classList.toggle('active');
    });

      formulario.inputNumero.addEventListener('keyup',(e) => {
      const valorInput = e.target.value;

      formulario.inputNumero.value = valorInput
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .trim();

      const numeroTarjeta = document.querySelector('#tarjeta .numero');
      
      function mostrarFrente() {
          if (tarjeta.classList.contains('active')) {
            tarjeta.classList.remove('active');
          }}

          numeroTarjeta.textContent = valorInput;

          if (valorInput == '') {
            numeroTarjeta.textContent = '#### #### #### ####';
          }

          const logoBanco = document.querySelector('#logo');

          if (valorInput[0] == 4) {
            logoBanco.textContent = '';
            const imagen = document.createElement('img');
            imagen.src = "img/logo visa.jpg";
            logoBanco.appendChild(imagen);
          }
          else if (valorInput[0] == 5) {
            logoBanco.textContent = '';
            const imagen = document.createElement('img');
            imagen.src = "img/logo mastercard.jpg";
            logoBanco.appendChild(imagen);
          }

          if (valorInput == '') {
            logoBanco.textContent = '';
          }
          mostrarFrente();
        })

        formulario.inputNombre.addEventListener('keyup',(e) => {
          const valorInput = e.target.value;
    
          formulario.inputNombre.value = valorInput
          .replace (/[0-9]/g, ' ');
    
          const nombreTarjeta = document.querySelector('#tarjeta .nombre');
          function mostrarFrente() {
            if (tarjeta.classList.contains('active')) {
              tarjeta.classList.remove('active');
            }}
          const firma = document.querySelector('#tarjeta .firma');
    
              nombreTarjeta.textContent = valorInput;
              firma.textContent = valorInput;
    
              if (valorInput == '') {
                nombreTarjeta.textContent = 'Inserte su nombre';
              }
              mostrarFrente();
            })

            const mesExpirac = document.querySelector('#tarjeta .mounth');
            const yearExpirac = document.querySelector('#tarjeta .year');

            function mostrarFrente() {
              if (tarjeta.classList.contains('active')) {
                tarjeta.classList.remove('active');
              }}

            formulario.selectMes.addEventListener('change', (e) => {
              mesExpirac.textContent = e.target.value;
              mostrarFrente();
            });
    
            formulario.selectYear.addEventListener('change', (e) => {
              yearExpirac.textContent = e.target.value.slice(2);
              mostrarFrente();
            });
           
            const ccv = document.querySelector('#tarjeta .ccv');
            formulario.inputCCV.addEventListener('keyup' , () => {
              if (!tarjeta.classList.contains('active')) {
                tarjeta.classList.toggle('active');
              }

              formulario.inputCCV.value = formulario.inputCCV.value
            .replace(/\s/g, '')
            .replace(/\D/g, '')

            ccv.textContent = formulario.inputCCV.value;
            });

            //funcion del boton de validacion

            formulario.addEventListener('submit' , (event) => {
              event.preventDefault()
              const valorValiCar = document.getElementById('inputNumero').value;
              let validcard = validator.isValid(valorValiCar);
              let contenedorNumero = validator.maskify(valorValiCar);
              if (validcard) {
                document.getElementById('pagarTarjeta').style.display = "none"
                ubicacionNumer.innerText += contenedorNumero
                document.getElementById('finalizacion').style.display = "block";
              }else {
                 alert('Ingrese un número de tarjeta valido por favor')
               
              }
            });

            const ubicacionNumer = document.querySelector('.descripcion');
             
