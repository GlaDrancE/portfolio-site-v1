var SideNav = document.querySelector("#side-navbar");
var BodyContainer = document.querySelector('.body-container');
var openNavBtn = document.querySelector('#openNav');
var openMobileNavBtn = document.querySelector('#mobile-menu');
function openNav() {
  BodyContainer.style.left = "-220px";
  SideNav.style.right = "0px";
}
// close the menu when clicked outside
document.addEventListener('click', (event) => {
  if (!SideNav.contains(event.target) && !openNavBtn.contains(event.target) && !openMobileNavBtn.contains(event.target)) {
    SideNav.style.right = "-320px";
    BodyContainer.style.left = "0px";
  }
});
function closeNavbar() {
  SideNav.style.right = "-320px";
  BodyContainer.style.left = "0px";
}

// Setting skill bar width
var bar = document.querySelectorAll('.bar');
for (let i = 0; i < bar.length; i++) {
  const element = bar[i];
  element.style.setProperty("--skillLevel", element.getAttribute('data') + '%')
}
