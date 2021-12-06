const { Activity, Country } = require("../db/models");
module.exports = {
  async index(req, res) {
    try {
      let countries = await Country.findAll({
        attributes: ["name", "flag", "continent"],
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
        },
      });
      return res.json(countries);
    } catch (e) {
      return res.json({ error: e });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      let country = await Country.findByPk(id, {
        attributes: ["name", "flag", "continent"],
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
