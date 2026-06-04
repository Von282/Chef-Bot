import {
  Search,
  CirclePlus,
  ChevronDown,
  X,
  Clock4,
  Hourglass,
  Signal,
  ArrowRight,
  Leaf,
  WheatOff,
  Dumbbell,
} from "lucide-react";
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
                {/* <div className="ingredients-wrapper"> */}
                <div class="ingredient-chip">
                  <span>Spinach</span>
                  <span class=" icon chip-close">
                    <X size={14} />
                  </span>
                </div>
                <div class="ingredient-chip">
                  <span>Quinoa</span>
                  <span class=" icon chip-close">
                    <X size={14} />
                  </span>
                </div>
                <div class="ingredient-chip">
                  <span>Avocado</span>
                  <span class=" icon chip-close">
                    <X size={14} />
                  </span>
                </div>
                {/* </div> */}
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
          <div className="recipes">
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Mediterranean Bowl"
                  class="card-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxmv24ETjfXrM0L6t3UA6ySgHupAHnXgqGS0chdTZEssyxmPnNzc5vvoQeca8f-XKU3K6qNlcwgApMLVTeW3_sNe_hw0WTQ1yZGqgLdwoZ_OETnuK0iu8sTJhV68rSvhLI6DBd1MBVEyYL6DXgoLWDuk8kyOoveRh7Iym2lZCT2xf4C0D6n7X-IW8hZ1yHY4odh50R_iASCfp0TTQKwx3ms_ky5Lllxwfu2tDXP5Bx_MRSAtvqm2WyI6JyjI5vodWVrUH1qZTs3e0"
                />
                <div className="diet-badge">
                  <span className="material-symbols-outlined diet-icon">
                    <Leaf size={14} strokeWidth={1.5} />
                  </span>
                  Vegan
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Mediterranean Power Bowl</h3>
                <p className="card-description">
                  A high-protein blend of spinach and quinoa topped with
                  seasoned chickpeas and fresh lemon tahini dressing.
                </p>
                <div className="card-footer">
                  <div className="time-level">
                    <div className="time">
                      <span className=" icon time-icon">
                        <Clock4 size={14} strokeWidth={1.25} />
                      </span>{" "}
                      15m
                    </div>
                    <div className="level">
                      <span className=" icon level-icon">
                        <Signal size={14} strokeWidth={1.5} />
                      </span>{" "}
                      Easy
                    </div>
                  </div>
                  <button className="view-recipe-btn">
                    <span className=" icon view-recipe-icon">
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </article>
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Mediterranean Bowl"
                  class="card-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_uRksqTZToAmikr8rC2ilsIXl52Qhrnsqy_wTBkywgL0KUm7meC9xFcD2M68dSVa2VUsAHkHdRELajwhAaGlZbNGq0a2FVPKQL2MqV7rofIzmrUbHH_RTvCVBxkrdZkuDR96gGaCtvjQhWUUROZxOCylGzQkNUlX6PxclOo5YFaguOesur5tKdB6sgp9d7DfekGWgPD1gGEdndcd3WaCrpr2Z1MgPfFMmppPHpR-EohBhmd1PScl7zyhGmbWpXfPN6e11UhCLTM"
                />
                <div className="diet-badge">
                  <span className=" icon diet-icon">
                    <Dumbbell size={14} strokeWidth={1.5} />
                  </span>
                  Keto
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Avocado &amp; Green Crunch</h3>
                <p className="card-description">
                  Focus on healthy fats with this fiber-rich avocado salad
                  tossed with roasted almonds and hemp seeds.
                </p>
                <div className="card-footer">
                  <div className="time-level">
                    <div className="time">
                      <span className=" icon time-icon">
                        <Clock4 size={14} strokeWidth={1.25} />
                      </span>{" "}
                      10m
                    </div>
                    <div className="level">
                      <span className=" icon level-icon">
                        <Signal size={14} strokeWidth={1.5} />
                      </span>{" "}
                      Medium
                    </div>
                  </div>
                  <button className="view-recipe-btn">
                    <span className=" icon view-recipe-icon">
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </article>
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Mediterranean Bowl"
                  class="card-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5gfp49WAasvWXkJxZ2I_Oe1mm2prRmCauD3SPxGngHajRZmpJ-cFwyngkbdnv8jOrqedh2zFUlRPK1v9uPpRVMK90v0ot8zM4CTkP3BZkM2FvCASXghiIHNCpRjznDC4ktu-7HEIF5Rw3Xw3GjAsZ-MonCpITRW9Y9wzwFiWAgDO6tboB9sU7Sl5wxC71DSk3gnRVZ5KJME2y8l7uZilYb5GyYFM52-BR78IgqZwP3A-tmIKGIMAueZFhc1cQqj46CKbCuS-lrsk"
                />
                <div className="diet-badge">
                  <span className=" icon diet-icon">
                    <WheatOff size={14} strokeWidth={1.5} />
                  </span>
                  Gluten-Free
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Golden Quinoa Stir-Fry </h3>
                <p className="card-description">
                  A warm, comforting stir-fry utilizing quinoa as a grain
                  substitute with seasonal greens and ginger.
                </p>
                <div className="card-footer">
                  <div className="time-level">
                    <div className="time">
                      <span className=" icon time-icon">
                        <Clock4 size={14} strokeWidth={1.25} />
                      </span>{" "}
                      25m
                    </div>
                    <div className="level">
                      <span className=" icon level-icon">
                        <Signal size={14} strokeWidth={1.5} />
                      </span>{" "}
                      Easy
                    </div>
                  </div>
                  <button className="view-recipe-btn">
                    <span className=" icon view-recipe-icon">
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </div>
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
