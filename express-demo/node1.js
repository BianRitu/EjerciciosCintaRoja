const express = require('express');
const app = express();

app.get('/',(request, response) => {
    response.send("Hello");
});

app.listen(3000, () => console.log('Listening on port 3000'));
app.post();
app.put();
app.delete();


