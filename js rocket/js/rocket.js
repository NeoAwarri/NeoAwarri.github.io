var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state'+
        state;
        clearInterval(timer);
        countdownNumber = 10;

     //countdown
    if (state ==2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber -1
            document.getElementById('countdown').innerHTML = countdownNumber; 
            
            if (countdownNumber > 3 && countdownNumber <= 5) {
                // be nervous
                document.getElementById('nervous').className = 'nervous show';
            } else{
                document.getElementById('nervous').className = 'nervous';
            }

            if (countdownNumber > 1 && countdownNumber <= 4) {
                document.getElementById('cant-wait').className = 'cant-wait show';
                // Can't wait
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }
            
            if (countdownNumber <= 0) {
                changeState(3);
            };
        }, 500);
    } else if (state == 3) {
        var success = setTimeout(function () 
            {
                var randomNumber = Math.round(Math.random()*10);

                console.log('randomNumber:', randomNumber)

                //success
                if (randomNumber > 9) {
                    changeState(4);

                } else {
                    changeState(5); // oh no!
                }
        }, 2000);
    }; 
}