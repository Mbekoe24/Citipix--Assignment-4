document.addEventListener("DOMContentLoaded", function() {
  //your code goes here

  selectCities().addEventListener("change", function(event) {
    const selectCity = event.target.value;
    if (selectCity === "new york city") {
      setNycBackground();
    } else if (selectCity === "san-fransisco") {
      setSfBackground();
    } else if (selectCity === "los-angeles") {
      setLaBackground();
    } else if (selectCity === "austin") {
      setAustinBackground();
    } else if (selectCity === "sydney") {
      setSydneyBackground();
    } else if (selectCity === "default") {
      setDefaultBackgroundImage();
    }
  });
});
