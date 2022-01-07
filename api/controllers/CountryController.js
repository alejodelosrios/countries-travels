const { Activity, Country } = require("../db/models");
const axios = require("axios");

// Funcion auxiliar para consultar la bd
async function getDbCountries() {
  let countries = await Country.findAll({
    //attributes: ["id", "name", "flag", "continent"],
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
    },
  });
  return countries;
}

module.exports = {
  index(req, res) {
    // Consulto la BD de paises
    const { name } = req.query;
    let countries = getDbCountries();
    countries.then((response) => {
      // Si hay datos respondo con ellos
      if (response.length > 0) {
        // Si hay query con el nombre del pais quiere decir que el usuario está filtrando
        // Luego realizo el filtro y devuelvo un array del resultado
        if (name) {
          let filteredCountries = response.filter(
            (e) => e.name.toLowerCase().search(name.toLowerCase()) >= 0
          );
          return res.json(filteredCountries);
        } else {
          //De lo contrario entrego todos los paises
          return res.json(response);
        }

        // Caso contrario, hago la petición a la API, los  almaceno en  la  BD y respondo con los datos de la BD
      } else {
        // Hago la petición a la API externa
        axios
          .get("https://restcountries.com/v3.1/all")
          .then((response) => {
            // Declaro una  variable apiCountries para guardar los datos
            let apiCountries = [];

            // Recorro el array de objetos que me trae la petición axios y en cada iteración construyo un objeto
            // con solamente la información necesaria de cada país. Este objeto se agrega al arreglo apiCountries en
            // cada iteración. Al final tengo mi arreglo de paises para guardar en la BD
            response.data.map((country) => {
              let obj = {
                name: country.name.common,
                fifa: country.fifa === undefined ? "Undefined" : country.fifa,
                flag: country.flags.svg,
                continent: country.region,
                // Algunos paises no tiene capital definida
                capital:
                  country.capital === undefined
                    ? "Undefined"
                    : country.capital[0],
                area: country.area,
                population: country.population,
                // Algunos paises no tienen subregion definida
                subregion:
                  country.subregion === undefined
                    ? "Undefined"
                    : country.subregion,
              };

              apiCountries.push(obj);
              //Country.create(obj);
            });

            // Con este método guardo en masa todos los paises en la BD
            Country.bulkCreate(apiCountries);
          })
          // Finalmente utilizo nuevamente  mi función auxiliar para traer los paises de la BD
          // y retornarlos en un json tal como se pide en el readme
          .then(() => {
            let countries = getDbCountries();
            // Si hay query realizo el filtro y devuelvo el resultado
            if (name) {
              let filteredCountries = countries.filter(
                (e) => e.name.toLowerCase().search(name.toLowerCase()) >= 0
              );
              return res.json(filteredCountries);
            } else {
              // De lo contrario respondo con todos los  paises
              return res.json(countries);
            }
          })
          .catch((e) => {
            res.json({ error: e });
          });
      }
    });
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      let country = await Country.findByPk(id, {
        //attributes: ["name", "flag", "continent"],
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
        },
      });
      return res.json(country);
    } catch (e) {
      return res.json({ error: e });
    }
  },
};
