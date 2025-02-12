$(document).ready(function() {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
      hiddenRow.toggleClass("hidden");
      if (hiddenRow.is(":visible")) { // is this element is visible
        $(".expand-btn").html("put away");
      }
      else {
        $(".expand-btn").html("Put away");
      }
    });
    $(".play-btn").click( function () {
      $(".modal-conves").toggleClass("hidden");
    }); 
    $(".modal-close").click( function () {
      $(".modal-conves").addClass("hidden");
    });
  });