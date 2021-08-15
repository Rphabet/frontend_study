
// document ready
$(function() {
    $('[type=button]').on('click', function(event) {
        //alert("You clicked!!!");      // 버튼이 클릭되면 핸들러 펑션이 처리를함. 여기서는 버튼이 클릭되엇어. 그리고 핸들러가 경고창 띄웠음
        // 경고창 호출 확인하고, 여기에 이제 AJAX code를 작성하자!
        $.ajax({
            // 등장하는 키워드는 다 정해져잇는거임.
            async : true,  // 기본값은 트루임.   비동기 방식인지 동기 방식인지 설정하는것.
                            // 동기와 비동기의 차이?   synchronous  동기
                            //                     asynchronous  비동기
                            // 커피 주문할 때 생각해보자.
                            // 동기방식은: 내가 호출했잖아 결과 받고 다음과정 그런다음에 함수 호출해서 결과 받아서 또하고! 이런게 동기 방식임.
                            // 순서가 있어서 너무 좋다 이건.
                            // 그렇지만 치명적인 단점은 비효율적이다.!! 순서를 하염없이 기다리잖아.
                            // 그럼 비동기는 무엇이냐?
                            // 비동기는 커피 주문후 "벨"을 가져와. 그리고 다른곳가서 게임을 해, 책을 봐 등등.. 그러다가 알람이 와.
                            // 기다리는 순간동안 다른 일을 할 수 있어!! 그리고 그 사이에 다른 사람이 주문을 할 수가 있어
                            // 복잡하지만 효율적임.
                            // AJAX는 비동기 방식임.

            url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',        // 서버쪽 프로그램 호출해야지?
            type : 'GET',            // 타입은 내가 어떤 방식으로 호출할건지 명시해야함. REST 기억하자
            timeout : 3000, // 1000분의 1초 단위로 기다리는 시간을 표시해둠
            data : {    // 서버쪽 프로그램에 전달할 데이터를 명시(key, targetDt). key와 value 줘야지. 근데 밸류를 두개 못주잖아? 그러니깐 객체로 표현! {}
                key : 'c39e8e4eb0b2017fb5b517f6ad1fe82b',
                targetDt : '20210715'
            },

            dataType : 'json',    // 문자열인 json을 js 객체로 변화시킴!
            // success와 error가 나옴. ajax 호출 실패했는지 성공했는지 알려줘야지~ 둘다 람다함수로 나옴
            success : function(result) {
                // 호출이 성공해서 데이터를 받으면 이 값이 호출이됨
                // 서버에서 석세스해서 받으면 우리는 객체를 받는게 아니고 "문자열"을 받는거야! 이거 알아둬야해. 사용하기 굉장히 어려움
                // 그래서 이걸 json이니깐 뭐로 바꾸기가 편해? js 객체로 바꾸기가 편함! 왜냐면 json 문자열이 js객체랑 똑같이 생겻잖아!!
                // 그렇게 되면 이친구가 객체화 되는거임!
                // 그래서 바로 success 위에 dataType에 'json'을 입력해줘야함! 그러면 js 객체화된 결과로 줌.

                // 'result' 라는 변수에 js객체화된 결괏값을 담을 수 있음. 서버가 준 결과를 인자에 담을 수 있다. 일반적으로 result 라고 표현
                // alert('성공했어요')
                alert(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
                // alert(result['boxOfficeResult']['dailyBoxOfficeList'][0]['movieNm']);  //이것도 할수 있음
            },
            error : function() {
                // 어떠한 이유에서든 호출에 실패하면 이 함수가 자동으로 호출
                alert('실패했어용')
            }

        });    // 지금은 무언가를 찾으려고 하는게 아님. 셀렉터를 쓸 이유가 없음.
                    // 그런데 생각해보면 서버쪽 `url`, `data, 설정도 해야햄;; 중괄호 넣어준다.

    });
});

