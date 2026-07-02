const validateJob = (req, res, next) => {
  const { title, tradeSkill, location, description, vacancies } = req.body;
  const errors = [];

  if (!title || title.trim().length < 3) errors.push('Job title is required');
  if (!tradeSkill || tradeSkill.trim().length < 2) errors.push('Trade skill is required');
  if (!location || location.trim().length < 2) errors.push('Location is required');
  if (!description || description.trim().length < 10) errors.push('Description is required');
  if (vacancies !== undefined && Number(vacancies) < 1) errors.push('Vacancies must be at least 1');

  if (errors.length) {
    return res.status(400).json({ success: false, message: errors[0], errors });
  }

  next();
};

module.exports = { validateJob };
