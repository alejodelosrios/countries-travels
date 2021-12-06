const { Activity } = require("../db/models");
module.exports = {
  async create(req, res) {
    const { name, difficulty, duration, season, countriesId } = req.body;
    let obj = {
      name,
      difficulty,
      duration,
      season,
    };
    try {
      let activity = await Activity.create(obj);
      activity.addCountries(countriesId);
      return res.json({
        message: `La actividad ${activity.name} ha sido creada con éxito`,
      });
    } catch (e) {
      return res.json({ error: e });
    }
  },
};
