function showSlider() {
  let btn = document.querySelector(".btn-more"),
    container = document.querySelector(".carousel-container"),
    preloader = document.querySelector(".preloader");
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.remove("d-inline-flex");
    this.classList.add("d-none");
    preloader.style.cssText = "display:block";

    setTimeout(() => {
      container.classList.remove("disable");
      preloader.style.cssText = "display:none";
      $(".carousel").carousel({
        interval: 5000
      });
    }, 5000);
  });
}

showSlider();
