const axios = require("axios");

exports.allData = async function allDataAxios(req, res) {
  const { q } = req.query;

  const response = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?q=" + q
  );
  let free_shipping = JSON.parse(JSON.stringify(response.data.filters));
  console.log(free_shipping[0].values);

  let dataAllData = {
    author: {
      name: "Jhonatan",
      lastname: "Argoty",
    },
    categories: [],
    items: [
      {
        id: String,
        title: String,
        price: {
          currency: String,
          amount: Number,
          decimals: Number,
        },
        picture: String,
        condition: String,
        free_shipping: Boolean,
      },
    ],
  };
  res.json(dataAllData);
  return res.status(200).send({});
};
