export function sumOdds(array) {
    let result = 0
    for(let value of array){
      if(value % 2 !== 0) result += value
    }
    return result
}

      
