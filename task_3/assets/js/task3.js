$("#changeTextButton").click(function() {
    // Step 1: Select element by ID
    $("#targetElement").text("New Text");
});

  // Step 3: Add CSS class
$("#addClassButton").click(function() {
  // Step 1: Select element by ID
  $("#targetElement").addClass("highlighted");
});


// Step 4 & 5: Attach event listener and define function
$("#eventButton").click(function() {
    // Step 1: Select element by ID
    $("#hiddenElement").toggle(); // Show/hide the hidden element
});