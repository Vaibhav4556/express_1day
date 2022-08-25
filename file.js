const fs = require('fs')
const data = "its an amazing day"
fs.writeFile("./a2z.html",data,(err)=>{
    console.log("writting completed!!!")
}) 

// to create 10 files insde the backup folder
// for (let i=0;i<=10;i++)
// {
//     fs.writeFile(`./backup/a${i}z.html`,data,(err)=>{
//     console.log("writting completed!!!")
// })
// }