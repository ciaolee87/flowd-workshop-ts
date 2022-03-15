// 1단계

const worker1 = (goodsNm: string): boolean => {
    const emart = [
        {floor: 3, goods: ["computer", "game", "electronic"]},
        {floor: 2, goods: ["cloth", "sock"]},
        {floor: 1, goods: ["milk", "snack"]},
    ];

    for (let floor of emart) {
        for (let good of floor.goods) {
            if (good === goodsNm) {
                return true;
            }
        }
    }

    return false;
}


// 1 단계의 단점. 물건 이름이 나올 때마다 모든 층을 돌면서 진열대를 확인해야 한다.
// 이 워커는 지정된 이마트밖에 못찾는다.
// 이 워커는 딱 이 일 밖에 못한다. -> 확장 가능한지? 한번만 교육 시켜서 여기저기 보내서 쓰고 싶을때?
// 이마트를 바꿀수도 있다, 리스트도 계속 바뀐다. => 상수가 아닌 변수로 생각해서 바꿔보자.

// 즉, 물건을 빨리 찾는 방법을 찾으면 된다.
// 여러가지 해결법중에 한가지로 생각해보자
// => 해결방법1 . 워커한테 미리 어떤층에 무엇이 있는지 리스트(해결방법 1)를 적어준다.
// 리스트를 준다의 의미 : 물건이 어떤층에 있는지 찾는 방법을 알려준다 -> 함수 => 물건이름을 넣으면 층이 나온다.
// => 물건이름 = 층 인 데이터 만들기


// 해결방법 2: 다른해결방법이 있는지 ?
//
// 2 단계 :
type GetFloorFromList = (goodsNm: string) => number;

const makeList = (): GetFloorFromList => {
    return goodsNm => {
        const emart = [
            {floor: 3, goods: ["computer", "game", "electronic"]},
            {floor: 2, goods: ["cloth", "sock"]},
            {floor: 1, goods: ["milk", "snack"]},
        ];

        for (let floor of emart) {
            for (let good of floor.goods) {
                if (good === goodsNm) {
                    return floor.floor;
                }
            }
        }
        return -1;
    }
}


// 워커는 층을 알려주는 기계로 한층한층 찾아보는것을 안해도 됨 => 이제 머신만 업그레드 하면 더 빨라질수 있음
const workder2 = (goodsNm: string, getFloorFromMachine: GetFloorFromList): boolean => {
    if (getFloorFromMachine(goodsNm) !== -1) {
        return true;
    } else {
        return false;
    }
}


// 기계가 전체를 돌면서 봐야 하는데, 리스트의 갯수가 많아져서 느려짐 => 이름 - 층 을 맵핑해서 한번에 찾는 기능으로 대체하기
// 리스트를 다 보는것보다 맵을 이용해서 한번에 찾는 방법을 보자.
