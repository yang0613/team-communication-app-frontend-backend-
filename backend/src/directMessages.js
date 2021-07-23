const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const selectMessages = async (id) => {
  // to_user_id because we want all the messages that were sent to that person
  let select = 'SELECT * FROM directmessage WHERE to_user_id ~* $1';
  const query = {
    text: select,
    values: [id]
  };
  const {rows} = await pool.query(query);
  let messages = [];
  for(const row of rows) {
    row.directmessage.directmessage_id = row.directmessage_id;
    messages.push(row.directmessage);
  }
  return messages;
}

exports.getAll = async(req, res) => {
  // Not sure if 'user' is right
  const messages = await selectMessages(req.params.user);
  if(messages){
    res.status(200).json(messages);
  }else{
    res.status(404).send();
  }
}

// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const addMessage = async (message, user) => {
  let id = uuid();
  const newMessage = {
    'name': user.name,
    'status': 'online', // online if youre sending a message
    'time': message.time,
    'directmessage_id': message.directmessage_id,
    'message': message.message,
  }
  const insert1 = 'INSERT INTO directmessage(directmessage_id, from_user_id, to_user_id, directmessage) VALUES ($1, $2, $3, $4)';
  const query1 = {
    text: insert1,
    values: [id, message.userID, user.id, newMessage],
  };
  await pool.query(query1);
  return newMessage;
}

  exports.post = async(req, res) => {
    const message = await addMessage(req.body, req.user);
    if(message){
      res.status(201).json(message);
    }
  }
