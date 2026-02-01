export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    const chatBox = new Phaser.Geom.Rectangle(10, 140, 130, 150);
    const chatBoxGraphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x00ff00 },
    });
    chatBoxGraphics.strokeRectShape(chatBox);

    this.input.keyboard.on("keydown", (keyboardData) => {
      console.log(`${keyboardData.key} was pressed`);
      //console.log(keyboardData);
    });
  }
}
