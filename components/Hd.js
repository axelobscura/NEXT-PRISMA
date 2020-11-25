import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const Hd = ({ songs }) => (
    <div className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ background: '#111'}}>
            <Menu.Item key="1">
                <img src="/public/logo.svg" alt="" title="" style={{ width: '60px' }} />
            </Menu.Item>
            {songs.map((song) => (
                <Menu.Item key={song.id}><Link href={`/songs/${song.id}`}>{song.name}</Link></Menu.Item>
            ))}
        </Menu>
    </div>
);

export default Hd;