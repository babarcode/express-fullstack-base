import Post from "../models/post.js";

class PostService{
    list(callback){
        Post.find({},(err, docs) => {
            callback(err, docs)
        });
    }

    create(title, content, callback){
        Post.create({title: title, content: content}, (err, doc) => {
            callback(err, doc)
        });
    }

    find(id, callback){
        Post.findById(id, (err, doc) => {
            callback(err, doc)
        });
    }

    update(id, title, content, callback){
        Post.findByIdAndUpdate(id, {title: title, content: content}, (err, doc) => {
            callback(err, doc)
        });
    }

    delete(id, callback){
        Post.findByIdAndDelete(id, (err, doc) => {
            callback(err, doc)
        });
    }
}

export default new PostService();