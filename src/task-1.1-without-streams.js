import { createInterface } from 'readline';
import { reverseInput } from './reverseInput';

export const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

function main() {
    rl.question('', (input) => {
        console.log(reverseInput(input));
        main();
    });
}

main();