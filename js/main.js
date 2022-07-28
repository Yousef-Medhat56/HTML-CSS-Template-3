//Animate element width on scroll
const SKILLS_SECTION = document.getElementById("our-skills");
const PROGRESS_SPANS = document.querySelectorAll(".skill .progress span");

//a function that calls another function on scrolling to a given section
const callFunctionOnScroll = (section,func) => {
  window.onscroll = () => {
    if (window.scrollY >= section.offsetTop - 200) {
      func(PROGRESS_SPANS)
    }
  };
};

//Animate width on scroll
const animateWidthOnScroll = (progressComponentsArr)=>{
  progressComponentsArr.forEach((component) => {
    component.style.width = component.dataset.width;
  });
}

callFunctionOnScroll(SKILLS_SECTION, animateWidthOnScroll)

//Create countdown timer
const DATE_COUNTDOWN = new Date("June 5, 2023").getTime()

const MILISECONDS_IN_MIN = 1000 * 60
const MILISECONDS_IN_HOUR = MILISECONDS_IN_MIN * 60
const MILISECONDS_IN_DAY = MILISECONDS_IN_HOUR * 24

const countdownTimer = () => {
  let counter = setInterval(() => {
    const DATE_NOW = new Date().getTime() 
    const DATE_DIFF = DATE_COUNTDOWN - DATE_NOW

    const LEFT_DAYS = Math.floor(DATE_DIFF / MILISECONDS_IN_DAY)
    const LEFT_HOURS = Math.floor(DATE_DIFF % MILISECONDS_IN_DAY / MILISECONDS_IN_HOUR)
    const LEFT_MINUTES = Math.floor(DATE_DIFF % MILISECONDS_IN_HOUR / MILISECONDS_IN_MIN)
    const LEFT_SECONDS = Math.floor(DATE_DIFF % MILISECONDS_IN_MIN / 1000)

    updateCountdwonElms(LEFT_DAYS, LEFT_HOURS, LEFT_MINUTES, LEFT_SECONDS)
    if (DATE_DIFF < 0) clearInterval(counter)
  }, 1000)
}

const updateCountdwonElms = (days, hours, minutes, seconds) => {
  document.getElementById("days").textContent = days > 9 ? days : `0${days}`
  document.getElementById("hours").textContent = hours > 9 ? hours : `0${hours}`
  document.getElementById("minutes").textContent = minutes > 9 ? minutes : `0${minutes}`
  document.getElementById("seconds").textContent = seconds > 9 ? seconds : `0${seconds}`
}

countdownTimer()

