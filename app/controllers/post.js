import PostService from "../services/post.js";

class PostController{
    constructor(){}

    index(req, res) {

        let success = +req.query.success;
        PostService.list((err, docs) => {
            if(err){
                console.log("##### ERROR GET POST");
            }

            res.render('posts/index', {success: success, data: docs});
        });

    }

    create(req, res) {

        if(req.method == "GET")
        {
            let success = +req.query.success;
            res.render('posts/create', {success: success});
        }
        else
        {
            let title = req.body.title;
            let content = req.body.content;

            PostService.create(title, content, (err, docs) => {
                if(err){
                    console.log("##### ERROR CREATE POST");
                    res.redirect("/post?success=0");
                }
    
                res.redirect("/post?success=1");
            });
        }

    }

    delete(req, res) {

        let id = req.query.id;
        PostService.delete(id, (err, docs) => {
            if(err){
                console.log("##### ERROR DELETE POST");
            }

            res.redirect("/post");
        });

    }
}

export default new PostController();