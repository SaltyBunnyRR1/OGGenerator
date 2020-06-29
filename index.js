const fetch = require("node-fetch")
// # Created By SaltyBunnyRR1#5600 On Discord.
console.log('Made By SaltyBunnyRR1#5600 On Discord.')

setInterval(async() => {
	fetch("https://random-word-api.herokuapp.com/word?number=1").then(res => res.json())
    .then(name => {
fetch("https://api.mojang.com/users/profiles/minecraft/" + name).then(res => res.json()).then(json => {
if(json){ return }
}).catch(err => { 
	if(name[0].length > 16 || name[0].length < 3) return;
	console.log("[!]")
console.log(name[0] + " - " + name[0].length)
console.log('[!]')
})
})
	}, 1000)
