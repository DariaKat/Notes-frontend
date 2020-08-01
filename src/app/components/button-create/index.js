import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRootData } from '../../../hooks/use-root-data';

const ButtonCreate = () => {
  const { showAddModal } = useRootData((store) => ({
    showAddModal: store.mainStore.showAddModal,
  }));

  return (
    <Button
      className="createNote"
      type="primary"
      icon={<PlusOutlined />}
      onClick={showAddModal}
    >
      Create
    </Button>
  );
};

export default ButtonCreate;
