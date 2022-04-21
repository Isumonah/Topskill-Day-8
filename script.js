let input = document.getElementById("input")
let submit = document.getElementById("submit")
let words = document.getElementById("words")
let remove = document.getElementById("remove")
let newSentence = document.getElementById("new-sentence")

let mySentence = [];

submit.addEventListener("click", function(){
  mySentence.push(input.value);
  words.innerHTML += input.value
   input.value = "" ;
})

  remove.addEventListener("click", function(){
  newSentence.innerHTML += mySentence.toString().split(" ").join("")  
})

 