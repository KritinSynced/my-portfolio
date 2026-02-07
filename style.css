const text = ["B.Tech CSE Student", "Developer", "Future Entrepreneur"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();
