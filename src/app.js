const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname,"../public")

app.use(express.static(staticPath))
app.set('views', path.join(__dirname,"../views"))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname,"../views/partials"))

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let currentTime = new Date();
    var month = months[currentTime.getMonth()];
    var date = currentTime.getDate();
    res.render("weather",{day:weekday[currentTime.getDay()],month,date});
})

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})