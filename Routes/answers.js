const express = require('express')
/**
 * Import all controller methods/functions
 */
const { getAllAnswers, getAnswer, updateAnswer, deleteAnswer, createAnswer } = require('../controllers/answers')
const authMid = require('../middleware/auth')

const router = express.Router()

/**
 * initialise express router for /api/answers
 */
router
    .route('/')
    .get(getAllAnswers)
    .post(authMid.authenticate, createAnswer)

/**
 * initialise express router for /api/answers/{id}
 */
router
    .route('/:id')
    .get(getAnswer)
    .put(authMid.authenticate, updateAnswer)
    .delete(authMid.authenticate, deleteAnswer)

module.exports = router
