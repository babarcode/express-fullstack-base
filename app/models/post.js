import mongoose from 'mongoose';
import mongooseTimezone from 'mongoose-timezone';
const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String
}, {
    timestamps: true,
    versionKey: false
});

Post.plugin(mongooseTimezone)

export default mongoose.model('Post', Post);