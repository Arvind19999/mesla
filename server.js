const express = require('express') // Express web  Framework
const dotenv = require('dotenv') // dotenv Environment Variable Loader
const morgan = require('morgan') // Morgan logger Middleware
const colors = require('colors')  // color for the terminal
const path = require('path');

const cors = require('cors')
const passport = require('passport')
const errorHandler = require('./middleware/errorhandler')
const connectDB = require('./config/db') // MongoDB connector

/**
 * load environment variables from config.env file
 */
dotenv.config({
    path: './config/config.env'
})

/**
 * Connect to database
 */
connectDB();

// passport facebook related stuff
const FacebookStrategy = require('passport-facebook').Strategy;
  
passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "471519913858652",
      clientSecret: "8fb12193b074efb20d36fa2e76596367",
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken);
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);


/**
 *  Load Route files
 */
const jobsRoute = require('./routes/jobs') // Job Api Routes
const authRoute = require('./routes/auth') // Auth Api Routes
const quesRoute = require('./routes/questions') // Question Api Routes
const ansRoute = require('./routes/answers');
const { default: axios } = require('axios');



const app = express() // Initialised express 

/**
 * 
 * USE CORS 
 */



// Pass the global passport object into the configuration function
require('./config/passport')(passport);
// added
require('./config/passport-facebook')

// This will initialize the passport object on every request
app.use(passport.initialize());

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
/**
 *  Initialize morgan for development mode
 */

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

/**
 *  Mount Route Files
 */

app.get('/', (req, res) => {
    const pathToKey = path.join(__dirname,  'static/index.html')
    res.sendFile(pathToKey)
})
app.use('/api/jobs', jobsRoute) // Mount jobs api route
app.use('/api/auth', authRoute) // Mount auth api route
app.use('/api/questions', quesRoute) // Mount question api route
app.use('/api/answers', ansRoute) // Mount answer api route


/* khalti api */
app.get('/khalti/:token/:amount/:key', (req, res) => {
    console.log("token", req.params.token)
    console.log("amount", req.params.amount)
    console.log("key", req.params.key)

    let data = {
      "token": req.params.token,
      "amount": req.params.amount
  };

      let config = {
        headers: {'Authorization': `Key ${req.params.key}`}
    };
    axios
        .post(
        "https://khalti.com/api/v2/payment/verify/",
        data,
        config
        )
        .then((response) => {
            res.send({success: true, data: response.data})
        })
        .catch((error) => {
        console.log(error);
        res.send({ success: false, msg: 'Oops Some error Occured'})
        });                                                                                                                                               
})

// github jobs api 
app.get('/githubjobs', (req, res) => {
    axios.get('https://jobs.github.com/positions.json')
        .then(response => {
            res.send(response.data)
        })
        .catch(err => res.json({success: false}))
})


/**
 * Error Handler
 * 
 */
app.use(errorHandler)

/**
 * Listen for requests to the provided port
 * @params PORT ID , callback
 */

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

/**
 * Handle Unhandled Promise Rejections
 */
process.on('unhandledRejection', (err, promise) => {
    /**
     * log error message
     */
    console.log(`Error: ${err.message}`.red);

    /**
     * Close server and exit the process
     */
    server.close(() => {
        process.exit()
    })

})