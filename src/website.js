import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("name");
  restaurantName.textContent = "Chez Pierre";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const items_nav = document.createElement('ul');
    const item_nav = document.createElement('li');
    item_nav.textContent = 'menu'
    item_nav.addEventListener('click', function(){
        const menuNode = loadMenu();
        console.log(menuNode);
    })

    items_nav.appendChild(item_nav);
    nav.appendChild(items_nav);

    return nav
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }


function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default initializeWebsite;
