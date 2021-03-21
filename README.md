# NodeJs
# TASK 1.1

    Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
    • The program should be started from npmscript via nodemon(i.e. npm run task1).
    • The program should be running in a stand-by mode and should not be terminated after the first-stringprocessing.
    • For example
      12345 678
      876 54321
      
      test data
      atad tset
Run below command to execute Task 1.1

    npm run task1

# TASK 1.2

    Write a program which should do the following:
    • Read the content of csvfile from./csv directory. Example: https://github.com/sainath97/NodeJs/blob/main/files/task1.2.csv
    • Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
    • Write the csvfile content to a new txtfile.
      Use the following format: https://github.com/sainath97/NodeJs/blob/main/files/task1.2.txt.
    • Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
    • In case of read/write errors, log them in the console.
    • The program should be started via npm scriptusing nodemon(i.e. npm run task2).
Run below command to execute Task 1.2

    npm run task2

# TASK 1.3

    Rewrite the above-mentioned programs to use babel(https://babeljs.io/)and ES6modules.
Run below commands to execute above tasks using babel
    
    npm run task1WithBabel
    npm run task2WithBabel
