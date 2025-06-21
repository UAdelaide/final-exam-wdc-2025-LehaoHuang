app.get('/api/walkrequests/open', async (req, res) =>{
    try {
        const [openRequests] = await pool.query(
            'SELECT R.request_id, D.dog_name, R.requested_time, R.duration_minutes, R.location,' +
            'O.username AS owner_username' + 
            'FROM WalkRequests R' +
            'JOIN Dogs D ON R.dog_id = D.dog.id' +
            'JOIN Users O ON D.owner_id = O.user_id' +
            "WHERE R.status = 'open"
        );
        res.json(openRequests);
    } catch(err){
        res.json({error:'Can not fetch the open walk requests'});
    }
});