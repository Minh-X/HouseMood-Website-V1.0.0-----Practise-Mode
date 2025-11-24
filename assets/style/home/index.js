const touchToOpen = document.querySelector(".hidden__navigation--open");
const touchToClose = document.querySelector(".hidden__navigation--close");
const hiddenNavigation = document.querySelector(".hidden__nagativation--bar");
const countNumberYear = document.querySelector("#about__number--year");
const countNumberProjects = document.querySelector("#about__number--projects");
const countNumberClients = document.querySelector("#about__number--clients");
const countNumberProjectsInWorks = document.querySelector(
  "#about__number--projectsinwork"
);
const asnwerToggleTarger = document.querySelectorAll(".faq__content--answer");
const ToggleToOpenAnswer = document.querySelectorAll(".faq__content--main");
const reviewName = document.querySelector("#client__name");
const reviewJob = document.querySelector("#client__job");
const reviewMain = document.querySelector("#client__desc--main");
const reviewSub = document.querySelector("#client__desc--sub");
const reviewChangeBack = document.querySelector(".review__turn--left");
const reviewChangeNext = document.querySelector(".review__turn--right");
document.addEventListener("DOMContentLoaded", function () {
  countYear();
  countClients();
  countProjects();
  countProjectsInWork();
  reviewChange();
});
touchToOpen.addEventListener("click", function () {
  hiddenNavigation.style.maxHeight = "1000rem";
  setTimeout(() => {
    hiddenNavigation.style.opacity = "1";
  }, 5);
});
touchToClose.addEventListener("click", function () {
  hiddenNavigation.style.maxHeight = "0rem";
  hiddenNavigation.style.opacity = "0";
});
function countYear() {
  let x = 2000;
  const countInterval = setInterval(() => {
    x++;
    countNumberYear.textContent = `${x}`;
    if (x === 2014) {
      clearInterval(countInterval);
    }
  }, 100);
}
function countProjects() {
  let x = 100;
  const countInterval = setInterval(() => {
    x++;
    countNumberProjects.textContent = `${x}`;
    if (x === 304) {
      clearInterval(countInterval);
    }
  }, 10);
}
function countClients() {
  let x = 50;
  const countInterval = setInterval(() => {
    x++;
    countNumberClients.textContent = `${x}`;
    if (x === 189) {
      clearInterval(countInterval);
    }
  }, 10);
}
function countProjectsInWork() {
  let x = 1;
  const countInterval = setInterval(() => {
    x++;
    countNumberProjectsInWorks.textContent = `${x}`;
    if (x === 12) {
      clearInterval(countInterval);
    }
  }, 100);
}
ToggleToOpenAnswer.forEach((x, y) => {
  x.addEventListener("click", (e) => {
    asnwerToggleTarger[y].classList.toggle("open__answer");
  });
});
const reviewData = [
  {
    name: "Morgan Dufresne",
    job: "Company owner",
    main: "From concept to reality, the team turned my vision into a stunning, livable space.  I couldn’t be happier with this!",
    sub: `Morgan wanted a modern, functional office.  We delivered a <br />bright, stylish space with smart design solutions, perfectly<br /> tailored to his company style.`,
  },
  {
    name: "Helen Duren",
    job: "Photographer",
    main: "This team turned my vision into a stunning, functional space. Their creativity and attention to detail were outstanding!",
    sub: `Helen, a photographer, sought a space reflecting his artistic <br /> vision. We crafted a design with natural light, clean lines, and<br /> functionality to inspire his creativity daily`,
  },
  {
    name: "Alisa Kim",
    job: "Designer",
    main: "Working with this team was a dream! They transformed my space into something even better than I imagined",
    sub: `Alisa likely contacted an interior design company, shared her <br />vision and requirements, and formalized the project with a <br />contract outlining the scope, budget, and timeline.`,
  },
];
console.log(reviewData[2]);
function reviewChange() {
  let idx = 0;
  const last = reviewData.length - 1;
  console.log(reviewData.length)
  function updateData (){
    let item = reviewData[idx]
    reviewName.innerHTML = item.name;
    reviewJob.innerHTML = item.job;
    reviewMain.innerHTML = item.main;
    reviewSub.innerHTML = item.sub;
  }
  updateData()
    reviewChangeNext.addEventListener("click",()=>{
    if(idx < last){
      idx++
      updateData()
    }
  })
  reviewChangeBack.addEventListener("click",()=>{
    if(idx > 0){
      idx--
      updateData()
    }
  })
}