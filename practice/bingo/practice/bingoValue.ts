import {BingoOwner} from "./bingoOwner";

export class BingoValue {
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

