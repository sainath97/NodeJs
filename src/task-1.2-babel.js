import csv from 'csvtojson';
import { createWriteStream, createReadStream } from 'fs';
import { BASE_CSV_TEXT2, BASE_CSV_PATH } from './constants'; 
import util from './utils/errors';

const writeText = createWriteStream(BASE_CSV_TEXT2);
createReadStream(BASE_CSV_PATH)
        .pipe(csv())
        .on('data', (data) =>  writeText.write(data))
        .on('error', util);