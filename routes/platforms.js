var express = require('express');
var router = express.Router();

var platforms = [
    {
       id: 1,
       name: 'Playstation 4',
       company: 'Sony'
    },
    {
      id: 2,
      name: 'Xbox One',
      company: 'Microsoft'
   },
   {
    id: 3,
    name: 'Nintendo Switch',
    company: 'Nintendo'
 },
 {
  id: 4,
  name: 'Gamecube',
  company: 'Nintendo'
},
];

/* GET platforms listing. */
router.get('/', function(req, res, next) {
   return res.send(Object.values(platforms));
});

/* Delete a platform */
router.delete('/:id', function(req, res, next) {
    let id = parseInt(req.params.id);

    platforms.forEach( (platform) => {
        if(platform.id === id) {
             platforms.splice( platforms.indexOf(platform), 1);
        }
    });

    res.status(200).send({message: 'deleted'});
});

module.exports = router;
