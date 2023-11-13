function calcCM(array){
    let output = '';
    for(let i = 0; i < array.length; i++) {
        output += array[i] + ' ' + 'inches ' + '( ' + Math.floor(array[i]* 2.54) + 'cm )';

        if(i < array.length - 1){
            output += '  |  ';
        }
    }

    return output;
}

export default calcCM;