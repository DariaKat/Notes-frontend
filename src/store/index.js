/* eslint-disable no-console */
import SockJS from 'sockjs-client';
import {
  fetchArchiveNotes,
  fetchNotes,
  addNote,
  deleteNote,
  editNote,
  addArchiveNote,
} from '../api';

export const createStore = () => {
  const store = {
    showModal: '',
    setShowModal(value) {
      this.showModal = value;
    },
    id: '',
    setId(value) {
      this.id = value;
    },
    data: [],
    setNotes(value) {
      this.data = value;
    },
    titleNote: '',
    setTitle(value) {
      this.titleNote = value;
    },
    textN: '',
    setText(value) {
      this.textN = value;
    },
    importance: 0,
    setImportance(value) {
      this.importance = value;
    },
    date: null,
    setDate(value) {
      this.date = value;
    },
    dataArchive: [],
    setNotesArchive(value) {
      this.dataArchive = value;
    },
    getNotes() {
      fetchNotes()
        .then((res) => {
          this.setNotes(res);
        })
        .catch((error) => console.log('error', error));
    },
    getNotesArchive() {
      fetchArchiveNotes()
        .then((res) => {
          this.setNotesArchive(res);
        })
        .catch((error) => console.log('error', error));
    },
    onClickAdd(title, textN, importance, date) {
      addNote(title, textN, importance, date)
        .then(() => this.getNotes())
        .catch((error) => console.log('error', error));
      this.setShowModal('');
    },
    onClickDelete(_id) {
      deleteNote(_id)
        .then(() => this.getNotes())
        .catch((error) => console.log('error', error));
    },
    onClickArchiveAdd({ _id, title, text, importance, date }) {
      addArchiveNote(title, text, importance, date)
        .then(() => this.getNotesArchive())
        .catch((error) => console.log('error', error));
      this.onClickDelete(_id);
    },
    showEditModal({ _id }) {
      this.setShowModal('edit');
      this.setId(_id);
    },
    onClickEdit(title, textN, importance, date) {
      editNote(this.id, title, textN, importance, date)
        .then(() => this.getNotes())
        .catch((error) => console.log('error', error));
      this.setShowModal('');
    },
    handleCancel() {
      this.setShowModal('');
    },
    showAddModal() {
      this.setShowModal('add');
    },
    time: '',
    setTime(value) {
      this.time = value;
    },
    sock: new SockJS('http://localhost:8001/echo'),
    socket() {
      this.sock.onopen = () => {
        console.log('open');
        this.sock.send('test');
      };

      this.sock.onmessage = (e) => {
        this.setTime(e.data);
        console.log('message', e.data);
      };

      this.sock.onclose = () => {
        console.log('close');
      };
    },
    isSiderCollapsed: false,
    siderCollapseTrigger() {
      this.isSiderCollapsed = !this.isSiderCollapsed;
    },
  };

  return store;
};
