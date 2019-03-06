
// XtoPix and YtoPix are used to quickly convert relative positions to actual pixel positions
function XtoPix(x, use, other){
    if (use===1){
        return x*((width-2*paddingX)/(other-1))+paddingX;
    }
}
function YtoPix(y, use, other){
    if (use===1){
        return (y+1)*((height-2*paddingY)/(other+1))+paddingY;
    }
}


// Draws the nodes of the network
function drawNode(x, y){
    stroke(50);
    strokeWeight(1);
    if (nodesPerLayer.length-1 && nodesPerLayer[x]+1){
        ellipse(XtoPix(x,1,nodesPerLayer.length),YtoPix(y,1,nodesPerLayer[x]),20*2/sqrt(2*nodesPerLayer.length),20*2/sqrt(2*nodesPerLayer.length));
    }
};
// Draws the connections between each layer of nodes and the next
function drawWire(x1,y1,x2,y2,w){
    if (w[x1][y1+nodesPerLayer[x1]*y2]>0){
        stroke(40,50,205,abs(150*w[x1][y1+nodesPerLayer[x1]*y2]));
    } else {
        stroke(205,50,40,abs(150*w[x1][y1+nodesPerLayer[x1]*y2]));
    }
    strokeWeight(abs(2*w[x1][y1+nodesPerLayer[x1]*y2]));
    line(XtoPix(x1,1,nodesPerLayer.length),YtoPix(y1,1,nodesPerLayer[x1]),XtoPix(x2,1,nodesPerLayer.length),YtoPix(y2,1,nodesPerLayer[x2]));
}

// A extra layer of abstraction, combining the functions "drawNode()" and "drawWire()"
function drawNetwork(w){
	  fill(255, 255, 255);
    strokeWeight(1);
    stroke(100);
    for (var layer=0; layer<nodesPerLayer.length; layer+=1){
        for (var node=0; node<nodesPerLayer[layer]; node+=1){
            if (nodesPerLayer.length>layer+1){
                for (var nextLayerNode=0; nextLayerNode<nodesPerLayer[layer+1]; nextLayerNode +=1){
                drawWire(layer,node,layer+1,nextLayerNode,w);
                }
            }
            drawNode(layer,node);
        }
    }
}

function displayErrors(){
	var errors = [];
	if (nodesPerLayer[0] !== nodesPerLayer[nodesPerLayer.length-1]){
		alert("ERROR 001 / NODE_NUM:\nDifferent number of nodes in the first and last layer.");
		errors.push('NODE_NUM');
	}
	return errors;
}

