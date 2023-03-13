import './BizByCategoryCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const BizByCategoryCard = ({ biz }) => {

  return (
    <div className="BizByCategoryCard">
      <NavLink className='biz-img-categorycard' to={`/biz/${biz.biz_id}`}>
      <img className='biz-image-categorycard' src={biz.preview_image} />
      </NavLink>
      <NavLink className='biz-name-categorycard' to={`/biz/${biz.biz_id}`}>
        {biz.name}
      </NavLink>
      <div className='biz-details-category-card'>Description: {biz.description}</div>
      <div className='biz-details-category-card'>Owner Id: {biz.owner_id}</div>
      <div className='biz-details-category-card'>Address: {biz.address}</div>
      <div className='biz-details-category-card'>City: {biz.city}</div>
      <div className='biz-details-category-card'>State: {biz.state}</div>
      <div className='biz-details-category-card'>Country: {biz.country}</div>
      <div className='biz-details-category-card'>Latitude: {biz.lat}</div>
      <div className='biz-details-category-card'>Longitude: {biz.lng}</div>
    </div>
  )
}

export default BizByCategoryCard
