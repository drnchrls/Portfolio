// NavBar Active Indicator
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".nav ul li a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 50;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


// Lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

