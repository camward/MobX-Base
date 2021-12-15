import { Layout, Typography } from "antd";
import Controls from "./components/controls";
import Table from "./components/table";

const App = () => {
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;

  return (
    <Layout>
      <Header>
        <Text type="success">Sprint Board</Text>
      </Header>
      <Content>
        <Controls />
        <Table />
      </Content>
      <Footer>MobX, &copy; {new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default App;
