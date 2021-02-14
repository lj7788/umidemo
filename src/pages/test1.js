import { useState, useEffect, useRef } from 'react';
import { Table } from 'antd';
import { request } from 'umi';
import { Get, Mounted, UnMounted } from '@/utils/MyTools';

export default (props) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const loadData = (p) => {
    if (p) setPage(p);
    else p = 1;
    Get('/api/v1/user/list?page=' + p).then((d) => {
      setList(d.list);
      setPage(d.page);
      setTotal(d.total);
    });
  };
  UnMounted(() => {
    console.log('--unmounted--');
  });
  Mounted(() => {
    console.log('--->mounted<----');
    loadData();
  });
  const cols = [
    {
      title: '编号',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ];
  const mounting = useRef(true);
  useEffect(() => {
    console.log(JSON.stringify(mounting));
    if (mounting.current) {
      console.log('初次');
      mounting.current = false;
      return;
    }
    console.log('DidUpdated');
  }, []);

  return (
    <div>
      this is test1
      <Table
        columns={cols}
        dataSource={list}
        rowKey="id"
        pagination={{ defaultCurrent: page, total: total }}
        onChange={(d) => {
          loadData(d.current);
        }}
      ></Table>
    </div>
  );
};
