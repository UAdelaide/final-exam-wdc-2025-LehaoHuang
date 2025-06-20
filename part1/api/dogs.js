app.get('/api/dogs', async(req, res) => {
    try {
        const [rows] = await pool.query('
            SELECT d.dog_name, d.size, u.username AS owner_username
            FROM Dogs d
            JOIN Users u ON d.owner_id = u.user_id
            ');
            res.json(rows);
    } catch (err){
        res.status(500).json({error:'Failed to fetch dogs'});
    }
});
