//var invested = btc * btcUsdBrought;
//var current = btc * btcUsdNow;
//var profit = current - invested ;
//var groth = profit / invested * 100;

//var message = '';
//
//if (profit > 0){
//    message = 'Great are in profit of Rs' + profit
//    } else if (profit < 0){
//       message = 'OMG You are in Lose'
//    }else {
//        message = 'Your coin is balanced'
//    };

//console.log(message);

    function calcGroth(pastVal , currentVal){
    
    var g = (currentVal - pastVal) / pastVal * 100 ; 
    
    return  g;
};

//var mygroth = calcGroth(50000 , 70000);

//console.log(mygroth);

function result(){
    
    // 1st get the data form form inputs
    var btcUsdBrought = document.querySelector('.price__input--bought').value;
    var btcUsdNow = document.querySelector('.price__input--now').value;
    var btc = document.querySelector('.investment__btc').value;
    
    // 2nd calculate the frofite 
    var invested = btc * btcUsdBrought;
    var current = btc * btcUsdNow;
    var profit = current - invested;
    var groth = profit / invested * 100;
    console.log(groth);
    
    // 3rd we need to print the result in UI 
    

    var message = '';

if (profit > 0){ 
    message = 'Great you are in profit of Rs ' + profit;
    document.querySelector('.result').style.color= 'green';
    } else if (profit < 0){
       message = 'OMG You are in Lose of Rs ' +profit;
        document.querySelector('.result').style.color= 'red';
    }else {
        message = 'Your coin is balanced'
    };
    
    //console.log(message);
    
    document.querySelector('.result').innerHTML = message;
    
}