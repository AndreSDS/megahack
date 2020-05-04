window.onload = function () {

    function getElement(element) {
        return document.querySelector(element);
    }

    toggleHeader = getElement('.toggle-icon');
    sideNav = getElement('.sidenav');
    headerContainer = getElement('.header-container');
    toggleSide = getElement('.sidenav-toggle');
    content = getElement('#content');

    toggleHeader.addEventListener('click', () => {
        sideNav.classList.toggle('show-side');
        headerContainer.style.top = '-75px';
    });

    toggleSide.addEventListener('click', () => {
        sideNav.classList.toggle('show-side');
        headerContainer.style.top = '0';
    });

    let categoria;
    baseUrl = "";
    itemCategorias = document.querySelectorAll('.categorias p');
    dados = [];

    for (let item of itemCategorias) {
        item.addEventListener('click', (e) => {
            categoria = e.target.firstChild.textContent.toLowerCase();

            baseUrl = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fg1.globo.com%2Fdynamo%2F${categoria}%2Frss2.xml`

            fetch(baseUrl)
                .then(response => response.json())
                .then(data => {
                    dados.push(data);
                    for (const item of dados) {
                        console.log(item)
                    }
                })
                .catch(err => console.log(err));
        })
    }

    function createCard() {
        card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height / 10}m</h3>
    </div>`;
        return card;
    }







};