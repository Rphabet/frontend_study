// 데이터를 갖고와서 만들어 붙이는거임!!! ////
//////////////////////////////////////////////////////////////////////////////////

$(function() {
    $('#searchId').on('click', function(event) {
        // alert("test if the button works") // button works
        let date_value = $('[type=date]').val().replaceAll("-","");
        $('#myTitle').text(date_value + ' Box Office Ranking');
        $.ajax({
            async : true,
            url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            type : 'GET',
            timeout : 3000,
            data : {
                key : 'c39e8e4eb0b2017fb5b517f6ad1fe82b',
                targetDt : date_value
            },
            dataType : 'json',
            success : function(result) {
                // Refresh the page, so the list will not be added but re-appearas a list of 10
                $('#myTbody').empty();

                // alert(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);  // call success. continue the work below
                console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
                let BoxOfficeList = result.boxOfficeResult.dailyBoxOfficeList;
                console.log(BoxOfficeList[0].movieNm);
                $.each(BoxOfficeList, function(idx, BoxOfficeList) {
                    // console.log('this is each function print' + BoxOfficeList[idx].movieNm);
                    let BoxList = result.boxOfficeResult.dailyBoxOfficeList[idx];
                    console.log('this is each function print 2 ' +BoxOfficeList.movieNm);
                    let movieName = BoxOfficeList.movieNm;
                    let movieRank = BoxOfficeList.rank;
                    let openDate = BoxOfficeList.openDt;
                    let movieCode = BoxOfficeList.movieCd;

                    let tr = $('<tr> </tr>');
                    let rank = $('<td></td>').text(movieRank);
                    // let img = $('<button></button>');   이거 실행해봤는데 호출 성공했음!!
                    let img = $('<img/>').attr('id',"myPoster"+idx);
                    $.ajax({
                        async : true,
                        type : "GET",
                        url : "https://dapi.kakao.com/v2/search/image",
                        headers : {
                            'Authorization': 'KakaoAK bb3f6c68c3aff23801257e6993235c4b'
                        },
                        data : {'query': movieName,
                                'sort' : 'accuracy',
                                // 'page' : 1,
                                // 'size' : 1,
                        },
                        success: function(img_result) {
                            // alert('img_result 호출 성공!! ' + img_result)
                            console.log(img_result.documents[0].thumbnail_url);
                            $('#myPoster'+idx).attr("src", img_result.documents[0].thumbnail_url);
                            $('#myPoster'+idx).attr("width", 75);
                            $('#myPoster'+idx).attr("height", 50);
                        },
                        error: function() {
                            alert('img 호출 실패!!')
                        }

                    })
                    let title = $('<td></td>').text(movieName);
                    let openDt = $('<td></td>').text(openDate);
                    let detailBtntd = $('<td></td>');
                    let detailBtn = $('<Button></Button>').text("상세보기");
                    detailBtn.addClass('btn btn-primary');
                    // 상세보기 버튼을 눌렀을때 무언가를 해야함!! event처리를 해야함!! 어떻게 처리할까?
                    // HTML태그는 사용할 수 있는 속성이 정해져있다.
                    // HTML5 에서는 사용자 정의 속성을 사용할 수 있다!
                    // 어떻게 사용하냐? 간단함 속성앞에 'data-'를 붙여주면 된다. <td data-author="홍길동">
                    detailBtn.attr('data-movieCd', movieCode)  // 속성을 제어할 땐 attr() 찍어야함.
                    detailBtn.on('click', function(event) {
                        // 버튼을 누르면 영화 상세 정보 api를 ajax로 호출해주자.
                        // 해당 영화의 movieCd를 알아야 조회가 가능. 이걸 알아야함 우선!!
                        // movieCD 가져왔음. 그러면 새로운 ajax 영화상세정보보기 페이지를 불러와서 작업해야함.
                        $.ajax({
                            async : true,
                            url :  'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                            type : 'GET',
                            timeout : 3000,
                            data : {
                                key : 'c39e8e4eb0b2017fb5b517f6ad1fe82b',
                                movieCd : movieCode
                            },
                            dataType : 'json',
                            success : function(result2) {
                                // alert('상세보기 ajax 연동 성공햇수다') // ㅇㅋ 호출 성공했고
                                // alert(result2.movieInfoResult.movieInfo.movieNm + '\'s movieCd: '+ result2.movieInfoResult.movieInfo.movieCd);
                                alert('영화 제목: ' + result2.movieInfoResult.movieInfo.movieNm + '\n' +
                                    'Movie Name: ' + result2.movieInfoResult.movieInfo.movieNmEn + '\n' +
                                    '개요: ' + result2.movieInfoResult.movieInfo.nations[0].nationNm + ' | ' +
                                    result2.movieInfoResult.movieInfo.genres[0].genreNm + ' | ' +
                                    result2.movieInfoResult.movieInfo.showTm + '\n' +
                                    '감독: ' + result2.movieInfoResult.movieInfo.directors[0].peopleNm + '(' +
                                    result2.movieInfoResult.movieInfo.directors[0].peopleNmEn + ')');
                                //////////////////////////////////////////////////////////////////
                                // 여기에 상세보기를 어떻게 무슨 정보를 담아서 어떤 브라우저에 띄울지 고민을 해야함...
                                //////////////////////////////////////////////////////////////////
                            },
                            error : function() {
                                alert('상세보기 ajax 연동 실패햇수다')
                            }
                        })
                    })
                    detailBtntd.append(detailBtn);
                    let delBtntd = $('<td></td>');
                    let delBtn = $('<Button></Button>').text("삭제");
                    delBtn.addClass('btn btn-danger');
                    delBtn.on('click', function(event) {
                        // alert('삭제버튼이 눌렸어요');  버튼 작동 ㅇㅋ
                        // <tr>
                        //     <td>
                        //         <button>
                        //
                        //         </button>
                        //     </td>
                        // </tr>
                        // 이 구조에서 버튼을 눌렀을 때 <tr>을 삭제해야함.
                        // this를 이용하자! 그리고 부모를 삭제하자!
                        $(this).parent().parent().remove();   // remove()는 요소 자체를 지운다.
                                                              // empty()는 요소 내용을 지운다.
                    });
                    delBtntd.append(delBtn);

                    tr.append(rank);
                    tr.append(img);
                    tr.append(title);
                    tr.append(openDt);
                    tr.append(detailBtntd);
                    tr.append(delBtntd);

                    $('#myTbody').append(tr);

                    // $('#myTbody').append(tr);
                    // $('#myTbody').append('<tr> <td>movieRank</td> ' +
                    //     '<td>Poster</td> ' +
                    //     '<td>movieName</td> ' +
                    //     '<td>openDate</td> ' +
                    //     '<td>상세보기</td>  ' +
                    //     '<td>삭제</td> </tr>');
                })
                // let tr = $('<tr> <td>aaaa</td> <td> bbb </td> </tr>');
                // $('table > tbody').append(tr);

            },
            error : function() {
                // 어떤 이유에서든 실패한다면 경고 호출
                alert('실패했어용');
            }
        });
    });
});



// function myFunc2() {
//     // 리스트를 채워보자
//     // <tr>   <td></td>   </tr> 이 순임. 하 ㅆㅂ 어케 만들지
//     let rank_td = $('<td></td>').text();
//     $()
// }




//
// // document ready로 해야지?
// $(function() {
//
// });
//

// //element 를 만들어줘야지? 왜냐면 링크 호출해서 content 채워나아가야 하기때문.
// function myFunc3() {
//     $('div > a').on('click', function(event) {
//         alert('you clicked ' + $(this).text())
//     })
// };


// $.ajax({
//     async : true,   // 기본값 true 비동기식으로 갈거임
//     url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
//     type : 'GET',
//     timeout : 3000,
//     data : {    // 서버쪽 프로그램에 전달할 데이터를 명시(key, targetDt). key와 value 줘야지. 근데 밸류를 두개 못주잖아? 그러니깐 객체로 표현! {}
//         key : 'c39e8e4eb0b2017fb5b517f6ad1fe82b',
//         targetDt : '20210715'
//     },
//
//     dataType : "json",
//
//     success : function(response) {
//         alert(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm)
//     },
//     error : function() {
//         // 어떠한 이유에서든 호출에 실패하면 이 함수가 자동으로 호출
//         alert('실패했어용')
//     }
//
// });
//
//
// $(function() {
//     $('[type=button]').on('click', function(event) {
//         //alert("You clicked!!!");      // 버튼이 클릭되면 핸들러 펑션이 처리를함. 여기서는 버튼이 클릭되엇어. 그리고 핸들러가 경고창 띄웠음
//         // 경고창 호출 확인하고, 여기에 이제 AJAX code를 작성하자!
//         $.ajax({
//             // 등장하는 키워드는 다 정해져잇는거임.
//             async : true,  // 기본값은 트루임.   비동기 방식인지 동기 방식인지 설정하는것.
//             // 동기와 비동기의 차이?   synchronous  동기
//             //                     asynchronous  비동기
//             // 커피 주문할 때 생각해보자.
//             // 동기방식은: 내가 호출했잖아 결과 받고 다음과정 그런다음에 함수 호출해서 결과 받아서 또하고! 이런게 동기 방식임.
//             // 순서가 있어서 너무 좋다 이건.
//             // 그렇지만 치명적인 단점은 비효율적이다.!! 순서를 하염없이 기다리잖아.
//             // 그럼 비동기는 무엇이냐?
//             // 비동기는 커피 주문후 "벨"을 가져와. 그리고 다른곳가서 게임을 해, 책을 봐 등등.. 그러다가 알람이 와.
//             // 기다리는 순간동안 다른 일을 할 수 있어!! 그리고 그 사이에 다른 사람이 주문을 할 수가 있어
//             // 복잡하지만 효율적임.
//             // AJAX는 비동기 방식임.
//
//             url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',        // 서버쪽 프로그램 호출해야지?
//             type : 'GET',            // 타입은 내가 어떤 방식으로 호출할건지 명시해야함. REST 기억하자
//             timeout : 3000, // 1000분의 1초 단위로 기다리는 시간을 표시해둠
//             data : {    // 서버쪽 프로그램에 전달할 데이터를 명시(key, targetDt). key와 value 줘야지. 근데 밸류를 두개 못주잖아? 그러니깐 객체로 표현! {}
//                 key : 'c39e8e4eb0b2017fb5b517f6ad1fe82b',
//                 targetDt : '20210715'
//             },
//
//             dataType : 'json',    // 문자열인 json을 js 객체로 변화시킴!
//             // success와 error가 나옴. ajax 호출 실패했는지 성공했는지 알려줘야지~ 둘다 람다함수로 나옴
//             success : function(result) {
//                 // 호출이 성공해서 데이터를 받으면 이 값이 호출이됨
//                 // 서버에서 석세스해서 받으면 우리는 객체를 받는게 아니고 "문자열"을 받는거야! 이거 알아둬야해. 사용하기 굉장히 어려움
//                 // 그래서 이걸 json이니깐 뭐로 바꾸기가 편해? js 객체로 바꾸기가 편함! 왜냐면 json 문자열이 js객체랑 똑같이 생겻잖아!!
//                 // 그렇게 되면 이친구가 객체화 되는거임!
//                 // 그래서 바로 success 위에 dataType에 'json'을 입력해줘야함! 그러면 js 객체화된 결과로 줌.
//
//                 // 'result' 라는 변수에 js객체화된 결괏값을 담을 수 있음. 서버가 준 결과를 인자에 담을 수 있다. 일반적으로 result 라고 표현
//                 // alert('성공했어요')
//                 alert(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
//                 // alert(result['boxOfficeResult']['dailyBoxOfficeList'][0]['movieNm']);  //이것도 할수 있음
//             },
//             error : function() {
//                 // 어떠한 이유에서든 호출에 실패하면 이 함수가 자동으로 호출
//                 alert('실패했어용')
//             }
//
//         });    // 지금은 무언가를 찾으려고 하는게 아님. 셀렉터를 쓸 이유가 없음.
//         // 그런데 생각해보면 서버쪽 `url`, `data, 설정도 해야햄;; 중괄호 넣어준다.
//
//     });
// });