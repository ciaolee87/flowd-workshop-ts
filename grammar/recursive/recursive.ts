// 반복문 -> for, while
// 구성 성분
// 1. 조건이 참이면 루프를 계속 돈다 -> 조건
// 2. 그 조건이 맞으면 실행할 코드 ( 함수 ) 행동
const getNumberAtArray = (n: number) => {
    return 2 * n;
}

const sigma1 = (startN: number, endN: number): number => {


    let result = 0;
    for (let i = startN; i <= endN; i++) {
        result += getNumberAtArray(i);
    }

    return result;
}

const sigma2 = (nowN: number, endN: number, prevResult: number): number => {
    if (nowN <= endN) {
        const result = getNumberAtArray(nowN) + prevResult;
        return sigma2(nowN + 1, endN, result);
    } else {
        return prevResult;
    }
}

console.log(sigma1(1, 5));
console.log(sigma2(1, 5, 0));
