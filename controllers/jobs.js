const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')

const Job = require('../models/Job')

const controllerMethods = {

    /**
     * @desc Get all Jobs
     * @route GET /api/jobs
     * @access Public
     * 
     */

    getAllJobs: asyncHandler(async (req, res, next) => {
        const jobs = await Job.find().populate({
            path : 'user',
            select : 'name email _id',
            
        })
        res.status(200).json({
            count: jobs.length,
            success: true,
            data: jobs
        })
    }),

    /**
     * @params job Object
     * @desc Create a new job
     * @route POST /api/jobs
     * @access Public
     * 
     */

    createJob: asyncHandler(async (req, res, next) => {
        req.body.user = req.user.id
        const job = await Job.create(req.body)

        res.status(201).json({
            success: true,
            data: job
        })

    }),


    /**
     * @params job id
     * @desc Get Job by id
     * @route GET /api/jobs/:id
     * @access Public
     * 
     */

    getJob: asyncHandler(async (req, res, next) => {

        const job = await Job.findById(req.params.id)
        if (!job) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))

        }
        res.status(200).json({
            success: true,
            data: job
        })

    }),








    /**
     * @params job id , job object
     * @desc Update Job of id
     * @route PUT /api/jobs/:id
     * @access Publ
     * 
     */

    updateJob: asyncHandler(async (req, res, next) => {


        const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if (!job) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: job
        })


    }),







    /**
     * @params job id
     * @desc Delete Job by id
     * @route DELETE /api/jobs/:id
     * @access Public
     * 
     */

    deleteJob: asyncHandler(async (req, res, next) => {

        const job = await Job.findByIdAndDelete(req.params.id)

        if (!job) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: {}
        })

    }),

}

module.exports = { ...controllerMethods }