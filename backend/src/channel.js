const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const selectChannels = async (id) => {
  let select = 'SELECT * FROM channel WHERE workspace_id ~* $1';
  const query = {
    text: select,
    values: [id]
  };
  const {rows} = await pool.query(query);
  let channels = [];
  for(const row of rows) {
    row.channel.channel_id = row.channel_id;
    channels.push(row.channel);
  }
  return channels;
}

exports.getAll = async(req, res) => {
  const channels = await selectChannels(req.params.workspace);
  if(channels){
    res.status(200).json(channels);
  }else{
    res.status(404).send();
  }
}