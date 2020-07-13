import axios from "axios";

const fetchNotes = () =>
  axios({
    method: "get",
    url: "http://localhost:8001/all",
  }).then((res) => {
    console.log(res.data);
    return res.data;
  });

const addNote = (title, textN) =>
  axios({
    method: "post",
    url: "http://localhost:8001/notes/add",
    data: {
      title: title,
      body: textN,
    },
  });

const deleteNote = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8001/notes/delete",
    data: {
      id: id,
    },
  });

const editNote = (id, title, textN) =>
  axios({
    method: "post",
    url: "http://localhost:8001/notes/update",
    data: {
      id: id,
      title: title,
      body: textN,
    },
  });

export { fetchNotes, addNote, deleteNote, editNote };
