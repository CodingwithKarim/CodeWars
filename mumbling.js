function accum(s) {
    let arr = s.split('').map((e, i)=> e.repeat(i + 1))
    return arr.map((e)=> e[0].toUpperCase() + e.slice(1).toLowerCase()).join('-')
    }

    // This time no story, no theory. The examples below show you how to write function accum:

    // Examples:
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
    // The parameter of accum is a string which includes only letters from a..z and A..Z.