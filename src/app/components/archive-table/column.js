import { title, importanceNote, dateNote } from '../comm/column-render';

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
];

export default columns;
