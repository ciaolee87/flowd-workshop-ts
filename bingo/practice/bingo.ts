import {getInputValue} from "../../utils/stdio/stdio";
import {BingoPlayer, BingoPlayerByComputer, BingoPlayerByUser} from "./player";
import {BingoOwner} from "./bingoOwner";
import {BingoValue} from "./bingoValue";

export class Bingo {
    private gameSize: number = 0;
    private playground: BingoValue[][] = [];

    async runGame() {
        while (true) {
            const isInit = await this.initGame();
            if (!isInit) {
                console.log("게임 초기화 실패. 다시 시도하여 주십시오.")
                continue;
            }

            await this.startGame();

            const isQuit = await this.askQuit();

            if (isQuit) {
                process.exit(0);
            }

        }
    }

    async askQuit(): Promise<boolean> {
        console.log("종료 하시겠습니까?");
        console.log("y : 종료, n : 계속");

        const res = await getInputValue("명령어");

        switch (res.toLocaleLowerCase()) {
            case 'y':
                return true;
            case 'n':
                return false;
            default:
                console.log("잘못된 명령어 입니다.");
                return this.askQuit();
        }
    }

    async initGame(): Promise<boolean> {
        const gameSize = getInputValue("게임 사이즈 (자연수) : ");
        // todo 이곳에 숫자가 아닌 수를 넣었을떄 어떻게 해야 처리 해야 할까요?

        this.gameSize = Number(gameSize);


        if (this.gameSize <= 0) {
            // todo 이곳에서 자연수? 임을 증명하는 식을 넣는다면?
            console.log("게임 사이즈는 0보다 큰 자연수 이어야 합니다.");
            return false;
        }

        for (let x = 0; x < this.gameSize; x++) {
            const column: BingoValue[] = [];
            for (let y = 0; y < this.gameSize; y++) {
                column.push(new BingoValue());
            }
            this.playground.push(column);
        }

        return true;
    }

    async checkWinner(): Promise<BingoOwner> {
        // 1. 가로줄
        // 2. 세로줄
        // 3. 크로스 대각선 (왼쪽에서 오른쪽으로)
        // 3. 크로스 대각선 (오른쪽에서 왼쪽으로)

        let winner: BingoOwner = BingoOwner.Undefined;

        // 1. 가로줄
        for (let y = 0; y < this.gameSize; y++) {
            const prev: BingoOwner = this.playground[0][y].owner;
            if (prev === BingoOwner.Undefined) {
                continue;
            }

            for (let x = 1; x < this.gameSize; x++) {
                const value = this.playground[x][y];

                if (value.owner !== prev) {
                    break;
                }

                if (x === this.gameSize - 1) {
                    return prev;
                }
            }
        }

        // 2. 세로줄
        for (let x = 0; x < this.gameSize; x++) {
            const prev: BingoOwner = this.playground[x][0].owner;
            if (prev === BingoOwner.Undefined) {
                break;
            }

            for (let y = 1; y < this.gameSize; y++) {
                const value = this.playground[x][y];

                if (value.owner !== prev) {
                    break;
                }

                if (y === this.gameSize - 1) {
                    return prev;
                }
            }
        }

        // 3. 크로스 대각선 (왼쪽에서 오른쪽으로)
        const prevCrossLeftRight = this.playground[0][0].owner;
        if (prevCrossLeftRight !== BingoOwner.Undefined) {
            for (let i = 1; i < this.gameSize; i++) {
                const value = this.playground[i][i];
                if (value.owner === BingoOwner.Undefined) {
                    break;
                }

                if (value.owner !== prevCrossLeftRight) {
                    break;
                }

                if (i === this.gameSize - 1) {
                    return prevCrossLeftRight;
                }
            }
        }

        // 4. 크로스 대각선 (오른쪽에서 왼쪽으로)
        const prevCrossRightLeft = this.playground[this.gameSize - 1][0].owner;
        if (prevCrossRightLeft !== BingoOwner.Undefined) {
            for (let i = 1; i < this.gameSize; i++) {
                const value = this.playground[this.gameSize - i][i];

                if (value.owner !== prevCrossRightLeft) {
                    break;
                }

                if (i === this.gameSize - 1) {
                    return prevCrossRightLeft;
                }
            }
        }

        return winner;
    }

    async startGame(): Promise<boolean> {
        // 플레이어 추가
        const player: BingoPlayer[] = [
            new BingoPlayerByComputer(),
            new BingoPlayerByUser(),
        ];

        // 누가 먼저 할것인지 정하기
        console.log("선공을 결정합니다.");
        const throwDice: number[] = [];
        for (let i = 0; i < player.length; i++) {
            throwDice.push(await player[i].getRandNumber(6));
        }

        // todo 만약 같은 수가 나오면 어떻게 할것인가 생각해보기
        let maxDiceWithPlayerIndex = 0;
        let maxDice = 0;
        let info = "";
        for (let i = 0; i < player.length; i++) {
            if (maxDice < throwDice[i]) {
                maxDice = throwDice[i];
                maxDiceWithPlayerIndex = i;
            }
            info += `${player[i].getBingoOwner().toString()} : ${throwDice[i]}, `;
        }

        console.log("주사위 결과");
        console.log(info);
        console.log(`${player[maxDiceWithPlayerIndex].getBingoOwner()}가 선공입니다.`);

        // 승자부터 시작


        return true;
    }


}
