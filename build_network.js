
function drawButton(X,Y,filled,type, i){
    if (type==="+"){
        if (filled){
	        	if (nodesPerLayer.length<3){ // DOESN'T currently work beyond 3 layers, so restrict
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
        if ((type==="+" && ((i>2) || (nodesPerLayer.length<3 && (i===1 || i===2)))) || (type==="-" && ((nodesPerLayer.length>2 && (i===1 || i===2)) || (nodesPerLayer[i-3]>1 && i>2)))){
	        hoverType = [type,i]; // DOESN'T currently work beyond 3 layers, so restrict
	        cursor("pointer");
        }
    }
}

function next_button(forward){
	fill(170, 232, 255,150);
  strokeWeight(1);
  stroke(200);
  ellipse(W-20,20,120,120);
  stroke(255);
  strokeWeight(3);
  fill(255);
  if (forward){
	  line(W-25,25,W-45,45);
	  noStroke();
  	triangle(W-20,20,W-35,20,W-20,35);
  } else {
	  line(W-20,20,W-40,40);
	  noStroke();
	  triangle(W-45,45,W-30,45,W-45,30);
  }
  if (dist(W-20,20,mouseX,mouseY)<60){
	  cursor("pointer");
  }
}

function drawNetworkBuild(){
    for (var layer=0; layer<nodesPerLayer.length; layer+=1){
        strokeWeight(1);
        stroke(224, 224, 224);
        fill(106, 121, 181,20);
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


