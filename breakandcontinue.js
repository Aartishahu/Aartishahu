//break statement
for ( i = 0; i < 10; i++) {
    // Terminate the loop when i is 5
    if (i == 5)
        break;
    console.log("i: " + i);
}
console.log("break functionality terminated the loop after printing 4");

//continue statement
for ( i = 0; i < 10; i++) {
    if (i == 5)
        continue;
    console.log("i: " + i);
}
console.log("continue functionality skipped 5 while executing the loop");