const router = require('express').Router()
//const places = require('../models/places.js')

const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})



// GET /places
router.get('/', (req, res) => {

res.send('GET /places stub')

//res.render('places/index', {places})
    
})

//router.post('/', (req, res) => {
  //console.log("req.body",req.body)
 / //   db.Place.create(req.body)
  //  .then()
 //   .catch()
 // })
 // res.send('POST /places stub')

  router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
 //   if (!req.body.pic) {
        // Default image if one is not provided
   //     req.body.pic = 'http://placekitten.com/400/400'
   //   }
   //   if (!req.body.city) {
   //     req.body.city = 'Anytown'
   //   }
   //   if (!req.body.state) {
   //     req.body.state = 'USA'
    //  }
    //  places.push(req.body)
   //   res.redirect('/places')
    
router.get('/new', (req, res) => {
 
res.render('places/new')
//res.render('places/new', { places })
})

router.get('/:id/edit', (req, res) => {
    
  res.send('GET /places/:id stub')

  
  })
  
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.delete('/places/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
  
      })

      router.get('/:id/edit', (req, res) => {
        res.send('GET edit form stub')

   
      })

      router.post('/:id/comment', (req, res) => {
        console.log(req.body)
        db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
            .then(comment => {
                place.comments.push(comment.id)
                place.save()
                .then(() => {
                    res.redirect(`/places/${req.params.id}`)
                })
            })
            .catch(err => {
                res.render('error404')
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })

   
   router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
  })
  
  router.delete('/:id/rant/:rantId', (req, res) => {
      res.send('GET /places/:id/rant/:rantId stub')
  })
  
  module.exports = router
    
     

 // res.render('places/show')






