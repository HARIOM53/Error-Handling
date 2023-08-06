function convertToNumber(num){
    try {
        const number = Number(num);
        if (isNaN(number)){
            throw new Error("Invalid Number");
        }
        return number;
    } catch (error) {
        return "Invalid Number";
    }
}
//  Example
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));