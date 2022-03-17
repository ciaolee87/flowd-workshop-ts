export type Floor = {
    floor: number,
    items: string[],
}

type Practice = number[];

const practice = [1, 2, 3, 4, 5];

// 똑같은걸 만들어봐
// const myMap = <T, R>(array: T[], callback: (value: T, index: number, array: T[]) => R): R[] => {
//
//     return [];
//
// }

// 짝수번째 맵
// const evenMap = <T, R>(array: T[], callback: (value: T, index: number, array: T[]) => R): R[] => {
//
//     return [];
//
// }
//
//
// [1, 2, 3, 4].sort();
// [1, 2, 3, 4].filter();
// [1, 2, 3, 4].findIndex();
// [1, 2, 3, 4].forEach();


// 1. map 함수 구현
// 맵이라는 함수를 만들려는 동기 (다른곳에서 필요하니까!!) : 배열 입력 후 내가 정한 특정 가공법을 통해서 입력된 배열이 가공이 되어 새로운 배열이 생성되어 리턴된다.
// 배열과 내가 정한 특정 가공법을 입력 후/ 을 통해서 입력된 배열이 가공이 되어 / 새로운 배열이 생성되어 리턴된다.


const mapTeacher = <T, R>(array: T[], callBack: (value: T, index: number, array: T[]) => R): R[] => {
    let list: R[] = [];

    const copied = JSON.parse(JSON.stringify(array));

    for (let i = 0; i < array.length; i++) {
        const elem = JSON.parse(JSON.stringify(array[i]));
        list = [...list, callBack(elem, i, array)];
    }

    return list;
};


const map = <T, R>(array: T[], callBack: (value: T, index: number, array: T[]) => R): R[] => {
    let result: R[] = [];
    for (let i = 0; i < array.length; i++) {
        result = [...result, callBack(array[i], i, array)]
    }
    return result;
};

const mapResult = map(practice, (value) => {
    value = value * 2;
    return value;
});

console.log(mapResult);

// 2. filter 함수 구현

const filter = <T>(array: T[], callBack: (value: T, index: number, array: T[]) => boolean): T[] => {
    let result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            result = [array[i], ...result];
        }
    }
    return result;
}

const filterResult = filter(practice, ((value) => {
    if (value > 4) {
        return true;
    } else {
        return false;
    }
}));

console.log(filterResult);

// 3. sort 는 패스하랍신다

// 4. findIndex 함수 구현

const findIndex = <T, R>(array: T[], callBack: (value: T, index: number, array: T[]) => R, target: T): number => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const findIndexResult = findIndex(practice, () => {
}, 3);

console.log(findIndexResult);


// 5. forEach 함수 구현

const forEach = <T, R>(array: T[], callback: (value: T, index?: number, array?: T[]) => void): void => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

forEach(practice, (value, index, array) => {
    console.log(value, index, array);
});

