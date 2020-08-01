import React from 'react';
import { Modal, Input, Rate, DatePicker } from 'antd';
import { FireFilled } from '@ant-design/icons';
import { useRootData } from '../../../hooks/use-root-data';

const { TextArea } = Input;

const NoteModal = ({ visible, title, onCancel, onOk }) => {
  const {
    titleNote,
    setTitle,
    textN,
    setText,
    importance,
    setImportance,
    date,
    setDate,
  } = useRootData((store) => ({
    titleNote: store.mainStore.titleNote,
    setTitle: store.mainStore.setTitle,
    textN: store.mainStore.textN,
    setText: store.mainStore.setText,
    importance: store.mainStore.importance,
    setImportance: store.mainStore.setImportance,
    date: store.mainStore.date,
    setDate: store.mainStore.setDate,
  }));

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeText = (e) => setText(e.target.value);

  const onSubmit = () => {
    onOk(titleNote, textN, importance, date.format('DD.MM.YYYY').toString());
    setTitle('');
    setText('');
    setImportance(0);
    setDate(null);
  };

  const dateFormatList = ['DD.MM.YYYY'];

  const onChangeDatePicker = (date) => {
    setDate(date);
  };

  const onChangeRate = (value) => {
    setImportance(value);
  };

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} onOk={onSubmit}>
      <Input
        className="title"
        value={titleNote}
        placeholder="Title"
        allowClear
        onChange={onChangeTitle}
      />
      <TextArea
        className="text"
        value={textN}
        placeholder="Text"
        allowClear
        onChange={onChangeText}
      />
      <div className="importance-date">
        <div className="importance">
          <p className="paragraph">Importance: </p>
          <Rate
            value={importance}
            character={<FireFilled />}
            onChange={onChangeRate}
          />
        </div>
        <div className="datepicker">
          <p className="paragraph">Date: </p>
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
