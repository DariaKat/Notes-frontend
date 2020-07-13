import React, { useState } from "react";
import { Modal, Input, Rate, DatePicker } from "antd";
import { FireFilled } from "@ant-design/icons";
const { TextArea } = Input;

const NoteModal = ({ visible, title, onCancel, onOk }) => {
  const [title1, setTitle] = useState("");
  const [textN, setText] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeText = (e) => setText(e.target.value);

  const onSubmit = () => {
    onOk(title1, textN);
    setTitle("");
    setText("");
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  console.log(visible, title);
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
          <p>Importance:</p>
          <Rate character={<FireFilled />} />
        </div>
        <div className="datepicker">
          <p>Date:qw</p>
          <DatePicker onChange={onChange} />
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
