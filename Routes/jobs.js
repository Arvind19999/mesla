const express = require('express')
/**
 * Import all controller methods/functions
 */
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs')
const authMid = require('../middleware/auth')


const router = express.Router()

/**
 * initialise express router for /api/jobs
 */
router
    .route('/')
    .get(getAllJobs)
    .post(authMid.authenticate, createJob)

/**
 * initialise express router for /api/jobs/{id}
 */
router
    .route('/:id')
    .get(getJob)
    .put(authMid.authenticate, authMid.canModifyJob, updateJob)
    .delete(authMid.authenticate, authMid.canModifyJob, deleteJob)

module.exports = router