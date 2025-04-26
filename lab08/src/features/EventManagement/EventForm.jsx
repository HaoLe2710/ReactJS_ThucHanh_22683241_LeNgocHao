// src/features/EventManagement/EventForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from './eventSlice';

export default function EventForm() {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({
    id: Date.now(),
    name: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(event));
    setEvent({ id: Date.now(), name: '', date: '', location: '' }); // Reset form
  };

  return (
    <div style={{ border: '1px solid orange', padding: '1rem', margin: '1rem' }}>
      <h2>🎉 Thêm sự kiện</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sự kiện:</label>
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ngày:</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Địa điểm:</label>
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Thêm sự kiện</button>
      </form>
    </div>
  );
}
