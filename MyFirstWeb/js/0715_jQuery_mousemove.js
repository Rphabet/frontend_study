

// mousemove    < 이건 한번만 호출되는게 아님
// mouseenter   << 한번만 호출됨
// mouseleave   << 이것도 한번만 호출됨
// mouseover

// 3 가지를 기억해야함.   mouseenter -> over -> over -> over -> ... -> over -> mouseleave

// function myFunc() {
//
//     $('ul > li').on('mouseenter', function(event) {
//         $(this).css('color','blue')
//     });
// };


// ready는 진짜 많이 쓰임. 문서가 준비되었을때, 사용자가 아직 사용하진 않았지만 그래도 js가 시작을 해야할 때. 땅!! 하고 준비가 되어있어야함.
// 이렇게하면 클릭을 안눌러도 문서에 적용이 됨. 아래에 function 이 적용이 된단 소리임.
// $(document).on('ready', function(event) {
//     $('ul > li').on('mouseenter', function (event) {
//         $(this).addClass('liStyle')           // 현재 뭔지 알아야겠어
//     });
//
//
//
//     $('ul > li').on('mouseleave', function(event) {
//         $(this).removeClass('liStyle');
//     });
// });



// 이게 사실 document ready임. 축약형임.  document ready의 축약형은 $() 이거다! 기억하자
$(function(event) {
    $('ul > li').on('mouseenter', function (event) {
        $(this).addClass('liStyle')           // 현재 뭔지 알아야겠어
    });



    $('ul > li').on('mouseleave', function(event) {
        $(this).removeClass('liStyle');
    });
})

// function myFunc() {
//     // $('ul > li').on('click', function (event) {
//     //
//     //     // 여기서는 누구를 클릭했는지 까지 알려주는 경고문을 만들고 싶음!
//     //     // 어떻게 할까?
//     //     // 클릭했을때 어떤 li를 클릭하였는지 알아야 그 글자를 가져와서 찍겠죠?
//     //     // 이때를 위해 'Event handler' 에서만 사용할 수 있는 특수한 keyword가 있음!!!!
//     //     // 그게 바로 this임. 파이썬에선 self와 같은 의미. 그런데 이 this라는 놈은 handler내에서 사용하면 의미가 달라짐
//     //     // 이넘이 어떤 의미를 내포하냐?
//     //     // this ==> event source에 대한 문서 객체
//     //     // 그러니깐 $() 로 감싸줘야함!!!!
//     //
//     //     // $(this).text()    // 이렇게하면 내가 누구를 클릭했는지 알수가 있음
//     //
//     // });
//         $('ul > li').on('mouseenter', function (event) {
//             $(this).addClass('liStyle')           // 현재 뭔지 알아야겠어
//         });
//
//
//
//     $('ul > li').on('mouseleave', function(event) {
//         $(this).removeClass('liStyle');
//     });
//
//     // ready 라는 Event가 있음. 이 ㅅㄲ는 멀까?
//     // ready : Event 중의 하나. 이 친구는 문서(document)가 준비됐을 때 발생함!
//     //                  <body> 안의 모든 element를 읽고 각각의 element를 다 객체화 했을때.. => 이걸 우리가 DOM (Document Object Model) 이라고 부름.
//     //                       => DOM(Document Object Model)이 생성되는 시점.
//     //                         browser에 html 태그들이 표현되는 시점!
//
// };