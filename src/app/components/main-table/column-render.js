import React from 'react';
import { Rate } from 'antd';
import { FireFilled } from '@ant-design/icons';

const title = (text) => <b> {text} </b>;

const importanceNote = (importance) => (
  <Rate character={<FireFilled />} value={importance} />
);

const dateNote = (date) => <p className="paragraph">{date}</p>;

export { title, importanceNote, dateNote };
