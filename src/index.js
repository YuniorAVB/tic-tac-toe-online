const app = require('./server')
require('./socket')

app.listen(4000,()=>(console.log("running server")))