const form = document.querySelector('#form');

//Captura o evento submit do botao
form.addEventListener('submit', function(e){
    e.preventDefault();

    //e.target pega o elemento de dentro do FORM
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //Variavel esta pegando o valor do inputPeso e inputAltura e formatando para numero
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Invalido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc, nivelImc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobre Peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];   
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];

}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP(){
    
    //Cria um paragrafo
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    //zera o resultado do HMTL
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
    p.classList.add('paragrafo_resultado');
    } else {
    p.classList.add('bad');
    }

    p.innerHTML = msg

    //insere um P na DIV
    resultado.appendChild(p);

}