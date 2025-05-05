import dotenv from 'dotenv'

export default function setUpEnvironment(){
    console.log(process.env)
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    dotenv.config({
        path:'./.env',
        override:true
    })
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
}