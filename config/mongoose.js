import {mongoose} from "mongoose";
import { readFileSync } from 'fs';

var mongoose_config = null;

try{
    mongoose_config = JSON.parse(readFileSync('./config/database.json', 'utf-8'));
}catch(error){
    console.log("Cannot connect to database! Please check your database.json.");
    process.exit(1);
}

const init = async () => {

    var mongoose_client = null

    let url = "mongodb://" + mongoose_config.host + "/" + mongoose_config.database;

    try {

        mongoose_client = await mongoose.connect(url, {
            // PRODUCTION
            // authSource: mongoose_config.authSource,
            // user: mongoose_config.user,
            // pass: mongoose_config.pass,
            // poolSize: 10,
            // useCreateIndex: true,
            // useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Database is connected! | ${mongoose_config.host} ~ ${mongoose_config.database}`);
        return mongoose_client
    } catch (error) {
        console.log(`Cannot connect to database! | ${mongoose_config.host} ~ ${mongoose_config.database}`);
        console.log(error.stack);
        process.exit(1);
    }

}

export {mongoose_config, init}