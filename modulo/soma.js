export function sum(array) {
    /*let result = 0
    for(i = 0; i < array.length; i++){
      result += array[i]
    }
    return result*/
  
    let result = array.reduce((result, i) => result + i, 0)
    return result
 
}

