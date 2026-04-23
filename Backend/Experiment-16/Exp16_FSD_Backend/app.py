from flask import Flask, jsonify, request

app = Flask(__name__)

students = []

@app.route('/')
def home():
    return "API Working"

@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    students.append(data)
    return jsonify({"message": "Student added"}), 201

if __name__ == '__main__':
    app.run(debug=True)