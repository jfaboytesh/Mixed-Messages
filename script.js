const handlePhrase = () => {

  const greetingMessage = [
    ['I know you are tired and want to give up,'],
    ['You should be proud of yourself,'],
    ["It doesn't matter if you logged just for one hour,"]
  ];

  const middleMessage = [
    ['some things take longer than you think, but here you are!'],
    ["there's no regrets in your life, you are doing what you want!"],
    ["it's not easy, either hard!"]
  ];

  const goodbyeMessage = [
    ['You are learning to code, and you will have the life that you want!'],
    ['You are learning to code, so never give up!'],
    ['You are learning to code, rest and take a break, but never quit!']
  ];

  const biggestArray = (greeting, middle, goodbye) => {
    let maxValue = 0;
    if(greeting.length > middle.length) {
      maxValue = greeting.length;
    }
    else {
      maxValue = middle.length;
    }
    if(goodbye.length > maxValue) {
      maxValue = goodbye.length;
    }
    return maxValue;
  }

  const len = biggestArray(greetingMessage, middleMessage, goodbyeMessage);
  const random = () => Math.floor(Math.random() * len);

  const finalMessage = [];

  const randomPhrase = phrase => {
    switch(random()) {
      case 0:
        finalMessage.push(phrase[0]);
        break;
      case 1: 
        finalMessage.push(phrase[1]);
        break;
      case 2:
        finalMessage.push(phrase[2]);
        break;
      }
      return finalMessage;
  }

  randomPhrase(greetingMessage);
  randomPhrase(middleMessage);
  randomPhrase(goodbyeMessage);

  const phrases = finalMessage.join(' ');

  const motivationQuote = document.querySelector('.motivation');
  motivationQuote.innerHTML = phrases;
  motivationQuote.style.visibility = 'visible';
  
}

document.querySelector('.mquote').addEventListener('click', handlePhrase);
