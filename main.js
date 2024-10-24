// 1) Write a function that receives 3 parameters: \
// amount of money, dayLimit and weekLimit
//  you should calculate how many days does it needs to withdway whole amount of money.

function daysToBankrupt(m,d,w){
  
  // 10000 2000 7000

  let money = m
  let dayLimit = d
  let weekLimit = w

  let weeksNeed = 0
  let daysNeed = 0


  weeksNeed = (money / weekLimit) | 0;
  
  // after weeks spend
  money = money - (weeksNeed * weekLimit)

  daysNeed = ((money / dayLimit) | 0) + 1

  console.log(weeksNeed * 7 + daysNeed)

}

// daysToBankrupt(10000, 2000, 7000)


// 2) Write a function that takes text as a parameter, 
// the text should be: "What is a plus b?" or "What is a minus b?"
//  you should write correct answer,
//  if answer is correct console you're humar other wise consoled you're robot

function foo(text){
  const arrTxt = text.split(' ')

  const num1 = Number(arrTxt[2])
  const num2 = Number(arrTxt[4])


  if(arrTxt[3] === 'plus') {
    console.log(num1 + num2)
    return
  }
  else{
    if(arrTxt[3] === 'minus'){
      console.log(num1 - num2)
    }
    else console.log('enter valid text')
  } 
  
 
}

// foo("what is 10 plus 10")
// foo("what is 15 minus 8") 

// 3) write a function that takes 2 parameter the height and width you draw that rectangle with #

function makeRect(width,heigh){
  const widthArr = []
  for(let i = 0;i<width;i++){
    widthArr.push('#')
  }
  for(let i = 0; i < heigh; i++){
    console.log(widthArr.join(""))
  }
}

// makeRect(2,3)

// 4) write a function that takes number as a parameter and check is this number wide or not.
//  * wide means that If the number of its digits is greater than the sum of the digits.

function isNumWide(num){
  let numArr = String(num).split('')
  numArr = numArr.map(Number)

  const sumOfNum = numArr.reduce((tot,curr) => tot += curr,0)
  if(num > sumOfNum) console.log('given number is wide')
  else console.log('given number is not wide')
}

// isNumWide(19)