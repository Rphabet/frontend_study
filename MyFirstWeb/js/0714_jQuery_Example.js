

function myFunc() {
    // 1. console에 "사과"라는 글짜를 찍을거임.
    console.log($('#apple').text());   // 태그상의 글짜가져오는 메쏘드는 인자 없는 .text()임.
                                            // 웹 프로그래밍 잘하려면 이거 익숙해져야함
    // 2.
    console.log($('#pineapple + li').text());   // 참외 찍어보는
    // 3.
    console.log($('ul > li[class]').text());    // 참외 찍어보는 방법2
                                                    // 되게 다양한 방법으로 창의적으로 참외를 가져올 수 있음. 이건 경험과 창의성의 문제임
                                                     // 진짜 연습 많이해야함
    console.log($('[type=text]').attr('id'));           // 속성의 값을 알아내보자. input type을 이용하는게 좋을거 같다
                                                    // attr('속성') 을 사용하면 속성의 값을 알아온다
                                                    // attr('속성','속성값') 을 사용하면 이 속성의 값을 속성값으로 바꿔~!  전혀 다른 유형의 기능임.
    // 4. 입력상자를 찾아서 사용자가 입력한 값을 alert로 출력
    //alert($('[type=text]').val());      // val이란 메쏘드를 쓸거임
                                             // 텍스트에 입력된 값을 alert 로 띄워줌.
    $('[type=text]').val('최길동')        // 이건 입력했던 값을 버튼을 누르면 인자의 값으로 변경해줌

    // 5. console에 고양이 출력하자
    console.log($('ol > li:first').text());         // 근데 세개 다 클라스임. 난 고양이만 찾고 싶음. 그때 사용하는게 특수 선택자임
                                                        // li:first     첫번째만 나오는게 됨. 개굿
    // 6. console에 강아지를 출력하자
    console.log($('ol > li:last').text());

    // 7. console에 호랑이를 출력하자
    console.log($('ol > li:first + li').text());       // second는 없음 first랑 last 만 있음. 그래서 first를 찾아서 '+' 로 그다음으로 나오는것 찾자
    console.log($('ol > li:eq(1)').text());            // version2. eq()는 순번을 지정할 수 있음. ol의 자식으로 있는 li중에 순서대로 두번째



}