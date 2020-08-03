import React from 'react';
import { Table, Button } from 'antd';
import { EditOutlined, DeleteFilled, RocketOutlined } from '@ant-design/icons';
import { useRootData } from '../../../hooks/use-root-data';
import { title, dateNote, importanceNote } from './column-render';

const Notes = () => {
  const { data, onClickDelete, onClickArchiveAdd, showEditModal } = useRootData(
    (store) => ({
      data: store.mainStore.data,
      onClickDelete: store.mainStore.onClickDelete,
      onClickArchiveAdd: store.mainStore.onClickArchiveAdd,
      showEditModal: store.mainStore.showEditModal,
    })
  );

  const button = (text) => (
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

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '20%',
      render: title,
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
      width: '40%',
    },
    {
      title: 'Importance',
      dataIndex: 'importance',
      key: 'importance',
      render: importanceNote,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: dateNote,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '10%',
      render: button,
    },
  ];

  return (
    <Table
      className="table"
      rowKey="_id"
      pagination={{ pageSize: 5 }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Notes;
