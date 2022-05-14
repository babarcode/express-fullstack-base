class HomeController{
    constructor(){}

    index(req, res) {
        console.log("##### ACCESSING HomeController#index")
        res.render('index');
    }

    about(req, res){
        console.log("##### ACCESSING HomeController#about")
        res.render('about', {title: 'About Us'});
    }
}

export default new HomeController();