const button = document.querySelector("#raffle-button")


function numberRaffle(){
    const minNumber = Math.ceil(document.querySelector(".input-min").value) // o valor mínimo é arredondado para cima 
    const maxNumber = Math.floor(document.querySelector(".input-max").value) // o valor máximo é arredondado para baixo
    const raffleResult = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber /*
    Um número aleatório é gerado entre 0 e 1, multiplicado pela expressão entre parênteses, arredondado e em seguida somado com o valor mínimo
    */
    
    alert(raffleResult)
}

button.addEventListener("click", numberRaffle)