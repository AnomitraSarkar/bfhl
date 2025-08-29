module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ is_success: false, message: "Method not allowed" });
  }

  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. 'data' should be an array."
      });
    }

    // Custom details
    const full_name = "john_doe"; // lowercase
    const dob = "17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

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

    // Alternating caps reverse
    let concatString = alphabets
      .join("")
      .split("")
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

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
      concat_string: concatString
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: "Internal Server Error"
    });
  }
};
