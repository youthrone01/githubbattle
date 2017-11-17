var mongoose = require('mongoose');
var Player = mongoose.model("Player");

module.exports = {
	all: function(req,res){
		Player.find({}).sort({score: 'desc'}).exec(function(err,players){
			if(err){
				console.log(err);
				res.json({err:err});
			}
			// console.log(players);
			res.json(players);
		})
	},
	create: function(req,res){
		Player.findOne({name: req.body.name }, function(err, player){
			if(err){
				console.log("error find");
			}else{
				if(player == null){
					var player = new Player({name: req.body.name, imgurl: req.body.avatar_url, score:(req.body.public_repos + req.body.followers)*12});
					player.save(function(err){
						if(err){
							console.log(err);
							res.json({err:err});
						}
						console.log("good");
						res.json("Success!");
					})
				}else{
					console.log("already have this user!!");
					res.json('already have this user!!');
				}
			}
		})
		
	},
	destroy: function(req,res){
		Player.remove({_id: req.params.id},function(err){
			if(err){
				console.log("Delete Error: ",err);
				res.json({error:err});
			}
			res.redirect(303,'/players');
		})
	}
}
