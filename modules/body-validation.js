const { body, validationResult } = require('express-validator')

const projectsValidationRules = () => [
  body('name').isString(),
  body('name').notEmpty(),
  body('img').isString(),
  body('img').notEmpty(),
  body('img').isURL(),
  body('urlGitHub').isString(),
  body('urlGitHub').notEmpty(),
  body('urlGitHub').isURL(),
  body('urlDemo').isString(),
  body('urlDemo').notEmpty(),
  body('urlDemo').isURL(),
  body('description').isString(),
  body('description').notEmpty(),
  body('technologies').isString(),
  body('technologies').notEmpty(),
]

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = []
  errors.array().map(err =>
    extractedErrors.push({[err.param]: err.msg})  
  )

  return res.status(422).json({
    errors: extractedErrors
  })
}


module.exports = {
  projectsValidationRules,
  validate
}