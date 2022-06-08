// const fs = require('fs')
// const path = require("path");
//
// const folderReader = (read) => fs.readdir(read, (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//
//     for (const file of files) {
//         fs.stat(path.join(read,file), (err1, stats) => {
//             if (err1) {
//                 console.log(err1)
//                 return
//             }
//                 if (stats.isFile()) {
//                     fs.rename(path.join(read,file), path.join(__dirname,'exitFolder',file), err2 => {
//                         if (err2) {
//                             console.log(err2)
//                         }
//                     })
//                 }
//                 if (stats.isDirectory()) {
//                     folderReader(path.join(read,file))
//                 }
//
//         })
//     }
// })
//
// folderReader(path.join(__dirname,'folderForRead'))


const fs = require('fs/promises');
const path = require('path');

const reader = async (read) => {
    try {
        const files = await fs.readdir(read);

        for (const file of files) {
            const stat = await fs.stat(path.join(read,file));

            if (stat.isFile()) {
                await fs.rename(path.join(read,file), path.join(__dirname,'exitFolder',file));
            }

            if (stat.isDirectory()) {
                await reader(path.join(read,file));
            }
        }
    } catch (e) {
        console.error(e);
    }
}

reader(path.join(__dirname,'folderForRead'));