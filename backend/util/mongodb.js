const MongoClient = require("mongodb").MongoClient

const url = "mongodb+srv://MongoStandalone:RvGfX8jGDVVMY2y8@cluster0.acdj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

mondule.exports = dbCall = async (collection, query) => {
	try {
		await client.connect();
		const db = client.db("board-game-library-DAL");
		const this_collection = db.collection(collection);
		const result = await query(this_collection);
		client.close()
		return result;
	} catch(error) {
		console.log('mongodb client error')
		console.error(error)
		throw { message: 'mongodb client error', error };
	}
}
