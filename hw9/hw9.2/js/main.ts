// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr: string[] = ['Main', 'Products', 'About us', 'Contacts'];
let menuList: HTMLUListElement = document.createElement('ul');
document.body.appendChild(menuList);
menuList.classList.add('menuList');
for (const item of arr) {
    let liMenu: HTMLLIElement = document.createElement('li');
    liMenu.innerText = item;
    menuList.appendChild(liMenu);
}
