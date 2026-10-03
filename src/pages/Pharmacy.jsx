import { useSearchParams } from "react-router-dom";

const medicines = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "antibiotics",
    quantity: 120,
    unit: "capsules",
    price: 150,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Azithromycin",
    category: "antibiotics",
    quantity: 45,
    unit: "tablets",
    price: 300,
    status: "low-stock",
  },
  {
    id: 3,
    name: "Paracetamol",
    category: "painkillers",
    quantity: 250,
    unit: "tablets",
    price: 50,
    status: "in-stock",
  },
  {
    id: 4,
    name: "Ibuprofen",
    category: "painkillers",
    quantity: 180,
    unit: "tablets",
    price: 100,
    status: "in-stock",
  },
  {
    id: 5,
    name: "Metformin",
    category: "diabetes",
    quantity: 80,
    unit: "tablets",
    price: 200,
    status: "in-stock",
  },
  {
    id: 6,
    name: "Ceftriaxone",
    category: "antibiotics",
    quantity: 15,
    unit: "vials",
    price: 2500,
    status: "low-stock",
  },
];

function Pharmacy() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category = searchParams.get("category");

  const filteredMedicines = category
    ? medicines.filter(
        (medicine) => medicine.category === category
      )
    : medicines;

  const handleCategory = (newCategory) => {
    if (newCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: newCategory,
      });
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">
            Pharmacy Management
          </span>

          <h2>Pharmacy</h2>

          <p>
            Monitor medicines, inventory, and stock levels.
          </p>
        </div>

        <button className="button primary">
          + Add Medicine
        </button>
      </div>

      <div className="filter-bar">
        <button
          className={!category ? "filter active" : "filter"}
          onClick={() => handleCategory("all")}
        >
          All Medicines
        </button>

        <button
          className={
            category === "antibiotics"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleCategory("antibiotics")}
        >
          Antibiotics
        </button>

        <button
          className={
            category === "painkillers"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleCategory("painkillers")}
        >
          Painkillers
        </button>

        <button
          className={
            category === "diabetes"
              ? "filter active"
              : "filter"
          }
          onClick={() => handleCategory("diabetes")}
        >
          Diabetes
        </button>
      </div>

      {category && (
        <div className="query-info">
          Showing category: <strong>{category}</strong>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Stock Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>
                  <strong>{medicine.name}</strong>
                </td>

                <td>
                  <span className="category-badge">
                    {medicine.category}
                  </span>
                </td>

                <td>{medicine.quantity}</td>

                <td>{medicine.unit}</td>

                <td>
                  {new Intl.NumberFormat("en-RW").format(
                    medicine.price
                  )}{" "}
                  RWF
                </td>

                <td>
                  <span
                    className={`status ${medicine.status}`}
                  >
                    {medicine.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredMedicines.length === 0 && (
          <div className="empty-state">
            <h3>No medicines found</h3>
            <p>
              There are no medicines in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pharmacy;