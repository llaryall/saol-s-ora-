const tchange = document.getElementById("change");
const body = document.body;

const texts = [
  { text: "", theme: { bgColor: "#FEF4EA", image: "" } },
  {
    text: "but i've found the best ...",
    theme: { bgColor: "#FEF4EA", image: "./imgs/R.png" },
  },
  {
    text: "found in my darkest days..",
    theme: { bgColor: "#FAECBC", image: "" },
  },
  { text: "she shined on my life..", theme: {bgColor:"#FEF4EA", image:"./imgs/star.jpg" } },
  {
    text: "so i called her saol síoraí❤️",
    theme: { bgColor: "#FFB8D0", image: "" },
  },
  {
    text: "you are my saol síoraí❤️, my eternal life you make me happy when skies are bright you are my saol síoraí❤️, my eternal life you make me calm when storms are in sight",
    theme: {
      classes: "text-5xl max-w-xl leading-normal text-center",
      bgColor: "#87ceeb",
      image: "",
    },
  },
  {
    text: "You are the most beautiful gird I've ever seen .. Your eyes sparkle like emeralds , your hair flows like silk Your smile melts my heart, your voice soothes my soul , you are my saol síoraí, my eternal life ❤️ ",
    theme: { bgColor: "#FFB8D0", image: "" },
  },
  {
    text: " You are not only beautiful on the outside ..",
    theme: { bgColor: "#FAECBC", image: "" },
  },
  {
    text: "but also on the inside",
    theme: { bgColor: "#87ceeb", image: "" },
  },
  {
    text: " You fill my heart with pride and joy .. You are like a mountain, solid and strong, and like a flower, delicate and fragrant. You are the most sweet and lovely soul in the world.you are my saol síoraí❤️ , my eternal life❤️",
    theme: { bgColor: "#FFCABE", image: "" },
  },
  {
    text: "You are the cream in my coffee The cherry on my cake, the sugar in my tea The honey in my pot, the jam in my toast You are the sweetest thing for me You are my saol síoraí❤️ , my eternal life❤️",
    theme: { bgColor: "FFCABE", image: "heart.png" },
  },
  {
    text: "I’m counting the days until I can hold your hand and never let go. I want to feel the curves of your back as I pull you closer and kiss you with all my love. You are my saol síoraí❤️ , my eternal life❤️",
    theme: { bgColor: "#FFB8D0", image: "" },
  },
  {
    text: "Happy valentine my saol síoraí❤️ , my eternal life❤️",
    theme: { bgColor: "#87ceeb", image: "./imgs/R.png" },
  },
];
let index = 0;

function changeTextWithFadeR() {
  tchange.style.opacity = 0;
  tchange.style.transition = "opacity 1.5s linear";

  setTimeout(() => {
    const { text, theme } = texts[index];
    tchange.textContent = text;

    body.className = theme.classes;
    // Add image (if any)
    body.style.backgroundImage = theme.image ? `url('${theme.image}')` : "none";
    body.style.backgroundSize = "cover";
    // Change page background color with transition
    body.style.transition = "background-color 0.5s ease-in-out";
    body.style.backgroundColor = theme.bgColor;

    tchange.style.opacity = 1;
  }, 500);

  index = (index + 1) % texts.length;
  
  if(index===13){
    window.location.href = "test.html";
  }
}
function changeTextWithFadeL() {
  tchange.style.opacity = 0;
  tchange.style.transition = "opacity 1.5s linear";

  setTimeout(() => {
    const { text, theme } = texts[index];
    tchange.textContent = text;

    body.className = theme.classes;
    // Add image (if any)
    body.style.backgroundImage = theme.image ? `url('${theme.image}')` : "none";
    body.style.backgroundSize = "cover";
    // Change page background color with transition
    body.style.transition = "background-color 0.5s ease-in-out";
    body.style.backgroundColor = theme.bgColor;

    tchange.style.opacity = 1;
  }, 500);

  index = (index - 1) % texts.length;
  if(index===13){
    window.location.href = "test.html";
  }
}

