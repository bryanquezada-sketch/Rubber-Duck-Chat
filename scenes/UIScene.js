export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    const chatBox = new Phaser.Geom.Rectangle(10, 140, 130, 130);
    const chatBoxGraphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x00ff00 },
    });
    chatBoxGraphics.strokeRectShape(chatBox);


    const textInputField = new Phaser.Geom.Rectangle(10, 270, 130, 20);
    const textInputFieldGraphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x9D00FF },
    });
    textInputFieldGraphics.strokeRectShape(textInputField);

    
    const displayText = this.add.text(15, 270, "", {
      wordWrap: {width: 129, useAdvancedWrap: true},
      backgroundColor: '#ff0000'
    });


    let chatLog = [];
    
    const chatLogText = this.add.text(15, 150, chatLog, {
      backgroundColor: '#008080',
      fontSize: '10px',
      wordWrap: {width: 129, useAdvancedWrap: true}
    });

    let duckBrain = ["Quack...", "Quack!", "Quack?", "Got any grapes?", "*Quacks Pensively*"]
    let duckIntro = "Alan: What's quackin'?";
    let userMessage = '';

    chatLog.push(duckIntro);
    chatLogText.setText(chatLog.join("\n"));
    
    

    this.input.keyboard.on("keydown", (keyboardData) => {
      if (keyboardData.key === "Backspace") {
        userMessage = userMessage.slice(0, -1);
        } else if (keyboardData.key === "Enter"){
          chatLog.push("You: " + userMessage);
          userMessage = "";
          chatLogText.setText(chatLog.join("\n"));
          this.time.delayedCall(1000, () => {
          const randomQuack = duckBrain[Math.floor(Math.random() * duckBrain.length)];
          chatLog.push("Alan: " + randomQuack),
          chatLogText.setText(chatLog.join("\n"));
          });
          if (chatLog.length > 5) {
            
          }
        } else if (keyboardData.key.length === 1)
          userMessage += keyboardData.key;
      displayText.setText(userMessage);

      
      //console.log(`${keyboardData.key} was pressed`);
      //console.log(`${keyboardData.key} was pressed`);
    });


    
  }
}
