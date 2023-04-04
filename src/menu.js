function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    const menu_item = document.createElement('h2')
    menu_item.textContent = 'steak'

    menu.appendChild(menu_item)
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }

export default loadMenu;