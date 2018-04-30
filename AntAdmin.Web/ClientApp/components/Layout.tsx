import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Link, NavLink } from 'react-router-dom';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class AppLayout extends React.Component<LayoutProps, {}> {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    public render() {
        return <Layout>
        <Sider
          style={{ background: '#fff' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <span><Icon type="home" /><span className="menuItemText">Home</span></span>
                <NavLink to={ '/' } exact activeClassName='active'></NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <span><Icon type="video-camera" /><span className="menuItemText">Counter</span></span>
              <NavLink to={ '/counter' } activeClassName='active'></NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <span><Icon type="upload" /><span className="menuItemText">Fetch Data</span></span>
              <NavLink to={ '/fetchdata' } activeClassName='active'></NavLink>
            </Menu.Item>
            <Menu.Item key="4">
                <span><Icon type="user" /><span className="menuItemText">Login</span></span>
              <NavLink to={ '/login' } activeClassName='active'></NavLink>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="upload" /><span className="menuItemText">Submenu</span></span>}>
                 <Menu.Item key="1">
                 <NavLink to={ '/' } exact activeClassName='active'>
                <span className='glyphicon glyphicon-home'></span> Home
                </NavLink>
                 </Menu.Item>
                 <Menu.Item key="2">
                 <NavLink to={ '/counter' } activeClassName='active'>
                    <span className='glyphicon glyphicon-education'></span> Counter
                </NavLink>
                 </Menu.Item>
                 <Menu.Item key="3">
                 <NavLink to={ '/fetchdata' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Fetch data
                </NavLink>
                 </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            { this.props.children }
          </Content>
        </Layout>
      </Layout>;


    //     <Layout>
    //     <Header className="header">
    //       <div className="logo" />
    //       <Menu
    //         theme="dark"
    //         mode="horizontal"
    //         defaultSelectedKeys={['2']}
    //         style={{ lineHeight: '64px' }}
    //       >
    //         <Menu.Item key="1">nav 1</Menu.Item>
    //         <Menu.Item key="2">nav 2</Menu.Item>
    //         <Menu.Item key="3">nav 3</Menu.Item>
    //       </Menu>
    //     </Header>
    //     <Layout>
    //       <Sider width={200} style={{ background: '#fff' }}>
    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={['1']}
    //           defaultOpenKeys={['sub1']}
    //           style={{ height: '100%', borderRight: 0 }}
    //         >
    //           <SubMenu key="sub1" title={<span><Icon type="laptop" />subnav 1</span>}>
    //             <Menu.Item key="1">
                
    //             </Menu.Item>
    //             <Menu.Item key="2">
                
    //             </Menu.Item>
    //             <Menu.Item key="3">
              
    //             </Menu.Item>
    //           </SubMenu>
    //         </Menu>
    //       </Sider>
    //       <Layout style={{ padding: '0 24px 24px' }}>
    //         <Breadcrumb style={{ margin: '16px 0' }}>
    //           <Breadcrumb.Item>Home</Breadcrumb.Item>
    //           <Breadcrumb.Item>List</Breadcrumb.Item>
    //           <Breadcrumb.Item>App</Breadcrumb.Item>
    //         </Breadcrumb>
    //         <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
    //             { this.props.children }
    //         </Content>
    //       </Layout>
    //     </Layout>
    //   </Layout>;
    }
}

// import * as React from 'react';
// import { NavMenu } from './NavMenu';

// export interface LayoutProps {
//     children?: React.ReactNode;
// }

// export class Layout extends React.Component<LayoutProps, {}> {
//     public render() {
//         return <div className='container-fluid'>
//             <div className='row'>
//                 <div className='col-sm-3'>
//                     <NavMenu />
//                 </div>
//                 <div className='col-sm-9'>
//                     { this.props.children }
//                 </div>
//             </div>
//         </div>;
//     }
// }


