class HomeController{
    constructor(){}

    index(req, res) {
        res.render('index');
    }

    about(req, res){
        res.render('about', {title: 'About Us'});
    }
}

export default new HomeController();