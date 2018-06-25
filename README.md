# core API

## Endpoint availables

### Get all registers

GET http://localhost/api/hotels

### Get register by id

GET http://localhost/api/hotels/:id

### Delete a register

DELETE http://localhost/api/hotels/:id

### Create a new register 

POST http://localhost/api/hotels

body:

```json
{
    "id": "249942",
    "name": "Hotel Stefanos",
    "stars": 3,
    "price": 994.18,
    "image": "assets/hotels/4900059_30_b.jpg",
    "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ]
}
```

### Update a register

PUT http://localhost/api/hotels/:id

body:

```json
{
    "id": "249942",
    "name": "Hotel Stefanos Updated",
    "stars": 3,
    "price": 994.18,
    "image": "assets/hotels/4900059_30_b.jpg",
    "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ]
}
```
