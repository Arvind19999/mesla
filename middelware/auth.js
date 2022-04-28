const passport = require('passport')
const Job = require('../models/Job')
const Question = require('../models/Question')
const asyncHandler = require('../middleware/asyncHandler')
const Answer = require('../models/Answer')


const auth = {
    authenticate: passport.authenticate('jwt', { session: false }),
    isAdmin: (req, res, next) => {
        
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: 'Please log In'
            })
        }

        else if (req.user.isAdmin === true) {
            next()

        } else {
            res.status(403).json({
                message: "Unauthorised"
            })
        }
    },
    canModifyJob: asyncHandler(async (req, res, next) => {
        const job = await Job.findById(req.params.id)
        if (!job) {
            return next(new ErrorResponse(`Job not found with id of ${req.params.id}`, 404))

        }
       if(job.user == req.user.id || req.user.isAdmin === true){
           
           next()
           
           console.log(req.user.email);
           
       }else{
        res.status(403).json({
            message: "You don't have permissions to perform this action"
        })
       }
    })
}

module.exports = auth