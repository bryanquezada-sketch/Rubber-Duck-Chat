export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    const chatBox = new Phaser.Geom.Rectangle(10, 140, 130, 120);
    const chatBoxGraphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x00ff00 },
    });
  //  chatBoxGraphics.strokeRectShape(chatBox);


    const textInputField = new Phaser.Geom.Rectangle(10, 270, 130, 20);
    const textInputFieldGraphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x9D00FF },
    });
//    textInputFieldGraphics.strokeRectShape(textInputField);

    
    const userText = this.add.text(15, 270, "", {
    //  wordWrap: {width: 129, useAdvancedWrap: true},
      backgroundColor: '#ff0000'
    });


    const maskShape = new Phaser.Geom.Rectangle(10, 270, 130, 20);
    const mask = new Phaser.Display.Masks.GeometryMask(this, this.add.graphics().fillRectShape(maskShape));
    userText.setMask(mask);


    let chatLog = [];
    
    const chatLogText = this.add.text(15, 145, chatLog, {
      backgroundColor: '#008080',
      fontSize: '10px',
      wordWrap: {width: 124, useAdvancedWrap: true},
      metrics: {
        ascent: 8,   // Adjust these numbers until
        descent: 2,  // the total height (10) is reached.
        fontSize: 10
      }
    });

    let duckBrain = ["Quack...", "Quack!", "Quack?", "Got any grapes?", "*Quacks Pensively*"]
    let duckIntro = "Alan: What's quackin'?";
    let userMessage = '';

    chatLog.push(duckIntro);
    chatLogText.setText(chatLog.join("\n"));
    

    
    

    this.input.keyboard.on("keydown", (keyboardData) => {
      if (keyboardData.key === "Backspace") {
        userMessage = userMessage.slice(0, -1);
        } else if (userMessage.length > 0 && keyboardData.key === "Enter"){
          chatLog.push("You: " + userMessage);
          userMessage = "";
          chatLogText.setText(chatLog.join("\n"));
          this.time.delayedCall(1000, () => {
            const randomQuack = duckBrain[Math.floor(Math.random() * duckBrain.length)];
            chatLog.push("Alan: " + randomQuack),
            chatLogText.setText(chatLog.join("\n"));
            this.trimChat(chatLog, chatLogText, chatBox);
            });
        } else if (keyboardData.key.length === 1) {
          userMessage += keyboardData.key;
          userText.setText(userMessage);
          if (userText.width > 120) {
            userText.setOrigin(1, 0);
            userText.x = 140;
          } else {
            userText.setOrigin(0, 0);
            userText.x = 15;
          }
        }

      
      //console.log(`${keyboardData.key} was pressed`);
      //console.log(`${keyboardData.key} was pressed`);
    });
  }

  trimChat(log, display, box) {
    while (display.height > box.height - 15 ) {
      log.shift();
      display.setText(log.join("\n"));
    }
  }

}
