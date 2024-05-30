const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.nav-item-close');
    const menuItems = document.querySelector('.nav-menu');


    hamburgerMenu.addEventListener('click',()=>{
        menuItems.style.display = 'block';
        closeMenu.style.display = 'block';
    })

    closeMenu.addEventListener('click', () => {
        menuItems.style.display = 'none';
        closeMenu.style.display = 'none';
    });