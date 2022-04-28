const mongoose = require('mongoose') //mongoose ODM

/**
 * Declare the Job Schema
 */

const JobSchema = new mongoose.Schema({

    /**
     *  Job title  String , required ,length 5-50
     */
    title: {

        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    /**
    *  Job description String , required ,length 5-255
    */
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    /**
     * User who created job
     */
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Not Authorised']
    },
    /**
     * Job Categories : String , required
     */
    categories: {
        type: [String],
        required: true
    },
    /**
     * budget number , required
     */
    budget: {
        type: Number,
        required: true
    },
    /**
     * time ,String , required
     */
    time: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Job', JobSchema)
