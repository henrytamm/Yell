import { createBiz, getBizes } from "../../store/biz";
import { getAllCategory } from "../../store/categories";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

const CreateBizForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const ownerId = useSelector((state) => state.session.user.id)
    const categories = useSelector((state) => state.categoryReducer)
    const categoriesArr = categories ? Object.values(categories) : null
    console.log('cat array', categoriesArr)
    
    
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [category, setCategory] = useState('default')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ownerId,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            previewImage,
            category,
        };
        let newBiz;
        newBiz = dispatch(createBiz(payload))
        history.push(`/`)
    }

    return (
        <>
        <div>
            <form method="POST" onSubmit={handleSubmit}>
            <label>
            <input
            type="text"
            placeholder="Business Name"
            required
            onChange={(e) => setName(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="City"
            required
            onChange={(e) => setCity(e.target.value)} 
            />
             <label>
            <input
            type="text"
            placeholder="State"
            required
            onChange={(e) => setState(e.target.value)} 
            />
            </label>
            </label>
            <label>
            <input
            type="text"
            placeholder="Country"
            required
            onChange={(e) => setCountry(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="Latitude"
            required
            onChange={(e) => setLat(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="Longitude"
            required
            onChange={(e) => setLng(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="Description"
            required
            onChange={(e) => setDescription(e.target.value)} 
            />
            </label>
            <label>
            <input
            type="text"
            placeholder="Preview Image URL"
            required
            onChange={(e) => setPreviewImage(e.target.value)} 
            />
            </label>
            <label>
                Category
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value={'default'}>Pick your category</option>
                    {categoriesArr?.map((category, i) => (
                        <option value={category.name} key={i}>{category.name}</option>
                    ))}
                </select>
            </label>
            <button type="submit">Create new Business</button>
            </form>
        </div>
        </>
    )
}
export default CreateBizForm