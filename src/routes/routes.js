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

    app.get('/dhcp', (req, res) => {
        res.sendFile('/pages/article-dhcp.html', { root: './public' })
    });

    app.get('/kerberos-ntlm', (req, res) => {
        res.sendFile('/pages/article-kerberos-ntlm.html', { root: './public' })
    });

    app.get('/journee-type', (req, res) => {
        res.sendFile('/pages/article-journee-type.html', { root: './public' })
    });

    app.get('/bilan', (req, res) => {
        res.sendFile('/pages/article-bilan.html', { root: './public' })
    });
};