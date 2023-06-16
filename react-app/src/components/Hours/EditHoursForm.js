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
      <div className="create-hours-container">
        <h1 className="edit-hours-header">
        Edit when your business is open!
          </h1>
          <form onSubmit={handleSubmit} className="create-hours-form">
        <ul className="errors-list">
          {errors && errors.length > 0 &&
            errors.map((error, idx) => <li key={idx}>{error}</li>)
          }
        </ul>
        <div className="form-row">
          <label className="create-hours-label">Monday Open:</label>
          <input
            type="time"
            placeholder="Monday Open"
              required
              defaultValue={mondayOpen}
            className="create-hours-input"
            onChange={(e) => setMondayOpen(e.target.value)}
          />
          <label className="create-hours-label">Monday Close:</label>
          <input
            type="time"
            placeholder="Monday Close"
              required
              defaultValue={mondayClose}
            className="create-hours-input"
            onChange={(e) => setMondayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Tuesday Open:</label>
          <input
            type="time"
            placeholder="Tuesday Open"
              required
              defaultValue={tuesdayOpen}
            className="create-hours-input"
            onChange={(e) => setTuesdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Tuesday Close:</label>
          <input
            type="time"
            placeholder="Tuesday Close"
              required
              defaultValue={tuesdayClose}
            className="create-hours-input"
            onChange={(e) => setTuesdayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Wednesday Open:</label>
          <input
            type="time"
            placeholder="Wednesday Open"
              required
              defaultValue={wednesdayOpen}
            className="create-hours-input"
            onChange={(e) => setWednesdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Wednesday Close:</label>
          <input
            type="time"
            placeholder="Wednesday Close"
              required
              defaultValue={wednesdayClose}
            className="create-hours-input"
            onChange={(e) => setWednesdayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Thursday Open:</label>
          <input
            type="time"
            placeholder="Thursday Open"
              required
              defaultValue={thursdayOpen}
            className="create-hours-input"
            onChange={(e) => setThursdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Thursday Close:</label>
          <input
            type="time"
            placeholder="Thursday Close"
              required
              defaultValue={thursdayClose}
            className="create-hours-input"
            onChange={(e) => setThursdayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Friday Open:</label>
          <input
            type="time"
            placeholder="Friday Open"
              required
              defaultValue={fridayOpen}
            className="create-hours-input"
            onChange={(e) => setFridayOpen(e.target.value)}
          />
          <label className="create-hours-label">Friday Close:</label>
          <input
            type="time"
            placeholder="Friday Close"
              required
              defaultValue={fridayClose}
            className="create-hours-input"
            onChange={(e) => setFridayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Saturday Open:</label>
          <input
            type="time"
            placeholder="Saturday Open"
              required
              defaultValue={saturdayOpen}
            className="create-hours-input"
            onChange={(e) => setSaturdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Saturday Close:</label>
          <input
            type="time"
            placeholder="Saturday Close"
              required
              defaultValue={saturdayClose}
            className="create-hours-input"
            onChange={(e) => setSaturdayClose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="create-hours-label">Sunday Open:</label>
          <input
            type="time"
            placeholder="Sunday Open"
              required
              defaultValue={sundayOpen}
            className="create-hours-input"
            onChange={(e) => setSundayOpen(e.target.value)}
          />
          <label className="create-hours-label">Sunday Close:</label>
          <input
            type="time"
            placeholder="Sunday Close"
              required
              defaultValue={sundayClose}
            className="create-hours-input"
            onChange={(e) => setSundayClose(e.target.value)}
          />
        </div>
        <button className="create-hours-button" type="submit">Submit New Hours</button>
      </form>
      </div>
    </>
  )
}
export default EditHoursForm
