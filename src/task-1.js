function writeFunc(str){
    process.stdout.write(str + '\n');
}

function dataHandler(data){ 
    const input= data.toString();
    const splitInput = input.split('');
    const reverseInput = splitInput.reverse().join('');
    writeFunc(reverseInput);
}

process.openStdin().addListener('data', dataHandler);