var removeVowels = function(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return str.split('').filter(element => !vowels.includes(element)).join('')
    
    }

//     Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""