import React from "react";
import styled from "styled-components";
import Speedometer from "./Speedometer/Speedometer";

const StyledSpeedTestChart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 0 8vw;
  color: var(--lighter-text-color);

  & > .speed-test-text {
    position: relative;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    bottom: 130px;
    z-index: 1;
    font-size: var(--font-size-md);
    font-weight: bold;

    & > img {
      width: 70px; /* Adjust as needed */
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    padding: 0 5vw;

    & > .speed-test-text {
      font-size: var(--font-size-md); /* Smaller font for mobile */
      gap: 10px; /* Reduce gap for better spacing */

      & > img {
        width: 50px; /* Smaller image size on mobile */
      }
    }
  }

  /* Extra small devices (like small phones) */
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 3vw;

    & > .speed-test-text {
      font-size: var(
        --font-size-lg
      ); /* Even smaller font on extra small screens */
      bottom: 100px; /* Adjust bottom position */
      gap: 5px;

      & > img {
        width: 40px; /* Further reduce image size */
      }
    }
  }
`;

export default function SpeedTestChart() {
  return (
    <StyledSpeedTestChart>
      <div className="speed-test-text">
        <img
          src="https://a.storyblok.com/f/114532/84x84/784074d2e3/logo_default_color.svg"
          alt="Spardha Logo"
        />
        <div className="speed-text">Spardha Internet Speed Tester</div>
      </div>

      <Speedometer />
    </StyledSpeedTestChart>
  );
}
