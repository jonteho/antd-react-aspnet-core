
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>;
    }
}




// import * as React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// export class NavMenu extends React.Component<{}, {}> {
//     public render() {
//         return <div className='main-nav'>
//                 <div className='navbar navbar-inverse'>
//                 <div className='navbar-header'>
//                     <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
//                         <span className='sr-only'>Toggle navigation</span>
//                         <span className='icon-bar'></span>
//                         <span className='icon-bar'></span>
//                         <span className='icon-bar'></span>
//                     </button>
//                     <Link className='navbar-brand' to={ '/' }>AntAdmin.Web</Link>
//                 </div>
//                 <div className='clearfix'></div>
//                 <div className='navbar-collapse collapse'>
//                     <ul className='nav navbar-nav'>
//                         <li>
//                             <NavLink to={ '/' } exact activeClassName='active'>
//                                 <span className='glyphicon glyphicon-home'></span> Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={ '/counter' } activeClassName='active'>
//                                 <span className='glyphicon glyphicon-education'></span> Counter
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={ '/fetchdata' } activeClassName='active'>
//                                 <span className='glyphicon glyphicon-th-list'></span> Fetch data
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>;
//     }
// }
