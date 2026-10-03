const invoices = [
  {
    id: "INV-1001",
    patient: "Jean Pierre",
    service: "Hospital Admission",
    amount: 85000,
    date: "2026-10-01",
    status: "paid",
  },
  {
    id: "INV-1002",
    patient: "Grace Mukamana",
    service: "Maternity Services",
    amount: 150000,
    date: "2026-10-01",
    status: "pending",
  },
  {
    id: "INV-1003",
    patient: "Eric Niyonzima",
    service: "Surgery",
    amount: 320000,
    date: "2026-10-02",
    status: "paid",
  },
  {
    id: "INV-1004",
    patient: "Alice Uwase",
    service: "Cardiology Consultation",
    amount: 45000,
    date: "2026-10-02",
    status: "pending",
  },
];

function Billing() {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-RW").format(amount) + " RWF";

  const total = invoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0
  );

  const paid = invoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  const pending = invoices
    .filter((invoice) => invoice.status === "pending")
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Financial Management</span>

          <h2>Billing</h2>

          <p>
            Track invoices, payments, and outstanding
            hospital bills.
          </p>
        </div>

        <button className="button primary">
          + Create Invoice
        </button>
      </div>

      <div className="stats-grid compact">
        <div className="stat-card">
          <div className="stat-icon">💰</div>

          <div>
            <p>Total Billing</p>
            <h3>{formatCurrency(total)}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <p>Paid</p>
            <h3>{formatCurrency(paid)}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <p>Pending</p>
            <h3>{formatCurrency(pending)}</h3>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Patient</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <strong>{invoice.id}</strong>
                </td>

                <td>{invoice.patient}</td>

                <td>{invoice.service}</td>

                <td>{formatCurrency(invoice.amount)}</td>

                <td>{invoice.date}</td>

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

export default Billing;