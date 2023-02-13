
  var today = moment().add("days");
  document.getElementById("date").value = today.format("D MMMM YYYY");

  function timeToSet(timee, selector) {
    var settime = document.getElementsByName(timee)[0];
    settime.value = selector.value;
  }
