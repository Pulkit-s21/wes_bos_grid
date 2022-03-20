const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImg = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

function generateHTML([c,r]){
     return`
          <div class="item c${c} r${r}">
          <img src="https://source.unsplash.com/random/${randomNumber(1000)}00x${randomNumber(1000)}00?">
          <div class="item__overlay">
          <button>View -></button>
          </div>
          </div>
     `;
}

function randomNumber(limit){
     return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e){
     const src = e.currentTarget.querySelector("img").src;
     console.log(src);
     overlayImg.src = src;
     overlay.classList.add("open");
}

function close(){
     overlay.classList.remove("open");
}

const digits = Array.from(
     {length : 50}, 
     () =>
     [randomNumber(4),randomNumber(4)].concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]));

const html = digits.map(generateHTML).join(''); // join('') to make it into string
gallery.innerHTML = html;

overlayClose.addEventListener("click",close);

const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener("click",handleClick));