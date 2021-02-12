//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

//my solution


function birthdayCakeCandles(candles) {
    let max_num = (Math.max(...candles));
    let frequency = 0;

    for(let i of candles){
        if (i == max_num){
            frequency= frequency+1;
        }
    }
    return frequency;
}


