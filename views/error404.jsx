const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <h1>Oops, sorry, we can't find this page!</h1>
              <div>
      <img src="/images/anna-bratiychuk-3w2AuRZeeSU-unsplash.jpg" alt="Vanilla Ice Cream " />
      <div>
      Photo by <h4 href="https://unsplash.com/@mafimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Bratiychuk</h4> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
      </div>





          </main>
      </Def>
    )
  }






module.exports = error404