function dwarfRollCall(dwarves) {
  var Mystring= []
  for (let i=0; i<dwarves.length; i++) {
    Mystring.push(`${i+1}. ${dwarves[i]} `)
  }
  return Mystring.join('')


}
function summonCaptainPlanet(planeteerCalls){ for (let i = 0; i < planeteerCalls.length; i++) {
 planeteerCalls[i] = planeteerCalls[i].toUpperCase();}  for(var i=0; i < planeteerCalls.length;i++){
    planeteerCalls[i]= planeteerCalls[i] + "!";} return planeteerCalls
}

function longPlaneteerCalls(words) {
  if(words.length < 4){ 
  return false} if (words.length > 4) {return true}
}

 function findTheCheese (foods) { 
   var cheese = ["cheddar", "gouda", "camembert", "swiss cheese"];
     for(var i = 0; i< foods.length; i++){
       for(var p = 0; p< cheese.length; p++){
          if (foods[i] === cheese[p]){ 
            return foods[i]
            }
        }
     }
            return "no cheese!";
    }
function wordswithBe(words) { var b = ["B", "b"];
  for (var i = 0; i < words.length; i++){
    if (words[i] === b[i]){
    return words[i]