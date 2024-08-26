import { Swiper } from 'antd-mobile'
import './index.scss'
import { navListItem, swiperListItem} from "../../../apis/home.ts";
import { getRequestData } from "../../../utils/base-hooks.ts";

function HeaderSwiper() {
    const { data: list } = getRequestData<swiperListItem[]>({ url: "/swiper-data"})
    const { data: navList } = getRequestData<navListItem[]>({ url: "/get-nav-list"})

    const items = list?.map((item, index) => (
        <Swiper.Item key={index}>
            <div className="header-content__top">
                {/*<img src={item?.img_url} alt="/"/>*/}
                {/*这里图片用静态代替*/}
                <img src={item.img_url} alt="/"/>
            </div>
        </Swiper.Item>
    ))

    const navItems = navList?.map((item, index) => (
        <div className='nav-tabs__item' key={index}>
            <img src={item?.imgUrl} alt="/"/>
            <div>{item.name}</div>
        </div>
    ))

    return (
        <div className="header-content">
            <Swiper autoplay loop={true}>
                {items}
            </Swiper>

            <div className="nav-tabs">
                {navItems}
            </div>
        </div>
    )
}

export default HeaderSwiper;
