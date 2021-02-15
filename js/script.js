
// Menu-------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuOver = document.querySelector('.menu__overlay'),
          closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    function closeMenu() {
        menu.classList.remove('active');
    }

    closeElem.addEventListener('click', closeMenu);

    menu.addEventListener('click', (e) => {
        if (e.target === menuOver) {
            closeMenu();
        }
    });


  // ProgressBar-------------------------------------------------------------------
    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
