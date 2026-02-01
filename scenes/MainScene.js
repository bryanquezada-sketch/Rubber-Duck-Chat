//    console.log(this);

class MainScene extends Phaser.Scene {
  constructor() { super({ key: 'MainScene' }); }

  init() {

  }

  preload() {
    this.load.image('duck', 'https://i.imghippo.com/files/QopU3501uss.png')
    this.load.audio('quack', 'https://res.cloudinary.com/dtx2ncegu/video/upload/v1769830783/quack_5_a375dw.mp3')
  }

  create() {
    const duck = this.add.sprite(75, 75, 'duck').setInteractive();
    let duckIsActive = false

    console.log(duckIsActive);


    duck.displayWidth = 128;
    duck.displayHeight = 128;


    duck.on('pointerdown', () => {
      this.sound.play('quack');
      duckIsActive = true;
      duck.setTint(0xff0000);
      this.time.delayedCall(150, () => {
        duck.clearTint();
      });

      console.log('Sprite was clicked!');

      if (!this.scene.isActive('UIScene') && (duckIsActive === true)) {
        this.scene.launch('UIScene');
        console.log('Alan has been activated, chatbox will open from here');
  
      }
    });
  }
    
  update() {

  }
}
export default MainScene;