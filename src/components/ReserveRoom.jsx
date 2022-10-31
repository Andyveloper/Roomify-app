import React from 'react'

const [info, setInfo] = useState({
  city: '',
  date: '',
});

const handleSubmit = async (e) => {
  e.preventDefault();
};

const getFormInfo = (e) => {
  setInfo(
    {
      ...info,
      [e.target.name]: e.target.value,
    },
  );
};

const todayDate = new Date().toISOString().slice(0, 10);

export default function ReserveRoom() {
  return (
    <div className="reservation">
      <h1 className="form-title">Reserve room</h1>
      <form className="form" name="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Choose a city</label>
          <br />
          <input className="input" type="text" name="city" id="city" onChange={getFormInfo} required />
        </div>

        <div>
          <label htmlFor="date">Choose a date</label>
          <br />
          <input
            className="input"
            type="date"
            name="date"
            id="date"
            min={todayDate}
            onChange={getFormInfo}
            required
          />
        </div>
        <input className="submit" value="Add Reservation" type="submit" onClick={postReservation} />
      </form>
    </div>
  );
}
