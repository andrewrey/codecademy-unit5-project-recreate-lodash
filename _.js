let _ = {
  clamp(number,lower,upper ){
    let lowerBound = Math.max(number,lower);
    let clampedValue = Math.min(lowerBound, upper);
    return clampedValue;
  },
  inRange(number,start, end ){
    if(end === undefined){
      end = start;
      start = 0;
    }
    if(start > end){
      let newStart = end;
      end = start;
      start = newStart;
    }
   return number >= start && number < end ?  true: false;
  },
  words(string){
    let array = string.split(' ');
    return array;
    
  },
  pad(word, num){
    if(word.length > num ){
      return word;
    } else {
      let space = ' ';
      let wordLen = word.length;
      let difference = num - wordLen;
      if (difference % 2 === 0 ){
        let numOfSpace = difference / 2;
        return `${space.repeat(numOfSpace)}${word}${space.repeat(numOfSpace)}`
      } else {
        let numOfSpace = Math.floor( difference / 2);
        return `${space.repeat(numOfSpace)}${word}${space.repeat(numOfSpace + 1)}`
      }
    }
  },
  has(obj, objKey){
    return obj[objKey]? true: false;
  },
  invert(object){
    let invObject = {};
    for (let pKey in object){
     invObject[object[pKey]] = pKey;
    }
    return invObject;
  },
};


// Do not write or modify code below this line.
module.exports = _;