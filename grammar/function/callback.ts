//....


// callback
// 콜백 ( call - back ) :  <무엇인가 한다(동사 -> 함수)> 내가 정하고 (정의). -> 이것을 나 아닌 다른 애한테 시킨다.
// -> 무엇인가 한다를 내가 정의 하고 => 함수는 내가 만든다. => 이게 누가 할지는 몰라.
// -> 무엇인가한다(함수)를 하는(함수)를 (실행되지 않은 데이터 덩어리 = 값 = () 나올수가 없어.)  다른애 애를 불러서 시킨다 "() -> 요 표시가 나와야해." .


// 실제 상항
// 콜백이 필요한 상황이 무엇인지 부터  아는게 중요
// 콜백이 존재하는 이유가 있어야 존재 할수 있어
// 우리는 개발에서 존재할 이유가 없으면 존재 하지 않아야 한다.
// 필요없는것은 있을 필요가 없어.
// 있으면 -> 필요한거야


// 콜백함수를 쓰는애가 있어야 콜백이 필요한거야
// 콜백함수가 없다면 -> 쓰는애도 없어야해
// 쓰는애가 필요한다면 콜백이 반드시 있어해
// 쓰는애가 먼저 생겨
// 쓰는애가 왜 콜백이 필요해라는 이유를 알아야해


// 쓰는애는 왜 콜백을 부를까?
// 코딩에 기본
// 1. 내 일을 빠르게 해주니까
// 2. 일을 빠르게 한다
//      1. 일을 적게 하면 (행동 갯수를 줄여)
//      2. 비교적 비슷한 일을 하는 애들을 그룹으로 묶어서 통일된 행동패턴이 보이면 그걸로 일을 통일시켜 관리하고, 그 개수를 통일시킨다. -> 일을 적게한다 -> 일을 빠르게한다.
//      3. 일을 효율적으로 한다는 말은. 내가 할 일의 전체적인 것을 파악하고 그룹화하고 단순화(중복을 없엔다 중복을 1개로 만들고. 그것을 공유한다.)하고 구체적으로 바꾼다  -> 일을 적게해 (이마트 직원 (물건 가져다놓는))


// 코딩에 기본중 ( 중복없이 간결하게 정한다. )
// 중복제거 -> 콜백시스템이 존재하는거야.
// 그룹화 + 자동화(= !!!똑같은 작업!!! 을 따로 정의해서 그것만 불러서 쓴다)


// *********** for 문에 대한 정리

// for => 순서대로 지정한 횟수 만큼 반복한다. => 반복, 순서, 횟수,
// while => X 자주 쓰지 않는다. 여러가지 이유가 있겠지만 while 의 모든 기능은 for 로 대체 될수 있다 => for 구문의 특성만 잘 알면 while 은 딱히 필요 없다.
// 특정조건이 되기 전까지 무한! 반복 => for 횟수가 무한이면되. fori => for(let i = 0; true; i++) : i가 0부터 시작해서 반복문 실행하며 i 가 1씩 올라감이 무한반복 = while(0 <= i) : while 의 반복을 결정하는 조건의 변수값은 외부에서 입력이 된다. for => 언제나 i 값을 스스로 생성해서 스스로 올려

// 특정조건, 특정횟수 만큼 반복하는 반복문을 만들기 위한 기능
// 뭘 반복해? 왜 반복해
// 대부분의 상황에서 하는거 -> 배열 의 순차접근 (많은 경우에 이때만 쓴다.)

// 대부분의 상황에서의 for 문에 대한 해석 ( => 배열 순차접근 관점)
// 기본 (C 부터 오는 전통적인 for 구문)

// fori => 인덱스 순환 => 배열은 입력되는값이고, for 구문이 그 배열에 뭐가 있는지 모르지만. 내가 맘대로 뺄께. 배열은 데이터가 자기 의지에 없이 뽑힘을 당해.
// 특장점 => i  변하는 식을 내가 정의하고 내맘대로 배열의 값을 뽑을수 있어.
// 이 특장점을 가지기 위해서 반드시 수반해야하는 위험성이 있어.
// i를 내가 맘대로 할수 있는데 ->
// 그 i번째 데이터가 있다는것은 보장 하지 못해
// 쓰이는 조건 : 내가 원하는 순서(정방향, 역방향)대로 데이터를 뽑고 싶을때, 단. 내가 맘대로 정했으니. 배열에서 에러가 나지 않도록 특별히 주의 해야해
// + 몇번째 인덱스 값을 알고 싶을때


// 나중에 나온것
// forof => 단순 객체 순환
// => 습관적으로 배열에 배열이름.fori (젯브레인사 IDE) 쓰면 => list 는 값이 있을때
// list.fori
// for(let i = 0; i < list.length; i++) {} => 자동
// 왜 자동화 해놨을까? => 많이 쓰니까?
// for (let elem of list) {}
// for (let i = 0; i < list.length; i++) {
//      const elem = list[i];
//      ( elem ) => void
// }
// i값이 없다... => i값을 알아야 할땐 반드시 단순 객체 순환 이라고 하더래도 fori 써야 한다.


// ### 매우중요!!!!!!!
// 중요!! 모든 디자인 패턴 -> 기능 -> 함수 (또는 메소드를 포함하는 객체)
// 뭔가 실행하는 시점을 정하는것, 논리적으로 정확하게.!!
// 실행(기능)의 논리적 실행의 시각 순서를 거짓(에러) 없이 정하는 대표적인 패턴


// 이마트 직원 (물건 가져다 놓은 일) 을 하는걸 코드
// 워커가 물건을 받아들고 매장에 진열을 하는데.
// 진열하는 칸이 있으면 진열하고 결과값은 true,
// 진열하는 칸이 없어서 진열을 못하면 false
const worker = (goodsNm: string): boolean => {
    const emart = [
        {floor: 3, goods: ["computer", "game", "electronic"]},
        {floor: 2, goods: ["cloth", "sock"]},
        {floor: 1, goods: ["milk", "snack"]},
    ];

    for (let floor of emart) {
        for (let good of floor.goods) {
            if (good === goodsNm) {
                // return 단순히 값을 출력한다
                // + 이 함수를 값을 출력하고 바로 종료 한다.
                // 그 다움줄.. 아예 보지도 않는다.
                return true;
            }
        }
    }

    return false;
}

// 이 직원은 은평구청점 이마트에서만 3층부터 시작해서 아래층까지 모두 검색해서 찾는 일꾼
// 이마트 직원 -> 은평구처점만 있지 않아도 되어야 할때 -> 전근
// 전근 -> 이마트의 구성이 바뀌어
// 지금 만든 일꾼 : 은평구청

// Javascript => typescript 오기 위한 하나의 도구 => 타입이 없는 객체를 타입이 있는 존재로 체크하기 위해서 =>
// 타입이 없는 객체 = 뭔지 모른다
// 뭔지 모른다를 => 뭔다 라고 할라면
// 요 구문은 뭔지 모르는 모든것을 포함해야해
// 뭐든 정의 할수 있어

type EmartWithType = {
    floor: number;
    goods: string[];
};

type Floor = number;
type Checker = (goodsNm: string) => Floor;


// 기본 객체지향 프로그래밍에서 출발함 => 객체로 변환 가능. 같은 객체임을 증명
// => 추상화
// => 클래스를 정의 하거나, 어떠한 데이터가 이 구성으로 되어있을 거라고 인식 시키는거야
// 이게 무엇이든 표현은 할수는 없어.
// 함수를 인터페이스로 구현
// 배열을 인터페이스 구현 못해
// 데이터형 (string, number) 기본 데이터형은 인터페이스로 표현 못해
interface EmartWithInterface {
    floor: number;
    goods: string[];
}


// 두번째 유능해진 워커
// 어느 지점이든 갈수 있는 이마트 직원이 된거야.
const worker2 = (emart: EmartWithInterface[], goodsNm: string): boolean => {
    for (let floor of emart) {
        for (let good of floor.goods) {
            if (good === goodsNm) {

                return true;
            }
        }
    }
    return false;
}

// 점점 층도 많아지고, 물건도 많아지니
// 효율이 좋지 않아졌다. 층수를 알아서 빨리 찾아주는게 효율적인거 같다.
// 층수를 바로 알려주는 기계를 발급해서 주자.
// 그 기계가 어떻게 동작하는지 워커는 알 필요는 없다.
// 워커는 단순히 물건을 받고 바코드를 찍고 나오는 층수로 가서 진열만 하자.

// 업그레이드 해주기 위해서 해야 할 일
// 기계 만들어주기
// 기계 쓰는법 알려주기


const finderOrigin = (goodsNm: string, emart: EmartWithInterface[]): number => {
    for (let floor of emart) {
        for (let good of floor.goods) {
            if (good === goodsNm) {
                return floor.floor;
            }
        }
    }
    return -1;
}


// 문법 => 팩토리 패턴, 데코레이션 페턴,
// AOP (JAVA) @어노테이션이랑도 관련이 있어
const finderFactory = (emart: EmartWithInterface[]): ((goodsNm: string) => number) => {
    return goodsNm => {
        return finderOrigin(goodsNm, emart);
    }
}

// 1. 패턴 : 팩토리
// 팩토리 = 공장 => 언제나 새로운걸 만드는 곳이야
// 원재료 (파라미터) 값이 들어오면 가공해서 새로운걸 만드는(리턴하는) 곳
// 타입스크립트의 1급 객체는 함수 (데이터, 함수)

// 1-1 : 값을 받아 값을 리턴
const getName1dot1 = (nm: string): string => {
    return nm + "님";
}


// 2. 데코레이션 패턴 : AOP (JAVA) @어노테이션이랑도 관련이 있어
// 주로 기존 기능을 중심으로 껍데기를 씌우는 일
// 양파 -> 최초에는 1단계 (1겹)
// 양파가 자라면서 다음겹이 생겨 (2겹)
// 계속자라 (n겹)


// 오일 1개당 튀김이 2개씩 나와.
type Litter = number;
type FriedChicken = number;

type FrierSkill = (oil: Litter) => FriedChicken;

// const fryier: FrierSkill = (oil: number): number => {
//     //...
//
//     //
//     return oil * 2;
// }


const frier: FrierSkill = oil => {
    // 튀김기술
    return oil * 2;
}


// 모든조건은 놔두고
// 오일을 넣을때 오일을 한번 채망에 거른다. 만 추가하고 싶어
// -> ~ 만 추가하고 싶어 = 기존에 있는거 아무것도 안바꿀거야.
// -> 기존에 들어가는 입력값, 출력값은 고정 (즉 바뀌지 않아)
// -> 뭘해도 기존 틀을 깨면 안되.

const fryierJob2: FrierSkill = (oil: Litter): FriedChicken => {
    oil = oil * 0.9; // 채망에 오일을 거른다. -> 오일양이 줄어든다.
    return frier(oil);
}


// 튀김이 튀겨지고, 자르고 셋팅을 하면 조금 줄어들어

const fryierJob3 = (oil: Litter, salt: number): FriedChicken => {
    oil = oil * 0.9 + salt; // 채망에 오일을 거른다. -> 오일양이 줄어든다.
    let result = frier(oil);
    result = result * 0.8;
    return result;
}

const friterJob4 = (salt: number): FrierSkill => {
    return oil => {
        oil = oil * 0.9 + salt; // 채망에 오일을 거른다. -> 오일양이 줄어든다.
        let result = frier(oil);
        result = result * 0.8;
        return result;
    }
}


const chickenWorker = (fryerSkill: FrierSkill): FriedChicken => {
    const oil = 10;
    return fryerSkill(oil);
}


chickenWorker(oil => {
    return oil * 2;
});
chickenWorker(frier);
// chickenWorker(fryierJob3); // <- 안됨.
chickenWorker(friterJob4(4));
