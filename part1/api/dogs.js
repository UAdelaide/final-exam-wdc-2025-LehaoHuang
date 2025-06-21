app.get('/api/dogs', async(req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT Dogs.dog_name, Dogs.size, Owners.username AS owner_username' +
            'FROM Dogs INNER JOIN Users AS Owners ON Dogs.onwer_id = Owner.user_id'
            
            );
            res.json(result);
    } catch (err){
        res.json({error:'Not able to access dogs'});
    }
});
