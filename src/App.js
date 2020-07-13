import React, { useState, useEffect } from "react";
import { Table, Button, Rate, Checkbox } from "antd";
import { PlusOutlined, EditOutlined, DeleteFilled, FireFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";
import { fetchNotes, addNote, deleteNote, editNote } from "./api";
import NoteModal from "./modal";

const App = () => {
  const [data, setNotes] = useState([]);
  const [showModal, setShowModal] = useState("");
  const [id, setId] = useState("");

  const columns = [
    {
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => (
        <Checkbox />
      )
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width:"20%",
      render: (text) => <b> {text} </b>,
    },
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
      width:"40%",
    },
    {
      title: "Importance",
      dataIndex: "importance",
      key: "importance",
      render: () => (
        <Rate character={<FireFilled />}  />
      )
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: () => (
        <p> Какая-то дата</p>
      )
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      width: "100px",
      render: (text) => (
        <div className="actions">
          <Button
            className="editNote"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => showEditModal(text)}
          />
          <Button
            className="deleteNote"
            type="primary"
            icon={<DeleteFilled />}
            onClick={() => onClickDelete(text)}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () =>
    fetchNotes().then((res) => {
      setNotes(res);
    });

  const onClickAdd = (title, textN) => {
    addNote(title, textN).then(() => {
      getNotes();
    });
    setShowModal("");
  };

  const showEditModal = (text) => {
    setShowModal("edit");
    console.log(text);
    setId(text._id);
  };

  const onClickEdit = (title, textN) => {
    console.log(id);
    editNote(id, title, textN).then(() => {
      getNotes();
    });
    setShowModal("");
  };

  const onClickDelete = (text) => {
    deleteNote(text._id).then(() => {
      getNotes();
    });
  };

  const handleCancel = () => setShowModal("");

  const showAddModal = () => setShowModal("add");

  return (
    <div className="App">
      <header>
      <Button className="note" ghost >
      Notes
      </Button>
      <Button className="archive" ghost>
      Archive
    </Button>
      </header>
      <div className="create">
        <Button
          className="createNote"
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddModal}
        >
          Create
        </Button>
      </div>
      <div className="notes">
        <Table
          rowKey={"_id"}
          pagination={{ pageSize: 5 }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <div>
        <NoteModal
          title={showModal === "add" ? "Add Note" : "Edit Note"}
          visible={showModal}
          onCancel={handleCancel}
          onOk={showModal === "add" ? onClickAdd : onClickEdit}
        />
      </div>
    </div>
  );
};
export default App;
