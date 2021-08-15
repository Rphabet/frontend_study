

function myFunc() {
    // alert('호출체크')
    // 변경된 select box내의 내용을 알아와서 textfield에 넣어주자.
    $('#myText').val($('select > option:selected').text());      // 입력상자의 값을 바꾸려면 val() 메쏘드를 쓰는거임
    console.log($('select > option:selected').text())       // selected 라는 특수셀렉터가 있음.
};


function choice_hobby() {
    //alert('호출체크')
    // 현재 check된 checkbox와 관련된 내용을 가져와서 console 에 출력.
    console.log($('[type=checkbox]:checked + span').text());         // [type=checkbox]  이거 속성 선택자!
    $('#myText2').val($('[type=checkbox]:checked + span').text());
}