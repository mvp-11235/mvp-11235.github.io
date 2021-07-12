var clockTarget = document.getElementById("clock");

// 현재 시각
function clock() {
    var date = new Date();

    // date Object를 받아오고 
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토']; 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget .innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일  ` + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
}

function init() {
    clock();

    setInterval(clock, 1000);
}

init();
