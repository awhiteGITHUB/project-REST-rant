const React = require('react')
const Def = require('./default')  

function home () {
   
    return (
      <Def>
          <main>
              <h1>HOME</h1>

        <div>
      <img src="/images/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg" alt="Cheese and Black Olive Pizza" />
      <div>
      Photo by <a href="https://unsplash.com/@mafimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Masimo Grabar</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
      </div>





              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>



    )
  }

module.exports = home

