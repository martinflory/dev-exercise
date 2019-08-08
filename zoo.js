'use strict'

class Animal { 
  sound = '...';
  
  speak(sentence) {
    // all in one regex
    // Finds...
    // $1 = Last char of a word, not '!','?','.',',', or whitespace...
    // Followed by...
    // $2 = '!','?','.',',', whitespace or End of line..
    // And inserts the animal sound between them

    let endOfWord = "\\s\\,\\!\\?\\.\\,\\'\\\""

    let res = sentence.replace(new RegExp(`([^${endOfWord}])([${endOfWord}]|$)`,"g"),'$1' + ' ' + this.sound + '$2');
      
    // add the animal sound between words
    return res;
  };
}

class Bird extends Animal {
  sound = 'chirp'
}

class Cow extends Animal {
  sound = 'mow';
}

module.exports = {
  Animal,
  Bird,
  Cow
};




