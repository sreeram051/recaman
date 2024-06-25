const scale = 10; // Scale factor for the visualization
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput');
const rangeValueDiv = document.querySelector('#rangeValue');
const ctx = canvas.getContext("2d");

const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91,
].map(item => item * scale);

const drawRecaman = (uptoIndex) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    for (let i = 1; i <= uptoIndex; i++) {
        const startX = sequence[i - 1];
        const endX = sequence[i];
        const radius = Math.abs(endX - startX) / 2;
        const centerX = (startX + endX) / 2;
        const centerY = canvas.height / 2;

        ctx.beginPath();
        if (i % 2 === 0) {
            ctx.arc(centerX, centerY, radius, Math.PI, 0);
        } else {
            ctx.arc(centerX, centerY, radius, 0, Math.PI);
        }
        ctx.stroke();
    }
}

const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(value);
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value));

// Initial draw
drawRecaman(rangeInput.value);
