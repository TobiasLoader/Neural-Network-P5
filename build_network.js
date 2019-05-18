
function drawButton(X,Y,filled,type, i){
    if (type==="+"){
        if (filled){
	        	if (nodesPerLayer.length<10){ // Limit number of layers to 10
            	fill(76, 191, 55,140);
            } else {
	            fill(76, 191, 55,50);
            }
        } else {
            stroke(76, 191, 55,140);
        }
    } else if (type==="-"){
        if (nodesPerLayer.length===2){
            if (filled){
                fill(189, 55, 55,50);
            } else {
                if (nodesPerLayer[i-3]>1){
                    stroke(189, 55, 55,140);
                } else {
                    stroke(189, 55, 55,50);
                }   
            }
        } else {
            if (filled){
                fill(189, 55, 55,140);
            } else {
                if (nodesPerLayer[i-3]>1){
                    stroke(189, 55, 55,140);
                } else {
                    stroke(189, 55, 55,50);
                }
            }
        }
    }
    if (filled){
        stroke(255, 255, 255);
        ellipse(X,Y,35,35);
        stroke(255, 255, 255);
    }
    strokeWeight(2);
    line(X-7,Y,X+7,Y);
    if (type==="+"){
        line(X,Y-7,X,Y+7);
    }
    if (dist(X,Y,mouseX,mouseY)<18){
        if ((type==="+" && ((i>2) || (nodesPerLayer.length<10 && (i===1 || i===2)))) || (type==="-" && ((nodesPerLayer.length>2 && (i===1 || i===2)) || (nodesPerLayer[i-3]>1 && i>2)))){
	        hoverType = [type,i]; // Limit number of layers to 10
	        cursor("pointer");
        }
    }
}

function next_button(forward){
	fill(170, 232, 255,150);
  strokeWeight(1);
  stroke(200);
  ellipse(W-20,20,2*(W+H)/25,2*(W+H)/25);
  stroke(255);
  strokeWeight(3);
  fill(255);
  if (forward){
	  line(W-(10+3*(W+H)/200),10+3*(W+H)/200,W-3*(W+H)/100,3*(W+H)/100);
	  noStroke();
	  triangle(W-20,20,W-3*(W+H)/100,20,W-20,3*(W+H)/100);
  } else {
	  line(W-(10+3*(W+H)/200),10+3*(W+H)/200,W-20,20);
	  noStroke();
	  triangle(W-3*(W+H)/100,3*(W+H)/100,W-3*(W+H)/100,20,W-20,3*(W+H)/100);
  }
  if (dist(W-20,20,mouseX,mouseY)<(W+H)/25){
	  cursor("pointer");
  }
}

function drawNetworkBuild(){
    for (var layer=0; layer<nodesPerLayer.length; layer+=1){
        strokeWeight(1);
        stroke(224, 224, 224);
        if (layer === 0 || layer === nodesPerLayer.length-1){
        	fill(106, 121, 181,20);
        } else {
	        fill(106, 121, 181,5);
        }
        rect(XtoPix(layer,1,nodesPerLayer.length)-10-20/nodesPerLayer.length,paddingY,20+40/nodesPerLayer.length,H-2*paddingY,3);
        for (var node=0; node<nodesPerLayer[layer]; node+=1){
            fill(255);
            drawNode(layer,node);
        }
        drawButton(XtoPix(layer,1,nodesPerLayer.length),paddingY-25,false,"+",3+layer);
        drawButton(XtoPix(layer,1,nodesPerLayer.length),H-paddingY+25,false,"-",3+layer);
    }
}

function draw_main_buttons(){
    drawButton(paddingX/2-5-10/nodesPerLayer.length,H/2-paddingY/2,true,"+",1);
    drawButton(W-paddingX/2+5+10/nodesPerLayer.length,H/2-paddingY/2,true,"+",2);
    drawButton(paddingX/2-5-10/nodesPerLayer.length,H/2+paddingY/2,true,"-",1);
    drawButton(W-paddingX/2+5+10/nodesPerLayer.length,H/2+paddingY/2,true,"-",2);
}


