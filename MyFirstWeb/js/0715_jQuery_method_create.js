// 기억하자. jQuery는 무조건 method로 event를 처리함.

function myFunc() {

    // 지금까지는 현재 html document에 이미 존재하고 있는 element를 찾아서 제어하는것을 배웠음
    // 새로운 Element를 만들어서 붙이려면 어떻게 해야 하나요?
    // h1 Element를 만들어서 붙여보자.
    // selector는 사용 불가! 왜냐면 selector는 있는걸 찾아주는거임. 없는걸 만들순 없음
    // 시작은 똑같이 $() 하지만 내용물은 selector가 될 순 없음!!

    // <h1> 소리없는 아우성 </h1>
    let h1 = $('<h1></h1>').text('소리없는 아우성');            // 아예 태그를 명시하면 됨!
                                                                             // 닫는 태그가 존재하면 시작과 닫는 태그를 같이 명시.
                                                                             // 내용물을 쓰고 싶다? 그럼 .text('내용물')로 추가하자!
    // 지금 h1을 만들면서 jQuery 객체를 만들었음.
    // 이제 내가 원하는 위치에 붙일거임.
    // (4개의 method를 이용해서 붙일 수 있다)
    // 1. append() : 자식으로 제일 마지막에 붙임   (오 이건 파이썬이랑 ㅂㅣ슷하네)
    $('div').append(h1);


    //let li = $('<li></li>').text('Soonsin Lee')
    //$('ul').append(li);                  // 이건 자식으로 맨 뒤에.

    // 2. prepend() : 자식으로 맨 앞에 붙임
    // let li = $('<li></li>').text('Soonsin Lee');
    // $('ul').prepend(li);                 // 이건 자식으로 맨 앞에.

    // 3. after() : 형제로 바로 뒤에 붙임
        // 김연아와 아이유 사이에 이순신을 넣어보자.
    let li = $('<li></li>').text('Soonsin Lee');
    $('ul > li:first').after(li);

    // 4 before() : 형제로 바로 앞에 붙임
}