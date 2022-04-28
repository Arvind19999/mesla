const express = require('express')
/**
 * Import all controller methods/functions
 */
const { getAllQuestions, getQuestion, updateQuestion, deleteQuestion, createQuestion } = require('../controllers/questions')
const authMid = require('../middleware/auth')

const router = express.Router()

/**
 * initialise express router for /api/questions
 */
router
    .route('/')
    .get(getAllQuestions)
    .post(authMid.authenticate, createQuestion)

/**
 * initialise express router for /api/questions/{id}
 */
router
    .route('/:id')
    .get(getQuestion)
    .put(authMid.authenticate,  updateQuestion)
    .delete(authMid.authenticate, deleteQuestion)

module.exports = router