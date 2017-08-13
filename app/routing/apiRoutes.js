//importing data stored in other files for reference
var friends = require("../data/friends");

//ability to utilize express functionality
module.exports = function(app) {

    //get request to pull the data from the imported files
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //checking to see if table is available, if yes adding to table if no adding to waitlist
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body
        var bestFriend = 0;
        function friend(newFriend) {
            
            var userScores = newFriend.scores;

            var differences = [];
            var testScores = [];
            
            for (var i=0; i < friends.length; i++) {
                console.log("working");
                // console.log('friends[i')
                for (var x=0; x < friends[i].scores.length; x++) {
                    var scoreDiff = Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
                    console.log("Score difference for " + x + " :" + scoreDiff);
                    differences.push(scoreDiff);
                };
                console.log(differences);
                testScores.push(getAvg(differences));
                differences = [];
            };
            
            bestFriend = testScores.indexOf(Math.min.apply(null, testScores));
            friends.push(newFriend);
        };

        friend(newFriend);
        res.json(friends[bestFriend]);
        console.log(friends[bestFriend]);
    });
};

function getAvg(differences) {
    return differences.reduce(function (p, c) {
        return p + c;
    }) / differences.length;
};