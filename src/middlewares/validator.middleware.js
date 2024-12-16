export const validateSchema = (schema) => (req, res, next) => {
  try {
    const data = req.body;
    schema.parse(data);
    next();
  } catch (err) {
    res.status(400).json({ errors: err.errors.map((error) => error.message) });
  }
};
