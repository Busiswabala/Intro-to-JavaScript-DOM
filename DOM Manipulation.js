function generateSpell() {
  let buttonGenerate = document.getElementById("generateButton");
  let listIngredients = document.getElementById("ingredientsList");
  let items = Array.from(listIngredients.getElementsByTagName("li")).map(
    (li) => li.textContent,
  );

  buttonGenerate.addEventListener("click", function () {
    buttonGenerate.disabled=true;)
    
    
    let countdownValue=3;
    spellArea.textContent=countdownValue;
    let countdownTimer =setInterval(function(){
      countdownValue--;
      if (countdownValue>0){
        spellArea.textContent=countdownValue;
      }else{
        clearInterval(countdownTimer)
      }
    })
    let randomIndex = Math.floor(Math.random() * items.length);
    spellArea.textContent="Selected ingredients:" + selectedIngredients;
    buttonGenerate.disabled=false;
  };
  generateSpell();

