// Import stylesheets
import "./style.css";
import "phaser";
import MainScene from "./scenes/MainScene";
import UIScene from "./scenes/UIScene";

window.PHSR_GAME = new Phaser.Game({
  type: Phaser.AUTO, // Which renderer to use
  pixelArt: true,
  // Canvas width in pixels
  width: 150,
  // Canvas height in pixels
  height: 300,
  // ID of the DOM element to add the canvas to
  parent: "game-container",
  scene: [MainScene, UIScene],
  physics: {
    default: "arcade",
    arcade: {
      //    x: 0,
      //    y: 0,
      //    width: scene.sys.scale.width,
      //    height: scene.sys.scale.height,
      //    gravity: {
      //        x: 0,
      //        y: 0
      //    },
      //    checkCollision: {
      //        up: true,
      //        down: true,
      //        left: true,
      //        right: true
      //    },
      //    customUpdate: false,
      //    fixedStep: true,
      //    fps: 60,
      //    timeScale: 1,     // 2.0 = half speed, 0.5 = double speed
      //    customUpdate: false,
      //    overlapBias: 4,
      //    tileBias: 16,
      //    forceX: false,
      //    isPaused: false,
      debug: true,
      //    debugShowBody: true,
      //    debugShowStaticBody: true,
      //    debugShowVelocity: true,
      //    debugBodyColor: 0xff00ff,
      //    debugStaticBodyColor: 0x0000ff,
      //    debugVelocityColor: 0x00ff00,
      //    maxEntries: 16,
      //    useTree: true   // set false if amount of dynamic bodies > 5000
    },
  },
});
