module.exports = {
	name: 'test',
	description: 'Test to integrate spreadsheet api with discord.js',





	execute(message, args) {
		const { GoogleSpreadsheet } = require('../node_modules/google-spreadsheet');
		const creds = require('../client_secret.json');

		// spreadsheet key is the long id in the sheets URL
		const doc = new GoogleSpreadsheet('1kU4AhgzqQWYGxvbK8Fj4wA6eSO_IWcBZJYcTVcEUhEY');

		async function accessSpreadsheet() {
		  await doc.useServiceAccountAuth({
		    client_email: creds.client_email,
		    private_key: creds.private_key,
		  });

		  await doc.loadInfo(); // loads document properties and worksheets
		  console.log(doc.title);


		  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
		  const rows = await sheet.getRows();
		  const c6 = sheet.getCellByA1

		  console.log(sheet.title);
		  console.log(sheet.rowCount);

		  await sheet.loadCells('A1:F31'); // loads a range of cells
		  console.log(sheet.cellStats); // total cells, loaded, how many non-empty
		  const a1 = sheet.getCell(1, 0); // access cells using a zero-based index
		  console.log(sheet.getCell(1, 0).value);
		  for(let i = 0; i < rows.length; i++){
		    let currentCell = sheet.getCell(i,0)
		    if(currentCell.value == args[0]){
		      message.channel.send(sheet.getCell(i,1).value);
		    }
		      }

		}

		accessSpreadsheet();



		message.channel.send('Pong.');

	},
};


// accesssSpreadsheet();
