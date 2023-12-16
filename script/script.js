var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 3,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


let requestURL = "script/matches.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

let matches;
let matchesArrDate = [];
let date =  document.querySelectorAll(".match_time");
let matchesFirstTeame = [];
let FirstTeam =  document.querySelectorAll(".team_first_name");
let matchesFirstTeameTotal = [];
let FirstTeamTotal =  document.querySelectorAll(".team_first_total");
let matchesFirstTeameImg = [];
let FirstTeamImg =  document.querySelectorAll(".team_first_img");
let matchesSecondTeame = [];
let SecondTeam =  document.querySelectorAll(".team_two_name");
let matchesSecondTeameTotal = [];
let SecondTeamTotal =  document.querySelectorAll(".team_two_total");

let matchesSecondTeameImg = [];
let SecondTeamImg =  document.querySelectorAll(".team_two_img");

let matchesSeasone = [];
let Seasone = document.querySelectorAll(".match_sesone");



request.onload = function () {
  matches = request.response;
  for(let key in matches){
    let matchesArr = matches[key];
    matchesArrDate.push(matchesArr.date);
    matchesFirstTeame.push(matchesArr.firstTeam);
    matchesFirstTeameTotal.push(matchesArr.firstTeamTotal);
    matchesFirstTeameImg.push(matchesArr.firstTeamImg);
    matchesSecondTeame.push(matchesArr.secondTeam);
    matchesSecondTeameTotal.push(matchesArr.secondTeamTotal);
    matchesSecondTeameImg.push(matchesArr.secondTeamImg);
    matchesSeasone.push(matchesArr.seasone);
  }



    for(let i = 0; i<date.length; i++){
      date[i].innerHTML = matchesArrDate[i];
      FirstTeam[i].innerHTML = matchesFirstTeame[i];
      FirstTeamTotal[i].innerHTML = matchesFirstTeameTotal[i];
      console.log(FirstTeamImg[i]);
      FirstTeamImg[i].src = matchesFirstTeameImg[i];
      SecondTeam[i].innerHTML = matchesSecondTeame[i];
      SecondTeamTotal[i].innerHTML = matchesSecondTeameTotal[i];
      SecondTeamImg[i].src = matchesSecondTeameImg[i];
      Seasone[i].innerHTML = matchesSeasone[i];

    }



  
  
  

};


