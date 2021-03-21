
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

    // ----собираем все якоря; устанавливаем время анимации и количество кадров-------------------------
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
              animationTime = 700,
              framesCount = 20;

        anchors.forEach(function(item) {
            // каждому якорю присваиваем обработчик события
            item.addEventListener('click', function(e) {
                // убираем стандартное поведение
                e.preventDefault();

                // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
                let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

                // запускаем интервал, в котором
                let scroller = setInterval(function() {
                    // считаем на сколько скроллить за 1 такт
                    let scrollBy = coordY / framesCount;

                    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                    // и дно страницы не достигнуто
                    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                        // то скроллим на к-во пикселей, которое соответствует одному такту
                        window.scrollBy(0, scrollBy);
                    } else {
                        // иначе добираемся до элемента и выходим из интервала
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                    // время интервала равняется частному от времени анимации и к-ва кадров
                }, animationTime / framesCount);
                closeMenu();
            });
        });

// ProgressBar-------------------------------------------------------------------
    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

// To top------------------------------------------------------------------------
    const toTop = document.querySelector('#toTop');
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
    }

    var t;
    function up() {
        const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,-100);
            t = setTimeout('up()',20);
        } else clearTimeout(t);
        return false;
    }

    toTop.addEventListener('click', up);