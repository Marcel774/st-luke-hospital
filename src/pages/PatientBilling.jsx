import { useOutletContext } from "react-router-dom";

function PatientBilling() {
  const { patient } = useOutletContext();

  const invoices = [
    {
      invoice: "INV-2026-001",
      date: "2026-09-28",
      service: "Consultation",
      amount: 15000,
      status: "paid",
    },
    {
      invoice: "INV-2026-002",
      date: "2026-09-29",
      service: "Laboratory",
      amount: 25000,
      status: "paid",
    },
    {
      invoice: "INV-2026-003",
      date: "2026-09-30",
      service: "Medication",
      amount: 18000,
      status: "pending",
    },
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-RW").format(amount) + " RWF";

  return (
    <div>
      <div className="section-heading">
        <div>
          <h3>Patient Billing</h3>

          <p>
            Billing information for {patient.name}.
          </p>
        </div>
      </div>

      <div className="billing-summary">
        <div>
          <span>Total Charges</span>
          <strong>
            {formatCurrency(
              invoices.reduce(
                (sum, invoice) => sum + invoice.amount,
                0
              )
            )}
          </strong>
        </div>

        <div>
          <span>Paid</span>
          <strong>
            {formatCurrency(
              invoices
                .filter((invoice) => invoice.status === "paid")
                .reduce(
                  (sum, invoice) => sum + invoice.amount,
                  0
                )
            )}
          </strong>
        </div>

        <div>
          <span>Pending</span>
          <strong>
            {formatCurrency(
              invoices
                .filter(
                  (invoice) =>
                    invoice.status === "pending"
                )
                .reduce(
                  (sum, invoice) => sum + invoice.amount,
                  0
                )
            )}
          </strong>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.invoice}>
                <td>{invoice.invoice}</td>
                <td>{invoice.date}</td>
                <td>{invoice.service}</td>
                <td>{formatCurrency(invoice.amount)}</td>
                <td>
                  <span
                    className={`status ${invoice.status}`}
                  >
                    {invoice.status}
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

export default PatientBilling;