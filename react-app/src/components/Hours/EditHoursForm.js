import { getOneBiz } from "../../store/biz";
import { editHours, getOneHours } from "../../store/hours";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams, Redirect } from "react-router-dom";
import "./HoursForm.css"


const EditHoursForm = () => {
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
    dispatch(getOneHours(bizId))
      .then((hoursRes) => {
        setMondayOpen(hoursRes.mondayOpen)
        setMondayClose(hoursRes.mondayClose)
        setTuesdayOpen(hoursRes.tuesdayOpen)
        setTuesdayClose(hoursRes.tuesdayClose)
        setWednesdayOpen(hoursRes.wednesdayOpen)
        setWednesdayClose(hoursRes.wednesdayClose)
        setThursdayOpen(hoursRes.thursdayOpen)
        setThursdayClose(hoursRes.thursdayClose)
        setFridayOpen(hoursRes.fridayOpen)
        setFridayClose(hoursRes.fridayClose)
        setSaturdayOpen(hoursRes.saturdayOpen)
        setSaturdayClose(hoursRes.saturdayClose)
        setSundayOpen(hoursRes.sundayOpen)
        setSundayClose(hoursRes.sundayClose)
        setIsLoaded(true)
    })
  }, [dispatch]);

  const bizOwnerId = useSelector((state) => state.bizReducer.ownerId)

  if (isLoaded) {
    if (ownerId != bizOwnerId) {
      return <Redirect to="/"/>
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

    dispatch(editHours(payload, bizId))
      .then(async (data) => {
        if (data.ok === false) {

          const dataErr = await data.json()
          setErrors(dataErr.errors)
        } else {
          window.alert(`Hours successfully edited!`)
          return history.push(`/biz/${bizId}`)
        }
      })
  }

  return (
    <>
      <div>
        <h1 className="edit-hours-header">
        Edit when your business is open!
          </h1>
        <form method="POST" onSubmit={handleSubmit} className='create-hours-form-container'>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='create-hours-label'>Monday Open:
            <input
              type="time"
              placeholder="Monday Open"
              defaultValue={mondayOpen}
              onChange={(e) => setMondayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Monday Close:
            <input
              type="time"
              placeholder="Monday Close"
              defaultValue={mondayClose}
              onChange={(e) => setMondayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Tuesday Open:
            <input
              type="time"
              placeholder="Tuesday Open"
              defaultValue={tuesdayOpen}
              onChange={(e) => setTuesdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Tuesday Close:
            <input
              type="time"
              placeholder="Tuesday Close"
              defaultValue={tuesdayClose}
              onChange={(e) => setTuesdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Wednesday Open:
            <input
              type="time"
              placeholder="Wednesday Open"
              defaultValue={wednesdayOpen}
              onChange={(e) => setWednesdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Wednesday Close:
            <input
              type="time"
              placeholder="Wednesday Close"
              defaultValue={wednesdayClose}
              onChange={(e) => setWednesdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Thursday Open:
            <input
              type="time"
              placeholder="Thursday Open"
              defaultValue={thursdayOpen}
              onChange={(e) => setThursdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Thursday Close:
            <input
              type="time"
              placeholder="Thursday Close"
              defaultValue={thursdayClose}
              onChange={(e) => setThursdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Friday Open:
            <input
              type="time"
              placeholder="Friday Open"
              defaultValue={fridayOpen}
              onChange={(e) => setFridayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Friday Close:
            <input
              type="time"
              placeholder="Friday Close"
              defaultValue={fridayClose}
              onChange={(e) => setFridayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Saturday Open:
            <input
              type="time"
              placeholder="Saturday Open"
              defaultValue={saturdayOpen}
              onChange={(e) => setSaturdayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Saturday Close:
            <input
              type="time"
              placeholder="Saturday Close"
              defaultValue={saturdayClose}
              onChange={(e) => setSaturdayClose(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Sunday Open:
            <input
              type="time"
              placeholder="Sunday Open"
              defaultValue={sundayOpen}
              onChange={(e) => setSundayOpen(e.target.value)}
            />
          </label>
          <label className='create-hours-label'>Sunday Close:
            <input
              type="time"
              placeholder="Sunday Close"
              defaultValue={sundayClose}
              onChange={(e) => setSundayClose(e.target.value)}
            />
          </label>
          <button className="edit-hours-submit" type="submit">Confirm</button>
        </form>
      </div>
    </>
  )
}
export default EditHoursForm
