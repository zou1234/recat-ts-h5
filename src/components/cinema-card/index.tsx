import {Component, memo} from "react"
import {Ellipsis} from "antd-mobile";
import "./index.scss"

interface DataProps {
    data: any
}

interface ObjectItem {
    name: string,
    price?: string,
    priceMuch: string,
    address?: string,
    distance?: string
}

interface DataState {
    data: ObjectItem
}
const CinemaCard = memo(
     class CinemaCard extends Component<DataProps, DataState>{
        constructor (props:DataProps){
            super(props);
            this.state = {
                data: props.data
            }
        }

        render() {
            const item = this.state.data;
            return(
                <div className="cinema-card">
                    <div className="cinema-card__info">
                    <span className="cinema-card__name">
                        <Ellipsis direction='end' content={item.name} />
                    </span>
                        <span className="cinema-card__price">￥{item.price}</span>
                        <span className="cinema-card__sheng">省</span>
                        <span className="cinema-card__shengPrice">
                        <span>{item.priceMuch}</span>
                        元起
                    </span>
                    </div>
                    <div className="cinema-card__address">
                        <Ellipsis direction='end' content={item.address!} />
                        <span className="cinema-card__distance">{item.distance}km</span>
                    </div>
                </div>
            )
        }
    }
)



export default CinemaCard
