import { getOneBiz } from "../../store/biz";
import { createHours } from "../../store/hours";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import "./HoursForm.css";


const CreateHoursForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ownerId = useSelector((state) => state.session.user.id);
  const { bizId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);


  const [mondayOpen, setMondayOpen] = useState("");
  const [mondayClose, setMondayClose] = useState("");
  const [tuesdayOpen, setTuesdayOpen] = useState("");
  const [tuesdayClose, setTuesdayClose] = useState("");
  const [wednesdayOpen, setWednesdayOpen] = useState("");
  const [wednesdayClose, setWednesdayClose] = useState("");
  const [thursdayOpen, setThursdayOpen] = useState("");
  const [thursdayClose, setThursdayClose] = useState("");
  const [fridayOpen, setFridayOpen] = useState("");
  const [fridayClose, setFridayClose] = useState("");
  const [saturdayOpen, setSaturdayOpen] = useState("");
  const [saturdayClose, setSaturdayClose] = useState("");
  const [sundayOpen, setSundayOpen] = useState("");
  const [sundayClose, setSundayClose] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getOneBiz(bizId)).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  const bizOwnerId = useSelector((state) => state.bizReducer.ownerId);

  if (isLoaded) {
    if (ownerId !== bizOwnerId) {
      return <div>You are not the owner of this business</div>;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      bizId,
      monday_open: mondayOpen,
      monday_close: mondayClose,
      tuesday_open: tuesdayOpen,
      tuesday_close: tuesdayClose,
      wednesday_open: wednesdayOpen,
      wednesday_close: wednesdayClose,
      thursday_open: thursdayOpen,
      thursday_close: thursdayClose,
      friday_open: fridayOpen,
      friday_close: fridayClose,
      saturday_open: saturdayOpen,
      saturday_close: saturdayClose,
      sunday_open: sundayOpen,
      sunday_close: sundayClose
    };

    dispatch(createHours(payload, bizId)).then(async (data) => {
      if (data.ok === false) {
        const dataErr = await data.json();
        setErrors(dataErr.errors);
      } else {
        window.alert(`Hours successfully created!`);
        return history.push(`/biz/${bizId}`);
      }
    });
  };

  return (
    <div className="create-hours-container">
      <h2>Create Hours for Your Business</h2>
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
            className="create-hours-input"
            onChange={(e) => setMondayOpen(e.target.value)}
          />
          <label className="create-hours-label">Monday Close:</label>
          <input
            type="time"
            placeholder="Monday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setTuesdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Tuesday Close:</label>
          <input
            type="time"
            placeholder="Tuesday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setWednesdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Wednesday Close:</label>
          <input
            type="time"
            placeholder="Wednesday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setThursdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Thursday Close:</label>
          <input
            type="time"
            placeholder="Thursday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setFridayOpen(e.target.value)}
          />
          <label className="create-hours-label">Friday Close:</label>
          <input
            type="time"
            placeholder="Friday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setSaturdayOpen(e.target.value)}
          />
          <label className="create-hours-label">Saturday Close:</label>
          <input
            type="time"
            placeholder="Saturday Close"
            required
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
            className="create-hours-input"
            onChange={(e) => setSundayOpen(e.target.value)}
          />
          <label className="create-hours-label">Sunday Close:</label>
          <input
            type="time"
            placeholder="Sunday Close"
            required
            className="create-hours-input"
            onChange={(e) => setSundayClose(e.target.value)}
          />
        </div>
        <button className="create-hours-button" type="submit">Create new Hours</button>
      </form>
    </div>
  );
};

export default CreateHoursForm;
