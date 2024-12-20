document.getElementById("macro-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const activityLevel = document.getElementById("activity_level").value;

    const data = { weight: parseFloat(weight), height: parseFloat(height), age: parseInt(age), activity_level: parseFloat(activityLevel) };

    const response = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById("result").innerHTML = `<p>BMR: ${result.bmr.toFixed(2)}</p><p>TDEE: ${result.tdee.toFixed(2)}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>Error: ${result.error}</p>`;
    }
});
