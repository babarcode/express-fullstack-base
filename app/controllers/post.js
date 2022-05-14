import Post from "../models/post.js";

class PostController{
    constructor(){}

    index(req, res) {
        Post.find({},(err, docs) => {
            let success = +req.query.success;
            if(err){
                console.log("##### ERROR GET POST");
            }

            res.render('posts/index', {success: success, data: docs});
        })
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

            Post.create({title: title, content: content}, (err, doc) => {
                if(err){
                    console.log("##### ERROR SAVE POST", err);
                    res.redirect("/post?success=0");
                }

                res.redirect("/post?success=1");
            });
        }
    }
}

export default new PostController();