let navBtn = document.querySelector(".Navbar__brg-icon");
let NavbarLinks = document.querySelector(".Navbar__links");
let NavbarLink = document.querySelectorAll(".Navbar__link");

navBtn.addEventListener("click", () => {
  NavbarLinks.classList.toggle("open");
  navBtn.classList.toggle("open");
});
NavbarLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    link.classList.add("active");
    NavbarLinks.classList.remove("open");
    navBtn.classList.remove("open");
  });
});
