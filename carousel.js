document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const articles = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    // const carouselInner = document.querySelector('.carousel-inner');

    function showArticle(index) {
        
        articles.forEach((article, i) => {
            article.classList.remove('active');
            dots[i].classList.remove('active');
        });
        articles[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextArticle() {
        currentIndex = (currentIndex + 1) % articles.length;
        showArticle(currentIndex);
    }

    function prevArticle() {
        currentIndex = (currentIndex - 1 + articles.length) % articles.length;
        showArticle(currentIndex);
    }

    function currentArticle(index) {
        currentIndex = index;
        showArticle(currentIndex);
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', prevArticle);
    document.querySelector('.carousel-control-next').addEventListener('click', nextArticle);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentArticle(index));
    });

    showArticle(currentIndex); // Afficher l'article initial
});
