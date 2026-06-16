import "./Profile.css";

function Profile() {
  return (
    <>
      <main className="content-container">
        <section className="profile-header">
          <div className="header-pic">
            <img
              alt="Eleanor Shellstrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnnxw-TFalTMmfAA4NYR85LuwnYKQSmVkoOictsqSgmdK8Xzr6cufB5lyLF0euJVRw9U7H_Faw7VO7gNxRWKM2IWPHZnffNeS-s8xNU-IhKh7Z89Nbz0_bybDwngERSD0YCYB5xj7YYmwp2IoDBSceMyy9XZUmCjFpe1wtSXjEWz5uqyxv6cLSOES-R-ZDe-LtCSBllGIil-YkAJQNJYHD9FCFkd-_5SYDzlK6vjCTC0ftDrnAJ9qE5G2c83wU9hZARt2xcrI2qc0"
            />
          </div>
          <div className="header-text">
            <h1 className="name">Eleanore Shellstrop</h1>
            <p className="profile-bio">
              Culinary explorer leaning towards plant-based meals. Always
              looking for quick weeknight dinners that don't compromise on
              flavor or nutrition.
            </p>
            <div className="badges">
              <span className="badge badge-streak">
                <span className="material-symbols-outlined profile-icon">
                  local_fire_department
                </span>
                14 Day Streak
              </span>
              <span className="badge badge-diet">Vegetarian Lean</span>
              <button className="btn-outline">Edit Profile</button>
            </div>
          </div>
        </section>
        <section className="saves-container">
          {/* <div className="saves heading"></div> */}
          <h2>Saved Recipes</h2>
          <div className="filter-bars">
            <div className="search-wrapper">
              <span className="material-symbols-outlined search-icon">
                search
              </span>
              <input
                className="search-input"
                placeholder="Search saved recipes..."
                type="text"
              />
            </div>
            <select className="filter-select">
              <option value="">Cuisine</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="asian">Asian</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
            </select>
            <select className="filter-select">
              <option value="">Meal Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
            <select className="filter-select">
              <option value="recent">Sort by: Recent</option>
              <option value="alpha">Alphabetical</option>
              <option value="cooktime">Cook Time</option>
            </select>
          </div>
          <div className="saves">
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Miso Glazed Salmon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHpm7z-WSubgre7OwP3xrZsp-AiyT_oA9aHCPCKeRYSPZOwQwOVgHeVmuKNoWNn2vAZtZLCFMAcgrJcZ0Z_X-w4-ZXlhQH4BlEj5o-7ZGXuZiZpd2G-xUytumUMUyvYwhmJf_78RzyqcC892pUuxFYAZmFhdZ1ksA9lxlhHYyazjv0Nv0aiNmgJ4MpCYm-iLddZGSxZXxj8nAbcUXm41CYdm-4KjY1csZak6harA7qggcM7kdUOj3p6AWUWCWA9uY1vBR1oge074c"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Miso Glazed Salmon with Asparagus
                </h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    20m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Easy
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    420 Cal
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- Card 2 --> */}
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Garden Buddha Bowl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbVclnBGZc5ovE48KBdmPWTRIPQUaDWGkXZq-s9xLk8gRXZQoGTKA7h30DpB5wNhxiPjm-3E_ne4k7BLV0L6d7w0e-yWkv2WXi66ITjz8f91ApcGZAR-6F-Z4mAhy9lpHZHlNu7ycVlIvwINSaL8mxJ8j3luwH-aiuDxxKTmK-6_rKuUOd9iuGHzipUf-PYRP6bvGy1nmPNHxuF6ih_XRbwUnGZFwDXgzoPG1kvt1UiCjqYQe-eiSMPzO7kwXcLMEifSkx3JA0DmM"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">Rainbow Garden Buddha Bowl</h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    15m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Easy
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    380 Cal
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- Card 3 --> */}
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Mushroom Risotto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Fc4mTi9FpIfGISOgKooHbMjV9LJoRQ27AxSrP7IY0EBdljHbhYvpVGoiJeoXFziYLZrVDsR5pVjoIuc61_mxCoAOkpsAoRmy4nXZDFrJ6ihz-U1bCis2zGQtVHlLv_1yGLYwrcX6iufSmEjdo_7AOSgnSyFWOqAkisssY1NTzoS3qXeVWZVvnY78HADF4kUrJYwUfarwBw-z5ShL2B02pjBsMAXd9sdJdUIWjUX2_Mhb7FLZ1UjdBUppilsUFmCi8rtrMQ1nAQo"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">Earthy Wild Mushroom Risotto</h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    45m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Medium
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    540 Cal
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- Card 4 --> */}
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Mediterranean Quinoa"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt9RkVFiUy85bjTXHRSYNqAgnFQL-FNgFhR50P0OD3pkp_xiDi66gzpUzWZ1OmDw14eykvFgmdOV2CmdbUskP3Xe9DZO2eR4aflpsmT2MzKwNZnJ_A0knlrDSRTf0iizz_cB7Op4jDvd0SUIpitLKH8YxXVu_0Fs538B4509l8n4AZgIU7Tn-UB8_NvLiW_mIfYO-VUYhdXpAJuELDfJD6_kFE3Fxu7itcTlqXDYNrGUCI9nGpoQctFyofIkvcnwdqwCWy4Id-Jf0"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Sun-Dried Tomato Mediterranean Quinoa
                </h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    25m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Easy
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    310 Cal
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- Card 5 --> */}
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Zucchini Chickpea Skillet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqUuchV6PJkTB_iIHAnQxHsMEB2IdQRrM8vL5e0tIo---AhHl-ctM_LgmOZqTEgaGfg38qyGNLk2jadjw0BrDPZpaRyRB-ExAxodGfR80MaAr4dgmupIdy1vNgvpKorzn64bq2ePBQ2xMVOfM--nt6J-OVjCi4tqbNWxUuU5_wBreMh5nUHXtero740CPExZzvRo6b21Doiv0SgaigTGtNnLVXE2WoCY2JBUhUTUB_vpUf5UMUm6Pr-VV2obKXGD8qggGQjxg4_JI"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  High-Protein Zucchini Chickpea Skillet
                </h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    30m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Easy
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    450 Cal
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- Card 6 --> */}
            <article className="recipe-card">
              <div className="card-image-wrapper">
                <img
                  alt="Pesto Pasta"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_y5Q8mQV1Fe1lF5dvrp4bSHGR_Hf8Jx3SJGU9_TCZqkzBOw_V-QNqQavwvD_NBgSCNNFl0mfHBsy1G54BGgIVnYEPxPD6NDMxR8P1Z-Xq7hcY3_7wJhVf2BJ75mKq1fS2ome6zmuU0E3Jbefg0mqLo2rLrGQuQ_JFoLpwnqm6DutSDow5pZ67ThocjYNpzuWbfS_hm2DYSq-PrlVSpr5dlUpRyp_xutbJ9JF4EKvnTV61qaFJhGuRefqGCjRkLHd7balpwTrZ55k"
                />
                <button className="bookmark-btn">
                  <span
                    className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="card-content">
                <h3 className="card-title">Creamy Walnut Pesto Fusilli</h3>
                <div className="card-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">schedule</span>{" "}
                    15m
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      signal_cellular_alt
                    </span>
                    Easy
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">nutrition</span>{" "}
                    480 Cal
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
