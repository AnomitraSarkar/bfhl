const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

function alternatingCapsReverse(str) {
  let reversed = str.split("").reverse();
  return reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. 'data' should be an array.",
      });
    }

    const full_name = "anomitra_sarkar"; 
    const dob = "24102004";
    const email = "anomitra.sarkar2022@vitstudent.ac.in";
    const roll_number = "22bce1382";

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach((item) => {
      if (/^-?\d+$/.test(item)) {
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    let concatString = "";
    if (alphabets.length === 2) {
      concatString =
        alphabets[1].charAt(0).toUpperCase() +
        alphabets[0].charAt(0).toLowerCase();
    } else if (alphabets.length === 3) {
      const first = alphabets[0];
      const middle = alphabets[1];
      const last = alphabets[2];
      const midChar = middle.charAt(Math.floor(middle.length / 2));
      concatString =
        last.charAt(0).toUpperCase() +
        midChar.toLowerCase() +
        first.charAt(0).toUpperCase();
    } else {
      concatString = alternatingCapsReverse(
        alphabets.join("").toLowerCase()
      );
    }

    return res.status(200).json({
      is_success: true,
      user_id: `${full_name}_${dob}`,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: concatString,
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
