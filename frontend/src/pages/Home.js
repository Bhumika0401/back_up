// pages/Home.js
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <Navbar />
      <div className="home">
        <h2>Select Option</h2>

        <div className="options">
          <div className="card" onClick={()=>nav("/create-poll")}>
            Create Poll
          </div>

          <div className="card" onClick={()=>nav("/create-survey")}>
            Create Survey
          </div>
        </div>
      </div>
    </>
  );
}