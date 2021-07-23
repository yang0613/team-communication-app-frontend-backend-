const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const selectMessages = async (id) => {
  let select = 'SELECT * FROM message WHERE channel_id ~* $1';
  const query = {
    text: select,
    values: [id]
  };
  const {rows} = await pool.query(query);
  let messages = [];
  for(const row of rows) {
    row.message.message_id = row.message_id;
    messages.push(row.message);
  }
  return messages;
}

exports.getAll = async(req, res) => {
  const messages = await selectMessages(req.params.channel);
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

const addMessage = async (message, user, channel) => {
  let id = uuid();
  const newMessage = {
    'name': user.name,
    'time': message.time,
    'message_id': message.message_id,
    'text': message.text,
  }
  const insert1 = 'INSERT INTO message(message_id, channel_id, message) VALUES ($1, $2, $3)';
  const query1 = {
    text: insert1,
    values: [id, channel, newMessage],
  };
  await pool.query(query1);
  return newMessage;
}

exports.post = async(req, res) => {
  const message = await addMessage(req.body, req.user, req.params.channel);
  if(message){
    res.status(201).json(message);
  }
}
