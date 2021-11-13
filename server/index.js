import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from "nodemailer";

const app = express();
app.use([
    cors(),
    bodyParser.json({ limit: '30mb', extended: true}),
    bodyParser.urlencoded({ limit: '30mb', extended: true})
]);

let instructor = []; 
let user = [];
let generalPosts = [];
let SMEPosts = []; 
/*
{
    id: '',
    posts: [{
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jane Doe',
        content: text,
        date: curDate
    },{
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jane Doe',
        content: text,
        date: curDate
    }]
}
*/

app.get('/',(req,res) => {
    res.send('API');
});


//ID and post details needed
app.post('/chat/:ID',(req,res) => {
    const {ID} = req.params;
    
    if(!ID){
        generalPosts.push(req.body.post);
        res.status(200).send(generalPosts);
    }

    SMEPosts = SMEPosts.map(cur => {
        const x = cur;
        if(cur.id === ID){
            x.posts.push(req.body.post) ;
        }
        return cur;
    });

    const updatedData = SMEPosts.filter(cur => cur.id === ID)[0];
    res.status(200).send(updatedData);
});

app.get('/chat/:ID', (req,res) => {
    const {ID} = req.params;
    
    if(!ID){
        res.status(200).send(generalPosts);
    }
    
    const updatedData = SMEPosts.filter(cur => cur.id === ID)[0];
    res.status(200).send(updatedData);
});

//discussion ended between sme and student
app.delete('/chat/:ID',(req,res) => {
    const {ID} = req.params;

    if(!ID){
        res.status(404).send("can't process request");
    }
    
    SMEPosts = SMEPosts.filter(cur => cur.id !== ID);
    res.status(200).send("deleted!!");
});

app.post('/call',(req,res) => {
    const phone = req.body.phone;
    try{
        //send mail to SME
        res.status(200).send("success");
    }catch(err){
        res.status(404).send(error);
    }
});

app.post('/email',(req,res) => {
    const email = req.body.email;
    try{
        //send mail to student about SME
        res.status(200).send("success");
    }catch(err){
        res.status(404).send(error);
    }
});

app.post('/addSME', (req,res) => {
    const data = req.body.student;
    instructor.push(data);
    res.status(200).send("added");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});