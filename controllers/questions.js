const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')


// const Job = require('../models/Job')
const Question = require('../models/Question')
const controllerMethods = {

    /**
     * @desc Get all Jobs
     * @route GET /api/jobs
     * @access Public
     * 
     */

    getAllQuestions: asyncHandler(async (req, res, next) => {
        const questions = await Question.find()
          .populate({
            path: "user",
            select: "name email _id",
          })
          .populate({
            path: "answers",
            select: "_id upvote downvote description question user",
          });
        
        // for getting the latest question on top of the list
        questions.reverse();
        res.status(200).json({
            count: questions.length,
            success: true,
            data: questions
        })
    }),


    /**
     * @params job Object
     * @desc Create a new job
     * @route POST /api/jobs
     * @access Public
     * 
     */

    createQuestion: asyncHandler(async (req, res, next) => {
        req.body.user = req.user.id
        const question = await Question.create(req.body)

        res.status(201).json({
            success: true,
            data: {
                question,
                user: {
                    questions: req.user.questions,
                    answers: req.user.answers
                }
            }
        })
    }),


    /**
     * @params job id
     * @desc Get Job by id
     * @route GET /api/jobs/:id
     * @access Public
     * 
     */

    getQuestion: asyncHandler(async (req, res, next) => {
        const question = await Question.findById(req.params.id)
            .populate({path: 'answers', select: "upvote description createdAt _id", populate: {path: 'user', select: 'name'}})
            .populate({path: 'user', select: "name createdAt _id"})
        if (!question) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))
        }
        question.answers.reverse()
        res.status(200).json({
            success: true,
            data: question
        })
    }),

    /**
     * @params job id , job object
     * @desc Update Job of id
     * @route PUT /api/jobs/:id
     * @access Publ
     * 
     */

    updateQuestion: asyncHandler(async (req, res, next) => {
        const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!question) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: question
        })
    }),

    /**
     * @params job id
     * @desc Delete Job by id
     * @route DELETE /api/jobs/:id
     * @access Public
     * 
     */

    deleteQuestion: asyncHandler(async (req, res, next) => {

        const question = await Question.findByIdAndDelete(req.params.id)

        if (!question) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: {}
        })

    }),

}

module.exports = { ...controllerMethods }