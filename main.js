//Part 1
document.querySelector("#thanks button").addEventListener('click',function(){
  alert ("yowch! don't click me so hard!")
})
//Part 2
document.querySelector("#double button").addEventListener('click',function(){
  var text = document.querySelector('#compoundInvestment')
  text.innerHTML = text.innerHTML * 2

})
//Part 3

document.querySelector("#color-circle button").addEventListener('click',function(){
var circle = document.querySelector('#circle-bw')
  if (circle.style.background === "black"){
  	circle.style.background = "white"
  }
		else {circle.style.background = "black"}

})
//Part 4
document.querySelector("#blow-up button").addEventListener('click',function(){
    var redCirc = document.querySelector('.circle-red')
    var redCircStyles = window.getComputedStyle(redCirc)
    var oldWidth = parseInt(redCircStyles.width)
    var oldHeight = parseInt(redCircStyles.height)
    redCirc.style.width = (oldWidth*2) + 'px'
    redCirc.style.height = (oldHeight*2) + 'px'
        if (oldWidth >= 320 && oldHeight >= 320){
            redCirc.style.width = '40px'
            redCirc.style.height = '40px'
        }

})
//Part 5 

document.querySelector("#remove button").addEventListener('click',function(){

  var userList = document.querySelector('#userList')
  var inactive = document.querySelectorAll('.inactive')
  
  for(var i = inactive.length-1; i >= 0; i--){
        userList.removeChild(inactive[i]) 
        console.log(inactive[i]) 
        
  }    
    
})



//Part 6
document.querySelector("#reverse-squares button").addEventListener('click',function(){

  var answerBoxNode = document.querySelector('#reverse-squares .answer-box')
  var squares = answerBoxNode.querySelectorAll(".square")
  for (var i = squares.length-1; i>=0;i--){
        answerBoxNode.removeChild(squares[i])
        answerBoxNode.appendChild(squares[i])
  }

})

//Part 7
document.querySelector("#pig-latin button").addEventListener('click',function(){
var taskBox = document.querySelectorAll('#tasks li')


var reverseString = function (input){
  var newString = ''
    for(var i = input.length-1; i>=0; i--){
    var char = input.charAt(i)
      newString += char
    }
      return newString
    }
      
 var newArray = []
  for(var i =0; i <taskBox.length; i++){
    var newStringArray= reverseString(taskBox[i].innerHTML)
    taskBox[i].innerHTML = newStringArray
    newArray.push(newStringArray)

    console.log(newArray)
    
    
  }
 console.log(document.querySelectorAll('#tasks li'))

})
//Part 8
document.querySelector("#cycle-image button").addEventListener('click',function(){
  var imageEl = document.querySelector('#city-img')//pull img
  var imageUrlArray = imageEl.src.split('/')// turn imgstring into array
  var arrayLength = imageUrlArray.length//turn array length into a number
  var currentImageNumber = imageUrlArray[arrayLength-1]// how to focus on last array ele
  var numCharLength = currentImageNumber.length // did this for the slice
  var trueImageNumber = parseInt(currentImageNumber) // turn last string of array into number
  console.log(trueImageNumber)
    // if(trueImageNumber < 10){
    //       trueImageNumber = trueImageNumber + 1
    // } else{
    //     trueImageNumber = 1
    // }

  trueImageNumber = (trueImageNumber % 10) + 1 


 var theEnd = imageEl.src.slice(0,imageEl.src.length-numCharLength) + trueImageNumber
 imageEl.src = theEnd
 console.log(theEnd)

})