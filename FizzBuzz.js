function myFunc() {
    let num = document.getElementById("oi").value;
    FizzBuzz(num);
}
function FizzBuzz(num) {
    for (i = 1; i <= num; i++) {
        if ((i % 5 === 0) && (i % 3 == 0))
            console.log("FizzBuzz");
        else if (i % 3 === 0)
            console.log("Fizz");
        else if (i % 5 === 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}