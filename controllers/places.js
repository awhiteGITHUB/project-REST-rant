const router = require('express').Router()
const places = require('../models/places.js')


router.get('/new', (req, res) => {
res.render('places/new', { places })

})

router.post('/', (req, res) => {
    console.log("req.body",req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      places.push(req.body)
      res.redirect('/places')
    })

   





   // res.send('POST /places')
 // })

//const app = express()


 //   res.render('places/new')


 // router.post('/', (req, res) => {
   // console.log(req.body)
  
  






//router.post('/', (req, res) => {
 // console.log("req.body", req.body) 
  // res.send('POST /places')

// GET /places
router.get('/', (req, res) => {
    

res.render('places/index', {places})

})
    router.get('/:id', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
          res.render('error404')
        }
        else if (!places[id]) {
          res.render('error404')
        }
        else {
          res.render('places/show', { places: places[id], id})
        }
      })  

      router.delete('/places/:id', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
          res.render('error404')
        }
        else if (!places[id]) {
          res.render('error404')
        }
        else {
          places.splice(id, 1)
          res.redirect('/places')
        }
      })



  // res.render('places/show')





module.exports = router
