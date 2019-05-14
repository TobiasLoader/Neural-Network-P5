
// NOTE: ORIGINAL neural_network DONE OF PYTHON - see my Github profile


// FUNCTIONS ---------------------------------------------------------------------------

// Generate a list of random training inputs
function generate_inputs_list(training_num){
	var l = [];
	for (var i=0; i<training_num; i+=1){
		var valsToAdd = [];
		var maxInExample = -1;
		var val;
		var maxPos;
		for (var j=0; j<nodesPerLayer[0]; j+=1){
			val = random(-1,1); // The value of each randomly generated input is currently -1 <= val <= 1
			if (val > maxInExample){
				maxInExample = val;
				maxPos = j;
			}
			valsToAdd.push(val);
		}
		l.push([valsToAdd]);
		// This determines the optimum values of the output node, so that there would be no change in the weights of the network
		// (Basically in this example, the bigger of the two inputs should be marked with a one in its corresponding output, and all others a zero.
		var answers = [];
		for (var j=0; j<nodesPerLayer[0]; j+=1){
			if (j === maxPos){
				answers.push(1);
			} else {
				answers.push(0); // OR -1
			}
		}
		l[i].push(answers);

/*
		var ins = [];
		var individual = 0;
		var max = [0,0];
		for (var j=0; j<nodesPerLayer[0]; j+=1){
			individual = random(-1,1);
			ins.push(individual);
			if (individual>max[0]){
				max = [individual, j];
			}
		}
		l.push([ins]);
		var outs = [];
		for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
			if (j == max[1]){
				outs.push(1);
			} else {
				outs.push(0);
			}
		}
		l[i].push(outs);
*/
	}
	return l
}

// finds the value of the node at position [x][y]: STAGE 1
function val_of_node(x, y){
	var s = 0;
	for (var i=0; i<nodesPerLayer[x-1]; i+=1){
		s += n[x-1][i] * w[x-1][y + i*nodesPerLayer[x]];
	}
	return s
}

// find the stimulus function for each output node: STAGE 2
function stimulus_function(i, final_node, aim){
	if (final_node[i]>aim[i]){
		return -pow((aim[i] - final_node[i]), 2);
	} else {
		return pow((aim[i] - final_node[i]), 2);
	}
}

// Calculates what the previous node should have been according to the stimulus function: STAGE 3
function aim_of_prev_node(x, y){
	var s = 0;
	for (var i=0; i<nodesPerLayer[x+1]; i+=1){
		if (w[x][y + i*nodesPerLayer[x]]){
			s += a[x+1][i] * w[x][y + i*nodesPerLayer[x]];
		}
	}
	return (1/nodesPerLayer[x-1])*s;
}

// Calculates what would have been a better weight: STAGE 4
function new_weight_calc(x, y, a, n){
	return (a[x+1][y % nodesPerLayer[x+1]]) * (n[x][floor(y / nodesPerLayer[x+1])])
}

// Keeps the weights roughly between -1 and 1
function refine_weights(){
	for (var k=0; k<init_weight_structure().length; k += 1){
		var m = 0;
		for (var l=0; l<w[k].length; l+=1){
			m += abs(w[k][l]);
		}
		m /= w[k].length;
		for (var l=0; l<w[k].length; l+=1){
			if (m){
				w[k][l] *= (1/m);
			}
		}
	}
}


// TRAINING ---------------------------------------------------------------------------

function training(){
	
	// Input number of training examples
	training_num = parseInt(prompt("\nNumber of training examples (eg: 100000): "));
	while (isNaN(training_num)){
		wrong_input();
		training_num = parseInt(prompt("\nNumber of training examples (eg: 100000): "));
	}
	// Determines the inner_repeat_num, which governs how often the accumulated 'new_w' is added to the actual weights
	if (training_num>10){
		inner_repeat_num = 10;
	} else {
		inner_repeat_num = round(sqrt(training_num));
	}
	final_node_temp = init_node_structure()[nodesPerLayer.length-1];

	// initialise variables inputs and new_w
	inputs = generate_inputs_list(training_num);
	new_w = init_weight_structure();
	
	// THIS LIST OF INPUTS IS FOR WHEN I DEBUG WITH A 3*3
// 	var inputs = [[[0.25159101560631214, 0.4065541379070743, 0.04999604933458368], [0, 1, 0]], [[0.16745798393340516, 0.10012964854145023, -0.13982259637706185], [1, 0, 0]], [[-0.1032428919114845, 0.6563412505730761, -0.4326332135287243], [0, 1, 0]], [[-0.7538384298432057, 0.538167120827955, 0.19272589842544985], [0, 1, 0]], [[0.1368845673837642, 0.649749734610799, 0.2961162951647749], [0, 1, 0]], [[0.14187718859113319, 0.34144568449510704, -0.33245212810395364], [0, 1, 0]], [[0.9209710915701101, -0.5071817427302594, 0.5466043856562914], [1, 0, 0]], [[-0.03578478761232562, 0.8589059248746371, -0.30263604918092857], [0, 1, 0]], [[-0.44544375626097144, 0.5800378732403848, -0.42432939206732323], [0, 1, 0]], [[0.8854545430375829, 0.18774655640496807, 0.015200057379719079], [1, 0, 0]], [[-0.42235770697373853, 0.48246791832015945, -0.4095546050766532], [0, 1, 0]], [[-0.8252451705192885, -0.4692092551202174, -0.6393538659549862], [0, 1, 0]], [[-0.6608971865937501, -0.932302140967145, 0.7211835879042781], [0, 0, 1]], [[0.3052659688651529, 0.7686159840673441, -0.6997464288415849], [0, 1, 0]], [[0.8310299064167141, -0.741373928433938, 0.14663247640621768], [1, 0, 0]], [[0.3862570810626016, 0.9716358575025377, 0.4630384613297014], [0, 1, 0]], [[0.3030673549561831, 0.3580768824469618, -0.288727252335115], [0, 1, 0]], [[-0.36976369020163147, 0.46504913700374906, 0.8275636191536171], [0, 0, 1]], [[0.19162741905540392, -0.6568917385059219, -0.7459735584609328], [1, 0, 0]], [[-0.014534606928358063, 0.19365029448212767, -0.8652675951281428], [0, 1, 0]]];
	
	
	// start big input loop
	for (var i = 0; i<inputs.length; i+=1){
// 		print("middle",i,new_w);
// 		prompt();
		// initialse n and final_node_temp
		n = init_node_structure();
		n[0] = inputs[i][0];
// 		print(n);
		final_node_temp = init_node_structure().slice(1); //init_node_structure()[nodesPerLayer.length-1]
		
		// ---------------------------- STAGE 1 --------------------------- FORWARD PROPAGATION
		
		if (nodesPerLayer.length > 2){
			for (var j=0; j<nodesPerLayer.length-1; j+=1){
				if (j){
					for (var k=0; k<nodesPerLayer[j]; k+=1){
						n[j][k] = val_of_node(j, k);
					}
				}
			}
		}

		for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
			final_node_temp[j] = val_of_node(nodesPerLayer.length-1, j);
	  }
// 	  print(final_node_temp)
						
		// ---------------------------- STAGE 2 -------------------------- STIMULUS FUNCTION OF OUTPUT
		
		for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
			a[a.length-1][j] = stimulus_function(j, final_node_temp, inputs[i][1]);
		}
		n[nodesPerLayer.length-1] = final_node_temp;
// 		print("a:",a[a.length-1],"\nn:", n[nodesPerLayer.length-1])
		
		// ---------------------------- STAGE 3 -------------------------- BACK PROPAGATION
		
		if (nodesPerLayer.length > 2){
			for (var j=0; j<nodesPerLayer.length-2; j+=1){
				var k = nodesPerLayer.length - j - 2;
				for (var l=0; l<nodesPerLayer[k]; l+=1){
					a[k][l] = aim_of_prev_node(k, l);
				}
			}
		}
		// ---------------------------- STAGE 4 -------------------------- NEW WEIGHTS
		
		for (var j=0; j<init_weight_structure().length; j+=1){
			for (var k = 0; k<init_weight_structure()[j].length; k+=1){
				new_w[j][k] += new_weight_calc(j, k, a, n);
			}
		}


		if (!(i % inner_repeat_num) && i>0){
			for (var j=0; j<init_weight_structure().length; j+=1){
				var avg = 0;
				for (k=0; k<w[j].length; k+=1){
					w[j][k] += sigmoid(new_w[j][k] / inner_repeat_num);
					avg += w[j][k];
				}
				avg /= init_weight_structure()[j].length;
				for (k=0; k<w[j].length; k+=1){
					w[j][k] -= avg;
				}
				
				refine_weights();
			}
			new_w = init_weight_structure();
		}
			
	}
// 	refine_weights();
	

}

// TRIALLING ---------------------------------------------------------------------------

function trialling(){
	
	trial_num = parseInt(prompt("Number of actual trials after training (eg: 100000): "));
	while (isNaN(trial_num)){
		wrong_input();
		trial_num = parseInt(prompt("Number of actual trials after training (eg: 100000): "));
	}
	
	correct_num = 0;
	trials = generate_inputs_list(trial_num);
	
	// FORWARD PROPAGATION
	
	for (var i=0; i<trial_num; i+=1){
		n = init_node_structure();
		n[0] = trials[i][0];
		// Almost repeating STAGE 1 from training
		if (nodesPerLayer.length > 2){
			for (var j=0; j<nodesPerLayer.length-1; j+=1){
				if (j){
					for (var k=0; k<nodesPerLayer[j]; k+=1){
						n[j][k] = val_of_node(j, k);
					}
				}
			}
		}
		
		// PROCESS RESULTS TO MAKE THEM 0 <= output <= 1

		maxNeg = 0;
		for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
			n[nodesPerLayer.length-1][j] = val_of_node(nodesPerLayer.length-1, j);
			if ((n[nodesPerLayer.length-1][j] < 0) && (abs(n[nodesPerLayer.length-1][j]) > maxNeg)){
	      maxNeg = abs(n[nodesPerLayer.length-1][j]);
	    }
		}
		maxVal = 0;
	  for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
      n[nodesPerLayer.length-1][j] += maxNeg;
      if (n[nodesPerLayer.length-1][j] > maxVal){
        maxVal = n[nodesPerLayer.length-1][j];
      }
	  }
	  
	  for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
	    n[nodesPerLayer.length-1][j] /= maxVal;
	  }
		/*

		for (var j=0; j<nodesPerLayer[nodesPerLayer.length-1]; j+=1){
			n[nodesPerLayer.length-1][j] = sigmoid(val_of_node(nodesPerLayer.length-1, j));
		}
*/
// 		alert(n[nodesPerLayer.length-1]);
		// Determine is correct and success rate
		
		if (output_is_correct(trials, i, nodesPerLayer)){
			correct_num += 1;
		}
	}
	success_rate = correct_num/trial_num;
}