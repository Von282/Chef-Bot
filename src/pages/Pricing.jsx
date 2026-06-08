import {
  CircleCheck,
  ShieldCheck,
  CreditCard,
  Wallet,
  WalletCards,
} from "lucide-react";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <main className="content-container">
        <div className="heading">
          <h1>Invest in Your Culinary Journey</h1>
          <p>
            Unlock the full power of algorithmic precision in your kitchen. One
            simple payment, lifetime access to endless inspiration.
          </p>
        </div>
        <div className="main-content">
          <div className="pricing-card">
            <div className="image-wrapper"></div>
            <div className="pricing-details">
              <span className="access">LIFETIME ACCESS</span>
              <div className="price">
                <span className="amount">$49</span>
                <span className="currency">USD / once</span>
              </div>
              <ul className="perks">
                <li className="perks-item">
                  <span className="checkmark">
                    <CircleCheck size={16} strokeWidth={1.5} />
                  </span>
                  Unlimited AI Recipe Generations
                </li>
                <li className="perks-item">
                  <span className="checkmark">
                    <CircleCheck size={16} strokeWidth={1.5} />
                  </span>
                  Save Unlimited Recipes
                </li>
                <li className="perks-item">
                  <span className="checkmark">
                    <CircleCheck size={16} strokeWidth={1.5} />
                  </span>
                  Custom Ingredient &amp; Allergy Filters
                </li>
                <li className="perks-item">
                  <span className="checkmark">
                    <CircleCheck size={16} strokeWidth={1.5} />
                  </span>
                  Completely Ad-Free Experience
                </li>
              </ul>
              <div className="money-back">
                <span className="symbol">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                </span>
                <span>30-day money-back guarantee. No questions asked.</span>
              </div>
            </div>
          </div>
          <div className="checkout-card">
            <h2 className="checkout-heading">Secure Checkout</h2>
            <div className="pay-btns">
              <button className="apple-pay">
                <span>
                  <Wallet size={16} strokeWidth={1.5} />
                </span>
                Pay with Apple Pay
              </button>
              <button className="google-pay">
                <span>
                  <WalletCards size={16} strokeWidth={1.5} />
                </span>
                Pay with Google Pay
              </button>
            </div>
            <div className="divider">
              <span className="divider-text">OR PAY WITH CARD</span>
            </div>
            <form action="" className="form">
              <div className="email">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="chef@kitchen.com"
                  className="form-input"
                  required
                />
              </div>
              <div className="card-details">
                <label htmlFor="card-number" className="form-label">
                  Card Details
                </label>
                <div className="card-icon">
                  <span>
                    <CreditCard size={20} strokeWidth={2} />
                  </span>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="0000 0000 0000 0000"
                    className="form-input"
                    required
                  />
                </div>
                <div className="card-expiry">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="MM/YY"
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    id="cvc"
                    placeholder="CVC"
                    className="form-input"
                    required
                  />
                </div>
                <div className="name-region">
                  <div className="name">
                    <label htmlFor="name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="country">
                    <label htmlFor="country" className="form-label">
                      Country or Region
                    </label>
                    <select name="country" className="form-input" id="country">
                      <option value="">United States</option>
                      <option value="">Canada</option>
                      <option value="">Brazil</option>
                      <option value="">United Kingdom</option>
                      <option value="">Australia</option>
                      <option value="">Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <button>Pay $49</button>
              <p>
                Payments are processed securely. We never store your card
                details.
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pricing;
