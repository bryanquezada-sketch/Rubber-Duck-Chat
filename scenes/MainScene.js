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
    const duck = this.add.sprite(75, 80, "duck").setInteractive();
    let duckIsActive = false;

    console.log(duckIsActive);

    duck.displayWidth = 128;
    duck.displayHeight = 128;
    let speechObject = null;


    const duckQuotesArray = [
    "Did you check for a missing [b]semicolon?[/b]", 
    "Is the [b]variable[/b] name spelled correctly?", 
    "Try [u]explaining[/u] the logic out loud to me again.", 
    "Have you tried turning it off and on again?",
    "What does the error [i]actually[/i] say?",
    "Is that function doing too many things?",
    "Explain the logic to me.",
    "Did you check the [b]syntax?[/b]",
    "Try [b]console.log()![/b]",
    "Is it a [i]typo[/i]?",
    "Walk me through it.",
    "Breathe. The code isn't sentient. (Or am I?)",
    "Take a 5-minute walk. I’ll be here.",
    "Google is a [i][b]tool[/i][/b], not a cheat code. Use it!",
    "Small steps lead to big apps. Keep waddling!",
    "Don't overthink it. [b]KISS[/b]: Keep It Simple, Student!",
    "Try writing the logic in plain English first.",
    "Drink some water.",
    "Save your progress!",
    "Step away for 5 mins.",
    "Check your brackets.",
    "Time for a stretch?",
    "Break it down.",
    "One line at a time.",
    "Don't let it ruffle your feathers!",
    "I’m here for the bugs. And the breadcrumbs.",





    ];

    duck.on("pointerdown", (pointer) => {
      if (pointer.button === 0){
        this.sound.play("quack");
        duck.setTint(0xff0000);
        this.time.delayedCall(150, () => {
          duck.clearTint();
        });

        if (speechObject === null) {
          this.scale.resize(150, 200); 
          duck.y = 140;
          const randomDuckSpeech = duckQuotesArray[Math.floor(Math.random() * duckQuotesArray.length)];
          speechObject = this.add.rexBBCodeText(10, 5, randomDuckSpeech, {
            wordWrap: {width: 140, useAdvancedWrap: true},
            backgroundColor: '#ffffff',
            align: 'center',
            color: '#000000',
            fontFamily: 'Arial',
            fontSize: '14px'

          });
          //
          this.time.delayedCall(3000, () => {
            if (speechObject) {
              speechObject.destroy();
              speechObject = null;
              this.scale.resize(150, 150); 
              duck.y = 80;
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

      //scales canvas
      this.scale.resize(150, 300);

      this.time.delayedCall(150, () => {
        duck.clearTint();
        duck.y = 80;
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
