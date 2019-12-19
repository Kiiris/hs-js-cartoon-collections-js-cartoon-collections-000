function dwarfRollCall(dwarves) {
  var Mystring= []
  let i=0
  for (let i=0; i<dwarves.length; i++) {
    Mystring.push(`${i+1}. ${dwarves[i]} `)
  }
  return Mystring.join('')


}
function summonCaptainPlanet(planeteerCalls){ for (let i = 0; i < planeteerCalls.length; i++) {
 planeteerCalls[i] = planeteerCalls[i].toUpperCase();}  for(var i=0; i < planeteerCalls.length;i++){
    planeteerCalls[i]= planeteerCalls[i] + "!";} return planeteerCalls
}

function longPlaneteerCalls(words) {if (words.length < 4){ return false} if (words.length > 4) {return true}
}

function findTheCheese (foods) { var cheese = ["cheddar", "gouda", "camembert"];
  var cheddarCheese = ["banana", "cheddar", "sock"];
     for(var i = 0; i < foods.length; i++) {
      if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") { 
    return cheddarCheese[i];
  }
     }
 if (foods[i]!== "cheddar"); (foods[i] !== "gouda"); (foods[i] !== "camembert"); {
   return "no cheese!";
 }

}
