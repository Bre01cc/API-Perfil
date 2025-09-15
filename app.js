//Falar pro navegador não permitir certos tipos de erro no código do JavaScript
'user strict'

// const { createElement } = require("react")

//Para utilizar await precisamos declarar a função como async
//await é uma forma de dizer para a variável que usa o fetch(buscar) aguarda a resposta da API para assim progredir
async function getUsers() {
    //url é uma variável guarda a string da url da API
    const url = 'https://randomuser.me/api/?results=10&nat=br'
    //response pega essa string é busca a API com metodo nativo fetch(buscar)
    const response = await fetch(url)
    //data pega o que foi buscado pelo response e devolve uma série de arrays que nesse caso se chama results
    const data = await response.json()
    //Aqui fica o retorno da função, que devove para que chamar o JSON(vale embra que esse comentarios são 100% veridicos)
    return data.results
}
//Responsavel por carregar os perfis de usuários. Além de inseri-los no html da página.
async function loadUsers() {
    const users = await getUsers()
    const container = document.getElementById('user-container')
    users.forEach(user => {
        const card = document.createElement('article')
        card.className ='user-card'
        card.innerHTML = `
       <img
       src="${user.picture.large}"
       alt="Foto de ${user.name.first}"
       clallName ="user-imagem"
       >
        <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
        <p>${user.email}<p>
        <p>${user.cell}<p>
       `
      console.log(users)
        container.appendChild(card)
    })

}

loadUsers()