const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const utils = require('../utils/jwt')
const User = require('../models/User');


const controllerMethods = {


    /**
     * @desc Register user
     * @route POSt /api/v1/auth/register
     * @access Public
     * 
     */
    register: asyncHandler(async (req, res, next) => {

        const saltHash = utils.genPassword(req.body.password);

        const salt = saltHash.salt;
        const hash = saltHash.hash;

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            hash: hash,
            salt: salt,
            answers: req.body.answers,
            questions: req.body.questions
        });
        if (req.body.isAdmin) {
            newUser.isAdmin = req.body.isAdmin
        }

        const user = await newUser.save()

        const id = user.id
        const tokenObject = utils.issueJWT(user)

        res.json({ success: true, user: user, token: tokenObject.token, expiresIn: tokenObject.expires });
    }),

    login: asyncHandler(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(401).json({ success: false, msg: "could not find user" });
        }

        // Function defined at bottom of app.js
        const isValid = utils.validPassword(req.body.password, user.hash, user.salt);

        if (isValid) {

            const tokenObject = utils.issueJWT(user);

            res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });

        } else {

            res.status(401).json({ success: false, msg: "You entered the wrong password" });

        }
    }),
    dummy: asyncHandler(async (req, res, next) => {
        console.log(req.user);
        res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" });

    }),
    updateUser: asyncHandler(async (req, res, next) => {
        // console.log(req.params.id)

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        // console.log(user);

        if (!user) {
            return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404))
        }

        res.status(200).json({
            success: true,
            data: user  
        })
    }),
    getUser: asyncHandler(async (req, res, next ) => {
        // console.log(req.user);
        const user = await User.findById(req.user._id)
            .populate({path: 'questions', select: 'upvote title description tags _id createdAt'})
            .populate({path: 'answers', select: 'upvote description _id createdAt', populate: ({path: 'question', select: '_id'})});

        if (!user) {
            return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: user
        })
    })
}

module.exports = { ...controllerMethods }