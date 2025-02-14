const colorsSchemes = {
    blue:{
		bgGradient1: '#000',
		bgGradient2: '#0259a1',
		particles1: '#0356fc',
		particles2: '#0080ff',
		particles3: 'rgba(125, 229, 250, 0.3)',
		title: `Glitter is the confetti of the universe,<br/> a tiny, sparkly rebellion against organization.`,
		text: `"You think you’ve cleaned it up, but the next morning, it’s like it’s plotting its return, appearing in places you never even knew existed. <br/> It’s the herpes of the craft world—once it’s there, it never truly leaves. <br/>You might think you’re just adding a little sparkle to your life, but now your car seat is a disco ball and your dog looks like it got hired for a role in the next *Trolls* movie. <br/>You can never have too much glitter... but you definitely will have too much glitter "`
    },
    pink:{
		bgGradient1: '#63064e',
		bgGradient2: '#c20c97',
		particles1: '#fc03b5',
		particles2: '#fc5dc5',
		particles3: 'rgba(252, 136, 247, 0.3)',
		title: `Glitter is like the confetti of the universe, except it never knows when to leave the party.`,
		text: `It shows up, sparkles its way into your life, and then refuses to exit, like that one friend who says, "Just one more song!" except it's been four hours and you're covered in sparkles. It's like the glitter is trying to tell you, "I’ll never be gone, just mostly invisible—until you wear black." It’s the gift that keeps on giving—right into your kitchen, bathroom, and maybe even your soul. You’ll find it in places you didn’t know existed, like in your coffee cup or your toothpaste. Glitter: nature’s way of saying, "Oops, I’m still here!"`
    },
    green:{
		bgGradient1: '#000',// very dark color
		bgGradient2: '#119100', // dark color
		particles1: '#1deb02', //flashy color
		particles2: '#5bff45',//flashy lighter color
		particles3: 'rgba(198, 255, 148, 0.3)',// light color
		title: `Glitter is the glittery reminder that life is never truly clean.`,
		text: `You might sweep it up, vacuum it, or even burn your clothes, but somehow, that one tiny speck will find its way into your life months later, as if it’s saying, “I’m still here, just invisible—except on your face.” Glitter is like that one friend who is way too extra for any situation. You’re just trying to make dinner, and suddenly, *BAM*, you’re a human snow globe. It gets in your eyes, your hair, your pets, and if you’re lucky, your significant other’s soul. And the worst part? When you do a full-body check in the mirror after a glitter craft session, it’s too late—you're already glowing like a backup dancer in a pop music video.`
    }
}

const buttons = document.getElementsByTagName('nav')[0].getElementsByTagName('button')
const titleContainer = document.getElementById('title-container');
const textContainer = document.getElementById('text-container');

let currentColor = 'pink';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setColorAndText(color) {
    currentColor = color;
    for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('selected')
		if (buttons[i].dataset.color === color) {
			buttons[i].classList.add('selected')
		}
    }
    drawBg();
    titleContainer.innerHTML = colorsSchemes[color].title;
    textContainer.innerHTML = colorsSchemes[color].text;
}


function drawBg() {

    const canvas = document.getElementById("bg-canvas");

    if (canvas.getContext) {

		const ctx = canvas.getContext("2d");
		const [w,h] = [window.innerWidth, window.innerHeight]
		const nbParticles = window.innerWidth*100;

		ctx.canvas.width  = w;
		ctx.canvas.height = h;

		const gradient = ctx.createLinearGradient(0, 0, w, h);

		gradient.addColorStop(0, colorsSchemes[currentColor].bgGradient1);
		gradient.addColorStop(0.25, colorsSchemes[currentColor].bgGradient2);
		gradient.addColorStop(0.5, colorsSchemes[currentColor].bgGradient1);
		gradient.addColorStop(0.75, colorsSchemes[currentColor].bgGradient2);
		gradient.addColorStop(1, colorsSchemes[currentColor].bgGradient1);

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, w, h);

		for (var i = 0; i < nbParticles; i++) {
			const randomX = getRandomInt(w);
			const randomY = getRandomInt(h);
			ctx.fillStyle = colorsSchemes[currentColor].particles1;
			ctx.fillRect(randomX, randomY, 1, 1);
		}

		for (var i = 0; i < nbParticles; i++) {
			const randomX = getRandomInt(w);
			const randomY = getRandomInt(h);
			ctx.fillStyle = colorsSchemes[currentColor].particles2;
			ctx.fillRect(randomX, randomY, 1, 1);
		}

		for (var i = 0; i < nbParticles; i++) {
			const randomX = getRandomInt(w);
			const randomY = getRandomInt(h);
			ctx.fillStyle = colorsSchemes[currentColor].particles3;
			ctx.fillRect(randomX, randomY, 2, 2);
		} 
		
		for (var i = 0; i < nbParticles / 20; i++) {
			const randomX = getRandomInt(w);
			const randomY = getRandomInt(h);
			ctx.fillStyle = 'rgba(255, 255, 255, 1)';
			ctx.fillRect(randomX, randomY, 1, 1);
		} 
    }
}

function drawSparkles() {

    const canvas = document.getElementById("sparkles-canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");
        const [w,h] = [window.innerWidth, window.innerHeight]
        const nbParticles = 500;

        ctx.canvas.width  = w;
        ctx.canvas.height = h;

        setInterval(()=>{
            const randomX2 = getRandomInt(w);
            const randomY2 = getRandomInt(h);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

            ctx.fillRect(randomX2, randomY2, 2, 2);
            
            const randomX3 = getRandomInt(w);
            const randomY3 = getRandomInt(h);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';

            ctx.fillRect(randomX3, randomY3, 3, 3);

            const randomX5 = getRandomInt(w);
            const randomY5 = getRandomInt(h);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

            ctx.beginPath();
            ctx.arc(randomX5, randomY5, 2.5, 0, 2 * Math.PI);
            ctx.fill()

            setTimeout(()=>{
                ctx.clearRect(randomX2, randomY2, 2, 2);
                ctx.clearRect(randomX3, randomY3, 3, 3);
                ctx.clearRect(randomX5-2.5, randomY5-2.5, 5.5, 5.5);
            },500)

        },1)
    }
}

window.addEventListener("load", ()=>{
    setColorAndText(currentColor);
    window.requestAnimationFrame(drawSparkles)
});