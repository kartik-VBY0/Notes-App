import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import env from "dotenv";
import bcrypt from "bcryptjs";
env.config();
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());

const db=new pg.Client({
    user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
await db.connect();
app.post("/adddata",async(req,res)=>{     
    try{   
    await db.query("INSERT INTO notes (title,content) VALUES($1,$2);",[req.body.title,req.body.content]);
    }
    catch(err){
        console.log(err);
    }
});
app.post("/login",async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await db.query("INSERT INTO users (username,password) VALUES($1,$2);",[req.body.username,hashedPassword]);
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
    }
    
});
app.get ("/getdata",async(req,res)=>{

    try{
        
        const response=await db.query("SELECT * FROM notes;");
        res.send(response.rows);
    }
    catch(err){
        console.log(err);
    }
});
app.delete("/deletedata",async(req,res)=>{
    console.log(req.body.id);
    try{
        await db.query("DELETE FROM notes WHERE key=$1;",[req.body.id]);
    }
    catch(err){
        console.log(err);
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});