# Supervised Deep Neural Network


Online Demo: https://tobiasloader.github.io/Supervised-Deep-Neural-Network/


INTRODUCTION:

This is the graphical version of my first attempt at a neural network, so the training task is relatively trivial. The task I have set the network is to learn to recognise the highest number from a list of random numbers between -1 and 1. The number of numerical inputs will be equal to the number of nodes in the input layer.

GLOSSARY:

  - NODE: small circle in a layer, represents an artificial neurone which enables transmission of data through the network.
  
  - INPUT LAYER and OUTPUT LAYER: dark grey vertical bars, consisting of a column of nodes used for input and output.

  - HIDDEN LAYER/S (initially none): light grey vertical bars, consisting of a column of nodes.
  
  - WEIGHT: the relationship between two nodes in adjacent layers (either positive or negative of varying magnitude).
 
  - TRAINING: the number of 'lessons' the network will undergo to optimise its weights.

  - TESTS: the number of questions in the 'final exam' (i.e. these determine the success rate).
 
 
INSTRUCTIONS:

1. Set your chosen number of hidden layers via the larger PLUS and MINUS icons located at either side of the window.
 
2. Now set the number of nodes in each layer via the smaller PLUS and MINUS icons, which appear above or below each layer. NB: Check that the first and last layer have the SAME number of nodes (so that each input corresponds to exactly one output).
 
3. Now that you have designed the layout of your network it's time to begin training it! Click the large BLUE button in the top right corner of the screen and you will be prompted to input your choice of the number of training cycles and tests. NB: You could choose quite large numbers, eg: 100,000 on a smaller network design, without overly taxing the average home computer.
 
4. Several factors determine how accurately the network performs, such as the design of its layout, the number of training cycles and the number of tests it runs. In general, the higher the number of training cycles, the closer the success rate to 100%.
 
5. When viewing the results screen: a BLUE line represents a POSITIVE weighting (relationship) between connected nodes. Similarly, a RED line represents a NEGATIVE weighting. THICKER lines of either colour represent weights of a greater MAGNITUDE.

QUESTION. Why not try to figure out what design of network layout produces the most accurate (highest percentage) results for the given task?
 
VERSION: 2.0  -  originally written in PYTHON, then converted to P5.JS

Toby Loader
