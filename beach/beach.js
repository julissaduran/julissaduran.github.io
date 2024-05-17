let img

let canvasSize = 1440
let numTiles = 20
let gridSize

function preload() {
  img = loadImage("https://julissaduran.github.io/images/beach.jpg");
}

function setup() {
  createCanvas(600, 400)
  img.resize(600, 400)

  gridSize = int(canvasSize / numTiles)
  frameRate(4)
}

function draw() {
  background(0,153,102)
  
  // Copy central grid cells over from the image to the canvas,
  // shifting the source square based on randomness.
  for (let gridX = 0; gridX < numTiles; gridX += 1) {
    for (let gridY = 0; gridY < numTiles; gridY += 1) {
      let sx = gridX * gridSize + int(random(8)) - 3
      let sy = gridY * gridSize
      let dx = gridX * gridSize
      let dy = gridY * gridSize

      image(img,
            dx, dy, gridSize, gridSize, 
            sx, sy, gridSize, gridSize)
    }
  }
}
