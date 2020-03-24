function fizzBuzz(numero) {
    if (typeof (numero) == "number") {
        if (((numero % 5)==0) && ((numero % 3)==0)) {
            return "FizzBuzz";
        } else if ((numero % 3)==0) {
            return "Fizz";
        } else if ((numero % 5)==0) {
            return "Buzz";
        } else {
            return numero;
        }
    } else {
        return "Sorry. You need a number to run this code";
    }
}
