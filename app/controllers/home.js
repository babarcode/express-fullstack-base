class HomeController{
    constructor(){}

    index(req, res) {
        res.render('index');
    }

    about(req, res){
        res.render('about', {title: 'About Us'});
    }

    login(req, res) {
        res.render('login');
    }
}

export default new HomeController();