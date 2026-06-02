import { Search, CirclePlus, ChevronDown } from "lucide-react";

function Dashboard() {
  return (
    <>
      <main className="content-container">
        <aside className="filters">
          <div className="filter restrictions">
            <h3>Dietary Restrictions</h3>
            <div className="checkboxes">
              <input type="checkbox" name="vegan" id="vegan" />
              <label htmlFor="vegan">Vegan</label>
              <input type="checkbox" name="gluten-free" id="gluten-free" />
              <label htmlFor="gluten-free">Gluten-Free</label>
              <input type="checkbox" name="keto-friendly" id="keto-friendly" />
              <label htmlFor="keto-friendly"> Keto-Friendly</label>
              <input type="checkbox" name="dairy-free" id="dairy-free" />
              <label htmlFor="dairy-free">Dairy-Free</label>
            </div>
          </div>
          <div className="filter meal-type">
            <p>Meal Type</p>
            <button className="meal-btn">Breakfast</button>
            <button className="meal-btn">Lunch</button>
            <button className="meal-btn">Diner</button>
            <button className="meal-btn">Snacks</button>
          </div>
        </aside>
        <section className="main-content">
          <div className="heading">
            <h1>What's in your pantry?</h1>
            <p>
              Enter your ingredients and let our culinary AI craft a masterpiece
              specificallly for your taste and health goals.
            </p>
          </div>
          <div className="ingredient-input">
            <div className="inp-field">
              <Search />
              <input type="text" name="ingredients" id="ingredients" />
              <CirclePlus />
            </div>
            <div className="added-ingredients"></div>
            <button className="generate-btn">Generate</button>
          </div>
          <div className="results"></div>
          <div className="load-more">
            <button>
              Browse All Recipes
              <span>
                <ChevronDown />
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
