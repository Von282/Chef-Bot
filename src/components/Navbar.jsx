import "./Navbar.css";
import { Bell, ChefHat, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="headline-sm">
          <span>
            <Link to={"/"} className="hat-link">
              <ChefHat strokeWidth={2} size={24} className="hat" />
            </Link>
          </span>{" "}
          <span className="chef">Chef Bot-Ardee</span>
        </div>
        <div className="nav-links">
          {/* <a className="nav-link active label-md" href="../pages/Home.jsx">
            Explore
          </a> */}
          <Link to={"/"} className="nav-link active label-md">
            Explore
          </Link>
          {/* <a className="nav-link label-md" href="../pages/Dashboard.jsx">
            Dashboard
          </a> */}
          <Link to={"/dashboard"} className="nav-link label-md">
            Dashboard
          </Link>
          {/* <a className="nav-link label-md" href="#">
            Recipes
          </a> */}
          {/* <a className="nav-link label-md" href="../pages/Pricing.jsx">
            Pricing
          </a> */}
          <Link to={"/pricing"} className="nav-link label-md">
            Pricing
          </Link>
        </div>
        <div className="flex noti items-center gap-4">
          <button
            aria-label="notifications"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {/* <span
              className="material-symbols-outlined"
              style={{ color: "var(--primary)" }}
            >
              <Bell />
            </span> */}
          </button>
          <div className="profile-pic">
            <Link to={"/profile"}>
              <span className="profile-icon">
                <CircleUserRound size={28} />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
