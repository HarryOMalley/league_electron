let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0
process.env.LEAGUE_API_KEY = "RGAPI-4be0d433-2453-4dad-b9ef-a8f9ce2ff9ba"
process.env.LEAGUE_API_PLATFORM_ID = 'euw1'

const LeagueJs = require('./node_modules/leaguejs/lib/LeagueJS.js');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

leagueJs.Match.gettingTimelineById(3862545589)
	.then(data => {
		'use strict';
		console.log(data);
	})
	.catch(err => {
		'use strict';
		console.log(err);
	});
leagueJs.Match.gettingById(3862545589)
    .then(data => {
        'use strict';
        console.log(data);
    })
leagueJs.Summoner
	.gettingByAccount(22177292, 'euw')
	.then(data => {
		'use strict';
		console.log(data);
	})
	.catch(err => {
		'use strict';
		console.log(err);
	});

$('#analyse').on('click', () => {
    console.log("Clicked");
    let accountName = $('#inputUsername').val()
    leagueJs.Summoner
	.gettingByName(accountName)
	.then(data => {
		'use strict';
        console.log(data);
        leagueJs.Match.gettingListByAccount(data.accountId).then(data =>{
            console.log(data);
        })
	})
	.catch(err => {
		'use strict';
		console.log(err);
    });
    
    console.log(accountName)
})