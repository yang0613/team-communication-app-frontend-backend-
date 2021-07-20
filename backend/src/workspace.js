const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const selectWorkspace = async (workspace) => {
  let select = 'SELECT workspace FROM workspace';
  if(workspace){
    select += ` WHERE name ~* $1`;
  }
  const query = {
    text: select,
    values: workspace ? [ `${workspace}` ] : [ ],
  };

  const { rows } = await pool.query(query);

}

exports.getAll = async(req, res) => {
  const workspaces = await db.selectWorkspace(req.query.workspace);
  if(workspaces){
    res.status(200).json(workspaces);
  }else{
    res.status(404).send();
  }
}