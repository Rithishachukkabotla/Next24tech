document.querySelectorAll(".product button").forEach(button => {
      button.addEventListener("click", () => {
        alert("Product added to cart!");
      });
    });