import axios from 'axios';

const fetchNotes = () =>
  axios({
    method: 'get',
    url: 'http://localhost:8001/all',
  }).then((res) => {
    console.log(res.data);
    return res.data;
  });

const addNote = (title, textN, importance, date) =>
  axios({
    method: 'post',
    url: 'http://localhost:8001/notes/add',
    data: {
      title,
      body: textN,
      importance,
      date,
    },
  });

const deleteNote = (id) =>
  axios({
    method: 'post',
    url: 'http://localhost:8001/notes/delete',
    data: {
      id,
    },
  });

const editNote = (id, title, textN, importance, date) =>
  axios({
    method: 'post',
    url: 'http://localhost:8001/notes/update',
    data: {
      id,
      title,
      body: textN,
      importance,
      date,
    },
  });

const fetchArchiveNotes = () =>
  axios({
    method: 'get',
    url: 'http://localhost:8001/archive/all',
  }).then((res) => {
    console.log(res.data);
    return res.data;
  });

const addArchiveNote = (title, text, importance, date) =>
  axios({
    method: 'post',
    url: 'http://localhost:8001/archive/add',
    data: {
      title,
      text,
      importance,
      date,
    },
  });

export {
  fetchNotes,
  addNote,
  deleteNote,
  editNote,
  fetchArchiveNotes,
  addArchiveNote,
};
