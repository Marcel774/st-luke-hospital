const appointments = [
  {
    id: 1,
    patient: "Jean Pierre",
    doctor: "Dr. Emmanuel Nkurunziza",
    department: "Internal Medicine",
    date: "2026-10-03",
    time: "09:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Grace Mukamana",
    doctor: "Dr. Diane Uwamahoro",
    department: "Maternity",
    date: "2026-10-03",
    time: "10:30 AM",
    status: "completed",
  },
  {
    id: 3,
    patient: "Eric Niyonzima",
    doctor: "Dr. Patrick Habimana",
    department: "Surgery",
    date: "2026-10-03",
    time: "11:30 AM",
    status: "confirmed",
  },
  {
    id: 4,
    patient: "Alice Uwase",
    doctor: "Dr. Jean Bosco",
    department: "Cardiology",
    date: "2026-10-03",
    time: "02:00 PM",
    status: "pending",
  },
];

function Appointments() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">
            Scheduling Management
          </span>

          <h2>Appointments</h2>

          <p>
            Manage patient appointments and doctor
            schedules.
          </p>
        </div>

        <button className="button primary">
          + New Appointment
        </button>
      </div>

      <div className="stats-grid compact">
        <div className="stat-card">
          <div className="stat-icon">📅</div>

          <div>
            <p>Today's Appointments</p>
            <h3>34</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <p>Confirmed</p>
            <h3>21</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <p>Pending</p>
            <h3>8</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <p>Completed</p>
            <h3>5</h3>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>
                  <strong>{appointment.patient}</strong>
                </td>

                <td>{appointment.doctor}</td>

                <td>{appointment.department}</td>

                <td>{appointment.date}</td>

                <td>{appointment.time}</td>

                <td>
                  <span
                    className={`status ${appointment.status}`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;