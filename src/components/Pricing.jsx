import React from 'react'

export default function Pricing() {
    const plans = [
        { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
        { name: "Premium", price: "$20/month", features: ["Feature 1", "Feature 2", "Feature 3"] },
        { name: "Enterprise", price: "Custom", features: ["All Features", "Priority Support"] },
      ];
  return (
    <div className="pricing-section">
      <h2>Buy Our Plans</h2>
      {plans.map((plan, index) => (
        <div key={index}>
          <h3>{plan.name}</h3>
          <p>{plan.price}</p>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button>Choose Plan</button>
        </div>
      ))}
    </div>
  )
}
