// build the menu
(() => {
    // get the template
    const $menuItemTemplate = document.getElementById('menu-item').content;
    
    // add items to the main menu
    const $mainMenu = document.getElementById('main-menu-list');
    
    // populate the menu from the articles
    Array.from(document.getElementsByTagName('article')).forEach(($article) => {
        const $menuItem = $menuItemTemplate.cloneNode(true);
        const $itemAnchor = $menuItem.querySelector('a');
        $itemAnchor.setAttribute('href', `#${$article.id}`);
        $itemAnchor.textContent = $article.querySelector('h1').textContent;
    
        $mainMenu.appendChild($menuItem);
    });
})()