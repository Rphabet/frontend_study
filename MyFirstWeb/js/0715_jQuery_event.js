

function myFunc() {
    $('ul > li:first').on('click', function(event) {

        // 이게 이벤트 지정하는거임. 특정  핸들러에게 이벤트를 지정가능. "나중에 어떤 이벤트 발생하면 이거 실행해야한다~" 이거임
        // 그래서 click이 인자로 들어갔잖아? 그럼 얘에 대해서 클릭했을때! 라는 소리임
        // 이거 lambda function 들어가면 onclick 이랑 같은거임. jQuery 버전임!
        // function 내 parameter event의 의미는 event 객체를 지칭.
        // 1. Event source  => event가 발생된 객체를 지칭.
        // 2. Event 속성  => on + Event 이름으로 만들음. (e.g. onclick) 순수 자바스크립트의 인라인 이벤트 처리 방식.
        // 3. Event handler => event가 발생했을 때 호출되는 js 함수
        // 4. Event 객체 => Event가 발생했을때 browser에 의해 자동적으로 생성이 되며
        //                 Event에 대한 세부사항이 객체에 담겨있어요
        //                 이런 Event 객체는 handler의 첫번째 인자로 자동적으로 들어감!!!



        alert('클릭되었어요!!');
    });



    // 밑에 코드를 실행시키면 누구를 클릭하던 이름을 포함한 alert가 뜸
    // $('ul > li').on('click',function(event) {
    //     // 여기서는 누구를 클릭했는지 까지 알려주는 경고문을 만들고 싶음!
    //     // 클릭했을때 어떤 li가 클릭되었는지를 알아야...그 글자를 가져와서 찍겠죠..
    //     // Event Handler내에서 사용할 수 있는 특수한 keyword가 있어요!
    //     // 그게 바로 this임. 파이썬에선 self와 같은 의미. 그런데 이 this라는 놈은 handler내에서 사용하면 의미가 달라짐
    //     // this => Event Source 대한 문서객체(document object)
    //         // 그러니깐 $() 로 감싸줘야함!!!!
    //     alert('You clicked ' + $(this).text() + ' !!!!')
    // });

};




// 밑에 event 에 들어가는 인자를 보면, 얘네 너무 길잖아? 메쏘드형으로 쓸 수 있음. 축약형임.
// function myFunc() {
//     $('ul > li').on('dbclick', function(event) {
//
//         // 이게 이벤트 지정하는거임. 특정  핸들러에게 이벤트를 지정가능. "나중에 어떤 이벤트 발생하면 이거 실행해야한다~" 이거임
//         // 그래서 click이 인자로 들어갔잖아? 그럼 얘에 대해서 클릭했을때! 라는 소리임
//         // 이거 lambda function 들어가면 onclick 이랑 같은거임. jQuery 버전임!
//         // function 내 event parameter 는 event 객체임
//         // 1. Event source  => event가 발생된 객체를 지칭.
//         // 2. Event 속성  => on + Event 이름으로 만들음. (e.g. onclick) 순수 자바스크립트의 인라인 이벤트 처리 방식.
//         // 3. Event handler => event가 발생했을 때 호출되는 js 함수
//         // 4. Event 객체 => Event가 발생했을때 browser에 의해 자동적으로 생성이 되며
//         //                 Event에 대한 세부사항이 객체에 담겨있어요
//         //                 이런 Event 객체는 handler의 첫번째 인자로 자동적으로 들어감!!!
//
//         alert('클릭되었어요!!')
//     });
// };

// 이렇게도 할수 있다는 것만 알아두자
// function myFunc2() {
//     $('ul > li').click(function() {
//
//     });
// };

