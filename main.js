
// The main function bringing it all together

function main(){
	background(252, 255, 255);
	cursor("default");
	if (network_created){
    drawNetwork(w);
    fill(100);
    textSize(20);
    noStroke();
		text('My neural network was correct ' + 100 * success_rate + '% of the time.',W/2,17*H/20);
		next_button(false);
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
    if (dist(W-20,20,mouseX,mouseY)<60){
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
		if (dist(W-20,20,mouseX,mouseY)<60){
	    network_created = false;
    }
	}
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight
}


