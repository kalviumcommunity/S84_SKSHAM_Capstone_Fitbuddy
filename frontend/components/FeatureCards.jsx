const features = [
    { title: "Workout Plans", desc: "Personalized fitness routines." },
    { title: "Calorie Counter", desc: "Track your daily intake." },
    { title: "Progress Charts", desc: "Visualize your journey." }
  ];
  
  export default function FeatureCards() {
    return (
      <section className="feature-section">
        <h2 className="section-title">Features</h2>
        <div className="card-grid">
          {features.map((f, i) => (
            <div key={i} className="card">
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  