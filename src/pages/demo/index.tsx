import { Tabs } from 'antd-mobile'
import { useTabs } from "./useTabs.ts";
import HomeItem from "./home-item";
import "./index.css"

const Home = ()=>{
    const { list } = useTabs()
    return (
        <div>
            <Tabs defaultActiveKey='0'>
                {list?.map((item, key) =>
                    <Tabs.Tab
                        title={item.name}
                        key={item.id}
                    >
                        <HomeItem channelId={key+""}/>
                    </Tabs.Tab>
                )}
            </Tabs>
        </div>
    )
}

export default Home