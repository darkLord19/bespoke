$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  setTimeout(() => {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 10,
      },
      500
    );
  }, 300);
});
