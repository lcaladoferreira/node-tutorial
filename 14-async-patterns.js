const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async ()=> {
    try{
        const first = await readFilePromise("./content/first.txt", "utf8");
        const second = await readFilePromise("./content/second.txt", "utf8");
        await writeFilePromise("./content/result-mind-grenade.txt", `this is awesome: ${first}, ${second}`);
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}
start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async ()=> {
//     try{
    //         const first = await getText("./content/first.txt")
    //         console.log(first)
    //     } catch (error){
        //         console.log(error)
        //     }
        // }
        // start()
        
        // const start = async () =>{
            //     const first = await getText("./content/first.txt")
//     console.log(first);
// }
// start()


// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));