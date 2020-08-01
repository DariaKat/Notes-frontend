/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Archive from './components/archive-table';
import NoteModal from './components/modal';
import { useRootData } from '../hooks/use-root-data';
import Notes from './components/main-table';
import ButtonCreate from './components/button-create';

const { TabPane } = Tabs;

const App = () => {
  const {
    showModal,
    getNotes,
    onClickAdd,
    onClickEdit,
    handleCancel,
    time,
    socket,
  } = useRootData((store) => ({
    showModal: store.mainStore.showModal,
    setShowModal: store.mainStore.setShowModal,
    getNotes: store.mainStore.getNotes,
    onClickAdd: store.mainStore.onClickAdd,
    onClickEdit: store.mainStore.onClickEdit,
    handleCancel: store.mainStore.handleCancel,
    time: store.mainStore.time,
    socket: store.mainStore.socket,
  }));

  useEffect(socket, []);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App">
      <Tabs size="large" defaultActiveKey="1" type="card">
        <TabPane className="tab" tab="Notes" key="1">
          <div className="create">
            <ButtonCreate />
          </div>
          <div className="notes">
            <Notes />
            <p className="socket">{time}</p>
          </div>
        </TabPane>
        <TabPane tab="Archive" key="2">
          <div className="notes">
            <Archive />
          </div>
        </TabPane>
      </Tabs>
      <NoteModal
        title={showModal === 'add' ? 'Add Note' : 'Edit Note'}
        visible={showModal}
        onCancel={handleCancel}
        onOk={showModal === 'add' ? onClickAdd : onClickEdit}
      />
    </div>
  );
};
export default App;
