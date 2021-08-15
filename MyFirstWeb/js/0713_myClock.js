
function startClock() {
//    1초마다 myFunc를 호출하는 코드를 여기에 쓸거임. 밑에 myFunc()먼저 읽고 오셈.
    setInterval(function() {
        myFunc()
    },1000);  // 특정 시간마다 내가 원하는 함수를 반복 호출해줌  1초는 1000밀리세컨즈
                                                     // first class function이기에 가능함
                                                     // 1초마다 함수를 찍어내겠지. 그리고 myFunc를 호출하겟지.
                                                    // 대신 이제 HTML에 myFunc대신에 startClock()을 호출해야겟
}

function myFunc() {
    // alert('This alert is for checking if it can be called')
    // 일단 위의 alert는 정상적으로 호출되는걸 확인했음.

    // 1. 현재시간을 알아보자.
    let today = (new Date()).toLocaleTimeString();    // 이건 class에 인스턴스 만들때 나옴. 무조건 new 가 나와야함.
                                          // new Date() 는 class 를 만드는거임
                                          // new Date()는 new해서 만들어지는 시점 딱 그 시점의 시간을 갖고 있는 객체가 됨.
                                          // 객체를 일단 괄호로 감싸주자. 고로, (new Date())임
    console.log(today);

    // 2. 시간을 출력할 객체를 알아내자.
    // 시간을 알아냈잖아. 그럼 이제 시간을 나타낼 영역을 잡아줘야함. 그럼 js 코드가 HTML에 표시할 영역의 element를 pointing 해야함
    // 근데 HTML이잖아. 어떡함? 그건 HTML이 처음 브라우저를 실행할 때 모두 객체로 만들어 해석함. 우린 그 객체를 사용하면 됨!
    // 프로그램적으로 레퍼런스를 가져오는거야. 그럼 우리는 사용할 수 있는거고.
    // 어떻게 가져올 수 있느냐? 변수를 하나 만들자 우선
    let myDiv = document.getElementById('clockDiv');        // 흰색 영역을 document라고 일컫는 객체임.
                                                                    // 흰색영역중에서도 element를 갖고 오는거임.
                                                                    //<body> ~~~ </body> 말하는거임
                                                                    // 근데 어떻게 할거냐? 유니크한걸 어케 가져올건데? div에 id를 부여해서 가져오자
                                                                    // getElementById 라는 메쏘드를 이용하면 쉬움!
        // 이제 HTML파일 div 태그안에 있는 글자를 바꿔줘야함
    myDiv.innerText = today;                  // 태그 안쪽에 있는 텍스트를 today로 바꿔주는거임
    // 비로소 현재시간을 찍었다! 근데 지금은 정적이잖아. 동적으로 움직이는 시계를 원한다구!
    // 어떻게하면 됨 그럼? 1초마다 반복하면 됨! 시간을 계속해서 1초마다 찍어버리면 되잖아?
}