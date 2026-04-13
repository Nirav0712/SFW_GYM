"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Flame,
  TrendingUp,
  MonitorPlay,
  Users,
  Apple,
  CheckCircle2,
  ArrowRight
} from "lucide-react";


const Services = () => {
  const servicesData = [
    {
      title: "Personal Training",
      desc: "One-on-one customized workout sessions with elite certified experts.",
      icon: <Dumbbell />,
      features: ["Certified Trainer", "Custom Plan", "Strength Focus", "Fat Loss"],
      popular: false,
    },
    {
      title: "Weight Loss",
      desc: "Transform your body and mind with our high-impact fat loss system.",
      icon: <Flame />,
      features: ["Burn Workouts", "Diet Included", "Track Progress", "Fast Results"],
      popular: false,
    },
    {
      title: "Muscle Build",
      desc: "Gain maximum strength and high-quality lean muscle mass.",
      icon: <TrendingUp />,
      features: ["Hypertrophy", "Progress Lab", "Supplements", "Advanced Pro"],
      popular: false,
    },
    {
      title: "Online Coach",
      desc: "Get elite-level coaching from anywhere, on your own schedule.",
      icon: <MonitorPlay />,
      features: ["Video Support", "Diet Support", "24/7 Chat", "Check-ins"],
      popular: false,
    },
    {
      title: "Group Train",
      desc: "High-energy, motivating workouts in a social group environment.",
      icon: <Users />,
      features: ["Motivating", "Fun Sessions", "HIIT Plan", "Affordable"],
      popular: false,
    },
    {
      title: "Nutrition",
      desc: "Fuel your performance with scientifically-backed meal plans.",
      icon: <Apple />,
      features: ["Custom Diet", "Protein Guide", "Meal Plans", "Healthy Life"],
      popular: false,
    },
  ];

  return (
    <Wrapper>
      <div className="grid-container">
        {servicesData.map((service, index) => (
          <motion.div
            className={`card ${service.popular ? "popular-card" : ""}`}
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Background Icon Watermark */}
            <div className="watermark-icon">
              {service.icon}
            </div>

            <div className="accent-bar" />

            <div className="card-header">
              <div className="icon-badge">
                {service.icon}
              </div>
              <h3 className="card_title">{service.title}</h3>
            </div>

            <p className="card_paragraph">{service.desc}</p>

            <div className="feature-grid">
              {service.features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <CheckCircle2 className="check-icon" size={14} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            {/* 
            <motion.button
              className="action-button"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              JOIN NOW <ArrowRight size={18} />
            </motion.button> */}

            {/* Slanted Hover Reveal */}
            <div className="hover-slant" />
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  padding: 100px 5%;
  background: #000;
  overflow: hidden;

  .grid-container {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .card {
    --primary: #79B537; /* Signature Brand Green */
    --card-bg: #09090aff;
    
    position: relative;
    padding: 40px 30px;
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;

    &:hover {
      transform: translateY(-10px);
      border-color: var(--primary);
      box-shadow: 10px 10px 0px var(--primary); /* Inked Shadow */
    }
  }

  .popular-card {
    border: 1px solid var(--primary);
    background: #09090aff;
    
    .accent-bar {
      height: 100%;
      width: 6px;
    }
  }

  .accent-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 40px;
    background: var(--primary);
    transition: height 0.4s ease;
  }

  .card:hover .accent-bar {
    height: 100%;
  }

  .watermark-icon {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    opacity: 0.03;
    color: #fff;
    transform: rotate(-15deg);
    z-index: 0;
    pointer-events: none;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 2;
  }

  .icon-badge {
    width: 45px;
    height: 45px;
    background: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }

  .card_title {
    font-size: 24px;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .card_paragraph {
    font-size: 14px;
    color: #94a3b8;
    line-height: 1.6;
    max-width: 100%;
    z-index: 2;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
    z-index: 2;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #cbd5e1;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .check-icon {
    color: var(--primary);
  }

  .action-button {
    margin-top: 10px;
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    padding: 12px 25px;
    font-weight: 900;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;

    &:hover {
      background: var(--primary);
      color: #000;
    }
  }

  .hover-slant {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(121, 181, 55, 0.05), transparent);
    transition: left 0.6s ease;
    z-index: 1;
  }

  .card:hover .hover-slant {
    left: 100%;
  }
`;