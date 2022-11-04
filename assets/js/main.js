const form = document.querySelector(".matriculese-main--form");
const campos = form.querySelectorAll("[required]");

campos.forEach(campo => {
   campo.addEventListener("blur", e => {
      validaCampo(e.target)
   });
});

function validaCampo(campo){
   let errorType = "";
   let errorMessage = "";
   campo.setCustomValidity("");
   let errorField;

   switch(campo.name){
      case "confirma":
         comparesPassword(campo);
         break;
   }


   if(!campo.checkValidity()){
      for(key in campo.validity){
         if(campo.validity[key]){
            errorType = key;
            errorMessage = messages[campo.name][errorType];
         }
      }
   }
   if(campo.name !== "concordo"){
      errorField = campo.nextElementSibling;
   } else {
      errorField = campo.parentElement.nextElementSibling;
   }
   errorField.innerText = errorMessage;

}

function comparesPassword(campo){
   let confirmPassword = campo.value;
   
   const password = document.querySelector("#senha");
   if(!(password.value === confirmPassword)){
      campo.setCustomValidity("As senhas informadas são diferentes")
   };   
};

function calculatesAge(campo){
   //build
};

function validatesCPF(campo){
   //build
};

/* const errorType = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
] */

const messages = {
    nome: {
        valueMissing: "Informe seu nome",
        tooShort: "Seu nome deve ter mais de duas letras"
    },
    nascimento: {
        valueMissing: 'Informe sua data de nascimento',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    email: {
        valueMissing: "Informe seu e-mail",
        typeMismatch: "Isso é um e-mail?",
        tooShort: "Seu e-mail parece um pouco curto"
    },

    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },

    senha: {
      valueMissing: "Assim vão te hackear! O campo de senha não pode estar vazio",
      patternMismatch: "Sua senha deve ter ao menos um caracter minúsculo, um maiúsculo, uma letra, e um caracter especial da lista: !@#$%¨&*?<>",
      tooShort: "Sua senha deve ter no mínimo 6 caracteres"
    },

    confirma: {
      valueMissing: "Confirme sua senha",      
      tooShort: "Sua senha deve ter no mínimo 6 caracteres",
      customError: "Xiii, já esqueceu a senha? Digite a mesma senha digitada acima"

    },

    cep: {
      valueMissing: "Informe seu CEP"
    },
    
    concordo: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
   icon.classList.toggle("show-password");

   const passwordField = document.querySelector("#senha");
   passwordField.type === "password" ? passwordField.type = "text" : passwordField.type = "password";

});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements.nome.value,
        "email": e.target.elements.email.value,
        "cpf": e.target.elements.cpf.value,
        "idade": e.target.elements.idade.value,
        "senha": e.target.elements.senha.value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    const finalMessage = document.querySelector(".success-message");
    finalMessage.innerText = `Parabéns ${listaRespostas.nome}. Você está matriculado` 
})

