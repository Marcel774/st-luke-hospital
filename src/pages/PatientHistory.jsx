import { useOutletContext } from "react-router-dom";

function PatientHistory() {
  const { patient } = useOutletContext();

  const history = [
    {
      date: "2026-09-30",
      event: "Patient admitted",
      description:
        "Patient admitted to Internal Medicine department.",
    },
    {
      date: "2026-09-29",
      event: "Laboratory test",
      description:
        "Blood test and malaria test completed.",
    },
    {
      date: "2026-09-28",
      event: "Doctor consultation",
      description:
        `Consultation conducted by ${patient.doctor}.`,
    },
    {
      date: "2026-09-27",
      event: "Registration",
      description:
        "Patient registered in the hospital system.",
    },
  ];

  return (
    <div>
      <div className="section-heading">
        <div>
          <h3>Medical History</h3>
          <p>
            Medical records and activities for{" "}
            {patient.name}.
          </p>
        </div>
      </div>

      <div className="timeline">
        {history.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.date}</span>
              <h4>{item.event}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientHistory;