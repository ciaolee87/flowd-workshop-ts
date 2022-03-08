// process.stdin.resume();
// process.stdin.setEncoding("utf8");
//
// process.stdin.on('data', data => {
//     console.log(data);
// });
//
// process.stdin.end();


import {getInputValue} from "../utils/stdio/stdio";

getInputValue("name")
    .then(res => {
        console.log(`inputValue : ${res}`);
    });


class Bingo {
    readonly gameSize: number;

    constructor(gameSize: number) {
        this.gameSize = gameSize;
    }

}

class BingoValue {
    private _owner: BingoOwner;
    get owner(): BingoOwner {
        return this._owner;
    }

    set owner(value) {
        this._owner = value;
    }

    constructor() {
        this._owner = BingoOwner.Undefined;
    }
}

enum BingoOwner {
    Undefined, User, Computer,
}
