import { Clock, Flame, UsersRound, Sparkles, Leaf } from "lucide-react";
import "./Recipe.css";

function Recipe() {
  return (
    <>
      {/* <div className="page-container"> */}
      <div className="content-container">
        <div className="recipe-image-wrapper">
          <img
            alt="Roasted Seasonal Veggie Bowl"
            className="recipe-hero-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0FgGw8dO7YUJE-Wm8yrpXSK52JVA0XcLQuy1D2pQvyKB0bMgfxxNh83LSkyJyD0CJ7Ac5UtyHlY30Nlgo7u9Ilbv-ptNQSDl1uKH0RS-1figxVVhY_QJ9m89kILyxlSgZVV-Mw_vVxS4TM7j5wLE-Lcj6MKcYNwjkTBa66uNwQjxlrIVYWVG_3fG-d5UVobZzz_nsDrDcYx-arp7-R8ruQvxsLD8Kf6r74UtXjWiLO9-Zl-j9Mnn8sqMAU1OHuWrnCfGgTQcvuCk"
          />
          <div className="recipe-heading">
            <div className="recipe-overlay">
              <div className="recipe-tags">
                <span>Vegan</span>
                <span>Gluten-Free</span>
              </div>
              <h1 className="recipe-name">Roasted Seasonal Veggie Bowl</h1>
              <div className="recipe-details">
                <div className="detail">
                  <span className="icon">
                    <Clock size={16} strokeWidth={1.5} />
                  </span>
                  <span>25 min</span>
                </div>
                <div className="detail">
                  <span className="icon">
                    <Flame size={16} strokeWidth={1.5} />
                  </span>
                  <span>450cal</span>
                </div>
                <div className="detail">
                  <span className="icon">
                    <UsersRound size={16} strokeWidth={1.5} />
                  </span>
                  <span>2 Servings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="main-content">
          <section className="ingredients-section">
            <div className="ai-note">
              <span className="ai-note-icon">
                <Leaf size={48} strokeWidth={1.5} />
              </span>
              <div className="ai-note-heading">
                <span>
                  <Sparkles />
                </span>
                <h3>Chef Bot-Ardee Note</h3>
              </div>

              <p class="ai-note-body">
                Selected sweet potatoes and kale to boost your Vitamin A intake
                based on your recent activity logs. The tahini dressing provides
                healthy fats essential for recovery.
              </p>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul className="ingredients-list">
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing1"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing1">
                    1 large Sweet Potato, cubed
                  </label>
                </li>
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing2"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing2">
                    2 cups Broccoli florets
                  </label>
                </li>
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing3"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing3">
                    1 cup Quinoa, cooked
                  </label>
                </li>
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing4"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing4">
                    1/2 cup Chickpeas, rinsed
                  </label>
                </li>
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing5"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing5">
                    2 tbsp Olive Oil
                  </label>
                </li>
                <li className="ingredient">
                  <input
                    className="custom-checkbox"
                    id="ing6"
                    type="checkbox"
                  />
                  <label className="checklist-label" for="ing6">
                    Salt &amp; Pepper to taste
                  </label>
                </li>
              </ul>
              <h3>Tahini Dressing</h3>
              <ul className="ingredients-list">
                <li className="ingredient">
                  <input className="custom-checkbox" id="dr1" type="checkbox" />
                  <label className="checklist-label" for="dr1">
                    3 tbsp Tahini
                  </label>
                </li>
                <li className="ingredient">
                  <input className="custom-checkbox" id="dr2" type="checkbox" />
                  <label className="checklist-label" for="dr2">
                    1 tbsp Lemon Juice
                  </label>
                </li>
                <li className="ingredient">
                  <input className="custom-checkbox" id="dr3" type="checkbox" />
                  <label className="checklist-label" for="dr3">
                    1 clove Garlic, minced
                  </label>
                </li>
              </ul>
            </div>
            <div className="macros">
              <div className="macros-title">
                <span className="material-symbols-outlined">analytics</span>
                <h3>Nutrition Breakdown</h3>
              </div>
              <div className="macro-group">
                <span className="macro">Protein</span>
                <span className="amount">28g</span>
              </div>
              <div className="macro-group">
                <span className="macro">Carbohydrates</span>
                <span className="amount">45g</span>
              </div>
              <div className="macro-group">
                <span className="macro">Fats</span>
                <span className="amount">18g</span>
              </div>
            </div>
          </section>
          <section className="instructions-section">
            <div className="instructions">
              <h2>Instructions</h2>
              <div className="steps">
                <div className="instruction-step">
                  <div className="step-indicator">
                    <div className="step-number">1</div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">Preheat and Prep</h3>
                    <p className="step-text">
                      Preheat your oven to 400°F (200°C). Line a large baking
                      sheet with parchment paper. Thoroughly wash the sweet
                      potato and broccoli.
                    </p>
                  </div>
                </div>

                <div className="instruction-step">
                  <div className="step-indicator">
                    <div className="step-number">2</div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">Roast the Vegetables</h3>
                    <p className="step-text">
                      Toss the cubed sweet potatoes and broccoli florets with
                      olive oil, salt, and pepper. Spread evenly on the baking
                      sheet. Roast for 20-25 minutes, or until the sweet
                      potatoes are tender and edges are slightly caramelized.
                    </p>
                  </div>
                </div>

                <div className="instruction-step">
                  <div className="step-indicator">
                    <div className="step-number">3</div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">Prepare the Dressing</h3>
                    <p className="step-text">
                      While vegetables are roasting, whisk together tahini,
                      lemon juice, minced garlic, and a pinch of salt in a small
                      bowl. Slowly add warm water, 1 tablespoon at a time,
                      whisking until the dressing reaches a pourable
                      consistency.
                    </p>
                  </div>
                </div>

                <div className="instruction-step">
                  <div className="step-indicator">
                    <div className="step-number">4</div>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">Assemble</h3>
                    <p className="step-text">
                      Divide the cooked quinoa between two bowls. Top with
                      roasted vegetables and rinsed chickpeas. Drizzle
                      generously with the tahini dressing and serve warm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}
export default Recipe;
