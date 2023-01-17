function longestString(...strings) {
    let longest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length === Math.max(strings[i].length)) {
            longest = strings[i];
        }
    }
    return longest;
}

// problem 
// input an array of strings
// output the array values who's length is the longest

// examples
// edge case 
// if strings names are equal in length
// if numbers are

console.log(longestString('ben', 'motun', 'carmen', 'casterly'));
