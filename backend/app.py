from flask import Flask, request, jsonify, render_template

app = Flask(__name__, template_folder="../frontend", static_folder="../frontend")

@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    # Example macro calculation
    weight = data.get("weight", 0)
    height = data.get("height", 0)
    age = data.get("age", 0)
    activity_level = data.get("activity_level", 1.2)
    
    bmr = 10 * weight + 6.25 * height - 5 * age + 5  # Mifflin-St Jeor Equation (male)
    tdee = bmr * activity_level

    return jsonify({"bmr": bmr, "tdee": tdee})

if __name__ == "__main__":
    app.run(debug=True)

