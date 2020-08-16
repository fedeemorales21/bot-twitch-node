const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: 'BOTARDO',
		password: 'oauth:7cyjthvqvx19dhm6u273r5jrwb629m'
	},
	channels: [ 'federicomorales21' ]
});

client.connect();

let  pis = 0

client.on('message', (channel, tags, message, self) => {
	if(self) return;
    const commandName = message.trim()
    
    if(commandName.toLowerCase() === '!hola') {
		client.say(channel, `@${tags.username}, todo bien? Kappa`);
    }
    
    if(commandName.toLowerCase() === '!dado') {
        const dice = rollDice()
		client.say(channel, `@${tags.username}, te toco ${dice}`);
    }
    
    if(commandName.toLowerCase() === '!pis') {
        pis++
		client.say(channel, `Fue ${pis} veces a clorificar el agua`);
    }
    
    if(commandName.toLowerCase() === 'comandos') {
		client.say(channel, `!hola,!dado,!pis`);
    }
       
    if(commandName.toLowerCase() === '!love') {
		client.say(channel, `<3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3`);
    }


});


function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


