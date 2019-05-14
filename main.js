
// The main function bringing it all together

function main(){
	background(252, 255, 255);
	cursor("default");
	if (network_created){
    drawNetwork(w);
    fill(150);
    textSize(20);
    noStroke();
		text('the neural network was CORRECT ' + 100 * success_rate + '% of the time.',W/2,17*H/20);
		next_button(false);
	} else {
    hoverType=["",0];
    w = init_weight_structure();
    fill(255, 255, 255);
    drawNetworkBuild();
    draw_main_buttons();
    next_button(true);
    fill(200);
    textSize(20);
    noStroke();
    text('press H for help.',W/2,17*H/20);

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
	    var errors = displayErrors();
	    for (var i=0; i<errors.length; i+=1){
		    if (errors[i]="NODE_NUM"){
			    node_num_error = true;
		    }
	    }
	    if (!node_num_error){
	    	neural_network();
	    	network_created = true;
	    }
    }
	} else {
		if (dist(W-20,20,mouseX,mouseY)<(W+H)/25){
	    network_created = false;
    }
	}
}


function keyPressed(){
	if (keyCode === 72){
		alert('HELP\n\nClick the large buttons on the left and right to alter the number of layers. Click the small buttons above and below each layer to modify the number of nodes in that layer. The start and end layer MUST have the same number of nodes (as one input corresponds to exactly one output). Once you have customised the network, and are ready to train it, click the BLUE button in the top right screen. You will then be prompted to enter the number of training examples, and the number of trials. This determines how well the network performs.\n\nWhen viewing the network, BLUE lines represent POSITIVE weights, RED lines represent NEGATIVE weights, and THICKER lines represent weights of greater MAGNITUDE.');	
	}
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight
}


