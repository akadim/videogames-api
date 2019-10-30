var express = require('express');
var router = express.Router();

var videogames = [
  {
     id: 1,
     name: 'Uncharted 4',
     platform: 'Playstation 4'
  },
  {
    id: 2,
    name: 'Halo 4',
    platform: 'Xbox One'
 },
 {
  id: 3,
  name: 'Zelda Wind Waker',
  platform: 'Gamecube'
},
{
id: 4,
name: 'Zedla Breath of the Wild',
platform: 'Nintendo Switch'
},
];

/* GET videogames listing. */
router.get('/', function(req, res, next) {
  return res.send(Object.values(videogames));
});

/* GET a specific platform. */
router.get('/:id', function(req, res, next) {
  let id = parseInt(req.params.id);

  videogames.forEach( (videogame) => {
     if(videogame.id === id) {
        return res.end(JSON.stringify(videogame));
     }
 });  
});

/* ADD a platform. */
router.post('/', function(req, res, next) {
  
  videogames.push({
      id: ( (videogames.length === 0) ? 0 : parseInt(videogames[videogames.length-1].id) + 1),
      name: req.body.name,
      platform: req.body.platform
  });

  return res.status(200).send({"message" : "added"});
});

/* UPDATE a platform. */
router.put('/', function(req, res, next) {
  
  videogames = videogames.map( (videogame) => {
     if(videogame.id === parseInt(req.body.id)) {

      videogame.name = req.body.name;
      videogame.platform = req.body.platform;
     }

     return videogame;
  }); 

  return res.status(200).send({"message" : "updated"});
});

/* Delete a videogame */
router.delete('/:id', function(req, res, next) {
  let id = parseInt(req.params.id);

  videogames.forEach( (videogame) => {
      if(videogame.id === id) {
         videogames.splice( videogames.indexOf(videogame), 1);
      }
  });

  res.status(200).send({message: 'deleted'});
});

module.exports = router;
