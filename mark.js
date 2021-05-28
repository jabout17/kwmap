if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        var imageUser = './user.png';
        var  markerImageUser = new kakao.maps.MarkerImage(imageUser, new kakao.maps.Size(44, 49), {offset: new kakao.maps.Point(32, 34)});
        var user = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude), 
        image: markerImageUser // 마커이미지 설정 
        });
        user.setMap(map);
    });
} else {
    alert("브라우저가 GeoLocation을 지원하지 않습니다.");
}


var imageSushi = './sushi.png', imageChina = './china.png'; // 마커이미지의 주소입니다 
var imageCoffee = './coffee.png', imageMeat = './meat.png';
var imageBeer = './beer.png' , imageRice = './rice.png';
var imageBunsik = './bunsik.png';

var imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(32, 34)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImageSushi = new kakao.maps.MarkerImage(imageSushi, imageSize, imageOption);
var markerImageChina = new kakao.maps.MarkerImage(imageChina, imageSize, imageOption);
var markerImageMeat = new kakao.maps.MarkerImage(imageMeat, imageSize, imageOption);
var markerImageCoffee = new kakao.maps.MarkerImage(imageCoffee, imageSize, imageOption);
var markerImageBeer = new kakao.maps.MarkerImage(imageBeer, imageSize, imageOption);
var markerImageRice = new kakao.maps.MarkerImage(imageRice, imageSize, imageOption);
var markerImageBunsik = new kakao.maps.MarkerImage(imageBunsik, imageSize, imageOption);

// 마커를 생성합니다
var Sushi = []
Sushi[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6191576640629, 127.05622551187201), 
    image: markerImageSushi // 마커이미지 설정 
});

var Rice = []
Rice[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62023304107087, 127.05829700071017), //지지고
    image: markerImageRice // 마커이미지 설정 
});
Rice[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62020028123129, 127.06132837064199), //작은집
    image: markerImageRice // 마커이미지 설정 
});
Rice[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620528670603726, 127.0585625616233), //김밥천국
    image: markerImageRice // 마커이미지 설정 
});
Rice[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62130015254169, 127.05977317296842), //밥은화
    image: markerImageRice // 마커이미지 설정 
});
Rice[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61905737979152, 127.05745882695787), //학교종이땡땡땡
    image: markerImageRice // 마커이미지 설정 
});
Rice[5] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620528670603726, 127.0585625616233), //김밥천국
    image: markerImageRice // 마커이미지 설정 
});
Rice[6] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62027889552973, 127.05839898841195), //윤스쿡
    image: markerImageRice // 마커이미지 설정 
});

var Bunsik = []
Bunsik[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6208624027212, 127.05928583354357), //언니떡볶이 동생브리또
    image: markerImageBunsik // 마커이미지 설정 
});
Bunsik[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62105519873698, 127.05895078207601), //동대문엽기떡볶이
    image: markerImageBunsik // 마커이미지 설정 
});

var China = []
China[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.618643399289105, 127.05730049547331), 
    image: markerImageChina // 마커이미지 설정 
});
China[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620664309420754, 127.05862702302842), //신연 마라탕
    image: markerImageChina // 마커이미지 설정 
});


var Meat = []
Meat[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62074730506186, 127.05870499081668), 
    image: markerImageMeat // 마커이미지 설정 
});
Meat[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620872446192394, 127.05853331628185), //화로상회
    image: markerImageMeat // 마커이미지 설정 
});

var Coffee = [] //카페
Coffee[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6232744430833, 127.06068490568035), //스타벅스
    image: markerImageCoffee // 마커이미지 설정 
});
Coffee[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62037178659895, 127.0584430112201),  //이디야
    image: markerImageCoffee // 마커이미지 설정 
});
Coffee[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6199392540142, 127.05865351770736), //공차
    image: markerImageCoffee // 마커이미지 설정 
});
Coffee[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62128849166188, 127.05904051392858), //빽다방
    image: markerImageCoffee // 마커이미지 설정 
});
Coffee[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62082177225292, 127.05860866129008), //쥬씨&와피
    image: markerImageCoffee // 마커이미지 설정 
});

var Beer =[] //술집
Beer[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62122708187192, 127.06066486254016), //별난주점
    image: markerImageBeer // 마커이미지 설정 
});
Beer[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62335500207719, 127.06107622766595), //오사카부루스
    image: markerImageBeer // 마커이미지 설정 
});
Beer[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62254330740474, 127.06080320734459), //튀맥
    image: markerImageBeer // 마커이미지 설정 
});
Beer[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62342972308086, 127.06024472580165), //빈대떡신사
    image: markerImageBeer // 마커이미지 설정 
});
Beer[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.622440519304256, 127.06078919750385), //공릉통골뱅이
    image: markerImageBeer // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
for(let i = 0; i < Sushi.length; i++) {
    Sushi[i].setMap(map)
}
for(let i = 0; i < Rice.length; i++) {
    Rice[i].setMap(map)
}
for(let i = 0; i < China.length; i++) {
    China[i].setMap(map)
}
for(let i = 0; i < Meat.length; i++) {
    Meat[i].setMap(map)
}
for(let i = 0; i < Coffee.length; i++) {
    Coffee[i].setMap(map)
}
for(let i = 0; i < Beer.length; i++) {
    Beer[i].setMap(map)
}
for(let i = 0; i < Beer.length; i++) {
    Bunsik[i].setMap(map)
}