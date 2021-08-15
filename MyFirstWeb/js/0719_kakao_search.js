$(function(event) {
    $('#searchBtn').on('click', function(event) {
        let keyword = $('#search_keyward').val()

        $.ajax({
            async : true,
            url : "https://dapi.kakao.com/v2/search/image",
            type : "GET",
            data : {
                query : keyword,
            },
            headers : {
                'Authorization': 'KakaoAK bb3f6c68c3aff23801257e6993235c4b'
            },
            dataType : 'json',
            timeout : 3000,
            success : function(result) {
                // alert('성공')
                 $('#myImg').attr('src', result.documents[0].thumbnail_url);
            },
            error : function() {
                alert('실패')
            }
        })
    })
})