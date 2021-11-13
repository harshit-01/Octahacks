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

let instructor = [
    {
        name:"Harshit",
        email:"kharshit01042001@gmail.com",
        phone: 9999999999
    },
    {
        name:"Puneet",
        email:"puneetvideomeet@gmail.com",
        phone: 9999999998
    }
]; 
let user = [{
    id:"",
    isPremiumUser:false
}];
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

app.post('/call',async(req,res) => {
    const phone = req.body.phone;
    let email = req.body.email;
    //email += ",kharshit01042001@gmail.com";
    const index = Math.floor(Math.random() * instructor.length);
    const name = instructor[index].name;
    const SME = instructor[index].phone;
    try{
    
        const html = `
            <h1>SME Details</h1>
            <h4>SME Name : ${name}</h4>
            <h4>SME Phone Number : ${SME}</h4>
        `
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'puneetvideomeet@gmail.com',
                pass: 'bftfyvonyzveqbxt'
            }
        });
        
        let mailDetails = {
            from: 'Solutionist puneetvideomeet@gmail.com',
            to: email,
            cc: email,
            subject: 'SME',
            html: html 
        };
        
        const info = await mailTransporter.sendMail(mailDetails);
        res.status(200).send(info);
    }catch(err){
        res.status(404).send(error);
    }
});

app.post('/email',async(req,res) => {
    //console.log(req.body.email)
    //send mail to student about SME
    let email = req.body.email;
    //email += ",kharshit01042001@gmail.com";

    const index = Math.floor(Math.random() * instructor.length);
    const SME = instructor[index].email;
    const name = instructor[index].name;
    try{
        const html = `
            <h1>SME Details</h1>
            <h4>SME Name : ${name}</h4>
            <h4>SME Email : ${SME}</h4>
        `
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'puneetvideomeet@gmail.com',
                pass: 'bftfyvonyzveqbxt'
            }
        });
        let mailDetails = {
            from: 'Solutionist puneetvideomeet@gmail.com',
            to: email,
            cc: email,
            subject: 'SME',
            html: html 
        };
        const info = await mailTransporter.sendMail(mailDetails);
        res.status(200).send(info);
    }catch(err){
        res.status(404).send(err.message);
    }
});

app.post('/addSME', (req,res) => {
    // console.log(req.body)
    const {name,email,phone} = req.body;
    instructor.push({
        name:name,
        email:email,
        phone:phone
    });
    console.log(instructor)
    res.status(200).send("added");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});