import "./App.css";
import { fetchBills, fetchReading } from "./api";
import { useEffect, useState } from "react";
import BillCard from "./components/BillCard";
import Readings from "./components/Readings";

function App() {
  const [bills, setBills] = useState([]);
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBills, setShowBills] = useState(false);
  const [showReadings, setShowReadings] = useState(false);

  const displayBills = () => {
    setShowBills(true);
    setShowReadings(false);
  };

  const displayReadings = () => {
    setShowReadings(true);
    setShowBills(false);
  };

  useEffect(() => {
    if (!bills.length || !readings.length) {
      (async () => {
        const [bills, readings] = await Promise.all([fetchBills(), fetchReading()]);
        setBills(bills.data);
        setReadings(readings.data[0]);
        setLoading(false);
      })();
    }
  }, []);

  return (
    <div className="App" style={{ padding: 20 }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {loading && !bills.lenght && !readings.length ? (
          <p>Loading, please wait.</p>
        ) : (
          <>
            <button style={{ margin: 10 }} onClick={displayBills}>
              Show Bills
            </button>
            <button style={{ margin: 10 }} onClick={displayReadings}>
              Show Readings
            </button>
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {showBills && (
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "80%" }}>
            {bills.map((bill) => (
              <BillCard bill={bill.attributes} key={bill.id} />
            ))}
          </div>
        )}
        {showReadings && (
          <div>
            <Readings readings={readings} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
