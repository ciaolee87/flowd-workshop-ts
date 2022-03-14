// 해피 해피 해피 이마트

// 이마트 직원이 물건을 들고 진열을 하도록 함
// 진열을 한다는 것은 현재 이마트 진열대에 해당 상품칸이 존재한다는 것
// 성공하면 true, 실패하면 false

import {getInputValue} from "../../utils/stdio/stdio";

type Emart = EmartFloor[]

type EmartFloor = {
    floor: number,
    goods: string[]
};

const emart: Emart = [
    {floor: 3, goods: ["computer", "game", "electronic"]},
    {floor: 2, goods: ["cloth", "socks"]},
    {floor: 1, goods: ["milk", "snack"]}
]

process.stdin.resume();
process.stdin.setEncoding();

export class taeEmart {
    async runEmart() {
        this.startEmart();
        while (true) {
            const isFloor = await this.askItem();

            if (isFloor === 0) {
                console.log(`마련된 진열대가 없습니다.`);
            } else {
                console.log(`마련된 진열대는 ${isFloor}층에 있습니다.`);
            }

            const isQuit = await this.askQuit();

            if(isQuit) {
                process.exit(0);
            }
        }
    }

    startEmart(): void {
        console.log("이마트 진열을 시작합니다.");
        console.log(`현재 준비된 진열대는 다음과 같습니다.`);

        let items: string = ""
        for (let i = 0; i < emart.length ; i++) {
            let floor = emart[i];
            for (let j = 0; j < floor.goods.length; j++) {
                let item = floor.goods[j];
                if (i === emart.length - 1 && j === floor.goods.length - 1) {
                    items += item;
                } else {
                    items += item + ", ";
                }
            }
        }

        console.log(items);
    };

    async askQuit(): Promise<boolean> {
        console.log("진열대 찾기가 종료되었습니다. 프로그램을 종료하시겠습니까? (Y/N)");
        const input = await getInputValue("명령어");

        switch (input.toLocaleLowerCase().replace(/\r\n/g,"")) {
            case "y":
                return true;
            case "n":
                return false;
            default:
                console.log("잘못된 명령어입니다.");
                return this.askQuit();
        }
    }

    async askItem(): Promise<number> {
        const input = await getInputValue("어떤 물건을 진열하시겠습니까?");
        for (let floor of emart) {
            for (let item of floor.goods) {
                if (item === input.toLocaleLowerCase().replace(/\r\n/g,"")) {
                    return floor.floor;
                }
            }
        }
        return 0;
    }
}

const tae = new taeEmart;
tae.runEmart().then();