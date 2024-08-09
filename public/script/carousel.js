document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const articles = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-indicators .dot');

    function showArticle(index) {
        articles.forEach((article, i) => {
            console.log(`Article ${i + 1} is now ${i === index ? 'active' : 'inactive'}`);
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
        currentIndex = index - 1; 
        showArticle(currentIndex);
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', prevArticle);
    document.querySelector('.carousel-control-next').addEventListener('click', nextArticle);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentArticle(index + 1));
    });

    showArticle(currentIndex);
});
