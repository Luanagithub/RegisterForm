
    var NomeTelefone = document.getElementById('Telefone');
    var NomeCep = document.getElementById('Cep');
    var NomeEndereco = document.getElementById('Endereco');

    var NomeForm = document.getElementById('Form');
    var NomeCadastro = document.getElementById('Nome');
    var NomeEmail = document.getElementById('Email');
    var NomeButton = document.getElementById('Button');
    var NomeCpf = document.getElementById('Cpf');

    console.log(NomeTelefone)
    console.log(NomeCep)
    console.log(NomeEndereco)
    console.log(NomeForm)
    console.log(NomeCadastro)
    console.log(NomeEmail)
    console.log(NomeButton)
//var NomeCadastro = document.getElementById('Nome');


//onkeyup="preventNumberInput(event)" onkeydown="preventNumberInput(event)"
//NOME
    function preventNumberInput(e){
        var keycode = (e.keycode ? e.keycode : e.which);
        //Captura dos números,referência ao número que representa eles.
        if(keycode > 47 && keycode < 58 || keycode >95 && keycode < 107){
            e.preventDefault();
        }
    }


//TELEFONE para algarismos diferentes
    NomeTelefone.addEventListener('keypress',(e)=>{
        if(checkCharacter(e)||!checkChar(e)){
            e.preventDefault()
            return;
            }
    })
    //Usando função checkCharacter e Checkchar

//TELEFONE máscara
    NomeTelefone.addEventListener('keypress',(e)=>{
        let NomeTelefoneLength = NomeTelefone.value.length
            if(NomeTelefoneLength === 0){
            NomeTelefone.value += '('
            }
            else if(NomeTelefoneLength === 3){
            NomeTelefone.value += ')'
            }
            else if(NomeTelefoneLength === 8){
            NomeTelefone.value += '-'
            }
        })
            

//CPF
    NomeCpf.addEventListener('keypress',(e)=> {
        //Objeto de Evento

        let NomeCpfLength = NomeCpf.value.length
            if(NomeCpfLength === 3||NomeCpfLength === 7){
                NomeCpf.value += '.'
                }
                else if (NomeCpfLength === 11){
                    NomeCpf.value += '-'
                }
            console.log(NomeCpfLength);


            //Usada acima
//CPF
            //Condição Negando Todos do Alfabeto:
            if(!checkChar(e)){
            //Gerando uma Resposta False:
            //Evita que o caracter seja escrito
            e.preventDefault();
            return;
            }

            
            if(checkCharacter(e)){
            e.preventDefault()
            }
            //Usando a função checkCharacter
    })

//Função checkChar,comparação com alfabeto.
    function checkChar(e){
        const char= String.fromCharCode(e.keyCode);
        const charPattern= '[a-zA-Z0-9]';

        if(char.match(charPattern)){
            console.log(char)
            return true;
        }
    }

//Função que testa Caracteres de /[a-z]/:
    function checkCharacter(e) {
        const char = String.fromCharCode(e.keyCode);
        const letterPattern = /[a-z]/;
    
        if (char.match(letterPattern)) {
        return true;
        }
    }

//------------------------------------------------------------------------------------------------------
function validar(){
//Validar onclick="validar();return false"
    var Nome = NomeCadastro.value
    var Telefone = NomeTelefone.value
    var Cpf = NomeCpf.value
    var Cep = NomeCep.value
    var Email = NomeEmail.value

//Validação
    if(Nome!== "" && Telefone!=="" && Cpf!=="" && Cep!=="" && Email!==""){
        alert('Sucesso');
    //Redirecionamento
        location.href="home.html";
    }
    else{
        alert('Preencha os campos que faltam')
    }
}

//------------------------------------------------------------------------------------------------------
//Utilizando JQuery
//JQuery para a máscara do CEP
$("#Cep").mask("99999-999");



