import { Link } from "react-router-dom";

function Dashboard() {
  const statistics = [
    {
      title: "Total Patients",
      value: "1,248",
      icon: "👥",
      description: "Registered patients",
    },
    {
      title: "Admitted Patients",
      value: "86",
      icon: "🏥",
      description: "Currently admitted",
    },
    {
      title: "Appointments",
      value: "34",
      icon: "📅",
      description: "Today's appointments",
    },
    {
      title: "Pending Bills",
      value: "18",
      icon: "💳",
      description: "Awaiting payment",
    },
  ];

  const activities = [
    {
      patient: "Jean Pierre",
      action: "was admitted",
      time: "10 minutes ago",
    },
    {
      patient: "Grace Mukamana",
      action: "completed an appointment",
      time: "35 minutes ago",
    },
    {
      patient: "Eric Niyonzima",
      action: "received medication",
      time: "1 hour ago",
    },
    {
      patient: "Alice Uwase",
      action: "made a payment",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="page">
      <section className="hero">
        <div>
          <span className="eyebrow">Hospital Management System</span>

          <h2>Welcome to St. Luke Hospital</h2>

          <p>
            Manage patients, appointments, billing, and
            pharmacy operations from one place.
          </p>
        </div>

        <div className="hero-actions">
          <Link to="/patients" className="button primary">
            View Patients
          </Link>

          <Link
            to="/appointments"
            className="button secondary"
          >
            Appointments
          </Link>
        </div>
      </section>

      <section className="stats-grid">
        {statistics.map((item) => (
          <div className="stat-card" key={item.title}>
            <div className="stat-icon">{item.icon}</div>

            <div>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Recent Activity</h3>
              <p>Latest hospital activities</p>
            </div>
          </div>

          <div className="activity-list">
            {activities.map((activity, index) => (
              <div className="activity-item" key={index}>
                <div className="activity-avatar">
                  {activity.patient.charAt(0)}
                </div>

                <div>
                  <strong>{activity.patient}</strong>
                  <p>{activity.action}</p>
                </div>

                <span>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Quick Actions</h3>
              <p>Frequently used pages</p>
            </div>
          </div>

          <div className="quick-actions">
            <Link to="/patients" className="quick-action">
              <span>👥</span>
              <div>
                <strong>Patients</strong>
                <p>Manage patient records</p>
              </div>
            </Link>

            <Link
              to="/appointments"
              className="quick-action"
            >
              <span>📅</span>
              <div>
                <strong>Appointments</strong>
                <p>View scheduled appointments</p>
              </div>
            </Link>

            <Link to="/billing" className="quick-action">
              <span>💰</span>
              <div>
                <strong>Billing</strong>
                <p>Manage hospital payments</p>
              </div>
            </Link>

            <Link to="/pharmacy" className="quick-action">
              <span>💊</span>
              <div>
                <strong>Pharmacy</strong>
                <p>Check medicine inventory</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;