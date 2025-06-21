const { error } = require("console");

app.get('/api/walkers/summary', async(req, res) =>{
    try {
        const[summary] = await pool.query(
            'SELECT Walkers.username AS walker_username,' +
            'COUNT(R.rating) AS total_ratings,' +
            'AVG(R.rating) AS average_rating,' +
            "SUM(CASE WHEN WR.status = 'completed') AS completed_walks" +
            'FROM Users AS Walkers' +
            'LEFT JOIN WalkRatings AS R ON Walkers.user_id = R.walker_id' +
            'LEFT JOIN WalkRequests AS WR ON Walkers.user_id = WR.walker_id' +
            "WHERE Walkers.role = 'walker'" +
            'GROUP BY Walkers.username'
        );
        res.json(summary);
    } catch(err){
        res.json({error:'Not able to access walker summary'})
    }
});