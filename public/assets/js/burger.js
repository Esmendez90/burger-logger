// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    console.log("click");

    let addburger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0,
    };

    $.ajax("api/burgers", {
      type: "POST",
      data: addburger,
    }).then(function () {
      console.log("Added burger");
      location.reload();
    });
  });

  $(".eatBurger").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(id);
    let devouredBurger = $(this).data("devouredBurger");

    if (devouredBurger === 1) {
      devouredBurger = 0;
    } else {
      devouredBurger = 1;
    }
    let devouredState = {
      devoured: devouredBurger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("Burger devoured!");
      location.reload();
    });
  });

  $(".delete-button").on("click", function (event) {
    event.preventDefault();

    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
