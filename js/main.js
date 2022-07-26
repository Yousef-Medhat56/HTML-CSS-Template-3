const SKILLS_SECTION = document.getElementById("our-skills");
const PROGRESS_SPANS = document.querySelectorAll(".skill .progress span");

const animateWidthOnScroll = (section,progressComponentsArr) => {
  window.onscroll = () => {
    if (window.scrollY >= section.offsetTop - 200) {
        progressComponentsArr.forEach((component) => {
            component.style.width = component.dataset.width;
      });
    }
  };
};

animateWidthOnScroll(SKILLS_SECTION,PROGRESS_SPANS)
