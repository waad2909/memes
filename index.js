let input=document.querySelector(".input")
let button=document.querySelector(".btn")
let content=document.querySelector(".content")

 function ShowMeme() {
 fetch('https://api.imgflip.com/get_memes')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
   const number = parseInt(input.value);
   input.value = "";
  if (isNaN(number) || number < 0 || number > 99) {
    content.innerHTML = "<p class='text-danger'>Please enter a valid number.</p>";
   } else {
  content.innerHTML = `<h2 class="text-center text-warning">${data.data.memes[number].name}</h2>
  <img src="${data.data.memes[number].url}" alt="${data.data.memes[number].name}" class=" w-25 ">`;
   }
})
  .catch((error) => {
    content.innerHTML =`<p class='text-danger'>An error occurred while fetching memes. Please try again later. (${error.message})</p>`;    
  });
}  
    
button.addEventListener("click", ShowMeme)
input.addEventListener("keydown",(e)=> {
  if (e.key === "Enter") {
    ShowMeme();
  }
});
