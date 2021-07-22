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

const selectWorkspace = async (id) => {
  let select = 'SELECT * FROM workspace WHERE users_id ~* $1';
  const query = {
    text: select,
    values: [id]
  };
  const {rows} = await pool.query(query);
  let workspaces = [];
  for(const row of rows) {
    row.workspace.workspace_id = row.workspace_id;
    workspaces.push(row.workspace);
  }
  return workspaces;
}

exports.getAll = async(req, res) => {
  const {id} = req.user;
  const workspaces = await selectWorkspace(id);
  if(workspaces){
    res.status(200).json(workspaces);
  }else{
    res.status(404).send();
  }
}

// const addWorkspace = async (workspace) => {
//   let id = uuid();
//   const newWorkspace = {
//     'name': workspace.name,
//   }
//   const insert1 = 'INSERT INTO workspace(workspace_id, workspace) VALUES ($1, $2)';
//   const query1 = {
//     text: insert1,
//     values: [id, newWorkspace],
//   };

//   await pool.query(query1);
//   const insert2 = 'INSERT INTO users_workspace(users_id, workspace_id) VALUES ($1, $2)';
//   const query2 = {
//     text: insert2,
//     values: [, id],
//   };
//   await pool.query(query2);

//   return newWorkspace;
// }

// exports.post = async(req, res) => {
//   const workspace = await addWorkspace(req.body);
//   if(workspace){
//     res.status(201).json(workspace);
//   }
// }

