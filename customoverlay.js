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
'                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
'                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
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


var contentrice1 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            지지고' + 
'            <div class="close" onclick="closerice1()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.nzine.co.kr%2Ffiles%2Feditor%2Fattached%2F2fba14ca6a62840a6c6cecdad4e43c69.jpg&type=a340" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 노원구 광운로 27</div>' + 
'                <div class="jibun ellipsis">02-942-8212</div>' + 
'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';

var overlayRice1 = new kakao.maps.CustomOverlay({
    content: contentrice1,
    map: map,
    position: Rice[0].getPosition()
});
overlayRice1.setMap(null);
kakao.maps.event.addListener(Rice[0], 'click', function() {
    overlayRice1.setMap(map);
});


function closerice1() {
    overlayRice1.setMap(null);     
}   
