import { Table as TableUser, Spin, Badge, Card } from "antd";
import { observer } from "mobx-react-lite";
import store from "../store";

const Table = observer(() => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, data) => (
        <a onClick={() => store.users.fetchUserData(data.key)}>{text}</a>
      ),
    },
    {
      title: "Story Points",
      dataIndex: "sp",
      key: "sp",
      sorter: (a, b) => a.sp - b.sp,
      showSorterTooltip: false,
    },
  ];

  const data = store.users.filteredDevelopers.map((dev) => ({
    key: dev.id,
    name: dev.name,
    sp: dev.sp,
  }));

  return (
    <>
      <TableUser columns={columns} dataSource={data} size="small" />
      {!!store.users.filteredDevelopers.length && (
        <>
          <Badge.Ribbon text="Statistic" color="purple">
            <Card size="small">
              Team SP: <b>{store.users.totalSum}</b>. Top Performer:{" "}
              <b>{store.users.topPerformer?.name}</b>
            </Card>
          </Badge.Ribbon>
          <br />
          <div className="loader-container">
            {store.common.loading && (
              <div className="loader">
                <Spin />
              </div>
            )}
            {store.users.userData?.name && (
              <Badge.Ribbon text="User Info" color="green">
                <Card title={store.users.userData?.name} size="small">
                  <p>Email: {store.users.userData?.email || "-"}</p>
                  <p>Phone: {store.users.userData?.phone || "-"}</p>
                </Card>
              </Badge.Ribbon>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default Table;
