window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        var sectionId = section.getAttribute('id');
        var backgroundColor;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            switch (sectionId) {
                case 'home':
                    backgroundColor = '#874CCC';
                    break;
                case 'about':
                    backgroundColor = '#8DECB4';
                    break;
                case 'services':
                    backgroundColor = '#8576FF';
                    break;
                case 'portfolio':
                    backgroundColor = '#135D66';
                    break;
                case 'contact':
                    backgroundColor = 'lightsalmon';
                    break;
                default:
                    backgroundColor = 'white';
            }
            document.body.style.backgroundColor = backgroundColor;
        }
    });
});