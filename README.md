# bfhl

tryon:
curl -X POST https://bfhl-eight.vercel.app/bfhl -H "Content-Type: application/json" -d "{\"data\":[\"a\",\"1\",\"334\",\"4\",\"R\",\"$\"]}"

or paste output in data.json at run accordingly using @data.json


---
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d @data.json
```json
{"is_success":true,"user_id":"john_doe_17091999","email":"john@xyz.com","roll_number":"ABCD123","odd_numbers":[],"even_numbers":[],"alphabets":["A","ABCD","DOE"],"special_characters":[],"sum":"0","concat_string":"EoDdCbAa"}
```
---
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d @data.json
```json
{"is_success":true,"user_id":"john_doe_17091999","email":"john@xyz.com","roll_number":"ABCD123","odd_numbers":["1"],"even_numbers":["334","4"],"alphabets":["A","R"],"special_characters":["$"],"sum":"339","concat_string":"Ra"}
```
---
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d @data.json
```json
{"is_success":true,"user_id":"john_doe_17091999","email":"john@xyz.com","roll_number":"ABCD123","odd_numbers":["5"],"even_numbers":["2","4","92"],"alphabets":["A","Y","B"],"special_characters":["&","-","*"],"sum":"103","concat_string":"ByA"}
```

> Anomitra Sarkar