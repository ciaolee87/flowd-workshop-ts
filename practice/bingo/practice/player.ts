import {getInputValue} from "../../../utils/stdio/stdio";
import {BingoOwner} from "./bingoOwner";
import {BingoValue} from "./bingoValue";

export interface BingoPlayer {
    getBingoOwner(): BingoOwner;

    getRandNumber(maxNumber: number): Promise<number>;

    getDecision(playground: BingoValue[][]): Promise<BingoLocation>;
}

export interface BingoLocation {
    x: number;
    y: number;
}

export class BingoPlayerByComputer implements BingoPlayer {
    readonly owner = BingoOwner.Computer;

    getBingoOwner(): BingoOwner {
        return this.owner;
    }

    async getDecision(playground: BingoValue[][]): Promise<BingoLocation> {
        while (true) {
            const res = {
                x: Math.floor(Math.random() * playground.length),
                y: Math.floor(Math.random() * playground.length),
            }

            if (playground[res.x][res.y].owner === BingoOwner.Undefined) {
                return res;
            }
        }
    }

    async getRandNumber(maxNumber: number): Promise<number> {
        return Math.floor(Math.random() * maxNumber);
    }

}


export class BingoPlayerByUser implements BingoPlayer {
    readonly owner = BingoOwner.User;

    getBingoOwner(): BingoOwner {
        return this.owner;
    }

    async getDecision(playground: BingoValue[][]): Promise<BingoLocation> {
        const res: BingoLocation = {
            x: 0,
            y: 0,
        };

        while (true) {
            console.log("체크할 좌표를 입력하여 주십시오.");

            const x = await getInputValue("X 좌표");
            res.x = Number(x);
            const y = await getInputValue("Y 좌표");
            res.y = Number(y);

            // todo  게임 사이즈에 안맞는 잘못된 숫자가 넣어지면 어떻게 에러 처리 할지 고민해보기
            if (playground[res.x][res.y].owner === BingoOwner.Undefined) {
                return res;
            } else {
                console.log("이미 체크되어진 빈칸 입니다.")
            }
        }
    }

    async getRandNumber(maxNumber: number): Promise<number> {
        // todo 잘못된 숫자?
        const value = getInputValue(`임의의 숫자를 입력하여 주십시오. (1 ~ ${maxNumber} 사이)`)
        return Number(value);
    }

}
