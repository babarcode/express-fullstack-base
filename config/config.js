import { readFileSync } from 'fs';

var config;

try{
    config = JSON.parse(readFileSync('./config/config.json', 'utf-8'));
}catch(error){
    console.log("Cannot load config! Please check your config.json file.");
    process.exit(1);
}

export default {config}