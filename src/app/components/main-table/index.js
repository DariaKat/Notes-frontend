import React from 'react';
import { Table } from 'antd';
import { useRootData } from '../../../hooks/use-root-data';
import {
  title,
  dateNote,
  importanceNote,
  Buttons,
} from '../comm/column-render';

const Notes = () => {
  const { data } = useRootData((store) => ({
    data: store.mainStore.data,
  }));

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
      render: Buttons,
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
