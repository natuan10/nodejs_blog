const express = require('express') // lấy từ thư viện express ra
const app = express()
const port = 3001

// định nghĩa tuyến rout
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})