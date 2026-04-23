from flask import Blueprint, request, jsonify

student_bp = Blueprint("students", __name__, url_prefix="/students")

# in-memory data
students = []
next_id = 1

@student_bp.route("/", methods=["GET"])
def get_students():
    return jsonify(students)

@student_bp.route("/<int:student_id>", methods=["GET"])
def get_student(student_id):
    for s in students:
        if s["id"] == student_id:
            return jsonify(s)
    return {"error": "Student not found"}, 404

@student_bp.route("/", methods=["POST"])
def create_student():
    global next_id
    data = request.get_json()
    student = {
        "id": next_id,
        "name": data.get("name"),
        "age": data.get("age"),
        "course": data.get("course"),
    }
    students.append(student)
    next_id += 1
    return jsonify(student), 201

@student_bp.route("/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    for s in students:
        if s["id"] == student_id:
            s["name"] = data.get("name", s["name"])
            s["age"] = data.get("age", s["age"])
            s["course"] = data.get("course", s["course"])
            return jsonify(s)
    return {"error": "Student not found"}, 404

@student_bp.route("/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    for i, s in enumerate(students):
        if s["id"] == student_id:
            deleted = students.pop(i)
            return jsonify(deleted)
    return {"error": "Student not found"}, 404
