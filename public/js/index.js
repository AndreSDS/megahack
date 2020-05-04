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
                    dados = [];
                })
                .catch(err => console.log(err));
        })
    }






};