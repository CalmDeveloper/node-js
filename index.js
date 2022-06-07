// eazy cod
// const fs = require('fs')
//
//
// fs.readdir('./girls', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         fs.readFile(`./girls/${file}`, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             const {gender} = JSON.parse(data)
//             if (gender ==="male"){
//                 fs.rename(`./girls/${file}`, `./boys/${file}`,err => {
//                     err &&  console.log(err);
//                 })
//             }
//         })
//
//     }
// })
//
//
//
// fs.readdir('./boys', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         fs.readFile(`./boys/${file}`, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             const {gender} = JSON.parse(data)
//             if (gender ==="female"){
//                 fs.rename(`./boys/${file}`, `./girls/${file}`,err => {
//                     err &&  console.log(err);
//                 })
//             }
//         })
//
//     }
// })









// harder code based in callbacks

// const fs = require('fs')
// const path = require('path')
//
//
// const sortBy = (searchDirectory, gender, write) => fs.readdir(path.join(__dirname, searchDirectory), (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         fs.readFile(path.join(__dirname, searchDirectory, file), (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//
//             if (JSON.parse(data.toString()).gender === gender) {
//                 fs.rename(path.join(__dirname, searchDirectory, file), path.join(__dirname, write, file), err => {
//                     err && console.log(err);
//                 })
//             }
//         })
//     }
// })
// sortBy('boys', "female", 'girls')
// sortBy('girls', "male", 'boys')






// harder code based in promises
//

// const fs = require('fs/promises')
// const path = require('path')
//
//
// const sortBy = async (searchDirectory, gender, write) => {
//     try {
//         const files = await fs.readdir(path.join(__dirname, searchDirectory))
//
//         for (let file of files) {
//             const data = await fs.readFile(path.join(__dirname, searchDirectory, file))
//             if (JSON.parse(data.toString()).gender === gender) {
//                 await fs.rename(path.join(__dirname, searchDirectory, file), path.join(__dirname, write, file))
//             }
//
//         }
//     } catch (e) {
//         console.log(e.error)
//     }
// }
// sortBy('boys', "female", 'girls')
// sortBy('girls', "male", 'boys')




