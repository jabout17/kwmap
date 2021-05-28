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

var imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(32, 34)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImageSushi = new kakao.maps.MarkerImage(imageSushi, imageSize, imageOption);
var markerImageChina = new kakao.maps.MarkerImage(imageChina, new kakao.maps.Size(64, 69), imageOption);
var markerImageMeat = new kakao.maps.MarkerImage(imageMeat, imageSize, imageOption);
var markerImageCoffee = new kakao.maps.MarkerImage(imageCoffee, imageSize, imageOption);

// 마커를 생성합니다
var Sushi = []
Sushi[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6191576640629, 127.05622551187201), 
    image: markerImageSushi // 마커이미지 설정 
});
Sushi
Sushi[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62058260330177, 127.05862505541789), 
    image: markerImageSushi // 마커이미지 설정 
});

var China = []

China[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.618643399289105, 127.05730049547331), 
    image: markerImageChina // 마커이미지 설정 
});

var Meat = []
Meat[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62074730506186, 127.05870499081668), 
    image: markerImageMeat // 마커이미지 설정 
});

var Coffee = []
Coffee[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.621288197976966, 127.05904270518194), 
    image: markerImageCoffee // 마커이미지 설정 
});
// 마커가 지도 위에 표시되도록 설정합니다
for(let i = 0; i < Sushi.length; i++) {
    Sushi[i].setMap(map)
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