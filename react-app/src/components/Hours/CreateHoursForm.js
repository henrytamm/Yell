import { getOneBiz } from "../../store/biz";
import { createHours } from "../../store/hours";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import "./HoursForm.css"


const CreateHoursForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ownerId = useSelector((state) => state.session.user.id)
  const { bizId } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)


  const [mondayOpen, setMondayOpen] = useState("")
  const [mondayClose, setMondayClose] = useState("")
  const [tuesdayOpen, setTuesdayOpen] = useState("")
  const [tuesdayClose, setTuesdayClose] = useState("")
  const [wednesdayOpen, setWednesdayOpen] = useState("")
  const [wednesdayClose, setWednesdayClose] = useState("")
  const [thursdayOpen, setThursdayOpen] = useState("")
  const [thursdayClose, setThursdayClose] = useState("")
  const [fridayOpen, setFridayOpen] = useState("")
  const [fridayClose, setFridayClose] = useState("")
  const [saturdayOpen, setSaturdayOpen] = useState("")
  const [saturdayClose, setSaturdayClose] = useState("")
  const [sundayOpen, setSundayOpen] = useState("")
  const [sundayClose, setSundayClose] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getOneBiz(bizId))
      .then(() => {
      setIsLoaded(true)
    })
  }, [dispatch]);

  const bizOwnerId = useSelector((state) => state.bizReducer.ownerId)

  if (isLoaded) {
    if (ownerId != bizOwnerId) {
      return ('You are not the owner of this business')
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      bizId,
      "monday_open": mondayOpen,
      "monday_close": mondayClose,
      "tuesday_open": tuesdayOpen,
      "tuesday_close": tuesdayClose,
      "wednesday_open": wednesdayOpen,
      "wednesday_close": wednesdayClose,
      "thursday_open": thursdayOpen,
      "thursday_close": thursdayClose,
      "friday_open": fridayOpen,
      "friday_close": fridayClose,
      "saturday_open": saturdayOpen,
      "saturday_close": saturdayClose,
      "sunday_open": sundayOpen,
      "sunday_close": sundayClose
    };

    dispatch(createHours(payload, bizId))
      .then(async (data) => {
        if (data.ok === false) {

          const dataErr = await data.json()
          setErrors(dataErr.errors)
        } else {
          window.alert(`Hours successfully created!`)
          return history.push(`/biz/${bizId}`)
        }
      })
  }

  return (
    <>
      <div>Create Hours for your Business
        <form method="POST" onSubmit={handleSubmit} className='create-hours-form-container'>
          <ul>
            {errors && errors.length > 0 && errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='create-hours-label'>Monday Open:
            <input
              type="time"
              placeholder="Monday Open"
              required
              onChange={(e) => setMondayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Monday Close:
            <input
              type="time"
              placeholder="Monday Close"
              required
              onChange={(e) => setMondayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Tuesday Open:
            <input
              type="time"
              placeholder="Tuesday Open"
              required
              onChange={(e) => setTuesdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Tuesday Close:
            <input
              type="time"
              placeholder="Tuesday Close"
              required
              onChange={(e) => setTuesdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Wednesday Open:
            <input
              type="time"
              placeholder="Wednesday Open"
              required
              onChange={(e) => setWednesdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Wednesday Close:
            <input
              type="time"
              placeholder="Wednesday Close"
              required
              onChange={(e) => setWednesdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Thursday Open:
            <input
              type="time"
              placeholder="Thursday Open"
              required
              onChange={(e) => setThursdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Thursday Close:
            <input
              type="time"
              placeholder="Thursday Close"
              required
              onChange={(e) => setThursdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Friday Open:
            <input
              type="time"
              placeholder="Friday Open"
              required
              onChange={(e) => setFridayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Friday Close:
            <input
              type="time"
              placeholder="Friday Close"
              required
              onChange={(e) => setFridayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Saturday Open:
            <input
              type="time"
              placeholder="Saturday Open"
              required
              onChange={(e) => setSaturdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Saturday Close:
            <input
              type="time"
              placeholder="Saturday Close"
              required
              onChange={(e) => setSaturdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Sunday Open:
            <input
              type="time"
              placeholder="Sunday Open"
              required
              onChange={(e) => setSundayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Sunday Close:
            <input
              type="time"
              placeholder="Sunday Close"
              required
              onChange={(e) => setSundayClose(e.target.value)}
            />
          </label>
          <button className="create-hours-button" type="submit">Create new Hours</button>
        </form>
      </div>
    </>
  )
}
export default CreateHoursForm
