export function product(array) {
    /*let result = 1
    for(i = 0; i < array.length; i++){
        result *= array[i]
    }
    return result*/

    let result = array.reduce((result, i) => result * i)
    return result
    
}

   