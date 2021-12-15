import { Layout, Typography } from "antd";

function App() {
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;

  return (
    <Layout>
      <Header>
        <Text type="success">Sprint Board</Text>
      </Header>
      <Content>Content</Content>
      <Footer>MobX, &copy; {new Date().getFullYear()}</Footer>
    </Layout>
  );
}

export default App;
