
const painting = function() {
    console.log("The wall has been painted red");
};
painting();

const paint = function(color) {
    console.log("The wall has been painted " + color); 
};

paint("green");
paint("blue");


const paints = function(wall, color) {
    console.log("The " + wall + " has been painted " + color);  
};

paints("south-east", "orange");
paints("north", "grey");

const paintWall = function(color, Wall) {
    console.log("The " + Wall + " wall has been painted " + color); 
  
};
paintWall("south-east", "orange"); 

