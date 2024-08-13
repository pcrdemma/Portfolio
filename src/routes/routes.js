module.exports = function (app) {
    app.get('/', (req, res) => {
        res.sendFile('/pages/accueil.html', { root: './public' })
    });

    app.get('/entreprise', (req, res) => {
        res.sendFile('/pages/entreprise.html', { root: './public' })
    });

    app.get('/article', (req, res) => {
        res.sendFile('/pages/article.html', { root: './public' })
    });

    app.get('/contact', (req, res) => {
        res.sendFile('/pages/contact.html', { root: './public' })
    });

    app.get('/mission-principale', (req, res) => {
        res.sendFile('/pages/article-mission-principale.html', { root: './public' })
    });
};