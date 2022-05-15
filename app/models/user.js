import mongoose from 'mongoose';
import mongooseTimezone from 'mongoose-timezone';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    active: Boolean
}, {
    timestamps: true,
    versionKey: false
});

User.plugin(mongooseTimezone);
User.plugin(passportLocalMongoose);

export default mongoose.model('User', User);