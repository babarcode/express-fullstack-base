import * as mongoose from '../config/mongoose.js';
import UserDetails from '../app/models/user.js';

console.log("Connecting database...");
mongoose.init();

console.log("Seeding User data...");
UserDetails.register({ username: 'admin', active: true }, 'admin', (err, user)=>{
    if(err){
        console.log(`Error Occured: ${err}`);
    }else{
        console.log("Seed data ok!");
    }
    process.exit(1);
});