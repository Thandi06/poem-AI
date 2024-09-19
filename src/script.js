function displayPoem(response) {
    console.log("poem generated");

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor: "",
    }
    )
}


function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "9te2009b94ad39f916306f09bc5do169";
    let context = 
        "You are a romantic poem expert and love to write short poems.Your mission is to generate a four line poem and separate each line with a <br />. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem, do Not include the title in the poem. Make sure to follow the user instructions";
    let prompt = `user instructions: Generate an English poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem)
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);