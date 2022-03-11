function goToSchool() {
    console.log("학교에 가다");
}

function arriveAtSchool() {
    setTimeout(() => {
        console.log("학교에 도착했다");
    }, 1000);
}

function study() {
    console.log("공부를 하다");
}

// 프로미스 생성

function arriveAtSchoolAfterStudy() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log("학교에 도착했다")
            resolve();
        }, 1000);
    })
}

// goToSchool();
// arriveAtSchoolAfterStudy().then(() => {
//     study();
// });


// Practice

// 10일간 학교를 갈 수도 있고 안갈 수도 있다. 또한 학교를 가면 공부를 할 수도 있고 놀 수도 있다.
// 매일 학교에 갈 것인지 말 것인지를 판별하고, 학교에 가면 공부를 했는지 안 했는지를 판별한다.
// 10일 조건. 학교를 갈지 말지 조건. 공부를 할지 놀지 조건.

enum Excute {
    nothing,
    go,
}

type ResultValue = {
    day: number,
    excute: Excute,
    resultValue: boolean,
}

const check = (): boolean => {
    return Math.floor(Math.random() * 10) > 5;
}

const enumCheck = (): Excute => {
    return Math.floor(Math.random() * 2);
}

const makePromise = (day: number) => {
    return new Promise<ResultValue>(((resolve, reject) => {
        setTimeout(() => {
            const resultValue = check();
            const resultEnum = enumCheck();
            resolve({day, excute: resultEnum, resultValue});
        }, 1000);
    }))
}

// makePromise(1, excute.go)
//     .then((value: ResultValue): void => {
//         if (value.excute == excute.go && value.resultValue) {
//             console.log(`공부를 했다.`);
//         } else if (value.excute == excute.go && !value.resultValue) {
//             console.log(`놀았다.`);
//         }
//     });

const makeWeekPromise = () => {
    weekPromise(makePromise(1))
        .catch(reason => {
            console.log(reason)
        });
}

const weekPromise = (prev: Promise<ResultValue>): Promise<ResultValue> => {
    return prev.then(res => {
        if (res.day < 11) {
            if (res.excute == Excute.go && res.resultValue) {
                console.log(`#Day ${res.day} : 학교를 가서 공부를 했다.`);
            } else if (res.excute == Excute.go && !res.resultValue) {
                console.log(`#Day ${res.day} : 학교를 가서 놀았다.`);
            } else {
                console.log(`#Day ${res.day} : 학교에 가지 않았다.`);
            }
            return weekPromise(makePromise(res.day + 1));
        } else {
            throw new Error(`열흘이 지났다`);
        }
    })
}

// 1개의 사건으로 처리해버렸다..
// makeWeekPromise();


// 2번의 Promise 체인으로 만들어볼 수도 있을텐데.
// 2개의 사건으로 나누고, 각각을 판별한다.

type DoType = {
    day: number,
    check: boolean,
}

type GoType = {
    day: number,
    activity: Excute
    text: string,
}

const secondMakeDoPromise = (day: number) => {
    return new Promise<DoType>(((resolve, reject) => {
        setTimeout(() => {
            const resultValue = check();
            resolve({day, check: resultValue});
        }, 1000);
    }))
}

const secondMakeGoPromise = (prev: Promise<DoType>): Promise<GoType> => {
    return prev.then(res => {
        const activity = enumCheck();
        const text = res.check ? "공부를 했다" : "놀았다";
        return {day: res.day, activity, text};
    });
};

const secondDayPromise = (prev: Promise<GoType>): Promise<GoType> => {
    return prev.then(res => {
        if (res.day < 11) {
            if (res.activity == Excute.go) {
                console.log(`#Day ${res.day} : 학교를 가서 ${res.text}`);
            } else {
                console.log(`#Day ${res.day} : 학교에 가지 않고 ${res.text}`);
            }
            return secondDayPromise(secondMakeGoPromise(secondMakeDoPromise(res.day + 1)));
        } else {
            throw new Error(`열흘이 지났다`);
        }
    })
}

const secondExcutePromise = () => {
    secondDayPromise(secondMakeGoPromise(secondMakeDoPromise(1))).catch((e) => console.log(e));
}

secondExcutePromise();