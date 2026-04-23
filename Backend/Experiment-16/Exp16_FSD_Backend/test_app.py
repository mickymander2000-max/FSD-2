import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    return app.test_client()

def test_home(client):
    response = client.get('/')
    assert response.status_code == 200

def test_get_students(client):
    response = client.get('/students')
    assert response.status_code == 200

def test_add_student(client):
    response = client.post('/students', json={
        "name": "Taranpreet Singh",
        "age": 21
    })
    assert response.status_code == 201