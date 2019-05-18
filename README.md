# Neural-Network-P5

Neural Network P5: https://tobiasloader.github.io/Neural-Network-P5/

ReadMe: INFORMATION & INSTRUCTIONS

This is the graphical version of my first attempt at a neural network, so the training task is relatively trivial. The task I have set the network is to learn to recognise the highest number from a list of random numbers between -1 and 1. The number of numerical inputs will be equal to the number of nodes in the input layer.

GLOSSARY:

  - INPUT & OUTPUT LAYERS: dark grey vertical bars.

  - HIDDEN LAYER/S (initially none): light grey vertical bar.

  - NODE: small circle in layer.
 
  - TRAINING: # of 'lessons' the network will undergo.

  - TESTS: # of questions in the 'final exam'.
 
 
1. Set your chosen number of hidden layers via the larger PLUS and MINUS icons located at either side of the window.
 
2. Now set the number of nodes in each layer via the smaller PLUS and MINUS icons, which appear above or below each layer. NB: Check that the first and last layer have the SAME number of nodes (so that each input corresponds to exactly one output).
 
3. Now that you have designed the layout of your network it's time to begin training it! Click the large BLUE button in the top right corner of the screen and you will be prompted to input your choice of the number of training cycles and tests. NB: You could choose quite large numbers, eg: 100,000 on a smaller network design, without overly taxing the average home computer.
 
4. Several factors determine how well the network performs, such as the design of its layout, the number of training cycles and the number of tests it runs. NB: results will vary, as the training cycles are completely randomised each time.
 
5. When viewing the results screen: the BLUE lines represent POSITIVE relationship between nodes, RED lines represent NEGATIVE weights, and THICKER lines represent weights of greater MAGNITUDE. The optimal configuration of the weights for the default 2x2 network should be [1,-1,-1,1], ie: blue, red, red, blue lines, all of the same thickness.
 
VERSION: 2.0  -  written in P5.JS

Toby Loader
