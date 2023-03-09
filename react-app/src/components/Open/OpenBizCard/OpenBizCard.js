import './OpenBizCard.css'
import { NavLink } from 'react-router-dom';

const OpenBizCard = ({ biz }) => {

    return (
        <div className="OpenBizCard">
            <img src={biz.preview_image} />
            <NavLink className='biz-name' to={`/biz/${biz.biz_id}`}>
                {biz.name}
            </NavLink>
            <div>Description: {biz.description}</div>
            <div>Owner Id: {biz.owner_id}</div>
            <div>Address: {biz.address}</div>
            <div>City: {biz.city}</div>
            <div>State: {biz.state}</div>
            <div>Country: {biz.country}</div>
            <div>Latitude: {biz.lat}</div>
            <div>Longitude: {biz.lng}</div>
        </div>
    )
}

export default OpenBizCard
