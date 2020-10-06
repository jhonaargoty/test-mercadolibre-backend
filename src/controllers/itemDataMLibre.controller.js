const axios = require("axios");

exports.itemMLibre = async function itemDataAxios(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(
      "https://api.mercadolibre.com/items/" + id
    );
    const responseDescr = await axios.get(
      "https://api.mercadolibre.com/items/" + id + "/description"
    );

    let free_shipping = JSON.parse(JSON.stringify(response.data.shipping));
    let pictureA = response.data.thumbnail.replace("/D_", "/D_NQ_NP_");
    let picture = pictureA.replace("-I.jpg", "-O.jpg");

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
          amount: response.data.price,
          decimals: "OJO",
        },
        picture: picture,
        condition: response.data.condition,
        sold_quantity: response.data.sold_quantity,
        free_shipping: free_shipping.free_shipping,
        sold_quantity: response.data.sold_quantity,
        description: responseDescr.data.plain_text,
      },
    };
    res.json(dataItem);
    return res.status(200).send({});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Error in the search" });
  }
};
