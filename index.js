const fetch = require("node-fetch")
// # Made By SaltyBunnyRR1#5600 On Discord 
console.log('Made By SaltyBunnyRR1#5600 On Discord ')
setInterval(() => {
fetch("https://random-word-api.herokuapp.com/word?number=1")
.then(res => res.json())
.then(name => {
fetch("https://api.mojang.com/users/profiles/minecraft/" + name[0])
.then(res => res.json())
.then(json => {
	if(json) return;
}).catch(() => {
	if(name[0].length > 2 && name[0].length < 17){
console.log(`${name[0]} - ${name[0].length}`)
}
})//catch json
})//name
}, 1000)//SetInterval
