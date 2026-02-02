const { Phaser } = window; // This bridges the gap for modules

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  init() {
    this.cameras.main.setBackgroundColor('#000435');
  }

  preload() {
    this.load.image("duck", "assets/rubberDuck.png");
    this.load.audio(
      "quack",
      "https://res.cloudinary.com/dtx2ncegu/video/upload/v1769830783/quack_5_a375dw.mp3",
    );
    this.load.image("speechBubble", "https://i.imghippo.com/files/dMEn7260Q.png");
  }

  create() {
    const duck = this.add.sprite(75, 75, "duck").setInteractive();
    let duckIsActive = false;

    console.log(duckIsActive);

    duck.displayWidth = 128;
    duck.displayHeight = 128;
    let speechObject = null;


    const duckQuotesArray = ["msg1", "msg2", "msg3"];

    duck.on("pointerdown", (pointer) => {
      if (pointer.button === 0){
        this.sound.play("quack");
        duck.setTint(0xff0000);
        this.time.delayedCall(150, () => {
          duck.clearTint();
        });

        if (speechObject === null) {     
          const randomDuckSpeech = duckQuotesArray[Math.floor(Math.random() * duckQuotesArray.length)];
          speechObject = this.add.text(64, 100, randomDuckSpeech);
          
          this.time.delayedCall(3000, () => {
            if (speechObject) {
              speechObject.destroy();
              speechObject = null;
            }
          });
        }
      }
    });

    duck.on("pointerdown", (pointer) => {
      if (pointer.button === 1){
      this.sound.play("quack");
      duckIsActive = true;
      duck.setTint(0xff0000);

      this.scale.resize(150, 300);

      this.time.delayedCall(150, () => {
        duck.clearTint();
      });
    }

      console.log("Sprite was clicked!");

      if (!this.scene.isActive("UIScene") && duckIsActive === true) {
        this.scene.launch("UIScene");
        console.log("Alan has been activated, chatbox will open from here");
      }

    });

  }


  update() {}
}
export default MainScene;
