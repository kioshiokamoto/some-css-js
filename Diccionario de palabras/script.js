const resultDiv = document.querySelector(".result");
const wordEle = document.querySelector(".word");
const wordMeaning = document.querySelector(".word-definition");
const synonyms = document.querySelector(".synonyms");

// function to handle all the word
const handle = async (e) => {
  if (e.keyCode === 13) {
    const word = e.target.value;
    // make a req to the api
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/es/${word}`
    );
    if (!result.ok) {
      alert("No se encontró definicion");
      return;
    }
    const data = await result.json();
    resultDiv.style.display = "block";
    wordEle.innerText = data[0].word;
    wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
    const synonymsArray = data[0].meanings[0].definitions[0].synonyms;
    console.log(synonymsArray.length);
    if (synonymsArray) {
      let synonymsData = "";
      for (let i = 0; i < synonymsArray.length; i++) {
        synonymsData += `<p class="pills">${synonymsArray[i]}</p>`;
      }
      synonyms.innerHTML = synonymsData;
    } else {
      synonyms.innerHTML = '<p class="pills">No hay sinonimos disponibles</p>';
    }
  }
};