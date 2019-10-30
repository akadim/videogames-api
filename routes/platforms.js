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
 {
  id: 5,
  name: 'SEGA Saturn',
  company: 'SEGA'
},
 {
  id: 6,
  name: 'Stadia',
  company: 'Google'
}
];

/* GET platforms listing. */
router.get('/', function(req, res, next) {
   return res.send(Object.values(platforms));
});

/* GET a specific platform. */
router.get('/:id', function(req, res, next) {
   let id = parseInt(req.params.id);

   platforms.forEach( (platform) => {
      if(platform.id === id) {
         return res.end(JSON.stringify(platform));
      }
  });  
});

/* ADD a platform. */
router.post('/', function(req, res, next) {
   
   platforms.push({
       id: ( (platforms.length === 0) ? 0 : parseInt(platforms[platforms.length-1].id) + 1),
       name: req.body.name,
       company: req.body.company
   });

   return res.status(200).send({"message" : "added"});
});

/* UPDATE a platform. */
router.put('/', function(req, res, next) {
   
   platforms = platforms.map( (platform) => {
      if(platform.id === parseInt(req.body.id)) {

         platform.name = req.body.name;
         platform.company = req.body.company;
      }

      return platform;
   }); 

   return res.status(200).send({"message" : "updated"});
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
