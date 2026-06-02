import "./Navbar.css";
import { Bell, ChefHat, CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div
          className="headline-sm"
          style={{ fontWeight: "bold", color: "var(--primary)" }}
        >
          <span>
            <ChefHat strokeWidth={2.5} />
          </span>{" "}
          Chef Bot-Ardee
        </div>
        <div className="nav-links">
          <a className="nav-link active label-md" href="#">
            Explore
          </a>
          <a className="nav-link label-md" href="#">
            Dashboard
          </a>
          <a className="nav-link label-md" href="#">
            Recipes
          </a>
          <a className="nav-link label-md" href="#">
            Pricing
          </a>
        </div>
        <div className="flex noti items-center gap-4">
          <button
            aria-label="notifications"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="material-symbols-outlined"
              style={{ color: "var(--primary)" }}
            >
              <Bell />
            </span>
          </button>
          <div className="profile-pic">
            <CircleUserRound />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
