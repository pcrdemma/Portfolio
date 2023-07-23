module.exports = function (app) {
    app.get('/home', (req, res) => {
        res.sendFile('/template/home.html', { root: './public' })
    })
}