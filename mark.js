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

var imageSushi = './markimg/sushi.png', imageChina = './markimg/china.png'; 
var imageCoffee = './markimg/coffee.png', imageMeat = './markimg/meat.png';
var imageBeer = './markimg/beer.png' , imageRice = './markimg/rice.png';
var imageBunsik = './markimg/bunsik.png', imageHamburger ='./markimg/hamburger.png';
var imageChicken = './markimg/chicken.png', imagePizza = './markimg/pizza.png';
var imagePorkcutlet ='./markimg/porkcutlet.png', imageDeopbab = './markimg/deopbab.png';
var imageKwbuilding ='./markimg/kwbuilding.png', imageCupbap = './markimg/cupbap.png';
var imageHansik = './markimg/hansik.png', imageKimbap = './markimg/kimbap.png';
var imageLunchbox = './markimg/lunchbox.png' ;

var imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(32, 34)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImageSushi = new kakao.maps.MarkerImage(imageSushi, new kakao.maps.Size(60, 50), imageOption);
var markerImageChina = new kakao.maps.MarkerImage(imageChina, new kakao.maps.Size(80, 80), imageOption);
var markerImageMeat = new kakao.maps.MarkerImage(imageMeat, new kakao.maps.Size(50, 40), imageOption);
var markerImageCoffee = new kakao.maps.MarkerImage(imageCoffee, new kakao.maps.Size(50, 50), imageOption);
var markerImageBeer = new kakao.maps.MarkerImage(imageBeer, new kakao.maps.Size(70, 70), imageOption);
var markerImageRice = new kakao.maps.MarkerImage(imageRice, new kakao.maps.Size(70, 70), imageOption);
var markerImageBunsik = new kakao.maps.MarkerImage(imageBunsik, new kakao.maps.Size(70, 70), imageOption);
var markerImageHamburger = new kakao.maps.MarkerImage(imageHamburger, new kakao.maps.Size(60, 30), imageOption);
var markerImageChicken = new kakao.maps.MarkerImage(imageChicken, new kakao.maps.Size(50, 70), imageOption);
var markerImagePizza = new kakao.maps.MarkerImage(imagePizza, new kakao.maps.Size(50, 50), imageOption);
var markerImagePorkcutlet = new kakao.maps.MarkerImage(imagePorkcutlet, new kakao.maps.Size(60, 60), imageOption);
var markerImageDeopbab = new kakao.maps.MarkerImage(imageDeopbab, new kakao.maps.Size(50, 50), imageOption);
var markerImageKwbuilding = new kakao.maps.MarkerImage(imageKwbuilding, new kakao.maps.Size(40, 40), imageOption);
var markerImageCupbap = new kakao.maps.MarkerImage(imageCupbap, new kakao.maps.Size(30, 45), imageOption);
var markerImageHansik = new kakao.maps.MarkerImage(imageHansik, new kakao.maps.Size(40, 40), imageOption);
var markerImageKimbap = new kakao.maps.MarkerImage(imageKimbap, new kakao.maps.Size(50, 40), imageOption);
var markerImageLunchbox = new kakao.maps.MarkerImage(imageLunchbox, new kakao.maps.Size(50, 45), imageOption);

// 마커를 생성합니다
var Sushi = []
Sushi[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6191576640629, 127.05622551187201), 
    image: markerImageSushi // 마커이미지 설정 
});

var Rice = []
Rice[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62019545812306, 127.05837726298783), //지지고
    image: markerImageCupbap // 마커이미지 설정 
});
Rice[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62020028123129, 127.06132837064199), //작은집
    image: markerImageHansik // 마커이미지 설정 
});
Rice[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620528670603726, 127.0585625616233), //김밥천국
    image: markerImageKimbap // 마커이미지 설정 
});
Rice[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62130015254169, 127.05977317296842), //밥은화
    image: markerImageDeopbab // 마커이미지 설정 
});
Rice[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61905737979152, 127.05745882695787), //학교종이땡땡땡
    image: markerImageHansik // 마커이미지 설정 
});
Rice[5] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62029902819678, 127.05846512944193), //윤스쿡
    image: markerImagePorkcutlet // 마커이미지 설정 
});
Rice[6] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.620260571619454, 127.05879641851755), //한솥도시락 광운대정문
    image: markerImageLunchbox // 마커이미지 설정 
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

var Noodle = []
Noodle[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.618643399289105, 127.05730049547331), //미식성
    image: markerImageChina // 마커이미지 설정 
});
Noodle[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.622946141914746, 127.05978827909387), //더원
    image: markerImageChina // 마커이미지 설정 
});
Noodle[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62361454665871, 127.06091874856436), //친친
    image: markerImageChina // 마커이미지 설정 
});


var Meat = []
Meat[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62074730506186, 127.05870499081668), //화로상회
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

var Fastfood =[] 
Fastfood[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.621454233909, 127.05908903740301), //진미통닭
    image: markerImageChicken // 마커이미지 설정 
});
Fastfood[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6209002697109, 127.05880258592641), //BBQ 월계광운대점
    image: markerImageChicken // 마커이미지 설정 
});
Fastfood[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62132680382325, 127.0594188445525), //썬더치킨 광운대점
    image: markerImageChicken // 마커이미지 설정 
});
Fastfood[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62193938789321, 127.05959207505809), //도미노피자 월계점
    image: markerImagePizza // 마커이미지 설정 
});
Fastfood[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62266691909971, 127.05962380647559), //서브웨이 광운대역점
    image: markerImageHamburger // 마커이미지 설정 
});

var Building=[]
Building[0] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.619575254332005, 127.05992292008003), //비마관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[1] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62045621287226, 127.05944222193362), //화도관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[2] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61882333407515, 127.0591209360466), //옥의관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[3] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6201112683464, 127.06006777118145), //노천극장
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[4] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.6197910028249, 127.06087739976864), //새빛관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[5] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.619241364010065, 127.06094774534127), //참빛관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[6] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61912019093171, 127.06004998336516), //다산재
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[7] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61991824156992, 127.05870553212837), //광운대학교 80주년기념관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[8] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61944316870695, 127.05830588085523), //복지관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[9] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62011857426917, 127.05898037255847), //중앙도서관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[10] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.61982420012186, 127.057564254307), //동해문화예술관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[11] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.619553856908134, 127.05766032575151), //연구관
    image: markerImageKwbuilding // 마커이미지 설정 
});
Building[12] = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.62062182689498, 127.05704381778693), //한울관
    image: markerImageKwbuilding // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
for(let i = 0; i < Sushi.length; i++) {
    Sushi[i].setMap(map);
}
var isSushiShow = true;

for(let i = 0; i < Rice.length; i++) {
    Rice[i].setMap(map);
}
var isRiceShow = true;

for(let i = 0; i < Noodle.length; i++) {
    Noodle[i].setMap(map);
}
var isNoodleShow = true;

for(let i = 0; i < Meat.length; i++) {
    Meat[i].setMap(map);
}
var isMeatShow = true;

for(let i = 0; i < Coffee.length; i++) {
    Coffee[i].setMap(map);
}
var isCoffeeShow = true;

for(let i = 0; i < Beer.length; i++) {
    Beer[i].setMap(map);
}
var isBeerShow = true;

for(let i = 0; i < Bunsik.length; i++) {
    Bunsik[i].setMap(map);
}
var isBunsikShow = true;

for(let i = 0; i < Fastfood.length; i++) {
    Fastfood[i].setMap(map);
}
var isFastfoodShow = true;

for(let i = 0; i < Building.length; i++) {
    Building[i].setMap(map);
}
var isBuildingShow = true;