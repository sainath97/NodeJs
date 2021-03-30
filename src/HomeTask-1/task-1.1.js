function writeFunc(str){
    process.stdout.write(str + '\n\n');
}

function dataHandler(data){ 
    const input= data.toString();
    const splitInput = input.trim().split('');
    const reverseInput = splitInput.reverse().join('');
    writeFunc(reverseInput);
}

process.openStdin().addListener('data', dataHandler);