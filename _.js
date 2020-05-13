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
};


console.log(_.words('Hello how are you'));




// Do not write or modify code below this line.
module.exports = _;