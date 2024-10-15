function displayPoem(response) {
  // Type Writer
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: false,
  });
}

function generatePoem(event) {
  event.preventDefault();

  // API Key
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c346o99849899025a5ea673a4f03tb46";
  let prompt = `Generate a German poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Avoid adding ``` html at the beginning and false of the answer. Make sure to follow the user instructions. Do not include a title to the poem. There should be no 'false' at the end of the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Show loading message
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating German poem about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
