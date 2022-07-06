function toggleCanvas() {
  document.querySelector(".offcanvas-btn").classList.toggle("offcanvas-btn-open");
  document.querySelector(".offcanvas-aside").classList.toggle("offcanvas-aside-open");
}

document.addEventListener(
  "click",
  function (event) {
    if (
        event.target.matches(".contact-btn") || 
        (
            !event.target.closest(".offcanvas-aside") && 
            document.querySelector(".offcanvas-btn").classList.contains('offcanvas-btn-open')
        )
    ) {
      toggleCanvas();
    }
  },
  false
);
