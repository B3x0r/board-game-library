const dbCall = require('../util/mongodb');

module.exports.addGame = async ({ game, ageRange, numberPlayers, timeRange, gameType }) => {
	const record = {
		_id: game,
		ageRange,
		numberPlayers,
		timeRange,
		gameType
	};

	try {
		return await dbCall('games', async db => await db.insertOne(record));
	} catch(error) {
		console.log('FAIL models/game.addGame did not insert')
		console.error(error);
		throw { message: 'FAIL models/game.addGame did not insert', error };
	}
}

module.exports.updateGames = async ({ game, ...update}) => {
	try {
		return await dbCall('games', async db => await db.updateOne({ "_id": game}, { $set: update }));
	} catch (error) {
		console.log('FAIL: models/game.updateGame did not update');
		console.error(error)
		throw { message: 'FAIL: models/game.updateGame did not update', error };
	}
}

module.exports.deleteGame = async ({ game }) => {
	//TODO: 
}

module.exports.getLibrary = async ({ library }) => {
	// TODO
}