import {
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

const patients = [
  {
    id: 1,
    name: "Jean Pierre",
    age: 42,
    gender: "Male",
    department: "Internal Medicine",
    status: "admitted",
    phone: "+250 788 111 111",
    address: "Musanze, Rwanda",
    admissionDate: "2026-09-28",
    doctor: "Dr. Emmanuel Nkurunziza",
    diagnosis: "Malaria",
  },
  {
    id: 2,
    name: "Grace Mukamana",
    age: 35,
    gender: "Female",
    department: "Maternity",
    status: "discharged",
    phone: "+250 788 222 222",
    address: "Musanze, Rwanda",
    admissionDate: "2026-09-20",
    doctor: "Dr. Diane Uwamahoro",
    diagnosis: "Pregnancy care",
  },
  {
    id: 3,
    name: "Eric Niyonzima",
    age: 29,
    gender: "Male",
    department: "Surgery",
    status: "admitted",
    phone: "+250 788 333 333",
    address: "Musanze, Rwanda",
    admissionDate: "2026-09-30",
    doctor: "Dr. Patrick Habimana",
    diagnosis: "Appendicitis",
  },
];

function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const patient = patients.find(
    (item) => item.id === Number(id)
  );

  if (!patient) {
    return (
      <div className="page">
        <div className="not-found">
          <h2>Patient Not Found</h2>

          <p>
            The patient you are looking for does not exist.
          </p>

          <button
            className="button primary"
            onClick={() => navigate("/patients")}
          >
            Back to Patients
          </button>
        </div>
      </div>
    );
  }

  const getNavClass = ({ isActive }) =>
    isActive
      ? "patient-tab active"
      : "patient-tab";

  return (
    <div className="page">
      <button
        className="back-button"
        onClick={() => navigate("/patients")}
      >
        ← Back to Patients
      </button>

      <section className="patient-profile">
        <div className="large-avatar">
          {patient.name.charAt(0)}
        </div>

        <div className="patient-profile-info">
          <span className="eyebrow">Patient Profile</span>

          <h2>{patient.name}</h2>

          <p>
            Patient ID: SLH-
            {String(patient.id).padStart(3, "0")}
          </p>
        </div>

        <span
          className={`status large ${patient.status}`}
        >
          {patient.status}
        </span>
      </section>

      <section className="patient-summary">
        <div>
          <span>Age</span>
          <strong>{patient.age} years</strong>
        </div>

        <div>
          <span>Gender</span>
          <strong>{patient.gender}</strong>
        </div>

        <div>
          <span>Department</span>
          <strong>{patient.department}</strong>
        </div>

        <div>
          <span>Doctor</span>
          <strong>{patient.doctor}</strong>
        </div>

        <div>
          <span>Diagnosis</span>
          <strong>{patient.diagnosis}</strong>
        </div>

        <div>
          <span>Phone</span>
          <strong>{patient.phone}</strong>
        </div>
      </section>

      <div className="patient-tabs">
        <NavLink
          to={`/patients/${patient.id}`}
          end
          className={getNavClass}
        >
          Overview
        </NavLink>

        <NavLink
          to={`/patients/${patient.id}/history`}
          className={getNavClass}
        >
          Medical History
        </NavLink>

        <NavLink
          to={`/patients/${patient.id}/billing`}
          className={getNavClass}
        >
          Billing
        </NavLink>
      </div>

      <div className="nested-content">
        <Outlet context={{ patient }} />
      </div>
    </div>
  );
}

export default PatientDetail;