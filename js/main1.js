const APIurl = "https://api.thecatapi.com/v1/images/search?limit=10";

const contenedorGatitos = document.getElementById("contenedorGatitos");
const buttonnGet = document.getElementById("bontonGet");
const buttonClear = document.getElementById("limpiar");

const printCats = (cats) => {
  hideButton(buttonnGet)
  showButton(buttonClear)

  cats.forEach((cat) => {
    contenedorGatitos.innerHTML += `
        <div class="img-container">
          <img src= "${cat.url}" alt= "image cat"/>
        </div>
      `;
  });
};

const getCats = async () => {
  try {
    const response = await fetch(APIurl);
    if (response.ok) {
      const cats = await response.json();
      printCats(cats);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const hideButton = (button) => button.classList.add("hide")
const showButton = (button) => button.classList.remove("hide")

buttonnGet.addEventListener("click", getCats)

buttonClear.addEventListener("click", ()=>{
  contenedorGatitos.innerHTML=""
  showButton(buttonnGet)
  hideButton(buttonClear)
})




