
function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    var checkbox1 = document.getElementById('checkbox1');

    var smokeLoc = [0, 0];
    var isNight = checkbox1.checked;

    var animatedBoatValue = 100;
    var animatedOceanValue = 0;
    var animatedCloudVal1 = 0;
    var animatedCloudVal2 = 0;
    var animatedSmokeValue = 0;

    function axes(color) {
        context.strokeStyle = color;
        context.beginPath();
        // Axes
        context.moveTo(120, 0); context.lineTo(0, 0); context.lineTo(0, 120);
        // Arrowheads
        context.moveTo(110, 5); context.lineTo(120, 0); context.lineTo(110, -5);
        context.moveTo(5, 110); context.lineTo(0, 120); context.lineTo(-5, 110);
        // X-label
        context.moveTo(130, -5); context.lineTo(140, 5);
        context.moveTo(130, 5); context.lineTo(140, -5);
        // Y-label
        context.moveTo(-5, 130); context.lineTo(0, 135); context.lineTo(5, 130);
        context.moveTo(0, 135); context.lineTo(0, 142);

        context.stroke();
        context.closePath();
    }

    function boat(x, y, smokeVal) {
        var xPos = x;
        var yPos = y;
        context.lineWidth = 5;
        context.strokeStyle = "black";

        function drawBody(x, y) {
            // create the body of the boat
            context.beginPath();
            context.fillStyle = "brown";
            context.moveTo(xPos, yPos);
            xPos += 450;
            context.lineTo(xPos, yPos);
            yPos -= 100;
            context.lineTo(xPos, yPos);
            xPos -= 525;
            context.lineTo(xPos, yPos);
            xPos = x;
            yPos = y;
            context.lineTo(xPos, yPos);
            context.fill();
            context.closePath();
            context.stroke();
        }

        function drawTopDeck(x, y) {
            // create the top deck
            context.beginPath();
            context.fillStyle = "tan";
            xPos = x + 125;
            yPos = y - 175;
            context.rect(xPos, yPos, 275, 75);
            context.fill();
            context.closePath();
            context.stroke();

            context.beginPath();
            xPos -= 25;
            yPos -= 25;
            context.fillStyle = "brown";
            context.rect(xPos, yPos, 325, 25);
            context.fill();
            context.closePath();
            context.stroke();
        }

        function drawSmokeStacks(x, y) {
            // create the smoke stacks
            context.beginPath();
            context.fillStyle = "brown";
            yPos = y - 50;
            xPos = x + 75;
            context.rect(xPos, yPos, 25, 50);
            xPos += 50;
            context.rect(xPos, yPos, 25, 50);
            xPos += 50;
            context.rect(xPos, yPos, 25, 50);
            xPos += 50;
            context.rect(xPos, yPos, 25, 50);
            context.fill();
            context.closePath();
            context.stroke();

            // create big stack
            context.beginPath();
            context.fillStyle = "lightgrey";
            xPos += 50;
            context.rect(xPos, yPos, 40, 50);
            xPos += 10;
            yPos -= 40;
            context.rect(xPos, yPos, 20, 40);
            smokeLoc = [xPos + 10, yPos];
            context.fill();
            context.closePath();
            context.stroke();



            // create rope
            context.beginPath();
            context.fillStyle = "tan";
            xPos -= 185;
            yPos += 60;
            context.rect(xPos, yPos, 125, 10);
            context.fill();
            context.closePath();
            context.stroke();

        }

        function smoke(x, y) {
            context.beginPath();
            context.lineWidth = 5;
            context.strokeStyle = 'black';
            context.fillStyle = 'grey';
            context.ellipse(x, y, 10, 10, Math.PI / 2, 0, 2 * Math.PI)
            context.fill();
            context.stroke();
            context.closePath();
        }

        function drawWindows(x, y) {
            // creates the windows
            context.beginPath();
            if (isNight) {
                context.fillStyle = "yellow";
            }
            else {
                context.fillStyle = "lightblue";
            }

            xPos = x - 75;
            yPos = y + 90;

            context.moveTo(xPos, yPos);
            context.arc(xPos, yPos, 20, 3 * Math.PI / 2, Math.PI / 2, false);

            xPos += 70;
            context.moveTo(xPos, yPos);
            context.arc(xPos, yPos, 20, 0, 2 * Math.PI);

            xPos += 70;
            context.moveTo(xPos, yPos);
            context.arc(xPos, yPos, 20, 0, 2 * Math.PI);

            xPos += 70;
            context.moveTo(xPos, yPos);
            context.arc(xPos, yPos, 20, 0, 2 * Math.PI);

            context.fill();
            context.closePath();
            context.stroke();
        }

        drawBody(xPos, yPos);
        drawTopDeck(xPos, yPos);
        drawSmokeStacks(xPos, yPos);
        smoke(smokeLoc[0] + smokeVal, smokeLoc[1] - smokeVal);
        smoke(smokeLoc[0] + 2 * smokeVal, smokeLoc[1] - 2 * smokeVal);
        smoke(smokeLoc[0] + 3 * smokeVal, smokeLoc[1] - 2 * smokeVal);
        smoke(smokeLoc[0] + 4 * smokeVal, smokeLoc[1] - 3 * smokeVal);
        smoke(smokeLoc[0] + 5 * smokeVal, smokeLoc[1] - 4 * smokeVal);
        drawWindows(xPos, yPos);
    }

    function wheel(x, y, theta) {
        context.lineWidth = 4;
        context.fillStyle = "white";
        var xPos = x;
        var yPos = y;
        var angleConstant = Math.PI / 4;

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta);
        //axes("black");
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 8;
        context.arc(0, 0, 100, 0, 4 * Math.PI);
        context.arc(0, 0, 110, 0, 4 * Math.PI);
        context.arc(0, 0, 120, 0, 4 * Math.PI);
        context.stroke();
        context.closePath();
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 2 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 3 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 4 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 5 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 6 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

        context.save();
        context.translate(xPos, yPos);
        context.rotate(theta + 7 * angleConstant);
        //axes("black");
        context.beginPath();
        context.rect(0, 0, 25, 165);
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();


    }

    function background() {

        if (isNight) {
            context.beginPath();
            context.fillStyle = "darkpurple";
            context.rect(0, 0, 1000, 1000);
            context.fill();
            context.stroke();
            context.closePath();

            context.beginPath();
            context.fillStyle = "white";
            context.arc(800, 130, 100, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.closePath();
        }
        else {
            context.beginPath();
            context.fillStyle = "lightblue";
            context.rect(0, 0, 1000, 1000);
            context.fill();
            context.stroke();
            context.closePath();

            // draw the sun
            context.beginPath();
            context.lineWidth = 3;
            context.fillStyle = "yellow";
            context.arc(200, 130, 100, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.closePath();

            // draw the sun rays
            for (var theta = 0; theta <= 2 * Math.PI; theta += (Math.PI / 4)) {
                context.beginPath();
                context.save();
                context.translate(200, 130);
                context.rotate(theta);
                context.rect(130, 0, 120, 15);
                context.fill();
                context.stroke();
                context.restore();
                context.closePath();
            }
        }
    }

    function ocean(height) {
        context.beginPath();
        context.strokeStyle = "blue";
        context.fillStyle = "blue";
        context.rect(0, height * 1.5 + 750, 1000, 220 - height);

        // creating the waves
        for (var i = 0; i < 1000; i += 30) {
            context.arc(i, height * 1.5 + 750, 15, Math.PI, 0);
        }
        context.stroke();
        context.fill();
        context.closePath();

        context.beginPath();
        context.strokeStyle = "darkblue";
        context.fillStyle = "darkblue";
        context.rect(0, height + 780, 1000, 220 - height);

        // creating the waves
        for (var i = 15; i < 1000; i += 30) {
            context.arc(i, height + 780, 15, Math.PI, 0);
        }
        context.stroke();
        context.fill();
        context.closePath();

        context.strokeStyle = "black";
    }

    /* 
        **  A function that creates a cloud shape at the given x and y position input
        **  Top ellipse more left than bottom
        **  @param xPos - the value of the x position
        **  @param yPos - the value of the y position
        **/
    function cloud1(xPos, yPos) {
        context.lineWidth = 5;
        context.strokeStyle = 'black';
        if (isNight) {
            context.fillStyle = "darkgrey";
        }
        else {
            context.fillStyle = 'white';
        }
        context.beginPath();
        context.ellipse(xPos, yPos, 80, 115, Math.PI / 2, 0, 2 * Math.PI);
        context.ellipse(xPos + 75, yPos + 50, 80, 110, Math.PI / 2, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    /* 
    **  A function that creates a different cloud shape at the given x and y position input
    **  Bottom ellipse more left than top
    **  @param xPos - the value of the x position
    **  @param yPos - the value of the y position
    **/
    function cloud2(xPos, yPos) {
        context.lineWidth = 5;
        context.strokeStyle = 'black';
        if (isNight) {
            context.fillStyle = "darkgrey";
        }
        else {
            context.fillStyle = 'white';
        }
        context.beginPath();
        context.ellipse(xPos + 40, yPos, 80, 115, Math.PI / 2, 0, 2 * Math.PI);
        context.ellipse(xPos, yPos + 50, 85, 110, Math.PI / 2, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function draw() {
        canvas.width = canvas.width;
        background();

        context.save();
        context.translate(animatedCloudVal1, 0);
        cloud1(200, 50);
        cloud1(-200, 250);
        context.restore();

        context.save();
        context.translate(animatedCloudVal2, 0);
        cloud2(700, 200);
        cloud2(-100, 200);
        context.restore();

        if (animatedCloudVal1 > 1300) {
            animatedCloudVal1 = - 400;

        }
        else {
            animatedCloudVal1 += 2;

        }

        if (animatedCloudVal2 > 1300) {
            animatedCloudVal2 = - 850;

        }
        else {
            animatedCloudVal2 += 1;
        }

        var theta1 = 2 * animatedBoatValue * 0.005 * Math.PI;
        var xChange = animatedBoatValue * 10;
        if(isNight) {
            var yChange = Math.sin((0.8)*animatedOceanValue) * 70;
        }
        else {
            var yChange = Math.sin(animatedOceanValue) * 25;
        }
        

        context.save();
        context.translate(parseInt(xChange), yChange * 2);
        boat(300, 790, animatedSmokeValue);
        wheel(770, 680, theta1);
        context.restore();

        if (animatedSmokeValue < 20) {
            animatedSmokeValue += 3 / 4;

        }
        else {
            animatedSmokeValue = 0;
        }

        ocean(yChange);

        if (animatedBoatValue < -100) {
            animatedBoatValue = 100;
        }
        else {
            var speed = slider1.value;
            animatedBoatValue -= parseInt(speed) / 100;

        }

        animatedOceanValue += 1 / 45;
        window.requestAnimationFrame(draw);
    }
    // switching from day <=> night
    checkbox1.addEventListener("change", function () {
        if (this.checked) {
            isNight = true;
        } else {
            isNight = false;
        }
    });

    window.requestAnimationFrame(draw);
}

window.onload = setup;