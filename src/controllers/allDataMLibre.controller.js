const axios = require("axios");

exports.allData = async function allDataAxios(req, res) {
  const { q } = req.query;

  const response = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?q=" + q
  );
  let allDataSearch = JSON.parse(JSON.stringify(response.data));

  var itemsData = [];
  var itemsCategories = [];

  for (
    var i = 0;
    i < allDataSearch.filters[0].values[0].path_from_root.length;
    i++
  ) {
    var obj = allDataSearch.filters[0].values[0].path_from_root[i];
    itemsCategories.push(obj.name);
  }
  for (let i = 0; i <= 3; i++) {
    itemsData.push({
      id: allDataSearch.results[i].id,
      title: allDataSearch.results[i].title,
      price: {
        currency: allDataSearch.results[i].currency_id,
        amount: allDataSearch.results[i].price,
        decimals: 0,
      },
      picture: allDataSearch.results[i].thumbnail,
      condition: allDataSearch.results[i].condition,
      free_shipping: allDataSearch.results[i].shipping.free_shipping,
      address: allDataSearch.results[i].address.city_name,
    });
  }

  let dataAllData = {
    author: {
      name: "Jhonatan",
      lastname: "Argoty",
    },
    categories: itemsCategories,
    items: itemsData,
  };
  res.json(dataAllData);
  return res.status(200).send({});
};
