const app = require('./server')
require('./socket')

app.listen(process.env.PORT || 4000,()=>(console.log("running server")))
