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

   // let id = Number(req.params.id)
  //  if (isNaN(id)) {
  //      res.render('error404')
  //  }
  //  else if (!places[id]) {
  //      res.render('error404')
   // }
  //  else {
   //   res.render('places/edit', { place: places[id] })
   // }
  })
  
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



 // router.put('/:id', (req, res) => {

  //  res.send('PUT /places/:id stub')

   // console.log("req.body",req.body)
  //  let id = Number(req.params.id)
  //  if (isNaN(id)) {
  //      res.render('error404')
   // }
   // else if (!places[id]) {
   //     res.render('error404')
   // }
  //  else {
        
  // Dig into req.body and make sure data is valid
 // if (!req.body.pic) {
    // Default image if one is not provided
 //   req.body.pic = 'http://placekitten.com/400/400'
//}
//if (!req.body.city) {
//    req.body.city = 'Anytown'
//}
//if (!req.body.state) {
 //   req.body.state = 'USA'
//}

// Save the new data into places[id]
//places[id] = req.body
//res.redirect(`/places/${id}`)


 


router.delete('/places/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
       // let id = Number(req.params.id)
      //  if (isNaN(id)) {
     //     res.render('error404')
     //   }
     //   else if (!places[id]) {
     //     res.render('error404')
     //   }
     //   else {
     //     places.splice(id, 1)
     //     res.redirect('/places')
     //   }
      })

      router.get('/:id/edit', (req, res) => {
        res.send('GET edit form stub')

        //let id = Number(req.params.id)
      //  if (isNaN(id)) {
      //      res.render('error404')
       // }
       // else if (!places[id]) {
       //     res.render('error404')
      //  }
       // else {
       //   res.render('places/edit', { place: places[id] })
       // }
      })

     // router.put('/:id', (req, res) => {
   //     console.log("req.body",req.body)
    //    let id = Number(req.params.id)
    //    if (isNaN(id)) {
    //        res.render('error404')
    //    }
    //    else if (!places[id]) {
     //       res.render('error404')
     //   }
    //    else {
            
      // Dig into req.body and make sure data is valid
     // if (!req.body.pic) {
        // Default image if one is not provided
      //  req.body.pic = 'http://placekitten.com/400/400'
    //}
   // if (!req.body.city) {
   //     req.body.city = 'Anytown'
   // }
    //if (!req.body.state) {
   //     req.body.state = 'USA'
  //  }

    // Save the new data into places[id]
   // places[id] = req.body
   // res.redirect(`/places/${id}`)
   router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
  })
  
  router.delete('/:id/rant/:rantId', (req, res) => {
      res.send('GET /places/:id/rant/:rantId stub')
  })
  
  module.exports = router
    
     

 // res.render('places/show')





module.exports = router
