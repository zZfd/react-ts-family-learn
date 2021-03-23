import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Switch, Route, Link, RouteComponentProps } from 'react-router-dom'

import './index.scss'
import Lodash from '@/view/Lodash/Lodash'
import List from '@/view/List/List'
import SvgIcon from '@/componets/svgIcon'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
type propObject = {
  match: {
    url: string;
  };
};
type siderObject = {
  path: string;
  title: string;
  icon: string;
  children?: siderObject[];
  exact?: boolean;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};
const siderConfig = [
  {
    path: '/lodash1',
    title: 'lodash1',
    icon: 'apply',
    children: [
      {
        path: '/lodash2',
        exact: true,
        title: 'lodash2',
        icon: 'card',
        children: [
          {
            path: '/lodash',
            exact: true,
            title: 'Lodash',
            component: Lodash,
            icon: 'card'
          }
        ]
      }
    ]
  },
  {
    path: '/list',
    exact: true,
    title: 'List',
    component: List,
    icon: 'card'
  }
]
export function noop () {
  return (
    <React.Fragment></React.Fragment>
  )
}
// 递归生成路由
function RecursiveRoute (v: siderObject, url: string): JSX.Element | null {
  if (Array.isArray(v.children)) {
    return (
      <Route path={url + v.path} component={v.component || noop}>
        {v.children.map((child) => RecursiveRoute(child, url + v.path))}
      </Route>
    )
    // return v.component
    //   ? (
    //   <Route path={url + v.path} component={v.component}>
    //     {v.children.map((child) => RecursiveRoute(child, url + v.path))}
    //   </Route>
    //     )
    //   : (
    //   <React.Fragment>
    //     {v.children.map((child) => RecursiveRoute(child, url + v.path))}
    //   </React.Fragment>
    //     )
  } else {
    console.log('route\n', url + v.path)
    return v.component
      ? (
      <Route path={url + v.path} component={v.component} />
        )
      : null
  }
}
// 递归生成Sider
function RecursiveSider (v: siderObject, url: string): JSX.Element {
  console.log('sider\n', url + v.path)

  return Array.isArray(v.children)
    ? (
    <SubMenu key={v.path} icon={<SvgIcon iconClass={v.icon} />} title={v.title}>
      {v.children.map((child) => RecursiveSider(child, url + v.path))}
    </SubMenu>
      )
    : (

    <Menu.Item key={v.path} icon={<SvgIcon iconClass={v.icon} />}>
      <Link to={url + v.path}>{url + v.path}</Link>
    </Menu.Item>
      )
}

export default function LayoutContainer (props: propObject): JSX.Element {
  const url = props.match.url
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['/layout/list']} mode="inline">
          {siderConfig.map((v) => RecursiveSider(v, url))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>{siderConfig.map((v) => RecursiveRoute(v, url))}</Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
