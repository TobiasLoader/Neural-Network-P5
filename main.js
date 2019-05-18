
// The main function bringing it all together

function main(){
	background(252, 255, 255);
	cursor("default");
	if (network_created){
    drawNetwork(w);
    if (!abort){
	    fill(170);
	    textSize(20);
	    noStroke();
			text('your neural network was CORRECT ' + 100 * success_rate + '% of the time.',W/2,H/5);		
			next_button(false);
		} else {
			abort = false;
		}
	} else {
    hoverType=["",0];
    w = init_weight_structure();
    fill(255, 255, 255);
    drawNetworkBuild();
    draw_main_buttons();
    next_button(true);
	}
}

function draw(){
    main();
}

function mouseClicked(){
	if (!network_created){
		if (hoverType[0]==="+"){
        if (hoverType[1]===1){
            nodesPerLayer.unshift(2);
        } else if (hoverType[1]===2) {
            nodesPerLayer.push(2);
        } else if (hoverType[1]>2) {
            nodesPerLayer[hoverType[1]-3] += 1;
        }
    } else if (hoverType[0]==="-"){
        if (hoverType[1]===1){
            nodesPerLayer.shift();
        } else if (hoverType[1]===2){
            nodesPerLayer.pop();
        } else if (hoverType[1]>2) {
            nodesPerLayer[hoverType[1]-3] -= 1;
        }
    }
    main();
    if (dist(W-20,20,mouseX,mouseY)<(W+H)/25){
	    var node_num_error = false;
	    var no_input_error = false;
	    var errors = displayErrors();
	    for (var i=0; i<errors.length; i+=1){
		    if (errors[i]=="NODE_NUM"){
			    node_num_error = true;
		    }
		    if (errors[i]=="NO_INPUT"){
			    no_input_error = true;
		    }
	    }
	    if (!node_num_error && !no_input_error){
	    	neural_network();
	    	confirm("SUCCESS! 😅\n\nClick 'OK' to view your network!");
	    	network_created = true;
	    }
    }
	} else {
		if (dist(W-20,20,mouseX,mouseY)<(W+H)/25){
	    network_created = false;
    }
	}
}


// Neural Network P5\n\nINFORMATION & INSTRUCTIONS\n\nThis is the graphical version of my first attempt at a neural network, so the training task is relatively trivial. The task I have set the network is to learn to recognise the highest number from a list of random numbers between -1 and 1. The number of numerical inputs will be equal to the number of nodes in the input layer.\n\GLOSSARY:\n\n INPUT & OUTPUT LAYERS = dark grey vertical bars\n HIDDEN LAYER/S (initially none) = light grey vertical bar\n NODE = small circle in layer\n\n TRAINING = # of \'lessons\' the network will undergo\n TESTS = # of questions in the \'final exam\'\n\n1.  Set your chosen number of hidden layers via the larger PLUS and MINUS icons located at either side of the window.\n\n2. Now set the number of nodes in each layer via the smaller PLUS and MINUS icons, which appear above or below each layer. NB: Check that the first and last layer have the SAME number of nodes (so that each input corresponds to exactly one output).\n\n3.  Now that you have designed the layout of your network it\'s time to begin training it! Click the large BLUE button in the top right corner of the screen and you will be prompted to input your choice of the number of training cycles and tests. NB: You could choose quite large numbers, eg: 100,000 on a smaller network design, without overly taxing the average home computer.\n\n4.  Several factors determine how well the network performs, such as the design of its layout, the number of training cycles and the number of tests it runs. NB: results will vary, as the training cycles are completely randomised each time.\n\n5.  When viewing the results screen: the BLUE lines represent POSITIVE relationship between nodes, RED lines represent NEGATIVE weights, and THICKER lines represent weights of greater MAGNITUDE. The optimal configuration of the weights for the default 2x2 network should be [1,-1,-1,1], ie: blue, red, red, blue lines, all of the same thickness.\n\nVERSION: 2.0  -  written in P5.JS\n\nToby\n\n

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight
}


