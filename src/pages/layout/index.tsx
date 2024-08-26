import {
    Outlet,
    useNavigate
} from "react-router-dom";
import { Badge,TabBar } from 'antd-mobile'
import { AppOutline, UnorderedListOutline, UserOutline} from 'antd-mobile-icons'
import "./index.scss"

function Layout() {
    const navigate = useNavigate();
    const tabs = [
        {
            key: '/',
            title: '电影',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: '/movie',
            title: '影院',
            icon: <UnorderedListOutline />,
            badge: '5',
        },
        {
            key: '/my',
            title: '我的',
            icon: <UserOutline />,
        }
    ]

  return (
      <div className="layout">
          <Outlet/>
          <TabBar
              className="layout-tabBar"
              defaultActiveKey='/'
              onChange={ value => navigate(value) }
          >
              {tabs.map(item => (
                  <TabBar.Item
                      key={item.key}
                      icon={item.icon}
                      title={item.title}
                  />
              ))}
          </TabBar>
      </div>
  )
}

export default Layout;
