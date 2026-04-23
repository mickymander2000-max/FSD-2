# Experiment 9:-Implement authentication using JWT
This project is a Flask-based backend that demonstrates multiple authentication mechanisms and how to protect API routes using them. It is deployed on Render and tested using Postman.
---
## What we have done
- Calling `GET /basic-protected` using **Basic Auth** in Postman with username `john` and password `john123`, and receiving `Basic Auth Success. Welcome john!`.

![alt text](<Screenshot 2026-02-27 103933.png>)
- Sending a `POST /token-login` request with the same admin credentials and receiving a custom token value (e.g. `YWRtaW4=`) in the `token` field.

![alt text](<Screenshot 2026-02-27 104353.png>)
- Calling `GET /token-protected` while passing the custom token in the `x-auth-token` header and receiving `Token Auth Success. Welcome admin!`.

![alt text](<Screenshot 2026-02-27 104703.png>)
- Sending a `POST /jwt-login` request with JSON body `{ "username": "admin", "password": "admin123" }` and receiving a JWT `access_token` in the response.

![alt text](<Screenshot 2026-02-27 104818.png>)
- Using Postman **Bearer Token** auth to call `GET /jwt-protected` with the received JWT and getting the message: `JWT Auth Success. Welcome admin!`.

![alt text](<Screenshot 2026-02-27 104917.png>)
---
## 🎯 Learning Outcomes
- Implement HTTP Basic Authentication in a Flask API and verify credentials using the `Authorization` header.
- Build a custom token-based authentication flow using a login endpoint that returns a token and a protected route that validates this token from a custom request header.
- Use JSON Web Tokens (JWT) with `flask-jwt-extended` to create access tokens and protect routes with decorators like `@jwt_required()`.
- Configure and use different authorization mechanisms in Postman (Basic Auth, Bearer Token, and custom header) to test secured API endpoints.
- Deploy a Flask authentication API to a cloud platform (Render) and test the same authentication flows in a production-like environment.
