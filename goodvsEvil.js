// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

function goodVsEvil(good, evil){
    let goodObj = {
      '0': 1,
      '1': 2,
      '2': 3,
      '3': 3,
      '4': 4,
      '5': 10
    }
    
    let evilObj = {
      '0': 1,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 3,
      '5': 5,
      '6': 10
    }
    good = good.split(' ').map(function(num, index){
      return +num * goodObj[index]
    }).reduce(function(a,b){
      return a + b
    },0)
    evil = evil.split(' ').map(function(num, index){
      return +num * evilObj[index]
    }).reduce(function(a,b){
      return a + b
    },0)
    return good > evil ? 'Battle Result: Good triumphs over Evil' : 
    evil > good ? 'Battle Result: Evil eradicates all trace of Good' :
    'Battle Result: No victor on this battle field'
    }