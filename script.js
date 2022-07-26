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

const finalMessage = [];

const randomGreeting = greeting => {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            finalMessage.push(greeting[0]);
            break;
        case 1:
            finalMessage.push(greeting[1]);
            break;
        case 2:
            finalMessage.push(greeting[2]);
            break;
    }
    return finalMessage;
}

const randomMiddle = middle => {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            finalMessage.push(middle[0]);
            break;
        case 1:
            finalMessage.push(middle[1]);
            break;
        case 2:
            finalMessage.push(middle[2]);
            break;
    }
    return finalMessage;
}

const randomGoodbye = goodbye => {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            finalMessage.push(goodbye[0]);
            break;
        case 1:
            finalMessage.push(goodbye[1]);
            break;
        case 2:
            finalMessage.push(goodbye[2]);
            break;
    }
    return finalMessage;
}

randomGreeting(greetingMessage);
randomMiddle(middleMessage);
randomGoodbye(goodbyeMessage)

console.log(finalMessage.join(' '));