import BBCodeTextPlugin from '/node_modules/phaser3-rex-plugins/plugins/bbcodetext-plugin.js';

import MainScene from "./scenes/MainScene.js";
import UIScene from "./scenes/UIScene.js";

window.PHSR_GAME = new Phaser.Game({
  type: Phaser.AUTO,
  pixelArt: true,
  width: 150,
  height: 150,
  parent: "game-container",
  plugins: {
    global: [{
      key: 'rexBBCodeTextPlugin',
      plugin: BBCodeTextPlugin,
      start: true
    }]
  },
  scene: [MainScene, UIScene],
  physics: {
    default: "arcade",
    arcade: { debug: true }
  }
});
