var contentSushi1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            착한 초밥' + 
'            <div class="close" onclick="closeSushi1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDJfMTMy/MDAxNTU5NDc3Njk1OTY4.0tmc6U4qXgADRNi_F04e8qeNVft_ZZhBdp5ZN8vj-1og.Z4nIY92hg6hTnDWtrPYi4zydMk8f1TJv6ljoe7r3dH0g.PNG.jeongkey3317/SE-a9106f4f-cda2-4a05-9c68-95aa433bf721.png?type=w800" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로1길 26</div>' + 
'                <div class="jibun ellipsis">02-909-4494</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlaySushi1 = new kakao.maps.CustomOverlay({
    content: contentSushi1,
    map: map,
    position: Sushi[0].getPosition()       
});

kakao.maps.event.addListener(Sushi[0], 'click', function() {
    overlaySushi1.setMap(map);
});
overlaySushi1.setMap(null);

function closeSushi1() {
    overlaySushi1.setMap(null);     
}   

var contentRice1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            지지고' + 
'            <div class="close" onclick="closeRice1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.nzine.co.kr%2Ffiles%2Feditor%2Fattached%2F2fba14ca6a62840a6c6cecdad4e43c69.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 27</div>' + 
'                <div class="jibun ellipsis">02-942-8212</div>' + 
'                <div onclick=gggoDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function gggoDetail() {
    var x = document.getElementById("gggo");
    x.style.display = 'block';
}
var overlayRice1 = new kakao.maps.CustomOverlay({
    content: contentRice1,
    map: map,
    position: Rice[0].getPosition()       
});

kakao.maps.event.addListener(Rice[0], 'click', function() {
    overlayRice1.setMap(map);
});
overlayRice1.setMap(null);

function closeRice1() {
    overlayRice1.setMap(null);     
}   

var contentRice2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            작은집' + 
'            <div class="close" onclick="closeRice2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://dcimg7.dcinside.co.kr/viewimage.php?id=2abcdd23b4803fa763ba&no=24b0d769e1d32ca73cec8efa1bd8233c9e6ceaa6cac16e3f5e1691778a00c44039f847bf62d791d07586cb18b721c775364f760300435e73223ec3b78e9c0a55201da1bbcf4bd7b3" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 석계로13길 25-1</div>' + 
'                <div class="jibun ellipsis">02-916-8745</div>' + 
'                <div onclick=smallDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function smallDetail() {
    var x = document.getElementById("small");
    x.style.display = 'block';
}
var overlayRice2 = new kakao.maps.CustomOverlay({
    content: contentRice2,
    map: map,
    position: Rice[1].getPosition()       
});

kakao.maps.event.addListener(Rice[1], 'click', function() {
    overlayRice2.setMap(map);
});
overlayRice2.setMap(null);

function closeRice2() {
    overlayRice2.setMap(null);     
}   


var contentRice3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            김밥천국' + 
'            <div class="close" onclick="closeRice3()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.foodnjob.com%2Fupload%2Fupload%2Foffer_user%2F201802%2F1517627705_mem.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 33</div>' + 
'                <div class="jibun ellipsis">02-942-7804</div>' + 
'                <div onclick=kimbabDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function kimbabDetail() {
    var x = document.getElementById("kimbab");
    x.style.display = 'block';
}
var overlayRice3 = new kakao.maps.CustomOverlay({
    content: contentRice3,
    map: map,
    position: Rice[2].getPosition()       
});

kakao.maps.event.addListener(Rice[2], 'click', function() {
    overlayRice3.setMap(map);
});
overlayRice3.setMap(null);

function closeRice3() {
    overlayRice3.setMap(null);     
}   


var contentRice4 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            밥은화' + 
'            <div class="close" onclick="closeRice4()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190907_92%2F1567838390997Fc9fI_JPEG%2FMDgDKgFM9fqod3SudbSEz21_.jpeg.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로12길 11</div>' + 
'                <div class="jibun ellipsis">02-3292-7979</div>' + 
'                <div onclick=babenDetail()>상세히 보기</div>' +
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function babenDetail() {
    var x = document.getElementById("beben");
    x.style.display = 'block';
}
var overlayRice4 = new kakao.maps.CustomOverlay({
    content: contentRice4,
    map: map,
    position: Rice[3].getPosition()       
});

kakao.maps.event.addListener(Rice[3], 'click', function() {
    overlayRice4.setMap(map);
});
overlayRice4.setMap(null);

function closeRice4() {
    overlayRice4.setMap(null);     
}   


var contentRice5 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            학교종이땡땡땡' + 
'            <div class="close" onclick="closeRice5()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_05_31_14%2Ff03294aa-c1ff-11eb-bde8-48df379cc9e4_01.jpg&type=ofullfill340_600" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로3길 6</div>' + + 
'                <div onclick=schoolDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function schoolDetail() {
    var x = document.getElementById("school");
    x.style.display = 'block';
}
var overlayRice5 = new kakao.maps.CustomOverlay({
    content: contentRice5,
    map: map,
    position: Rice[4].getPosition()       
});

kakao.maps.event.addListener(Rice[4], 'click', function() {
    overlayRice5.setMap(map);
});
overlayRice5.setMap(null);

function closeRice5() {
    overlayRice5.setMap(null);     
}   



var contentRice6 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            윤스쿡' + 
'            <div class="close" onclick="closeRice6()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAzMjFfMTAw%2FMDAxNDkwMDIyMTk3MDIw.N3ZWIvhEfMKAAE9mdAh4AeJf7hswnJ8O9MAK5wow0Igg.Du89UqBBqaXe3ZRXPH-JLEnJytSWIiVImsQ77K-zfQYg.JPEG.dlwltn1344%2FIMG_3211.jpg&type=sc960_832" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로3길 6</div>' + 
'                <div class="jibun ellipsis">0507-1449-0577</div>' + 
'                <div onclick=yoonsDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';
function yoonsDetail() {
    var x = document.getElementById("yoonscook");
    x.style.display = 'block';
}
var overlayRice6 = new kakao.maps.CustomOverlay({
    content: contentRice6,
    map: map,
    position: Rice[5].getPosition()       
});

kakao.maps.event.addListener(Rice[5], 'click', function() {
    overlayRice6.setMap(map);
});
overlayRice6.setMap(null);

function closeRice6() {
    overlayRice6.setMap(null);     
}   


var contentRice7 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            한솥도시락 광운대정문점' + 
'            <div class="close" onclick="closeRice7()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMThfMjM2%2FMDAxNjEzNjQxODA2MjE5.GYF7nFEggs4Z8CqCgwkAgKwc1zV6QnQFs37fuCp40bEg.O3dc_KlTW8cVjc7kZuGVwiEtTSzltUK9YNnqEsKKJaQg.JPEG.tvi%2F%25C0%25FC%25B4%25DC%25C1%25F6.jpg&type=ofullfill340_600" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 20 광운대학교) 80주년 기념관 지하 1층</div>' + 
'                <div class="jibun ellipsis">02-941-0799</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayRice7 = new kakao.maps.CustomOverlay({
    content: contentRice7,
    map: map,
    position: Rice[6].getPosition()       
});

kakao.maps.event.addListener(Rice[6], 'click', function() {
    overlayRice7.setMap(map);
});
overlayRice7.setMap(null);

function closeRice7() {
    overlayRice7.setMap(null);     
}   


var contentBunsik1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            언니떡볶이 동생브리또' + 
'            <div class="close" onclick="closeBunsik1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzAyMjdfMjU4%2FMDAxNDg4MTk2ODIxNTM4.CCgmzo8nPdbbQOWq178Pn1E6SsVr1J4R6bZyB6mcEEwg.jub6oFt5PNuZEPAN1B00GBVSXVQxV_JsI_eOhF55dFgg.JPEG.jehr9621%2FexternalFile.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로10길 3</div>' + 
'                <div class="jibun ellipsis">02-909-5549</div>' + 
'                <div onclick=sisterDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function sisterDetail() {
    var x = document.getElementById("sister");
    x.style.display = 'block';
}
var overlayBunsik1 = new kakao.maps.CustomOverlay({
    content: contentBunsik1,
    map: map,
    position: Bunsik[0].getPosition()       
});

kakao.maps.event.addListener(Bunsik[0], 'click', function() {
    overlayBunsik1.setMap(map);
});
overlayBunsik1.setMap(null);

function closeBunsik1() {
    overlayBunsik1.setMap(null);     
}   


var contentBunsik2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            동대문엽기떡볶이' + 
'            <div class="close" onclick="closeBunsik2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTRfOTAg%2FMDAxNjE4Mzg0NDYzODIy.Lkm-9snUNzbJcuQcoypDxZuAxpw6U-tai34GbxuVgT8g.4CmUueUwqmLS10uFg8mMC4ZAxcNZgiUXGi24nc7p44gg.JPEG.rpc_3%2FKakaoTalk_20210414_161138926_01.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 39</div>' + 
'                <div class="jibun ellipsis">02-911-8591</div>' + 
'                <div onclick=dongDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function dongDetail() {
    var x = document.getElementById("dong");
    x.style.display = 'block';
}
var overlayBunsik2 = new kakao.maps.CustomOverlay({
    content: contentBunsik2,
    map: map,
    position: Bunsik[1].getPosition()       
});

kakao.maps.event.addListener(Bunsik[1], 'click', function() {
    overlayBunsik2.setMap(map);
});
overlayBunsik2.setMap(null);

function closeBunsik2() {
    overlayBunsik2.setMap(null);     
}   



var contentNoodle1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            미식성' + 
'            <div class="close" onclick="closeNoodle1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20101201_127%2Fadk777_1291212656413sxWa7_JPEG%2FIMG_5380.JPG&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 9 1층</div>' + 
'                <div class="jibun ellipsis">02-915-6021</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayNoodle1 = new kakao.maps.CustomOverlay({
    content: contentNoodle1,
    map: map,
    position: Noodle[0].getPosition()       
});

kakao.maps.event.addListener(Noodle[0], 'click', function() {
    overlayNoodle1.setMap(map);
});
overlayNoodle1.setMap(null);

function closeNoodle1() {
    overlayNoodle1.setMap(null);     
}   

var contentNoodle2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            더원' + 
'            <div class="close" onclick="closeNoodle2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfMjkw%2FMDAxNjE3MDY2OTg2MTU1.fGogL6DSFJHrqyMp-N-wNpMwu8eOD0hS3b1Wo28WqOog.n--T2vSqnqTrlIUpLicAHNF65malD275cuHlkelE2qEg.JPEG.myblacksun%2F20210324_185658.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 61 2층</div>' + 
'                <div class="jibun ellipsis">0507-1370-5477</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayNoodle2 = new kakao.maps.CustomOverlay({
    content: contentNoodle2,
    map: map,
    position: Noodle[1].getPosition()       
});

kakao.maps.event.addListener(Noodle[1], 'click', function() {
    overlayNoodle2.setMap(map);
});
overlayNoodle2.setMap(null);

function closeNoodle2() {
    overlayNoodle2.setMap(null);     
}   

var contentNoodle3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            친친' + 
'            <div class="close" onclick="closeNoodle3()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDZfOTQg%2FMDAxNjIwMzA4MTY4MzEw.LzOoAhTeO5BDidJUoEC2RahzRkTNzY1PDy6cQMUKRVYg.iFBtqkAde1hOdtM5KZ002MzNwYQDcSSgjLu-CJFRux8g.JPEG.cubee77%2FIMG_6547.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 석계로18길 10-9 2층</div>' + 
'                <div class="jibun ellipsis">02-6229-4143</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayNoodle3 = new kakao.maps.CustomOverlay({
    content: contentNoodle3,
    map: map,
    position: Noodle[2].getPosition()       
});

kakao.maps.event.addListener(Noodle[2], 'click', function() {
    overlayNoodle3.setMap(map);
});
overlayNoodle3.setMap(null);

function closeNoodle3() {
    overlayNoodle3.setMap(null);     
}   


var contentMeat1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            화로상회' + 
'            <div class="close" onclick="closeMeat1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDVfMjEz%2FMDAxNTkzOTUxOTMxMTY5.RsmcqpjcAutbkMM4qxu9N5dVBxaYTbMt6i9-Eb4twDcg.1dx8pgT2oFZm8IflMV-ToN5ohFbocIP3V9HgNyyOUtcg.JPEG.kanghoy%2FIMG_2297.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 37</div>' + 
'                <div class="jibun ellipsis">02-941-2292</div>' + 
'                <div onclick=huaroDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function huaroDetail() {
    var x = document.getElementById("huaro");
    x.style.display = 'block';
}
var overlayMeat1 = new kakao.maps.CustomOverlay({
    content: contentMeat1,
    map: map,
    position: Meat[0].getPosition()       
});

kakao.maps.event.addListener(Meat[0], 'click', function() {
    overlayMeat1.setMap(map);
});
overlayMeat1.setMap(null);

function closeMeat1() {
    overlayMeat1.setMap(null);     
}   


var contentCoffee1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            스타벅스' + 
'            <div class="close" onclick="closeCoffee1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjlfOTgg%2FMDAxNjE2OTk0OTk2Njky.rs99dMb0N5-vFhvf7qsqhJ41J9iwrukizd1UAdAvp8og.rUOEA2MbezgQhlJDeFhUBqx-mTnzrejSHsuucD04xywg.JPEG.wow_412%2FSE-3134db20-7522-43c0-9e09-1771224587ce.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 석계로 104</div>' + 
'                <div class="jibun ellipsis">1522-3232</div>' + 
'                <div onclick=starbucksDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function starbucksDetail() {
    var x = document.getElementById("starbucks");
    x.style.display = 'block';
}
var overlayCoffee1 = new kakao.maps.CustomOverlay({
    content: contentCoffee1,
    map: map,
    position: Coffee[0].getPosition()       
});

kakao.maps.event.addListener(Coffee[0], 'click', function() {
    overlayCoffee1.setMap(map);
});
overlayCoffee1.setMap(null);

function closeCoffee1() {
    overlayCoffee1.setMap(null);     
}   

var contentCoffee2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            이디야' + 
'            <div class="close" onclick="closeCoffee2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjBfMTM4%2FMDAxNjIxNTAzMTIyNzE1.0MvkmPxoUATR4vhVyp8AyaFmeeETB-yReGRVkNOktS0g.La099By4-s7tqDRYX_XiBnIaWfBrYnFx1C98wWAFbUAg.JPEG.aleldj83%2F20210520%25A3%25DF165720.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 29 1층</div>' + 
'                <div class="jibun ellipsis">02-942-0937</div>' + 
'                <div onclick=ediyaDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function ediyaDetail() {
    var x = document.getElementById("ediya");
    x.style.display = 'block';
}
var overlayCoffee2 = new kakao.maps.CustomOverlay({
    content: contentCoffee2,
    map: map,
    position: Coffee[1].getPosition()       
});

kakao.maps.event.addListener(Coffee[1], 'click', function() {
    overlayCoffee2.setMap(map);
});
overlayCoffee2.setMap(null);

function closeCoffee2() {
    overlayCoffee2.setMap(null);     
}   

var contentCoffee3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'           공차' + 
'            <div class="close" onclick="closeCoffee3()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMzBfNjQg%2FMDAxNjA5MzMxNzc3NTA5.rsIpuFrlDBELxdLuLmm2J7LVlwzvfB-k3MU7VMXE474g.qU9rFcCzR2IfacigMVq0ZcZG1YPH5RecLrLf_8QDG_kg.JPEG.aaaa0408%2FKakaoTalk_20201230_210510503.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 20</div>' + 
'                <div class="jibun ellipsis">02-943-8523</div>' + 
'                <div onclick=gongchaDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function gongchaDetail() {
    var x = document.getElementById("gongcha");
    x.style.display = 'block';
}
var overlayCoffee3 = new kakao.maps.CustomOverlay({
    content: contentCoffee3,
    map: map,
    position: Coffee[2].getPosition()       
});

kakao.maps.event.addListener(Coffee[2], 'click', function() {
    overlayCoffee3.setMap(map);
});
overlayCoffee3.setMap(null);

function closeCoffee3() {
    overlayCoffee3.setMap(null);     
}   

var contentCoffee4 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            빽다방' + 
'            <div class="close" onclick="closeCoffee4()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTFfNjgg%2FMDAxNjA3NjczNDE2NzAy.3Jwr7F7DHVE_JralTYZCfZxj6tY76BrRlqkLaNRpnQUg.ZnIUvch44sNMDcL9Tw-bKnid2PvcxlKT0DEg8qOrXm4g.JPEG.wldnjs0915%2FIMG_8900.JPG&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 43 1층</div>' + 
'                <div class="jibun ellipsis">070-7752-5322</div>' + 
'                <div onclick=backDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function backDetail() {
    var x = document.getElementById("back");
    x.style.display = 'block';
}

var overlayCoffee4 = new kakao.maps.CustomOverlay({
    content: contentCoffee4,
    map: map,
    position: Coffee[3].getPosition()       
});

kakao.maps.event.addListener(Coffee[3], 'click', function() {
    overlayCoffee4.setMap(map);
});
overlayCoffee4.setMap(null);

function closeCoffee4() {
    overlayCoffee4.setMap(null);     
}   

var contentCoffee5 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'          쥬시&와피' + 
'            <div class="close" onclick="closeCoffee5()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTNfMTQy%2FMDAxNjE4Mjk3MTk4MTQ4.mSvvI02T-XOpPl92HOipA8BknwzEdt5IXfH6jqvuMdUg.5ybrS8wiML5NbHQ7NU5HFdOs4s2LHhbjdofvyRWx1V4g.JPEG.ajw7580%2FIMG_5802.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 35-1 1층</div>' + 
'                <div class="jibun ellipsis">02-941-3336</div>' + 
'                <div onclick=juicyDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function juicyDetail() {
    var x = document.getElementById("juicy");
    x.style.display = 'block';
}
var overlayCoffee5 = new kakao.maps.CustomOverlay({
    content: contentCoffee5,
    map: map,
    position: Coffee[4].getPosition()       
});

kakao.maps.event.addListener(Coffee[4], 'click', function() {
    overlayCoffee5.setMap(map);
});
overlayCoffee5.setMap(null);

function closeCoffee5() {
    overlayCoffee5.setMap(null);     
}   








var contentBeer1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            별난주점' + 
'            <div class="close" onclick="closeBeer1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151214_279%2Fgocampray_14500675711592DqmF_JPEG%2FCYMERA_20150715_174401.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로12길 28 준파크빌 2차</div>' + 
'                <div class="jibun ellipsis">02-943-0288</div>' + 
'                <div onclick=starDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function starDetail() {
    var x = document.getElementById("star");
    x.style.display = 'block';
}
var overlayBeer1 = new kakao.maps.CustomOverlay({
    content: contentBeer1,
    map: map,
    position: Beer[0].getPosition()       
});

kakao.maps.event.addListener(Beer[0], 'click', function() {
    overlayBeer1.setMap(map);
});
overlayBeer1.setMap(null);

function closeBeer1() {
    overlayBeer1.setMap(null);     
}   

var contentBeer2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'           오사카부루스' + 
'            <div class="close" onclick="closeBeer2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MDlfMTIg%2FMDAxNTA0OTQ1Mzc0Mjk3.dIVJJMVQe25BQuHFa01JmElSW61jkbRUp1uNlrXQCfUg.8HNlHTg9YUvUcwBfAobhfHRcTaqBiRtnkxYAqB8Xuw0g.JPEG.ggyu98%2FIMG_2177.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 석계로 98-1</div>' +  + 
'                <div onclick=osakaDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function osakaDetail() {
    var x = document.getElementById("osaka");
    x.style.display = 'block';
}
var overlayBeer2 = new kakao.maps.CustomOverlay({
    content: contentBeer2,
    map: map,
    position: Beer[1].getPosition()       
});

kakao.maps.event.addListener(Beer[1], 'click', function() {
    overlayBeer2.setMap(map);
});
overlayBeer2.setMap(null);

function closeBeer2() {
    overlayBeer2.setMap(null);     
}   

var contentBeer3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'           튀맥' + 
'            <div class="close" onclick="closeBeer3()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjExMTZfNjgg%2FMDAxNDc5Mjk1NDY5MjY3.3pJ-pBHqQiJS6NktB-XCKm1WJ8ADFyWdb7SvBBzArtUg.NhzXJnI2fMAVT8yj1BklV_uTBrYky0BkLNa7_ZtNU5Ig.JPEG.fink111%2F15.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 석계로15길 9</div>' + 
'                <div class="jibun ellipsis">02-943-1171</div>' + 
'                <div onclick=tuimackDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function tuimackDetail() {
    var x = document.getElementById("tuimack");
    x.style.display = 'block';
}
var overlayBeer3 = new kakao.maps.CustomOverlay({
    content: contentBeer3,
    map: map,
    position: Beer[2].getPosition()       
});

kakao.maps.event.addListener(Beer[2], 'click', function() {
    overlayBeer3.setMap(map);
});
overlayBeer3.setMap(null);

function closeBeer3() {
    overlayBeer3.setMap(null);     
}   

var contentBeer4 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            빈대떡신사' + 
'            <div class="close" onclick="closeBeer4()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjBfMjE5%2FMDAxNTk1MTgyMjc2MzY0.CA5PKElOGvyV6e5jFwfHx8wLicxMPkJdh-mfweyNbvAg.Ei0P9xm7O-rdIeIHXlkVSbOBYwqRvyyORVR3_QI12uUg.JPEG.ksrudals%2F%25BA%25F3.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 70</div>' + 
'                <div class="jibun ellipsis">02-774-9595</div>' + 
'                <div onclick=bindaeDetail()>상세히 보기</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

function bindaeDetail() {
    var x = document.getElementById("bindae");
    x.style.display = 'block';
}
var overlayBeer4 = new kakao.maps.CustomOverlay({
    content: contentBeer4,
    map: map,
    position: Beer[3].getPosition()       
});

kakao.maps.event.addListener(Beer[3], 'click', function() {
    overlayBeer4.setMap(map);
});
overlayBeer4.setMap(null);

function closeBeer4() {
    overlayBeer4.setMap(null);     
}   






var contentFastfood1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            진미통닭' + 
'            <div class="close" onclick="closeFastfood1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150816_101%2Fmax_ahn_1439651577747HpsUI_JPEG%2Fimage.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 45</div>' + 
'                <div class="jibun ellipsis">02-918-3492</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayFastfood1 = new kakao.maps.CustomOverlay({
    content: contentFastfood1,
    map: map,
    position: Fastfood[0].getPosition()       
});

kakao.maps.event.addListener(Fastfood[0], 'click', function() {
    overlayFastfood1.setMap(map);
});
overlayFastfood1.setMap(null);

function closeFastfood1() {
    overlayFastfood1.setMap(null);     
}   

var contentFastfood2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            bbq월계광운대점' + 
'            <div class="close" onclick="closeFastfood2()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTJfNjgg%2FMDAxNjE4MTkwOTQ2Mjkw.0kNZAu_tJ7Cl4lMMGxSIY2cHI7o2JRoF7MHKd4B0iyog.ZlKTNa1AxEXyYGRKcZRpvc25E1JCkUGvJRuPeWFSQvcg.JPEG.h___o%2FIMG_1107.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 37-1</div>' + 
'                <div class="jibun ellipsis">02-960-2999</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayFastfood2 = new kakao.maps.CustomOverlay({
    content: contentFastfood2,
    map: map,
    position: Fastfood[1].getPosition()       
});

kakao.maps.event.addListener(Fastfood[1], 'click', function() {
    overlayFastfood2.setMap(map);
});
overlayFastfood2.setMap(null);

function closeFastfood2() {
    overlayFastfood2.setMap(null);     
}   

var contentFastfood3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'           썬더치킨' + 
'            <div class="close" onclick="closeFastfood3()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191211_129%2F1576046848767s7S5t_JPEG%2Fimage.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 44</div>' + 
'                <div class="jibun ellipsis">02-942-3988</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayFastfood3 = new kakao.maps.CustomOverlay({
    content: contentFastfood3,
    map: map,
    position: Fastfood[2].getPosition()       
});

kakao.maps.event.addListener(Fastfood[2], 'click', function() {
    overlayFastfood3.setMap(map);
});
overlayFastfood3.setMap(null);

function closeFastfood3() {
    overlayFastfood3.setMap(null);     
}   

var contentFastfood4 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            도미노피자' + 
'            <div class="close" onclick="closeFastfood4()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MzBfMTUx%2FMDAxNTI3NjU4ODc3NTA3.mct4Ioq2OfpNLMphQNjk4jpqC36xl1Apcpg6irxtZLAg.OTYLFQXuDG0L9C6R6U987_aBi22n2DDo9o6HJyCdJgog.JPEG.7small%2F20180530_095728.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 52 세영전자학원</div>' + 
'                <div class="jibun ellipsis">02-915-3082</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayFastfood4 = new kakao.maps.CustomOverlay({
    content: contentFastfood4,
    map: map,
    position: Fastfood[3].getPosition()       
});

kakao.maps.event.addListener(Fastfood[3], 'click', function() {
    overlayFastfood4.setMap(map);
});
overlayFastfood4.setMap(null);

function closeFastfood4() {
    overlayFastfood4.setMap(null);     
}   

var contentFastfood5 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            서브웨이' + 
'            <div class="close" onclick="closeFastfood5()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTNfMjY0%2FMDAxNTk0NjIzMTM0NzQ0.KnIlfglxqF3mBEk3IXcmLgJMoCuGs2CRsMmf7yEiJz8g.2BqFMu-zg-IKdv77zf8s26DeRK2OPMjacWXZGZ3Cc-Ug.JPEG.saypumpy%2F1.JPG&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 57 성북플라자</div>' + 
'                <div class="jibun ellipsis">02-942-7779</div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayFastfood5 = new kakao.maps.CustomOverlay({
    content: contentFastfood5,
    map: map,
    position: Fastfood[4].getPosition()       
});

kakao.maps.event.addListener(Fastfood[4], 'click', function() {
    overlayFastfood5.setMap(map);
});
overlayFastfood5.setMap(null);

function closeFastfood5() {
    overlayFastfood5.setMap(null);     
}   