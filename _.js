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
  findKey(obj, func){
    for (let item in obj){
      let currentItem = obj[item];
      let predicateReturn = func(currentItem);
      if(predicateReturn === true){
        return item;
      }
    }
    return undefined;
  },
  drop(arr, num=1){
    let newArr = arr.slice(num);
    return newArr;
  },
  dropWhile(arr, func){
    let foundIndex = arr.findIndex((item, index)=>{
      let value = !func(item, index, arr);
      console.log(value);
      return value;
    });
    console.log(foundIndex);
    let droppedArray = this.drop(arr, foundIndex);
    return droppedArray;
  },
  chunk(arr, num=1){
    let newArray = [];
    for (let i = 0; i < arr.length; i += num ){
      let arrayChunk = arr.slice(i, i+num);
      newArray.push(arrayChunk);
    }
    return newArray;
  },
};






// Do not write or modify code below this line.
module.exports = _;