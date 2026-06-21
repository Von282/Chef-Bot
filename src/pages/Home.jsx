import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  Heart,
  Archive,
  Quote,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="hero-bg">
          <img
            alt="Fresh ingredients in sunlight"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1widjXGmcqjIuoq2hPoGN2dTILPZ-WkeRPchUPqhxRh-7XAzpU6HlvQED6VDbDTxsWX9W7DPe9nHgj29dVtR6SsTChJNyk4nJ_pmY7QmpNBLZXIl4tw_WLGeU9hQXEhMkSlICYRcJwN3u2ALWuItGeXMDlQSj66mxohxHMcyk0H-2qh2C2OFIxSv0V_bzrkmfnQEWFFRnxvBHP97o8gNNpCASgC41yxDgdBR2FMWsS3kCtTI-xKLso3U23DTy1Txpm3tV06Qnkvw"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text-box glass-panel ambient-shadow">
            <div className="badge">
              <span
                className="material-symbols-outlined label-sm"
                style={{ color: "var(--secondary)" }}
              >
                <Leaf />
              </span>
              <span className="label-md">Sustainable Cooking</span>
            </div>
            <h1
              className="display-lg hero-header" /*style="{color: var(--primary)};"*/
            >
              Cook Smarter,
              <br />
              Live Better.
            </h1>
            <p
              className="body-lg header-p"
              /*style="{color: var(--on-surface-variant); max-width: 450px};"*/
            >
              AI-powered recipe generation tailored to the ingredients you
              already have in your pantry. Reduce waste, discover new flavors,
              and nourish your health.
            </p>
            <div
              className="flex gap-3 mt-4 header-btn" /*style="{flex-wrap: wrap};"*/
            >
              <Link
                to={"/dashboard"}
                className="btn btn-primary ambient-shadow"
              >
                Start Creating
                <span className="material-symbols-outlined">
                  <ArrowRight strokeWidth={2.25} />
                </span>
              </Link>

              {/* <a className="btn btn-primary ambient-shadow" href="#"> */}

              {/* </a> */}
              <a className="btn btn-outline" href="#features">
                See How It Works
              </a>
            </div>
          </div>
          <div className="floating-card-container">
            <div className="floating-card glass-panel ambient-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="icon-box"
                  style={{
                    background: "var(--primary-container)",
                    marginBottom: "0",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--on-primary-container)" }}
                  >
                    <Sparkles strokeWidth={2} />
                  </span>
                </div>
                <div>
                  <div
                    className="label-sm"
                    style={{
                      color: "var(--on-surface-variant)",
                      textTransform: "uppercase",
                    }}
                  >
                    Generating
                  </div>
                  <div
                    className="headline-sm"
                    style={{ color: "var(--primary)" }}
                  >
                    Dinner Idea
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    background: "var(--surface-container-high)",
                    borderRadius: "99px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "var(--secondary)",
                      width: "75%",
                    }}
                  ></div>
                </div>
                <p
                  className="body-md"
                  style={{
                    color: "var(--on-surface-variant)",
                    fontStyle: "italic",
                    fontSize: "14px",
                  }}
                >
                  Analyzing pantry: Tomatoes, Basil, Garlic...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2
              className="headline-md"
              style={{ color: "var(--primary)", marginBottom: "16px" }}
            >
              The Intelligent Kitchen Assistant
            </h2>
            <p
              className="body-lg"
              style={{
                color: "var(--on-surface-variant)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Transform how you plan, cook, and organize your meals with
              precision algorithms designed for culinary creativity.
            </p>
          </div>
          <div className="feature-grid">
            {/* <!-- Feature 1: AI Generation (Large) --> */}
            <div className="feature-card feature-large ambient-shadow">
              <div style={{ flex: "1", zIndex: "10" }}>
                <div
                  className="icon-box"
                  style={{
                    background: "var(--primary)",
                    color: "var(--on-primary)",
                  }}
                >
                  <span className="material-symbols-outlined">
                    <UtensilsCrossed strokeWidth={2.25} />
                  </span>
                </div>
                <h3
                  className="headline-sm"
                  style={{ color: "var(--primary)", marginbottom: "12px" }}
                >
                  AI Recipe Generation
                </h3>
                <p
                  className="body-md"
                  style={{
                    color: "var(--on-surface-variant)",
                    marginBottom: "24px",
                  }}
                >
                  Input what's in your fridge, and let our sophisticated models
                  craft perfectly balanced, flavorful recipes in seconds. Never
                  stare blankly at your pantry again.
                </p>
                <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                  <span className="pill">Vegan</span>
                  <span className="pill">Under 30 Mins</span>
                  <span
                    className="pill"
                    style={{
                      background: "var(--surface-container-highest)",
                      color: "var(--on-surface-variant)",
                    }}
                  >
                    + Custom Filters
                  </span>
                </div>
              </div>
              <div className="feature-image-container">
                <img
                  alt="App Interface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRmrWarWEkw3SsELBGDhaK3rOvYmRZ6VKln7CTlGizbpvXku1nmLROtqujqZ2rEbfUrWFxliZYphWgAs8JT4nbTAEDUT_woZ6od9jrZsbH7q46ebFjcU5s9MMYCkZHekCHzIE22TDbeuVt7huavvpwbPazh0ofCJlZnp6aOHWoyDbfIahRAwVa-4ZdICMKdEf0gj5Y3ccvy4Xnu3o4ueZuykLAz4zNEtRpkMSyTxiOu0-1kEJhF6Gh33qIrPOj1sRqv9Tkj8ooQhw"
                />
              </div>
            </div>
            {/* <!-- Feature 2: Smart Pantry --> */}
            <div className="feature-card ambient-shadow">
              <div
                className="icon-box"
                style={{
                  background: "var(--tertiary-container)",
                  color: "var(--on-tertiary-container)",
                }}
              >
                <span className="material-symbols-outlined">
                  <Archive strokeWidth={2.25} />
                </span>
              </div>
              <h3
                className="headline-sm"
                style={{ color: "var(--primary)", marginBottom: "12px" }}
              >
                Smart Pantry
              </h3>
              <p
                className="body-md"
                style={{ color: "var(--on-surface-variant)", flex: "1" }}
              >
                Keep track of your ingredients. Chef Bot-Ardee remembers what
                you have and suggests recipes to use produce before it spoils.
              </p>
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  background: "var(--surface-container)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span className="label-sm">Spinach</span>
                  <span className="label-sm" style={{ color: "var(--error)" }}>
                    Expiring soon
                  </span>
                </div>
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span className="label-sm">Cherry Tomatoes</span>
                  <span
                    className="label-sm"
                    style={{ color: "var(--secondary)" }}
                  >
                    Fresh
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Feature 3: Saving --> */}
            <div className="feature-card ambient-shadow">
              <div
                className="icon-box"
                style={{
                  background: "var(--secondary-container)",
                  color: "var(--on-secondary-container)",
                }}
              >
                <span className="material-symbols-outlined">
                  <Heart strokeWidth={2.25} />
                </span>
              </div>
              <h3
                className="headline-sm"
                style={{ color: "var(--primary)", marginBottom: "12px" }}
              >
                Personal Cookbook
              </h3>
              <p
                className="body-md"
                style={{ color: "var(--on-surface-variant)", flex: "1" }}
              >
                Save your favorite AI creations. Tweak ingredients, add personal
                notes, and build a digital cookbook that evolves with your
                tastes.
              </p>
            </div>
            {/* <!-- Feature 4: Nutrition (Large) --> */}
            <div className="feature-card nutrition-card ambient-shadow">
              <div style={{ flex: "1", zIndex: "10" }}>
                <h3
                  className="headline-sm"
                  style={{ color: "var(--on-primary)", marginBottom: "12px" }}
                >
                  Precision Nutrition
                </h3>
                <p
                  className="body-md"
                  style={{
                    color: "var(--inverse-primary",
                    marginBottom: "24px",
                  }}
                >
                  Every generated recipe comes with detailed macros and
                  micronutrient breakdowns, ensuring your meals align perfectly
                  with your health goals.
                </p>
                <button
                  className="btn label-md"
                  style={{
                    background: "var(--inverse-primary",
                    color: "var(--primary)",
                    padding: "8px 24px",
                  }}
                >
                  Explore Metrics
                </button>
              </div>
              <div className="nutrition-table" style={{ zIndex: "10" }}>
                <div className="table-row">
                  <span
                    className="label-md"
                    style={{ color: "var(--on-primary)" }}
                  >
                    Calories
                  </span>
                  <span
                    className="label-md"
                    style={{ color: "var(--inverse-primary)" }}
                  >
                    420 kcal
                  </span>
                </div>
                <div className="table-row">
                  <span
                    className="label-md"
                    style={{ color: "var(--on-primary)" }}
                  >
                    Protein
                  </span>
                  <span
                    className="label-md"
                    style={{ color: "var(--inverse-primary)" }}
                  >
                    28g
                  </span>
                </div>
                <div className="table-row">
                  <span
                    className="label-md"
                    style={{ color: "var(--on-primary)" }}
                  >
                    Carbs
                  </span>
                  <span
                    className="label-md"
                    style={{ color: "var(--inverse-primary)" }}
                  >
                    45g
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section --> */}
      <section className="testimonial">
        <div className="testimonial-accent"></div>
        <div className="container testimonial-content">
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "60px",
              color: "var(--secondary-fixed-dim)",
              marginBottom: "24px",
            }}
          >
            <Quote strokeWidth={2.75} size={30} />
          </span>
          <blockquote
            className="display-lg"
            style={{
              color: "var(--primary)",
              marginBottom: "32px",
              lineHeight: "1.2",
            }}
          >
            "Chef Bot-Ardee completely changed how I look at the random
            ingredients in my fridge. It turns 'nothing to eat' into a gourmet,
            healthy dinner in minutes."
          </blockquote>
          <div
            className="flex items-center"
            style={{ justifyContent: "center", gap: "16px" }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--surface-container-high)",
              }}
            >
              <img
                alt="Sarah Jenkins"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpYHN8uwDBv0rYUYgNTCEZ_km7ntzLN9OY1QHzav6WbBdkWEQsS9A7o_coQE_uuOKHlQeFn6J85OoHeJoF_HdQ1KBxR_ZU4GRalZdod-B6LHbVy4bs1TLbeokn8D1pGicM2DJaRKW6O58kXxhQ-D0zSKlOEcuqSVKSsiXJWZ--vsdwIPNy-bd_BXg2atp_3qnfvPgKvgb2ZvZ4WmPzPL6LZ9NEz2zIdsLOOOaVGZXY21FrfkKRyZVGo0MG2CphN3MOfQmWU0JSghk"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <div className="label-md" style={{ color: "var(--primary)" }}>
                Sarah Jenkins
              </div>
              <div
                className="label-sm"
                style={{ color: "var(--on-surface-variant)" }}
              >
                Home Cook &amp; Yoga Instructor
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
//}

export default Home;
