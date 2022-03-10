// 프로미스 + 테크닉 = 자주쓰이는 관용구 적인 어순
// -> 간과 했던것 : 약속은 1번, 그 실행도 1번!
// -> 디자인패턴 (컴퓨터 언어에서 관리하기 편한 방법으로 쓰는 관용구)
// 프로미스 + (팩토리 패턴 => 단순히 실행하면(= 함수, 메소드, 'function(파라미터)') 새로운 객체(값 = 메모리에 새로 쓰이는 작업)이 리턴 되는 것)


class Phone {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const makePhone = (name: string): Phone => {
    return new Phone(name);
}


const iPhone = makePhone("iPhone");
const galaxy = makePhone("Galaxy");


// Promise
const meetTomorrow = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, 1000);
});

// 이상하다. 내일만나 해서 내일이됬는데 어제 만난 내일을 또 말하는격... 이상하다.
// meetTomorrow.then(() => {
//     return meetTomorrow;
// }).catch(reason => {
//
// });

interface MeetTomorrowResult {
    dayAfter: number;
    hasMeet: boolean;
}

const makePromiseToMeetTomorrow = (dayAfter: number): Promise<MeetTomorrowResult> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasMeet = Math.floor(Math.random() * 10);
            if (100 < dayAfter) {
                reject(`Error : dayAfter has overflow ${dayAfter}`);
            } else {
                resolve({
                    dayAfter: dayAfter,
                    hasMeet: hasMeet < 5,
                });
            }
        }, 1000);
    });
}

const promiseWithFriend = makePromiseToMeetTomorrow(1);


// promise then 에 들어가는 콜백함수는 반드시 1개의 타입의 리턴값만 가진다!!
//
// promiseWithFriend.then(value => {
//     if (value) {
//         return makePromiseToMeetTomorrow();
//     } else {
//         throw new Error("not meet");
//     }
// }).then(() => {
//     return makePromiseToMeetTomorrow();
// }).then(() => {
//
// }).catch(reason => {
//
// });


// 내일 만나면 내일 또만나라는 약속을 영원히 하는것 단, 실패하면 그날로 쫑.
// 준혁 사고 프로세스 -> 뭔가를 약속한다 -> 내일 만나자는것을 -> 내일 만나면 또 내일만나는 것을 약속 -> 그것이 영원히
// 1. 뭔가를 하는것을 시작하기로 한다.
// 2. 내일 만나 약속을 한다.
// 3. 내일 만나지면 그다음날 또 만나 라는 약속을 한다.
// 4. 내일 못만나면 그걸로 쫑
// 5. 그걸 계속 하려면 -> 루프

// 봉봉 솔루션 -> 삐빅

// const makeRelationship = () => {
//     let check: boolean = true;
//
//     while (check) {
//         const meetPromise = makePromiseToMeetTomorrow();
//
//         meetPromise.then(value => {
//             console.log("promise done");
//             if (!value) {
//                 check = false;
//             }
//         }).catch(reason => {
//             console.log(reason);
//         })
//         console.log("promise end");
//     }
// }
//
// makeRelationship();


// 준혁 솔루션 1. 프로미스 + 리컬시브 패턴
// 루프 문으로 기다려주지 않아서 이렇게 했음

const makeRelationshipWithPromise = () => {
    makeRes(makePromiseToMeetTomorrow(1))
        .catch(reason => {
            console.log(reason);
        });
}

const makeRes = (prev: Promise<MeetTomorrowResult>): Promise<MeetTomorrowResult> => {
    return prev.then(res => {
        console.log(res);
        if (res.hasMeet) {
            return makeRes(makePromiseToMeetTomorrow(res.dayAfter + 1));
        } else {
            throw new Error(`dayAfter : ${res.dayAfter}, and relation end.`);
        }
    });
}

// makeRelationshipWithPromise();


// 준혁 솔루션 2. await async === 프로미스!  -> 프로미스가 한번 뭍으면 영원하다.
const makeRelationshipWithPromise2 = async (): Promise<string> => {
    console.log("데이트 시작")
    let firstDay = 1;
    while (true) {
        const result = await makePromiseToMeetTomorrow(firstDay);
        firstDay += 1;

        console.log(result);

    }
    console.log("데이트 종료");
    return "date end";
}


makeRelationshipWithPromise2().then(value => {
    console.log(value);
}).catch(reason => {
    console.log(reason);
});


