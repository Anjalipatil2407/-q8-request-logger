# Q8 - Request Logger Using Express Middleware

This project logs every API request to `logs.json` using custom Express middleware.

## Folder Structure

```text
q8-request-logger/
├── index.js
├── logs.json
├── package.json
├── README.md
├── .gitignore
├── middleware/
│   └── requestLogger.js
└── screenshots/
```

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

or:

```bash
npm start
```

Server runs on port `5000`.

## Endpoints

- `GET /products`
- `GET /orders`
- `GET /customers`
- `GET /logs`

The first three endpoints are logged. `GET /logs` is not logged.

## Testing

Open:

```text
http://localhost:5000/products
http://localhost:5000/orders
http://localhost:5000/customers
http://localhost:5000/logs
```

Check that `logs.json` keeps old entries after restarting the server.

## Screenshots

Add screenshots of successful `/products`, `/orders`, `/customers`, and `/logs` responses inside the `screenshots/` folder before submission.
