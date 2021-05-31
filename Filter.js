function SushiOnOff() { 
    if(isSushiShow == true) {
        for(let i = 0; i < Sushi.length; i++) {
            Sushi[i].setMap(null);
        }
        isSushiShow = false;
    } else {
        for(let i = 0; i < Sushi.length; i++) {
            Sushi[i].setMap(map);
        } 
        isSushiShow = true;
    }
}

function MeatOnOff() { 
    if(isMeatShow == true) {
        for(let i = 0; i < Meat.length; i++) {
            Meat[i].setMap(null);
        }
        isMeatShow = false;
    } else {
        for(let i = 0; i < Meat.length; i++) {
            Meat[i].setMap(map);
        } 
        isMeatShow = true;
    }
}

function NoodleOnOff() { 
    if(isNoodleShow == true) {
        for(let i = 0; i < Noodle.length; i++) {
            Noodle[i].setMap(null);
        }
        isNoodleShow = false;
    } else {
        for(let i = 0; i < Noodle.length; i++) {
            Noodle[i].setMap(map);
        } 
        isNoodleShow = true;
    }
}

