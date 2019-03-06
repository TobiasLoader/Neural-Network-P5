
// NOTE: ORIGINAL neural_network DONE OF PYTHON - see my Github profile


// FUNCTIONS ---------------------------------------------------------------------------

function neural_network(){
  n = init_node_structure();
  w = init_weight_structure();
  a = init_node_structure();
  c = init_node_structure()[nodesPerLayer.length-1];
  training();
  trialling();
}

// Initialises the node array by consulting and looping through the array "nodesPerLayer"
function init_node_structure(){
	var x = [];
	for (var layer=0; layer<nodesPerLayer.length; layer+=1){
		x.push([]);
		for (var node=0; node<nodesPerLayer[layer]; node+=1){
			x[layer].push(0);
		}
	}
	return x
}

// Initialises the weight array by consulting and looping through the array "nodesPerLayer"
function init_weight_structure(){
    var x = [];
    for (var layer=0; layer<nodesPerLayer.length-1; layer+=1){
      x.push([]);
      var wireNum = nodesPerLayer[layer]*nodesPerLayer[layer+1];
      for (var wire=0; wire<wireNum; wire+=1){
        var tempW = 0;
        if (nodesPerLayer.length > 2){
	        tempW = random(0, 0.00000000001);//(10**nodesPerLayer.length) * (10**-5)
        }
        x[layer].push(tempW);
      }
    }
    return x;
}
