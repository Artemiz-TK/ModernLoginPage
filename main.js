const section = document.querySelector('section');

const spans = [];
const rect = section.getBoundingClientRect();

let totalSpans = 256;
let applying = false;

console.log(`width: ${rect.width}px\nheight: ${rect.height}px`);

function verifyTotalSpans() {
    if (rect.width >= 1228) {
        return 128;
    }

    if (rect.width >= 1000) {
        return 144;
    }

    if (rect.width >= 800){
        return 300;
    }

    if (rect.width >= 600) {
        return 300;
    }

    if (rect.width >= 400){
        return 266;
    }
}

totalSpans = verifyTotalSpans();

function drawSpans() {
    for (let i = 0; i < totalSpans; i++) {

        const span = document.createElement('span');
        section.appendChild(span);
        spans.push(span);
    }
}

drawSpans();

function applyCascadingBorder() {
    if (applying) return;
    applying = true;

    spans.forEach((span, index) => {
        const delay = span.offsetTop * 5;
        setTimeout(() => {
            span.classList.add('show-border');
            span.classList.add('hover');

            setTimeout(() => {
                span.classList.remove('show-border');

                if (index === spans.length - 1) {
                    applying = false;
                }
            }, 1000 + delay);
        }, delay);
    });
}

section.addEventListener("mouseover", (e) => {
    if (e.target.tagName.toLowerCase() === "span") {
        applyCascadingBorder();

        spans.forEach((span) => {
            let delay = 500;
            setTimeout(() => {
                setTimeout(() => {
                    e.target.style.backgroundColor = 'red';
                }, 10);

                setTimeout(() => {
                    e.target.style.backgroundColor = '#181818';
                }, delay);
            });
        });
    }
});
