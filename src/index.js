
function dispalyPoem(response) {
 // Typ Writer 
 new Typewriter("#poem", {
    strings: response.data.answer ,
    autoStart: true,
    delay: 1
    cursor: "",
});
}


function generatePoem(event) {
    event.preventDefault(); 

// API Key
    
    let instructionsInput = document.querySelector("#user-instruktions"); 
    
    let apiKey = "c346o99849899025a5ea673a4f03tb46";
    let prompt = `Generate a German poem about ${instructionsInput.value}`; 
    let context = "You are a romatic extpert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructionsDo not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        axios.get(apiUrl).then(dispalyPoem); 

   
    
    
    
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);


