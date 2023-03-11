import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { editBiz, getOneBiz } from "../../store/biz";
import { getAllCategory } from "../../store/categories";
import { NavLink } from "react-router-dom";
import "./BizForm.css"

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
  const [oldCategory, setoldCategory] = useState("")
  const [newCategory, setnewCategory] = useState('')
  const [bizCategories, setBizCategories] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    dispatch(getAllCategory())
    dispatch(getOneBiz(bizId))
      .then((bizRes) => {
        setIsLoaded(true)
        if (bizRes) {
          setName(bizRes.name)
          setState(bizRes.state)
          setAddress(bizRes.address)
          setCity(bizRes.city)
          setCountry(bizRes.country)
          setDescription(bizRes.description)
          setLat(bizRes.lat)
          setLng(bizRes.lng)
          setBizCategories(Object.values(bizRes.categoryObj))
          setPreviewImage(bizRes.previewImage)
        }
      })
  }, [dispatch])

  if (isLoaded && !biz.id) {
    return <Redirect to='/' />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      'id': bizId,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      "preview_image": previewImage,
      oldCategory,
      newCategory
    }

    dispatch(editBiz(payload, bizId))
      .then(async (data) => {
        if (data.ok) {
          window.alert(`Business successfully edited!`)
          return history.push(`/biz/${bizId}`)
        } else {
          const dataErr = await data.json()
          setErrors(dataErr.errors)
        }
      })
  }
  return (
    <div>
      <form className="create-biz-form-container" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h1 className="update">Update your Business!</h1>
        <label className='create-biz-label'>
          Name
          <input
            type="text"
            // value={this?.name}
            defaultValue={name}
            required
            onChange={(e) => setName(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Address
          <input
            type="text"
            // value={this?.address}
            defaultValue={address}
            required
            onChange={(e) => setAddress(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          City
          <input
            type="text"
            // value={this?.city}
            defaultValue={city}
            required
            onChange={(e) => setCity(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          State
          <input
            type="text"
            // value={this?.state}
            defaultValue={state}
            required
            onChange={(e) => setState(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Country
          <input
            type="text"
            // value={this?.country}
            defaultValue={country}
            required
            onChange={(e) => setCountry(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Latitude
          <input
            type="number"
            step='0.00001'
            // value={this?.lat}
            defaultValue={lat}
            required
            onChange={(e) => setLat(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Longitude
          <input
            type="number"
            step='0.00001'
            // value={this?.lng}
            defaultValue={lng}
            required
            onChange={(e) => setLng(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Description
          <textarea
            rows={15}
            type="text"
            // value={this?.description}
            defaultValue={description}
            required
            onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label className='create-biz-label'>
          Preview Image
          <input
            type="url"
            // value={this?.previewImage}
            defaultValue={previewImage}
            required
            onChange={(e) => setPreviewImage(e.target.value)} />
        </label>
        <label className='create-biz-label'>
          Add Category
          <select
            // value={this?.category}
            // multiple={true}
            onChange={(e) => setnewCategory(e.target.value)}
          >
            <option value={'default'}>Pick your category</option>
            {categoriesArr?.map((category, i) => (
              <option value={category.name} key={i}>{category.name}</option>
            ))}
          </select>

        </label>

        <label className='create-biz-label'>
          Remove Category
          <ul>
            {bizCategories.map((category, idx) => <li key={idx}>{category}</li>)}
          </ul>
          <select
            defaultValue={oldCategory}
            onChange={(e) => setoldCategory(e.target.value)}
          >
            <option value={'default'}>Pick your category</option>
            {categoriesArr?.map((category, i) => (
              <option value={category.name} key={i}>{category.name}</option>
            ))}
          </select>
        </label>
        <div className="btn-container">
            <NavLink to={`/biz/${biz.id}`}>
              <button className="cancel-btn">Cancel</button>
            </NavLink>
            <button className="create-btn" type="submit">
              Save Changes
            </button>
          </div>
      </form>
    </div>
  );
}

export default EditBizForm
