import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { editBiz, getOneBiz } from "../../store/biz";
import { getAllCategory } from "../../store/categories";

const EditBizForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bizId } = useParams();
    const ownerId = useSelector((state) => state.session.user.id)
    const biz = useSelector((state) => state?.bizReducer)
    const categories = useSelector((state) => state.categoryReducer)
    const categoriesArr = categories ? Object.values(categories) : null
    
    const [address, setAddress] = useState(biz.address)
    const [city, setCity] = useState(biz.city)
    const [state, setState] = useState(biz.state)
    const [country, setCountry] = useState(biz.country)
    const [lat, setLat] = useState(biz.lat)
    const [lng, setLng] = useState(biz.lng)
    const [name, setName] = useState(biz.name)
    const [description, setDescription] = useState(biz.description)
    const [previewImage, setPreviewImage] = useState(biz.previewImage)
    const [oldCategory, setoldCategory] = useState(biz.category)
    const [newCategory, setnewCategory] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getOneBiz(bizId))
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            previewImage,
            oldCategory,
            newCategory
        }
        let editedBiz;
        editedBiz = dispatch(editBiz(payload, bizId))
    }
    return (
        <div>
          <form className="edit-form" onSubmit={handleSubmit}>
            <h1 className="update">Update your Business!</h1>
        
            <label>
              Name
              <input
                type="text"
                // value={this?.name}
                defaultValue={biz.name}
                required
                onChange={(e) => setName(e.target.value)}/>
            </label>
    
            <label>
              Address
              <input
                type="text"
                // value={this?.address}
                defaultValue={biz.address}
                required
                onChange={(e) => setAddress(e.target.value)}/>
            </label>
    
            <label>
              City
              <input
                type="text"
                // value={this?.city}
                defaultValue={biz.city}
                required
                onChange={(e) => setCity(e.target.value)}/>
            </label>
    
            <label>
              State
              <input
                type="text"
                // value={this?.state}
                defaultValue={biz.state}
                required
                onChange={(e) => setState(e.target.value)}/>
            </label>
    
            <label>
              Country
              <input
                type="text"
                // value={this?.country}
                defaultValue={biz.country}
                required
                onChange={(e) => setCountry(e.target.value)}/>
            </label>
    
            <label>
              Latitiude
              <input
                type="text"
                // value={this?.lat}
                defaultValue={biz.lat}
                required
                onChange={(e) => setLat(e.target.value)}/>
            </label>
    
            <label>
              Longitude
              <input
                type="text"
                // value={this?.lng}
                defaultValue={biz.lng}
                required
                onChange={(e) => setLng(e.target.value)}/>
            </label>
    
            <label>
              Description
              <input
                type="text"
                // value={this?.description}
                defaultValue={biz.description}
                required
                onChange={(e) => setDescription(e.target.value)}/>
            </label>
    
            <label>
              Preview Image
              <input
                type="text"
                // value={this?.previewImage}
                defaultValue={biz.previewImage}
                required
                onChange={(e) => setPreviewImage(e.target.value)}/>
            </label>
            <label>
              Add Category
            <select
                    value={this?.category}
                    // multiple={true}
                    onChange={(e) => setnewCategory(e.target.value)}
                >
                    <option value={'default'}>Pick your category</option>
                    {categoriesArr?.map((category, i) => (
                        <option value={category.name} key={i}>{category.name}</option>
                    ))}
                </select>

            </label>

            <label>
                Remove Category
                <select
                    // value={biz?.category}
                    defaultValue={biz.category}
                    // multiple={true}
                    onChange={(e) => setoldCategory(e.target.value)}
                >
                    <option value={'default'}>Pick your category</option>
                    {categoriesArr?.map((category, i) => (
                        <option value={category.name} key={i}>{category.name}</option>
                    ))}
                </select>
            </label>
    
            <button className="submitButton" type="submit">
              Update Spot
            </button>
          </form>
        </div>
      );
}

export default EditBizForm