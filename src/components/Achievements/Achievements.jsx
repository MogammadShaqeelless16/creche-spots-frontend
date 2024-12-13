import React from "react";
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "Samsung",
      description: "Founders Week Accelerator",
      image: "./shaqeel.png"
    },
    {
      id: 2,
      name: "Top Achievement",
      description: "",
      image: "./badge.png"
    },
    {
      id: 3,
      name: "Al Baraka Bank",
      description: "Entrepreneur Accelerator",
      image: "./delisha.png"
    }
  ];

  return (
    <div className="achievements-container">
      <div className="achievements-title">
        <h1>Achievements so far</h1>
        <p>Proudly standing among the top three:</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-item">
            <img 
              src={achievement.image} 
              alt={`Achievement ${achievement.id}`} 
            />
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
