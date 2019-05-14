
// GLOBAL ------------------------------------------------------------------

// The sigmoid "squishification" function (maps all real numbers between 1 and 0)
function sigmoid(x){
	return 1 / (1 + exp(-x));
}

// Rounds input n to r DP's
function round_n_to_rdp(n, r){
	return round(pow(10,r)*n)/pow(10,r);
}

// Print an error message if given an incompatible input
function wrong_input(){
	alert("\nOh no!\nYour input is not compatible with our code!\nSorry...")
}

// neural_network ------------------------------------------------------------------

var network_created;
var nodesPerLayer;
var n;
var w;
var a;
var c;
var correct_num;
var trial_num;
var success_rate;

// training

var nodeStructure;
var inner_repeat_num;
var final_node_temp;
var inputs;
var new_w;

// trialling

var trials;
var maxNeg;
var maxVal;


// Check to see if outputs were correct
function output_is_correct(trials, i, nPL){
  for (var j=0; j<nPL[nPL.length-1]; j+=1){
      if (n[nPL.length-1][j] == 1 && trials[i][1][j]){
      	return true;
      }
  }
/*
	var test = [];
	for (var j=0; j<nodesPerLayer[-1]; j+=1){
		test.push(n[-1][j] === 1 && trials[i][-1][j]);
	}
	if ((n[nodesPerLayer.length-1][0] > n[nodesPerLayer.length-1][1] && trials[i][1][1] < certainty) || (n[nodesPerLayer.length-1][0] < n[nodesPerLayer.length-1][1] && trials[i][1][0] < certainty)){
    return true;
  }
*/
}

// graphics ------------------------------------------------------------------

var paddingX;
var paddingY;
var hoverType;


function setup() {
	W = window.innerWidth;
	H = window.innerHeight;
	
	network_created = false;
  nodesPerLayer = [2,2];

	paddingX = W/4;
	paddingY = H/4;
	
	hoverType=["",0];
		
  canvas = createCanvas(W, H);

  textFont("Courier",40);
  textAlign(CENTER,CENTER);
//   fill(100);
//   text("CLICK",W/2,H/2);
}
