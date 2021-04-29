function divisor(n: number):void{
    const array: number[] = [];

    for (let i = 0; i <= n; i++) {
        if(n % i === 0){
            array.push(i);
        }
    }
    const sum = array.reduce((a, b) => a + b, 0);

    console.log("Arrary: " , array);
    console.log("Sum: " , sum);
}

divisor(6);