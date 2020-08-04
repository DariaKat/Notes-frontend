import React from 'react';
import { Rate, Button } from 'antd';
import {
  FireFilled,
  EditOutlined,
  DeleteFilled,
  RocketOutlined,
} from '@ant-design/icons';
import { useRootData } from '../../../hooks/use-root-data';

const title = (text) => <b> {text} </b>;

const importanceNote = (importance) => (
  <Rate character={<FireFilled />} value={importance} />
);

const dateNote = (date) => <p className="paragraph">{date}</p>;

const Buttons = (text) => {
  const { onClickDelete, onClickArchiveAdd, showEditModal } = useRootData(
    (store) => ({
      onClickDelete: store.mainStore.onClickDelete,
      onClickArchiveAdd: store.mainStore.onClickArchiveAdd,
      showEditModal: store.mainStore.showEditModal,
    })
  );

  return (
    <div className="actions">
      <Button
        type="primary"
        icon={<EditOutlined />}
        onClick={() => showEditModal(text)}
      />
      <Button
        type="primary"
        icon={<DeleteFilled />}
        onClick={() => onClickDelete(text._id)}
      />
      <Button
        type="primary"
        icon={<RocketOutlined />}
        onClick={() => onClickArchiveAdd(text)}
      />
    </div>
  );
};

export { title, importanceNote, dateNote, Buttons };
