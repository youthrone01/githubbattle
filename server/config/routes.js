var players = require('../controllers/players.js');
var path = require('path');

module.exports = function(app){
	app.get('/players', (req,res)=>{players.all(req,res)})
	app.post('/players', (req,res,next)=>{players.create(req,res)})
	app.put('/players/:playerid/:game', (req,res,next)=>{players.update(req,res)})
	app.delete('/players/:id',(req,res,next)=>{players.destroy(req,res)})

	app.all("*",function(req,res){
		res.sendFile('index.html', { root: './public/dist' });
	})
}