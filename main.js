const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');
const searchButton = document.querySelector('#searchData');
const searchInput = document.querySelector('input');
const searchResDiv = document.querySelector('#getresults');
const showSearch = document.querySelector(".container2");
const showRandomBtn = document.querySelector(".container1")
const ulList = document.querySelector("#results-list")

showSearch.style.display = 'none'
showRandomBtn.style.display = 'none'

function showInput() {
    if (showSearch.style.display = "none") {

        showSearch.style.display = "block";
        showRandomBtn.style.display = "none"
        resDiv.innerHTML = '';
    } else {
        showSearch.style.display = 'none'

    }
}

function showRandom() {

    if (showRandomBtn.style.display = "none") {

        showRandomBtn.style.display = "block";
        showSearch.style.display = "none"
        searchInput.value = '';
        ulList.innerHTML = '';
    } else {
        showRandomBtn.style.display = 'none'
    }

}



function getAdvice() {

    fetch('	https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
    }).catch(error => {
        console.log(error);
    });

}

function searchAdvice(query) {
    ulList.innerHTML = '';
    query = searchInput.value;
    const url = `https://api.adviceslip.com/advice/search/${query}`
    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            const results = jsonData.slips;
            //console.log(results)     
            console.log(jsonData)

            showResults(results)
        })

}

function showResults(results) {
    const list = document.querySelector("#results-list");
    for (let i = 0; i < results.length; i++) {
        const element = document.createElement("li");
        element.innerHTML = results[i].advice;
        list.appendChild(element);
    }
}




