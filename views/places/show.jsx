const React = require('react')
const Def = require('../default')


function show (data) {
let comments = (
<h2 className="inactive"> 
No Comments yet! 
</h2>
 )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
        return (
            <div className='border'>
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <strong> - {c.content}</strong>
            <h4> Rating: {c.stars}</h4>
            </div>
       )
       })
    }
    return (
        <Def>
          <main>
              <img src={data.place.pic} />
              <h1>{data.place.name}</h1>
              <h3>
                Located {data.place.city}, {data.place.state} and serving{" "}
                {data.place.cuisines}
              </h3>
            <h3>Rating</h3>
            <h3>Not Rated</h3>
            <h3>Description</h3>
            
            <h3>
            {data.place.showEstablished()}
            </h3>
          
            <h4>
                Serving {data.place.cuisines}
            </h4>
            <h1>Show Page</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form>    
            <h3>Comments</h3> 
                {comments}       
            <form action={'/places/${data.places.id}/comment'} method="POST">
            <div className="row">
            <div className="form-group col-sm-12">
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" className="form-control"></textarea>
            </div>
            </div>
            <form action={'/places/${data.places.id}/author'} method="POST"></form>
            <div className="row">
            <div className="form-group col-sm-12">
            <label htmlFor="author">Author</label>
            <input id="author" name="author" className="form-control"/>
            </div>
            </div>
            <div className="row">
            <div className="form-group col-sm-12">
            <label htmlFor="stars">Star Rating</label>
            <input type="range"  id="stars" name="stars" min="1" max="5" />
            </div>
            <div className="row">
            <div className="form-group col-sm-12">
            <label htmlFor="rant">Rant?</label>
            <input type="checkbox" id="rant" name="rant"/>
            </div>
            </div>
            <div className="row">
            <div className="form-group col-sm-20">
            <input type="submit" className="btn btn-primary" value="Add Comment" /> 
            </div>        
             </div>
             </div>
             </form>
            </main>
            </Def>
            );
            }
    
    

module.exports = show;