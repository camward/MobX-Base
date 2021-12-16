import { Table as TableUser, Typography } from "antd";
import store from "../store";

const Table = () => {
  const { Title } = Typography;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Story Points",
      dataIndex: "sp",
      key: "sp",
      sorter: (a, b) => a.sp - b.sp,
      showSorterTooltip: false,
    },
  ];

  const data = store.users.devsList.map((dev) => ({
    key: dev.id,
    name: dev.name,
    sp: dev.sp,
  }));

  return (
    <>
      <TableUser columns={columns} dataSource={data} />
      <Title level={5}>Team SP: {store.users.totalSum}</Title>
      <Title level={5}>Top Performer: {store.users.topPerformer?.name}</Title>
    </>
  );
};

export default Table;
