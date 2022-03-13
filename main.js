
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado );

        cartaoPokemonParaAbrir.classList.add('aberto');

        const cardAtivo = document.querySelector('.ativo')
        cardAtivo.classList.remove('ativo')

        const cardSelecionado = document.getElementById(idPokemonSelecionado)

        cardSelecionado.classList.add('ativo')
    } )

})