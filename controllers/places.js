const router = require('express').Router()
//const app = express()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.post('/', (req, res) => {
  console.log(req.body) 
   res.send('POST /places')

// GET /places
//app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/momos-g359cd1dc9_640.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-g42a6a7348_640.jpg'
        
      }]


      res.render('places/index', { places })

      

})
  
module.exports = router