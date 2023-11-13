function soldTvs(array, prop){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i][prop];
    }
    return sum;
}

export default soldTvs;

