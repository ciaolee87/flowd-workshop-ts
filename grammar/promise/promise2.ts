//....

// 프로미스 ( = Future )
// 프로미스가 존재 해야하 하는이유
// 1. 작업예약
// 2. => (then 콜백이 실행되는 시점에서) 예약을 한 시점에. 원하는 미래의 일이 이미 존재하고 구체적이야.
// 3. => (catch 콜백) 뭐가 일어날지 몰라.. then이 어떠한 이유에서라도 실행이 되지 못하게 되면 이걸로 와.
// then (집합)  catch (then의 여집합)
// then catch 교집합 없음
// then + catch 미리의 전부야
// => 반드시!! then 이 일어나면, catch 일어날수 없어.


// 프로미스를 생성할때 필요한 요소
// 1. => 프로미스 생성자에 들어가는 파라미터로서의 콜백 함수 => 콜백함수가 왜 들어가나? => 결정해줘. 그 결정의 조건을 정하는거야.
const callRestorant = new Promise<string>((resolve, reject) => {
    // check day
    // check person
    // ....

    const crit = Math.random() * 10;
    if (crit < 5) {
        // 모두가 참이면
        resolve("2022");
    } else {
        // 탈락 조건이 있으면
        reject("사람이 많아서");
    }
});


// 프로미스 사용자
callRestorant.then((day) => {
    console.log(`예약년도 : ${day}`);
    // 식당에 가는걸 하면되
    return callLaundry(day);
}).then(isOk => {
    // 식당가기
}).catch(reason => {

    // 식당에 못가면 이걸 하면되

    console.log(`실패 : ${reason}`)
});


// 프로미스 2
const callLaundry = (day: string) => {
    return new Promise((resolve, reject) => {
        if (day === "2022") {
            resolve(true);
        } else {
            reject("그땐 세탁이 안되요");
        }

    });
}
