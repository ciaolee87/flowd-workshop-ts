import * as Buffer from "buffer";

// const throwDice = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const dice = Math.floor(Math.random() * 6);
//         resolve(dice);
//     }, 5000);
// });
//
//
// throwDice.then(dice => {
//     console.log(dice);
// }).catch(reason => {
//     console.log('reason : ' + reason);
// });


const inputValuePromise = new Promise<string>((resolve, reject) => {
    process.stdin.setEncoding("utf-8");

    const handler = (data: Buffer): void => {
        process.stdin.removeListener('data', handler);
        resolve(data.toString());
    }

    process.stdin.write("", err => {
        if (err) {
            reject(err);
        }
    });
    process.stdin.on("data", handler);
});


// 잘못된 사고 결과로 짜여진 코드
// for (let i = 1; true; i++) {
//     process.stdout.write(`#${i}. 입력하세요 > `);
//     let value = "";
//     inputValue
//         .then(res => {
//             value = res;
//             console.log(`inserted value : ${value}`);
//         }).catch(reason => {
//
//     });
// }


const main = async () => {
    for (let i = 1; true; i++) {
        process.stdout.write(`#${i}. 입력하세요 > `);
        let value = await inputValuePromise;
        console.log(`input value: ${value}`);
    }
}


main().then().catch(reason => {
    console.log("main error :" + reason);
});
