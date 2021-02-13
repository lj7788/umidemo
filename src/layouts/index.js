import { Layout, Menu } from 'antd';
import { history } from 'umi';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const menus = [
  { name: '首页', path: '/' },
  { name: '测试1', path: '/test1' },
  { name: '测试2', path: '/test2' },
  { name: '测试3', path: '/test3' },
  { name: '测试4', path: '/test4' },
];
export default (props) => {
  let cur = props.location.pathname;
  const subMenu = menus.map((it) => {
    return <Menu.Item key={it.path}>{it.name}</Menu.Item>;
  });
  return (
    <Layout>
      <Header>
        <Menu
          defaultSelectedKeys={[cur]}
          onClick={(a) => history.push(a.key)}
          mode="horizontal"
          theme="dark"
        >
          {subMenu}
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      <Footer>&copy;Copyright 2021</Footer>
    </Layout>
  );
};
