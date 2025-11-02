const touchToOpen = document.querySelector(".hidden__navigation--open");
const touchToClose = document.querySelector(".hidden__navigation--close");
const hiddenNavigation = document.querySelector(".hidden__nagativation--bar");
const countNumberYear = document.querySelector("#about__number--year");
const countNumberProjects = document.querySelector("#about__number--projects");
const countNumberClients = document.querySelector("#about__number--clients");
const countNumberProjectsInWorks = document.querySelector(
  "#about__number--projectsinwork"
);
document.addEventListener("DOMContentLoaded", function () {
  countYear();
  countClients();
  countProjects();
  countProjectsInWork();
  Preloader();
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
