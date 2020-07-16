import React, { useState } from 'react';
import { Modal, Input, Rate, DatePicker } from 'antd';
import { FireFilled } from '@ant-design/icons';

const { TextArea } = Input;

const NoteModal = ({ visible, title, onCancel, onOk }) => {
  const [titleNode, setTitle] = useState('');
  const [textN, setText] = useState('');
  const [importance, setImportance] = useState(0);
  const [date, setDate] = useState(null);

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeText = (e) => setText(e.target.value);

  const onChangeDatePicker = (date) => {
    setDate(date);
  };

  const onChangeRate = (value) => {
    setImportance(value);
  };

  const onSubmit = () => {
    onOk(titleNode, textN, importance, date.format('DD.MM.YYYY').toString());
    setTitle('');
    setText('');
    setImportance(0);
    setDate(null);
  };

  const dateFormatList = ['DD.MM.YYYY'];

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} onOk={onSubmit}>
      <Input
        value={titleNode}
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
          <Rate
            value={importance}
            character={<FireFilled />}
            onChange={onChangeRate}
          />
        </div>
        <div className="datepicker">
          <p>Date: </p>
          <DatePicker
            value={date}
            onChange={onChangeDatePicker}
            format={dateFormatList}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
