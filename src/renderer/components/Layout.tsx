import { Layout } from 'antd';
import './index.scss';

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage() {
  return (
    <Layout className="layout-wrapper">
      <Header className="layout-header">Header</Header>
      <Layout className="layout-sider-content">
        <Sider className="layout-sider">Sider</Sider>
        <Content className="layout-content">content</Content>
      </Layout>
      <Footer className="layout-footer">footer</Footer>
    </Layout>
  );
}

export default LayoutPage;
