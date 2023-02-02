const axios = require("axios");
const {Type} = require('../db')




const getType = (  ) => {
  const resultType = Type.findAll().then((result) => {
    if (!result.length) {
      return resltApi = axios
        .get("https://pokeapi.co/api/v2/type")
        .then((data) => {
          Type.bulkCreate(data.data.results);
          return Type.findAll().then((result) => {
            return result;
          });
        });
    } else {
      return result;
    }
  });

  console.log(resultType);
  return resultType
};

// typeRoute.get("/", (req, res) => {
//     Type.findAll().then((result) => {
//       if (!result.length) {
//         axios.get("https://pokeapi.co/api/v2/type").then((data) => {

//           Type.bulkCreate(data.data.results);
//           Type.findAll().then((result) => {
//             console.log(result, "---asd");
//             res.json(result);
//           });
//         });
//       } else
//         Type.findAll().then((result) => {
//           console.log(result, "---asd");
//           res.json(result);
//         });
//     });
//   });

module.exports = {
  getType,
};
