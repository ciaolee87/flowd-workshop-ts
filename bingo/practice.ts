import * as Buffer from "buffer";

process.stdin.setEncoding("utf-8");

// const getInputValue = () => {
//     process.stdin.on("data", (data: Buffer): void => {
//         console.log(`input1 : ${data}`);
//     });
// }
//
// console.log("name : ");
//
// getInputValue();

while (true) {
    let numb = 1;
    const handler1 = (data: Buffer): void => {
        console.log(`input1 : ${data}`);
        process.stdin.removeListener("data", handler1);
    }
    numb++;
}
//
// const handler1 = (data: Buffer): void => {
//     console.log(`input1 : ${data}`);
//     process.stdin.removeListener("data", handler1);
// }
//
// const handler2 = (data: Buffer): void => {
//     console.log(`input2 : ${data}`);
// }
//
// process.stdin.on("data", handler1);
//
// process.stdin.on("data", handler2);
//
