// const dbl=(n)=>n*2
// console.log(dbl(10))

const fs= require("fs");
const quote ="hello world";
const [, , number]= process.argv; // to give the values from the terminal
for(let i=0;i<=number;i++){
    fs.writeFile(`./backup/text${i}.html`,quote,(err)=>{
        console.log("completed");
    });
}
fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err){
        console.log("err")
    }
    else{
        console.log(data)
    }
})

const quote1="Everything will be fine"
fs.appendFile("./cool.txt","\n"+ quote1,(err)=> {
    console.log("completed")
})