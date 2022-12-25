

function testGS(){
const url3 = "https://script.google.com/macros/s/AKfycbwLxQ8TBS6scExVwTnpDeX-ELoJ8Q7-LJwiCUNcFxFQrdH1omtAd4bnXtHVYUDIJR_u/exec"
const url1 = "https://script.google.com/macros/s/AKfycbwLxQ8TBS6scExVwTnpDeX-ELoJ8Q7-LJwiCUNcFxFQrdH1omtAd4bnXtHVYUDIJR_u/exec"
const url = "https://script.google.com/macros/s/AKfycbz9RR6GrhDIf2Wb5-AlWGxhTuGZ476j5YguhHVGNOc/dev";

fetch(url3)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}


document.getElementById("btn").addEventListener("click", testGS);