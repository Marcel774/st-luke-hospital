import { Link, useSearchParams } from "react-router-dom";

const patients = [
  {
    id: 1,
    name: "Jean Pierre",
    age: 42,
    gender: "Male",
    department: "Internal Medicine",
    status: "admitted",
    phone: "+250 788 111 111",
  },
  {
    id: 2,
    name: "Grace Mukamana",
    age: 35,
    gender: "Female",
    department: "Maternity",
    status: "discharged",
    phone: "+250 788 222 222",
  },
  {
    id: 3,
    name: "Eric Niyonzima",
    age: 29,
    gender: "Male",
    department: "Surgery",
    status: "admitted",
    phone: "+250 788 333 333",
  },
  {
    id: 4,
    name: "Alice Uwase",
    age: 51,
    gender: "Female",
    department: "Cardiology",
    status: "outpatient",
    phone: "+250 788 444 444",
  },
  {
    id: 5,
    name: "Patrick Habimana",
    age: 46,
    gender: "Male",
    department: "Orthopedics",
    status: "admitted",
    phone: "+250 788 555 555",
  },
  {
    id: 6,
    name: "Diane Ingabire",
    age: 24,
    gender: "Female",
    department: "Pediatrics",
    status: "outpatient",
    phone: "+250 788 666 666",
  },
];

function Patients() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const status = searchParams.get("status");

  const filteredPatients = status
    ? patients.filter((patient) => patient.status === status)
    : patients;

  const handleFilter = (newStatus) => {
    if (newStatus === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ status: newStatus });
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Patient Management</span>

          <h2>Patients</h2>

          <p>
            View and manage registered patients at St. Luke
            Hospital.
          </p>
        </div>

        <div className="page-header-actions">
          <Link to="/patients?status=admitted">
            Admitted Patients
          </Link>
        </div>
      </div>

      <div className="filter-bar">
        <button
          className={!status ? "filter active" : "filter"}
          onClick={() => handleFilter("all")}
        >
          All
        </button>

        <button
          className={
            status === "admitted"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleFilter("admitted")}
        >
          Admitted
        </button>

        <button
          className={
            status === "outpatient"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleFilter("outpatient")}
        >
          Outpatient
        </button>

        <button
          className={
            status === "discharged"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleFilter("discharged")}
        >
          Discharged
        </button>
      </div>

      {status && (
        <div className="query-info">
          Showing patients with status:{" "}
          <strong>{status}</strong>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>
                  <div className="patient-name">
                    <div className="patient-avatar">
                      {patient.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{patient.name}</strong>
                      <span>
                        Patient ID: SLH-
                        {String(patient.id).padStart(3, "0")}
                      </span>
                    </div>
                  </div>
                </td>

                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.department}</td>

                <td>
                  <span
                    className={`status ${patient.status}`}
                  >
                    {patient.status}
                  </span>
                </td>

                <td>{patient.phone}</td>

                <td>
                  <Link
                    to={`/patients/${patient.id}`}
                    className="table-link"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPatients.length === 0 && (
          <div className="empty-state">
            <h3>No patients found</h3>
            <p>
              There are no patients matching this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Patients;