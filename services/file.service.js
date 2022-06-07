const fs = require('fs')

// fs.appendFile('./data.txt', 'hello node',(err) => {
//     if (err){
//         console.log(err)}
// })


// fs.writeFile('./data.txt', 'hello node',(err) => {
//     if (err){
//         console.log(err)}
// })




//
// fs.readFile('./data.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//         console.log(data)
//     console.log(data.toString())
//
// })
//



// fs.readdir('./services', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         console.log(file)
//         fs.readFile(`./services/${file}`, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             // console.log(data)
//             console.log(data.toString())
//
//         })
//
//     }
// })



// fs.readdir('./services', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         console.log(file)
//         fs.stat(`./services/${file}`, (err, stat) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(stat)
//         })
//
//     }
// })



//
// fs.readdir('./services', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         console.log(file)
//         fs.stat(`./services/${file}`, (err, stat) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(stat.isFile())
//             console.log(stat.isDirectory())
//
//         })
//
//     }
// })
//
//
// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         console.log(file)
//         fs.stat(`./${file}`, (err, stat) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(stat.isFile())
//             console.log(stat.isDirectory())
//
//         })
//
//     }
// })


// fs.mkdir('./util',err => {
//     err && console.log(err)
// })
// fs.rename('./toMoove.js','./util/helloworld.txt',err => {
//     err &&  console.log(err);
// })


// const  readStream = fs.createReadStream('./util/helloworld.txt')
// const  writeStream = fs.createWriteStream('./util/helloworld2.txt')


// readStream.on("data", chunk => {console.log(chunk)       wrong way
// writeStream.write(chunk)}
// )
// readStream.on("end", () => {console.log(`file done`)}
// )


// readStream.pipe(writeStream)  good way


fs.unlink ('./itils/helloworld2.txt',err => console.log(err))
fs.rmdir ('./itils/',err => console.log(err))