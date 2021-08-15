

function myFunc() {
    // 모든 li의 내용을 알아와서 console에 출력하자.
    console.log($('ul > li').text()) ;          // 'li' 만 쓰기보단 'ul > li' 속도가 더 빠르다 그리고 가능한 세부적으로 자세하게 써주자!
                                                    //  속도면에서 최고는 ID selector가 제일 빠르다 '#'
    //  text의 return값은 하나의 문자열이 되어야함! 그래서 이놈이 어떻게 하냐면 자기가 갖고 있는 네개에 대해서 각각 method()를 실행시킴.
    //  하나의 문자열이 되어야하기위해 각 지역을 하나로 통합한 문자열로 리턴을 함.
    // jQuery는 원칙적으로 method()를 이용해서 처리함. for 문을 쓰면 안됨!!!!
    // 그렇기에 문자열을 떼어내어 조각내어 리턴하는것도 method()로 처리해야함.

    $('ul > li').each(function(idx, item) {          // method중에 가장 힘들어하는 each...라 함.
        // 첫번째 parameter인 idx는 숫자 index를 지칭
        // 반복할 때마다 자동으로 1씩 증가함.
        // console.log('안녕' + idx)
        // $('selector') : selector로 지정된 html element를 찾아서 browser가 만들어준 document object를 들고와서 jQuery 객체로 바꾸는 것이 이 구문임.
        console.log('this is ' + $(item).text());

    });                                                                       // 각각 뭐해야한다! 라는 소리임.
                                                                             // 람다함수가 인자로 들어와야함
                                                                            // 1급 함수이기에 가능.

    // style 변경을 위한 method : css()  ==> 효율적이지 않음 (반복적인 렌더링을 함)
    // $('ul > li').css('color', 'red');
    // $('ul > li').css('background-color','yellow')
    // 근데 css 메소드는 거의 안씀. 왜 안쓸까? 코드 두줄을 썻잖아. 글자색, 배경색. 만약 폰트를 바꾼다면? 또 코드를 써야함. 바꿀때마다 메쏘드를 계속 씀
    // style을 변경하기 위해서는 일반적으로 addClass() 를 쓰거나, removeClass()를 씀.
    $('ul > li:last').addClass('liStyle')
    // $('ul > li:eq(2)').text(<font color={red}>'소리없는 아우성'</font>)            // 텍스트()는 그냥 텍스안에있는 내용물이 무엇이 되었든 무조건 가져다가 박음.
    // $('ul > li:eq(2)').html(<font color="red">'소리없는 아우성'</font>)   // 이거 왜 에러나지?
    // element의 text 내용을 알아오거나 변경하려 => text(), html()

    // element를 삭제하려면 어떻게 해야하나? => remove() 사용하자, 또는 empty() 사용하자.
    $('div').remove();// empty는 후손을 날리고 나는 살아남음
    //$('div').empty();  // div는 남기고, 그 안에 있는 후손들은 다 날라감. 만약 <h1>이 후손으로 있다면 <h1>을 날
}


// 속성 제어는 method 두개 ㅅ씁니다. attr() 그리고 removeAttr()
function myFunc1() {
    $('[type=text]').removeAttr('disabled')          // disabled 속성 자체를 제거하세요

};


function myFunc2() {
    $('[type = text]').attr('disabled', 'disabled')                 // .attr()   << 속성을 제어할 때 쓰는 method()  우린 input textbox의 속성을 바꿀거임. 값을 disabled로

};