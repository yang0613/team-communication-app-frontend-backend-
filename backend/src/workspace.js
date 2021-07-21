const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const selectWorkspace = async () => {
  let select = 'SELECT * FROM workspace';
  const {rows} = await pool.query(select);
  let workspaces = [];
  for(const row of rows) {
    workspaces.push(row.workspace);
  }
  return workspaces;
}

const addWorkspace = async (workspace) => {
  const newWorkspace = {
    'name': workspace.name,
  }
  const insert = 'INSERT INTO workspace(workspace_id, workspace) VALUES ($1, $2)';
  const query = {
    text: insert,
    values: [uuid(), newWorkspace],
  };
  
  // await pool.query(query);
  // const insert = 'INSERT INTO users_workspace(users_id, workspace_id) VALUES ($1, $2)';
  // const query = {
  //   text: insert,
  //   values: [uuid(), newWorkspace],
  // };
  await pool.query(query);

  return newWorkspace;
}

const deleteWorkspace = async (workspace) => {
  // const deleted = 'DELETE FROM workspace WHERE workspace->>name = $1';
  // const query = {
  //   text: select,
  //   values: [id]
  // };
  // const { rows } = await pool.query(query);
}

exports.getAll = async(req, res) => {
  const workspaces = await selectWorkspace();
  if(workspaces){
    res.status(200).json(workspaces);
  }else{
    res.status(404).send();
  }
}

exports.post = async(req, res) => {
  const workspace = await addWorkspace(req.body);
  if(workspace){
    res.status(201).json(workspace);
  }
}

exports.delete = async(req, res) => {
  const workspace = await deleteWorkspace(req.query);
  if(workspaces){
    res.status(204).json(workspaces);
  }else{
    res.status(404).send();
  }
}
