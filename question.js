const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {

    res.status(200).json({
        operational_code: 1
    })

})

app.post('/bfhl', (req, res) => {
  const inputArray = req.body.data;

  if (!Array.isArray(inputArray)) {
    return res.status(400).json({ 
        is_success: false,
        error: 'Input should be an array.' 
    });
  }

  let user_id = "Amitabh_Mishra_10072002";
  let email = "am2603@srmist.edu.in";
  let roll_number = "RA2011033010072";

  let numbers = [];
  let alphabets = [];
  let highest_alphabet = [];

  for (const item of inputArray) {

    if (/^[0-9]+$/.test(item)) {

      numbers.push(item);

    } else if (/^[A-Za-z]$/.test(item)) {

      alphabets.push(item);

      if (item > highest_alphabet) {

        highest_alphabet.push(item);
        
      }
    }
  }

  const result = {
    is_success: true,
    user_id, 
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
