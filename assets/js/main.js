/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function togglesSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", togglesSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

////////////////////////////tech stack section //////////////////////////

let tech_stacks = [
  {
    tech_name: "Java",
    img_link:
      "https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ",
  },
  {
    tech_name: "Spring_Boot",
    img_link: "../../assets/img/spring-boot.png",
  },
  {
    tech_name: "JDBC",
    img_link:
      "https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ",
  },
  {
    tech_name: "MySQL",
    img_link: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
  },
  {
    tech_name: "Hibernate",
    img_link:
      "https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png",
  },
  {
    tech_name: "JavaScript",
    img_link:
      "https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY",
  },
  {
    tech_name: "CSS",
    img_link:
      "https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG",
  },
  {
    tech_name: "HTML",
    img_link:
      "https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC",
  },
  {
    tech_name: "BootStrap",
    img_link: "https://avatars.githubusercontent.com/u/2918581?s=280&v=4",
  },
  {
    tech_name: "GitHub",
    img_link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },

  {
    tech_name: "VS_Code",
    img_link:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
  },

  {
    tech_name: "Eclipse",
    img_link:
      "https://spring.io/images/logo-eclipse-02147c535e095dcbf9798552c191e58a.svg",
  },

  {
    tech_name: "Postman",
    img_link:
      "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png",
  },

  {
    tech_name: "Apache_Server",
    img_link:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Apache_HTTP_Server_Logo_%282016%29.svg/1024px-Apache_HTTP_Server_Logo_%282016%29.svg.png",
  },

  {
    tech_name: "Git",
    img_link: "https://www.svgrepo.com/show/364550/gitlab-logo-fill.svg",
  },
];

let techStackDiv = document.getElementById("tech");

tech_stacks.forEach((tech) => {
  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt = tech.tech_name;
  let name = document.createElement("p");
  name.innerText = tech.tech_name;

  comp.append(img, name);

  techStackDiv.append(comp);
});

// testing js

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
// let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };

//// contact button

let contactButton = document.getElementById("contactButton");

console.log(contactButton);

class data {
  constructor(name, email, project, message) {
    this.name = name;
    this.email = email;
    this.project = project;
    this.message = message;
  }
}

contactButton.addEventListener("click", async (event) => {
  let name = document.getElementById("formName").value;
  let email = document.getElementById("formEmail").value;
  let project = document.getElementById("formProject").value;
  let message = document.getElementById("formMessage").value;

  let allInfoOfProject = new data(name, email, project, message);

  let returnResponse = await sendData(allInfoOfProject);

  let finalResponse = await returnResponse.json();

  console.log(finalResponse);

  alert(
    `Heyy ${finalResponse.name} your response send to Sanket. We will get back to you. Thank you !!!`
  );

  // resetting the input value

  document.getElementById("formName").value = "";
  document.getElementById("formEmail").value = "";
  document.getElementById("formProject").value = "";
  document.getElementById("formMessage").value = "";
});

let sendData = async (data) => {
  let url = "http://localhost:8888/sendMessage";

  let returnResponse = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return returnResponse;
};
