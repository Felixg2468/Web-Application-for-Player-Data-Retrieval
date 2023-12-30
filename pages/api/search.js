const mysql = require("mysql")
const dbpassword = process.env['PASSWORD']
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: "elms",
  password: dbpassword,
});
conn.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${conn.config.database}!`);
});

export default async function handler(req, res) { 
const sql = 'SELECT * FROM playersfelix WHERE Name = ?';
const name = req.body.Name;
conn.query(sql, [name], function (err, result) {
  if (err)   console.log(err);
  else {
    console.log(result);                              // returns JSON!
    return res.status(200).json(result);
  }
});
}
