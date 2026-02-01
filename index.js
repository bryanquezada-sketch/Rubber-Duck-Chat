import MainScene from "./scenes/MainScene.js";
import UIScene from "./scenes/UIScene.js";

window.PHSR_GAME = new Phaser.Game({
  type: Phaser.AUTO,
  pixelArt: true,
  width: 150,
  height: 300,
  parent: "game-container",
  scene: [MainScene, UIScene],
  physics: {
    default: "arcade",
    arcade: { debug: true }
  }
});
