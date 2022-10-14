console.log("exercicio 3");

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "12345"
	}
]

    for(let conta of contas)
     validateEmail = () => {
        let emailValido = /\S+@\S+\.\S+/
        if(emailValido.test(conta.email) === true){
            return 'Email valido'
        }else{
            return 'Email deve conter @ e .'
        }
    }

  console.log(validateEmail())