import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useRootData } from '../../../hooks/use-root-data';
import columns from './column';

const Archive = () => {
  const { dataArchive, getNotesArchive } = useRootData((store) => ({
    getNotesArchive: store.mainStore.getNotesArchive,
    dataArchive: store.mainStore.dataArchive,
  }));

  useEffect(() => {
    getNotesArchive();
  }, []);

  return (
    <Table
      rowKey="_id"
      pagination={{ pageSize: 5 }}
      columns={columns}
      dataSource={dataArchive}
    />
  );
};

export default Archive;
