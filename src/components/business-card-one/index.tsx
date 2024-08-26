import { Component } from "react"
import {Button, Ellipsis} from "antd-mobile";
import "./index.scss"

interface DataProps {
    data: any
}

interface ObjectItem {
    backgroundPicture?: string,
    showMark?: string,
    showName: string,
    remark?: string,
    type?: string,
    director: string,
    leadingRole: string
}

interface DataState {
    data: ObjectItem
}

class BusinessCardOne extends Component<DataProps, DataState>{
    constructor (props:DataProps){
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        const item = this.state.data;
        return(
            <div className="movie-card">
                <div className="movie-card__left">
                    <img src={item.backgroundPicture} alt="/"/>
                    <span>{item.showMark || '3D'}</span>
                </div>
                <div className="movie-card__right">
                    <div className="movie-card__title">
                        <Ellipsis direction='end' content={item.showName} />
                    </div>
                    <div className="movie-card__text">
                        <span>评分：</span>
                        <span className="movie-card--yellow">{item.remark}分</span>
                    </div>
                    <div className="movie-card__text">
                        <span>类型：</span>
                        <span>{item.type}</span>
                    </div>
                    <div className="movie-card__text">
                        <span>导演：</span>
                        <span>{item.director}</span>
                    </div>
                    <div className="movie-card__text">
                        <span>主演：</span>
                        <span className="movie-card--ellipsis">
                             <Ellipsis direction='end' content={item.leadingRole} />
                        </span>
                    </div>
                    <Button
                        className="movie-card__button"
                        color='warning'
                        size='small'
                    >
                        特惠购票
                    </Button>
                </div>
            </div>
        )
    }
}

export default BusinessCardOne
