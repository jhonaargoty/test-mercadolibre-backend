const axios = require("axios");

exports.itemMLibre = async function itemDataAxios(req, res) {
  const { id } = req.params;

  const response = await axios.get("https://api.mercadolibre.com/items/" + id);
  const responseDescr = await axios.get(
    "https://api.mercadolibre.com/items/" + id + "/description"
  );

  let free_shipping = JSON.parse(JSON.stringify(response.data.shipping));
  let dataItem = {
    author: {
      name: "Jhonatan",
      lastname: "Argoty",
    },
    item: {
      id: response.data.id,
      title: response.data.title,
      price: {
        currency: response.data.currency_id,
        amount: response.data.amount,
        decimals: "OJO",
      },
      picture: response.data.thumbnail,
      condition: response.data.condition,
      free_shipping: free_shipping.free_shipping,
      sold_quantity: response.data.sold_quantity,
      description: responseDescr.data.plain_text,
    },
  };
  res.json(dataItem);
  return res.status(200).send({});
};
