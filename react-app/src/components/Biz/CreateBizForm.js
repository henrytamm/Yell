import { createBiz, getBizes } from "../../store/biz";
import { getAllCategory } from "../../store/categories";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import "./BizForm.css"

const CreateBizForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const ownerId = useSelector((state) => state.session.user.id)
    const categories = useSelector((state) => state.categoryReducer)
    const categoriesArr = categories ? Object.values(categories) : null

    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
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
            "preview_image": previewImage,
            category
        };

        dispatch(createBiz(payload))
            .then(async (data) => {
                if (data.ok===false) {
                    const dataErr = await data.json()
                    setErrors(dataErr.errors)
                } else {
                    window.alert(`Business successfully created!`)
                    return history.push(`/biz/${data.id}/hours/new`)
                }
            })
    }

    return (
        <>
            <div>
                <form method="POST" onSubmit={handleSubmit} className='create-biz-form-container'>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label className='create-biz-label'>Name:
                        <input
                            type="text"
                            placeholder="Business Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>Address:
                        <input
                            type="text"
                            placeholder="Address"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>City:
                        <input
                            type="text"
                            placeholder="City"
                            required
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>State:
                        <input
                            type="text"
                            placeholder="State"
                            required
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>Country:
                        <input
                            type="text"
                            placeholder="Country"
                            required
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>Latitude:
                        <input
                            type="number"
                            step='0.00001'
                            placeholder="Latitude"
                            required
                            onChange={(e) => setLat(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>Longitude:
                        <input
                            type="number"
                            step='0.00001'
                            placeholder="Longitude"
                            required
                            onChange={(e) => setLng(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>Description:
                        <textarea
                            type="text"
                            placeholder="Description"
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                    <label className='create-biz-label'>Image Url:
                        <input
                            type="url"
                            placeholder="Preview Image URL"
                            required
                            onChange={(e) => setPreviewImage(e.target.value)}
                        />
                    </label>
                    <label className='create-biz-label'>
                        Category:
                        <select
                            value={category}
                            // multiple={true}
                            required
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value=''>Pick your category</option>
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
