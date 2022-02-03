// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.'

function isAgeDiverse(list) {
    let map = {
      'teens': 0,
      'twenties': 0,
      'thirties': 0,
      'forties': 0,
      'fifties': 0,
      'sixties': 0,
      'seventies': 0,
      'eighties': 0,
      'nineties': 0,
      'centenarian': 0
    }
    
    for(let obj of list){
      if(obj.age < 20){
        map['teens']++
      }
      else if(obj.age < 30 && obj.age >= 20){
        map['twenties']++
      }
      else if(obj.age < 40 && obj.age >= 30){
        map['thirties']++
      }
      else if(obj.age < 50 && obj.age >= 40){
        map['forties']++
      }
      else if(obj.age < 60 && obj.age >= 50){
        map['fifties']++
      }
      else if(obj.age < 70 && obj.age >= 60){
        map['sixties']++
      }
      else if(obj.age < 80 && obj.age >= 70){
        map['seventies']++
      }
      else if(obj.age < 90 && obj.age >= 80){
        map['eighties']++
      }
      else if(obj.age < 100 && obj.age >= 90){
        map['nineties']++
      }
      else if(obj.age >= 100){
        map['centenarian']++
      }
    }
    for(let [key, value] of Object.entries(map)){
      if(!value){
        return false
      }
    }
    return true
  }