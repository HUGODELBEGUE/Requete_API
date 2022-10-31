const url = 'https://emojihub.herokuapp.com/api/random';
const container = document.querySelector('#emoji');

fetch (url, {
    name: "hugging face",
    category: "smileys and people",
    group: "face positive",
    htmlCode: [
      "&#129303;"
    ],
    unicode: [
      "U+1F917"
    ]
  }).then((response) => {
    if (response.ok){
        return response.json();
    }
    throw new Error('Request failed!');
  }, (networkError) => {
    console.log(networkError.message);
  }).then((jsonResponse) => {
    const obj = Object.values(jsonResponse);
    console.log(obj);
    container.innerHTML = `<span>${obj[3][0]}</span>`;
  })
