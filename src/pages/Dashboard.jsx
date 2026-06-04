import { Search, CirclePlus, ChevronDown, X } from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <main className="content-container">
        <aside className="filters">
          <div className="filter restrictions">
            <h3>Dietary Restrictions</h3>
            <div className="checkboxes">
              <label htmlFor="vegan" className="checkbox-item">
                <input type="checkbox" name="vegan" id="vegan" />
                <span className="checkbox-label">Vegan</span>
              </label>

              <label htmlFor="gluten-free" className="checkbox-item">
                <input type="checkbox" name="gluten-free" id="gluten-free" />
                <span className="checkbox-label">Gluten-Free</span>
              </label>

              <label htmlFor="keto-friendly" className="checkbox-item">
                <input
                  type="checkbox"
                  name="keto-friendly"
                  id="keto-friendly"
                />
                <span className="checkbox-label">Keto-Friendly</span>
              </label>

              <label htmlFor="dairy-free" className="checkbox-item">
                <input type="checkbox" name="dairy-free" id="dairy-free" />
                <span className="checkbox-label">Dairy-Free</span>
              </label>
            </div>
          </div>
          <div className="filter meal-type">
            <h3>Meal Type</h3>
            <div className="meal-btns">
              <button className="meal-btn">Breakfast</button>
              <button className="meal-btn">Lunch</button>
              <button className="meal-btn">Diner</button>
              <button className="meal-btn">Snacks</button>
            </div>
          </div>
        </aside>
        <section className="main-content">
          <div className="upper-dashboard">
            <div className="heading">
              <h1>What's in your pantry?</h1>
              <p>
                Enter your ingredients and let our culinary AI craft a
                masterpiece specificallly for your taste and health goals.
              </p>
            </div>
            <div className="search-container">
              <div className="search-bar">
                <Search color="#727972" />
                <input
                  type="text"
                  name="ingredients"
                  placeholder="Add ingredients: Quinoa..."
                  id="ingredients"
                />
                <span className="add-ingredient">
                  <CirclePlus color="#727972" />
                </span>
              </div>
              <div className="added-ingredient-tags">
                <span class="ingredients-label">Active:</span>
                <div class="ingredient-chip">
                  <span>Spinach</span>
                  <span class="material-symbols-outlined chip-close">
                    <X size={14} />
                  </span>
                </div>
                <div class="ingredient-chip">
                  <span>Quinoa</span>
                  <span class="material-symbols-outlined chip-close">
                    <X size={14} />
                  </span>
                </div>
                <div class="ingredient-chip">
                  <span>Avocado</span>
                  <span class="material-symbols-outlined chip-close">
                    <X size={14} />
                  </span>
                </div>
                <button className="generate-btn">Generate</button>
              </div>
              <div class="ai-status-bar hidden" id="statusArea">
                <div class="progress-track">
                  <div class="progress-thumb"></div>
                </div>
                <span class="ai-pulse">
                  AI is thinking... crafting your healthy recipe
                </span>
              </div>
            </div>
          </div>
          <div className="lower-dashboard">
            <div className="results"></div>
            <div className="load-more">
              <button>
                Browse All Recipes
                <span>
                  <ChevronDown />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
