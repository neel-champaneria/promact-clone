const navbar = document.getElementById("navbar");
const navbarLinks = document.getElementById("navbar-links");
const navLogo = document.getElementById("logo");
const hamburgerTop = document.querySelector(".hamburger-top");
const hamburgerMiddle = document.querySelector(".hamburger-middle");
const hamburgerBottom = document.querySelector(".hamburger-bottom");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

window.onscroll = function () {
  if (scrollY >= 72) {
    navbar.classList.add("bg-white");
    navbar.classList.remove("bg-promactDarkBlue");
    navbarLinks.classList.add("text-black");
    navbarLinks.classList.remove("text-while");
    logo.setAttribute("src", "./images/Logo-Black.png");
    /* hamburgerTop.style.background = "#000000";
    hamburgerMiddle.style.background = "#000000";
    hamburgerBottom.style.background = "#000000"; */
  } else {
    navbar.classList.add("bg-promactDarkBlue");
    navbar.classList.remove("bg-white");
    navbarLinks.classList.add("text-white");
    navbarLinks.classList.remove("text-black");
    logo.setAttribute("src", "./images/Logo-white.png");
    /* if (btn.classList.contains("open")) {
      hamburgerTop.style.background = "#000000";
      hamburgerMiddle.style.background = "#000000";
      hamburgerBottom.style.background = "#000000";
    } else {
      hamburgerTop.style.background = "#ffffff";
      hamburgerMiddle.style.background = "#ffffff";
      hamburgerBottom.style.background = "#ffffff";
    } */
  }
};

const desktopNavServices = document.getElementById("desktop-nav-services");
// const desktopServices = document.getElementById("desktop-services");
const desktopNavProducts = document.getElementById("desktop-nav-products");
// const desktopProducts = document.getElementById("desktop-products");
const desktopNavCompany = document.getElementById("desktop-nav-company");
// const desktopCompany = document.getElementById("desktop-company");
const navLinks = document.querySelectorAll(".nav-link");
const navExtPanel = document.querySelectorAll(".nav-ext-panel");
const backdrop = document.getElementById("backdrop");

navLinks.forEach((link) => link.addEventListener("click", onDeskTopLinkClick));
backdrop.addEventListener("click", closeDesktopExtNav);

function onDeskTopLinkClick(e) {
  const classString = e.target.getAttribute("data-target");
  const panelFromClassString = document.getElementsByClassName(classString)[0];

  if (panelFromClassString.classList.contains("hidden")) {
    navLinks.forEach((link) => link.classList.remove("bg-white"));
    navLinks.forEach((link) => link.classList.remove("text-black"));
    navExtPanel.forEach((panel) => panel.classList.add("hidden"));
    panelFromClassString.classList.remove("hidden");
    e.target.classList.add("bg-white");
    e.target.classList.add("text-black");
    backdrop.classList.remove("hidden");
  } else {
    panelFromClassString.classList.toggle("hidden");
    e.target.classList.remove("bg-white");
    e.target.classList.remove("text-black");
    backdrop.classList.add("hidden");
  }
}

function closeDesktopExtNav(e) {
  navLinks.forEach((link) => link.classList.remove("bg-white"));
  navLinks.forEach((link) => link.classList.remove("text-black"));
  navExtPanel.forEach((panel) => panel.classList.add("hidden"));
  e.target.classList.add("hidden");
}

/* desktopNavServices.addEventListener("click", function () {
  desktopServices.classList.toggle("hidden");
}); */

const industryTabs = document.querySelectorAll(".industry-tab");
const industryPanels = document.querySelectorAll(".industry-panel");

const testBtns = document.getElementsByClassName("test-btn");
const testRow = document.getElementById("test-row");

const footerTabs = document.querySelectorAll(".footer-tab");
const footerPanels = document.querySelectorAll(".footer-panel");

btn.addEventListener("click", navToggle);

industryTabs.forEach((tab) =>
  tab.addEventListener("click", onIndustryTabClick)
);

function onIndustryTabClick(e) {
  console.log("tab clicked");

  // Deactive All Tabs
  industryTabs.forEach((tab) => {
    tab.classList.remove("bg-promactAccordian", "text-white");
  });

  // Hide all panels
  industryPanels.forEach((panel) => panel.classList.remove("h-full"));
  industryPanels.forEach((panel) => panel.classList.add("h-0"));

  // Activate a new tab and panel based on the target
  e.target.classList.add("bg-promactAccordian", "text-white");

  const classString = e.target.getAttribute("data-target");

  console.log({ classString });
  console.log(
    document
      .getElementById("industry-panels")
      .getElementsByClassName(classString)
  );

  document
    .getElementById("industry-panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("h-0");

  document
    .getElementById("industry-panels")
    .getElementsByClassName(classString)[0]
    .classList.add("h-full");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  /* 
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  } */
}

var slides = document.querySelectorAll(".slide");
var slidesNavBtn = document.querySelectorAll(".slider-nav-btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slidesNavBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  slidesNavBtn[manual].classList.add("active");
};

slidesNavBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      slidesNavBtn[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// Testimonials slide
testBtns[0].onclick = function () {
  this.classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[1].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[2].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");

  this.classList.add("w-14", "bg-promactGray");
  testBtns[1].classList.add("w-10", "bg-gray-400");
  testBtns[2].classList.add("w-10", "bg-gray-400");
  testRow.style.transform = "translateX(0px)";
};

testBtns[1].onclick = function () {
  const w = window.innerWidth;
  let txpx = 240;
  if (w >= 640 && w < 768) {
    txpx = 500;
  }
  if (w >= 768 && w < 1024) {
    txpx = 650;
  }
  if (w >= 1024) {
    txpx = 800;
  }

  this.classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[0].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[2].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");

  this.classList.add("w-14", "bg-promactGray");
  testBtns[0].classList.add("w-10", "bg-gray-400");
  testBtns[2].classList.add("w-10", "bg-gray-400");

  testRow.style.transform = `translateX(-${txpx}px)`;
};

testBtns[2].onclick = function () {
  const w = window.innerWidth;
  let txpx = 240;
  if (w >= 640 && w < 768) {
    txpx = 500;
  }
  if (w >= 768 && w < 1024) {
    txpx = 650;
  }
  if (w >= 1024) {
    txpx = 800;
  }

  this.classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[0].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");
  testBtns[1].classList.remove("w-10", "w-14", "bg-gray-400", "bg-promactGray");

  this.classList.add("w-14", "bg-promactGray");
  testBtns[0].classList.add("w-10", "bg-gray-400");
  testBtns[1].classList.add("w-10", "bg-gray-400");

  testRow.style.transform = `translateX(-${txpx * 2}px)`;
};

// Footer Tabs and Panels
footerTabs.forEach((tab) => tab.addEventListener("click", onFooterTabClick));

function onFooterTabClick(e) {
  const classString = e.target.getAttribute("data-target");
  console.log({ target: e.target });
  const parent = document.querySelector(`[parent-of="${classString}"]`);
  console.log({ parent: parent });
  const panelFromClassString = document.getElementsByClassName(classString)[0];
  console.log("height: ", e);

  if (panelFromClassString.classList.contains("max-h-max")) {
    // Hide current panel
    console.log("in h-full condition");
    // const panelHeight = panelFromClassString.offsetHeight;
    panelFromClassString.classList.remove("max-h-max");
    panelFromClassString.classList.add("h-0");
    parent.style.height = null;
  } else {
    // Hide all panels
    console.log("in h-0 condition");
    footerPanels.forEach((panel) => panel.classList.remove("max-h-max"));
    footerPanels.forEach((panel) => panel.classList.add("h-0"));

    // Activate a new tab and panel based on the target

    /* panelFromClassString.classList.remove("h-0");
    panelFromClassString.classList.add("h-full"); */

    document.getElementsByClassName(classString)[0].classList.remove("h-0");
    document.getElementsByClassName(classString)[0].classList.add("max-h-max");
    const panelHeight = panelFromClassString.offsetHeight;
    parent.classList.add(`h-[${panelHeight}px]`);
    parent.style.height = `${panelHeight + 64}px`;
  }
}
