let form = document.getElementById("myForm");

const formSubmit = (e) => {
    e.preventDefault();
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    let result = document.getElementById("output");
    result.innerHTML = `<h1>${firstName} </h1> \n <h2> ${lastName} </h2>`;
    document.getElementById("myForm").reset();
};

form.addEventListener("submit", formSubmit);
