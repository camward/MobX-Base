import { Table as TableUser, Typography } from "antd";

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

  const data = [
    {
      key: "1",
      name: "John Brown",
      sp: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      sp: 42,
    },
    {
      key: "3",
      name: "Joe Black",
      sp: 22,
    },
  ];

  return (
    <>
      <TableUser columns={columns} dataSource={data} />
      <Title level={5}>Team SP: 0</Title>
      <Title level={5}>Top Performer: -</Title>
    </>
  );
};

export default Table;
