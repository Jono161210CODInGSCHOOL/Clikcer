var Score = 0;
onEvent("CLICKME", "click", function( ) {
  hideElement("label1");
  setPosition("CLICKME", randomNumber(2, 200), randomNumber(30, 200), randomNumber(1, 200), randomNumber(1, 200));
  setProperty("CLICKME", "background-color", rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255), 0.5));
  setProperty("CLICKME", "border-radius", randomNumber(1, 100));
  setProperty("CLICKME", "border-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  playSound("assets/category_achievements/melodic_win_2.mp3", false);
  Score = Score + 1;
  setNumber("label3", Score);
});
