let $ = require('jquery')  // jQuery now loaded and assigned to $
var Chart = require('chart.js');

process.env.LEAGUE_API_KEY = "RGAPI-4be0d433-2453-4dad-b9ef-a8f9ce2ff9ba"
process.env.LEAGUE_API_PLATFORM_ID = 'euw1'

const LeagueJs = require('./node_modules/leaguejs/lib/LeagueJS.js');
const leagueJs = new LeagueJs(process.env.LEAGUE_API_KEY);

leagueJs.Match.gettingTimelineById(3862545589)
	.then(data => {
        'use strict';
        console.log(data)
        var frameArray = data.frames
        
        var goldArray = new Array(10)
        var totalArray = new Array(10)
        for (var i = 1; i <= 10; i++)
        {
            let count = 0
            totalArray[i] = new Array();
            frameArray.forEach(function(element){
                let gold = element.participantFrames[i].currentGold
                let totalGold = element.participantFrames[i].totalGold
                console.log("Gold at minute " + count + ": " + gold)
                count++
                goldArray.push(gold)
                totalArray[i].push(totalGold)
            })
            console.log(goldArray);
            var ctx = $("#goldChart");
            // Create labels
        }
        let labelArray = new Array()
        for (var i = 1; i <= totalArray[1].length; i++)
        {
            labelArray.push(i)
        }
        var goldChart = new Chart(ctx, {
            type: 'line',
            data: {
                    labels: labelArray,
                     datasets: [
                    //    { 
                    //     data: goldArray,
                    //     label: "Current Gold",
                    //     borderColor: "#3e95cd",
                    //     fill: false
                    // },
                    {
                      data: totalArray[0],
                      label: "Total Gold",
                      borderColor: "#3cba9f",
                      fill: false
                    },
                    {
                        data: totalArray[1],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[2],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[3],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[4],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[5],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[6],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[7],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[8],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: totalArray[9],
                        label: "Total Gold",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                ],
            options: {
              title: {
                display: true,
                text: 'Gold throughout the game'
              },
            },
        },
    })
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