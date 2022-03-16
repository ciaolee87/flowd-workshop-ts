//### 콜백 레슨 2


//

// 비트코인 -> 원화로 바꿔주는 계산기 만들어 줄꺼야
type Bitcoin = number;
type Won = number;
type NowWonPrice = number
type MyBalance = { bitcoin: Bitcoin, nowWonPrice: NowWonPrice };
type AddFunc = (params: { bitcoin: Bitcoin, wonRate: NowWonPrice }) => Won;

// type Exchange = 'upbit' | 'bitsum';

enum Exchanger {
    Upbit = 'upbit',
    Bitsum = 'bitsum',
}

// 나중에 어디선가 쓸 유틸리티 함수
// 첫번째 코인수, 두번째 지금 가격
const transBitcoinToWon = (params: { bitcoin: Bitcoin, wonRate: NowWonPrice }): Won => {
    return params.bitcoin * params.wonRate;
}


const transBitcoinToWonWithFloor = (params: { bitcoin: Bitcoin, wonRate: NowWonPrice }): Won => {
    const withFloor = Math.floor(transBitcoinToWon(params));
    return withFloor;
}


// 각 거래소에서 현재가와 비트코인 잔고 개수를 가저오는 함수
const getBalance = (exchange: Exchanger): MyBalance => {
    switch (exchange) {
        case Exchanger.Upbit :
            return {
                bitcoin: 0.000002,
                nowWonPrice: 5100
            };
        case Exchanger.Bitsum:
            return {
                bitcoin: 0.002,
                nowWonPrice: 5340,
            }
        default:
            return {
                bitcoin: 0,
                nowWonPrice: 0,
            }
    }
}


// 업비트, 빗썸, .... 여러거래소 내 비트코인 자산을 가져오는 프로그램
// 1. 각 거래소에서 내 비트코인 갯수랑, 현재가를 가져온다.
// 2. 각 거래소에서 가져온 값들을 원화로 바꿔서 더 해준다.
// 3. 총 합을 화면에 보여준다.
const main1 = () => {
    // 1. 모든 거래소의 잔고를 가저온다.
    const myExchanger = [Exchanger.Upbit, Exchanger.Bitsum];


    const myBalanceList: {
        exchanger: Exchanger,
        balance: MyBalance
    }[] = [];

    for (let exchanger of myExchanger) {
        const myBalance = getBalance(exchanger);

        myBalanceList.push({
            exchanger,
            balance: myBalance
        });
    }


    // 2. 원화로 바꿔서 더해준다.
    let myTotalBalance = 0;
    for (let myBalance of myBalanceList) {
        const bitcoinToWon = transBitcoinToWon({
            bitcoin: myBalance.balance.bitcoin,
            wonRate: myBalance.balance.nowWonPrice,
        });

        myTotalBalance += bitcoinToWon;
    }


    // 출력
    console.log(`myBalance: ${myTotalBalance}`);
}


// 추가 개발: 각 거래소에서 가격과 갯수를 받아와서 원화로 바꿀때, 소수점은 절삭하고 싶어.
const getMyTotalBitcoinToWon = (): number => {
    // 1. 모든 거래소의 잔고를 가저온다.
    const myExchanger = [Exchanger.Upbit, Exchanger.Bitsum];


    const myBalanceList: {
        exchanger: Exchanger,
        balance: MyBalance
    }[] = [];

    for (let exchanger of myExchanger) {
        const myBalance = getBalance(exchanger);

        myBalanceList.push({
            exchanger,
            balance: myBalance
        });
    }


    // 2. 원화로 바꿔서 더해준다.
    let myTotalBalance = 0;
    for (let myBalance of myBalanceList) {
        const bitcoinToWon = transBitcoinToWonWithFloor({
            bitcoin: myBalance.balance.bitcoin,
            wonRate: myBalance.balance.nowWonPrice,
        });

        myTotalBalance += bitcoinToWon;
    }


    // 출력
    return myTotalBalance;
}


// 1. 정확한 값을 계산하기 위해서 소수점을 버리지 않는다. -> 이용해서 사용
// 2. 대략적인 값을 가지고 오기 위해서 소수점은 버리고 쓴다
// 3. 모든 거래소를 검색해서 더해서 가저오는것은 바뀌지 않아.
// 4. 바뀌는 개념은 -> 덧샘을 하는 부분밖에 없어.


// 1. 소수점이 없는 전체 잔고
const getMyTotalBitcoinToWonWithoutDecimal = (): number => {
    // 1. 모든 거래소의 잔고를 가저온다.
    const myExchanger = [Exchanger.Upbit, Exchanger.Bitsum];


    const myBalanceList: {
        exchanger: Exchanger,
        balance: MyBalance
    }[] = [];

    for (let exchanger of myExchanger) {
        const myBalance = getBalance(exchanger);

        myBalanceList.push({
            exchanger,
            balance: myBalance
        });
    }


    // 2. 원화로 바꿔서 더해준다.
    let myTotalBalance = 0;
    for (let myBalance of myBalanceList) {
        const bitcoinToWon = transBitcoinToWonWithFloor({
            bitcoin: myBalance.balance.bitcoin,
            wonRate: myBalance.balance.nowWonPrice,
        });

        myTotalBalance += bitcoinToWon;
    }


    // 출력
    return myTotalBalance;
}


/// 1. 소수점 있는 전체 잔고
const getMyTotalBitcoinToWonWithDecial = (): number => {
    // 1. 모든 거래소의 잔고를 가저온다.
    const myExchanger = [Exchanger.Upbit, Exchanger.Bitsum];


    const myBalanceList: {
        exchanger: Exchanger,
        balance: MyBalance
    }[] = [];

    for (let exchanger of myExchanger) {
        const myBalance = getBalance(exchanger);

        myBalanceList.push({
            exchanger,
            balance: myBalance
        });
    }


    // 2. 원화로 바꿔서 더해준다.
    let myTotalBalance = 0;
    for (let myBalance of myBalanceList) {
        const bitcoinToWon = transBitcoinToWon({
            bitcoin: myBalance.balance.bitcoin,
            wonRate: myBalance.balance.nowWonPrice,
        });

        myTotalBalance += bitcoinToWon;
    }


    // 출력
    return myTotalBalance;
}


// 중복되는 부분을 합치고, 중복되지 않는 부분은 => 실제 사용할때 정의 하면 되지 않을까?
const getMyTotalBitcoinToWonWithPerfect = (addFunc: AddFunc): number => {
    // 1. 모든 거래소의 잔고를 가저온다.
    const myExchanger = [Exchanger.Upbit, Exchanger.Bitsum];


    const myBalanceList: {
        exchanger: Exchanger,
        balance: MyBalance
    }[] = [];

    for (let exchanger of myExchanger) {
        const myBalance = getBalance(exchanger);

        myBalanceList.push({
            exchanger,
            balance: myBalance
        });
    }


    // 2. 원화로 바꿔서 더해준다.
    let myTotalBalance = 0;
    for (let myBalance of myBalanceList) {
        const bitcoinToWon = addFunc({
            bitcoin: myBalance.balance.bitcoin,
            wonRate: myBalance.balance.nowWonPrice,
        });

        myTotalBalance += bitcoinToWon;
    }


    // 출력
    return myTotalBalance;
}


const main = () => {
    getMyTotalBitcoinToWonWithPerfect(params => {
        return params.bitcoin * params.wonRate;
    });
}
