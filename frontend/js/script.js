function calculateMacros() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const activity_level = document.getElementById("activity_level").value;

    const data = { weight, height, age, activity_level };

    fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const results = document.getElementById("results");
        results.innerHTML = `
            <p>BMR: ${data.bmr}</p>
            <p>TDEE: ${data.tdee}</p>
        `;
    })
    .catch(error => console.error("Error:", error));
}
