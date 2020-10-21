const { body, validationResult } = require('express-validator')

const projectsValidationRules = () => [
  body('name').isString(),
  body('name').notEmpty(),
  body('img').isString(),
  body('img').notEmpty(),
  body('urlGitHub').isString(),
  body('urlGitHub').notEmpty(),
  body('urlDemo').isString(),
  body('urlDemo').notEmpty(),
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

  console.error('Error succes send data')
  
  return res.status(422).json({
    error: true,
    errors: extractedErrors
  })
}

module.exports = {
  projectsValidationRules,
  validate
}