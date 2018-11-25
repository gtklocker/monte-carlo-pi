const canvas = document.querySelector('canvas');
const W = canvas.width, H = canvas.height;
const ctx = canvas.getContext('2d');

const RADIUS = W;

const config = {
	sampleSize: 100000,
};

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function isInsideCircle(x, y) {
	return x*x + y*y <= RADIUS*RADIUS;
}

function drawPoint(x, y) {
	ctx.save();
	ctx.fillStyle = isInsideCircle(x, y) ? 'green' : 'red';
	ctx.fillRect(x, y, 1, 1);
	ctx.restore();
}

function run() {
	let pointsInsideCircle = 0;
	ctx.clearRect(0, 0, W, H);

	for (let i = 0; i < config.sampleSize; ++i) {
		const x = getRandomInt(W), y = getRandomInt(H);
		drawPoint(x, y);
		pointsInsideCircle += isInsideCircle(x, y);
	}

	results.rho = pointsInsideCircle / config.sampleSize;
	results.pi = results.rho * 4;
}

config.run = run;

rivets.bind(document.getElementById('results'), results);
rivets.bind(document.getElementById('config'), config);
run();
