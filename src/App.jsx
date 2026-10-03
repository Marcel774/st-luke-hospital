import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetail from "./pages/PatientDetail";
import PatientHistory from "./pages/PatientHistory";
import PatientBilling from "./pages/PatientBilling";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";
import Pharmacy from "./pages/Pharmacy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Redirect /home to dashboard */}
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          {/* Patients */}
          <Route path="/patients" element={<Patients />} />

          {/* Nested patient routes */}
          <Route
            path="/patients/:id"
            element={<PatientDetail />}
          >
            <Route
              path="history"
              element={<PatientHistory />}
            />

            <Route
              path="billing"
              element={<PatientBilling />}
            />
          </Route>

          {/* Other pages */}
          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route path="/billing" element={<Billing />} />

          <Route path="/pharmacy" element={<Pharmacy />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;