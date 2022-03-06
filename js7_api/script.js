let key = "SSTJo9QJnNjqIOhkB0INcvjv0XXYmq5I";
const button = document.querySelector("button");
const gifContainer = document.querySelector(".gif__container");

button.addEventListener("click", function () {
    const input = document.querySelector("input");

   if(input.value == "") {
       return
   }

   fetch("https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + input.value + "&limit=25&offset=0&rating=g&lang=en")
   .then(response => response.json())
   .then(data => {
       for (let i = 0; i < data.data.length; i++) {
        const img = document.createElement("img");
        img.src = data.data[i].images.original.url;;
        gifContainer.appendChild(img);
       }
   })
   .catch(error => console.log(error))

})


