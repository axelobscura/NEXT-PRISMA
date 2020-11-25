import Head from 'next/head'
import Link from 'next/link'
import Hd from './Hd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const LayoutPage = ({ children, songs, titulo }) => {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <>
            <Head>
                <title>{titulo || ''}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.5/antd.min.css" integrity="sha512-f4gv+zHa7Vs6s7TyEI4R/QWeBUqPXJXFdV5H/3hb3UKPjE0jJ2hVGfFFtD0Wxr6Rw+O49i2C4TBeaoYWRUDCgQ==" crossorigin="anonymous" />
            </Head>
            <Layout style={{ minHeight: '100vh' }}>

                <Hd songs={songs} />
                
                <Content style={{ padding: '0px' }}>
                    <Breadcrumb style={{ padding: '16px 0', background: '#222' }}>
                        <Link href="/"><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 10px', minHeight: '80vh', background: '#333' }}>{children}</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#111' }}>©2020 Created by Axel Obscura Sarzotti.</Footer>
            </Layout>,
            <style jsx global>{`
            body {
                background-color: #000;
            }
            .ant-layout-content, .ant-layout-sider-children {
                background-color: #000;
            }
            `}</style>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.5/antd.min.js" integrity="sha512-BmKh6/zenMwx588NdWFFO2raJQFKpc6DjAInyvTnywji78OCloqhsa/UFKKiXJunhaI1bIrpNBJnEKkEOqedgw==" crossorigin="anonymous"></script>
        </>
    )
};

export default LayoutPage;