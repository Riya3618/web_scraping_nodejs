const express= require('express');
const app=express();
const getroutes=require('./routes/getRoutes');
const PORT=3001;
//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use('/api/v1',getroutes)

app.listen(PORT,()=>{
    console.log("App is running on port=",PORT);
});
