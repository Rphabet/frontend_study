


// 원래는 통합 html 파일에 이렇게 코드를 넣었었음.
//<script>
// javascript code를 넣어요.
// 근데 여기에 하지말고, 다른 디렉토리에 JS 만 작성해서 링크 시켜서 작성하자
// 왜냐고? 다른 언어가 나오면 유지보수가 힘들어지고 복잡해지잖아. 가독성도 떨어지고.
//alert("Alert appears")    // 이넘은 blocking 함수임. 실행이 여기서 일시중단된단 소리!
// </script>


//////////////////////////////////////////////////////

// JavaScript 에 대해 알아보자

// 변수를 만들어보자

a = 100 // python style, js도 가능 그렇지만 js에선 권장하지 않음.
let tmp1 = 100;         // number
let tmp2 = 'Hello';     // string
let tmp3 = true;        // boolean     lowercase true and lowercase false
let tmp4 = [1, 2, 3]    // array        python에선 list 임.

// 모든 문장 선언후 semi colon 줍니다~ 관례임

// 객체 literal   (파이썬 dictionary랑 비슷하게 {} 중괄호를 씀. 근데 이건 객체를 뜻함)
// 근데 객체 치곤 왜 property, methods 모두가 표현되어있진 않지??
let tmp5 = {
    name : '홍길동',
    age : 25,
    address: 'Seoul',
    get_info : function () {
        return this.name + this.address;    // this 는 파이썬의 self임.

    }
}

tmp5.address                 // 객체지향의 공통적인 특성. 닷 오퍼레이터를 쓸수있다.
console.log(tmp5.address);    // 브라우저 내부에서 도는 js 특성상 프린트를 찍어도 아웃풋을 볼 수가 없음.
                             // 그래서 console.log 라는 놈을 씀 콘솔에서 확인함.
                             // browser 에서 f12 눌러서 console 들어가면 거기서 확인할 수가 있음.

console.log(tmp5['age']);        // 여긴 인덱싱 같은걸 사용할 수 있음.
                                // 이렇게 array(배열) 형태를 이용할 때는 키값을 정확히 줘야함

console.log(tmp5.get_info())

// 함수  function    여기선 def 안씀. function 씀

/*
    def my_func(x,y):
        result = x + y
        return result

    my_func 가 변수임 그리고 그 안에 해당 func에 대한 reference를 갖고 있었다. 라는 얘기 했었음
 */

// JavaScript의 함수는 키워드를 function 키워드를 씀.
// 선언적 함수
function my_func(x, y) {
    result = x + y;
    return result;
}

// JavaScript의 또 다른 함수 형태 (First Class Function 을 지원)  ** first class function 은 함수가 변수에 저장될 수 있다.
//                                                             결괏값으로 함수를 리턴할 수 있다.
//                                                             다른 함수의 인자로 들어갈 수 있음.
//                                                             위 세가지를 충족하면 1급 함수가 될 수 있음.

// 변수에 함수가 저장될 때, 함수의 이름은 빠진다.  이런 함수를 익명함수라 칭한다.
// 익명함수는 js에서 람다함수라고 칭함  (파이썬의 람다와 완전히 다름. 람다 식임)
let tmp6 = function(x, y) {
    let result = x + y;
    return result;
}

// Q. 선언적 함수를 많이 쓰나요? 람다를 많이 쓰나요?
// A. 둘다 많이씀!  그렇지만 람다함수도 되게 적극적으로 많이 사용하는 추세임. 함수를 동적으로 만들기때문.
