import React, { useState } from "react";
import { Modal, Input, Rate, DatePicker } from "antd";
import { FireFilled } from "@ant-design/icons";
const { TextArea } = Input;

const NoteModal = ({ visible, title, onCancel, onOk }) => {
  const [title1, setTitle] = useState("");
  const [textN, setText] = useState("");
  const [importance, setImportance] = useState();
  const [date, setDate] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeText = (e) => setText(e.target.value);

  const onChangeDatePicker = (date, dateString) => {
    setDate(dateString);
  };

  const onChangeRate = (value) => {
    setImportance(value);
  }

  const onSubmit = () => {
    onOk(title1, textN, importance, date);
    setTitle("");
    setText("");
    setImportance();
    setDate("");
  };

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} onOk={onSubmit}>
      <Input
        value={title1}
        placeholder="Title"
        allowClear
        onChange={onChangeTitle}
      />
      <TextArea
        value={textN}
        placeholder="Text"
        allowClear
        onChange={onChangeText}
      />
      <div className="importance-date">
        <div className="importance">
          <p>Importance: </p>
          <Rate character={<FireFilled />} onChange={onChangeRate} />
        </div>
        <div className="datepicker">
          <p>Date: </p>
          <DatePicker onChange={onChangeDatePicker} />
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
