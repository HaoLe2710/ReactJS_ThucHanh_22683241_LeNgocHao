// src/features/EventManagement/EventList.jsx
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, editEvent } from './eventSlice';

export default function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  const handleEdit = (id) => {
    const updatedEvent = prompt('Nhập tên sự kiện mới:');
    if (updatedEvent) {
      dispatch(editEvent({ id, updatedEvent: { name: updatedEvent } }));
    }
  };

  return (
    <div style={{ border: '1px solid blue', padding: '1rem', margin: '1rem' }}>
      <h2>📅 Danh sách sự kiện</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <strong>{event.name}</strong>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <button onClick={() => handleEdit(event.id)}>Sửa</button>
              <button onClick={() => handleDelete(event.id)}>Xoá</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
