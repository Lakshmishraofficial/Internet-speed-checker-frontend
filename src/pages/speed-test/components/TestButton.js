import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../components/view-components/Button";
import { getData } from "../../../utils/api.js";
import { useTestResult } from "../../../contexts/testResultContext";
import { useAppAttributes } from "../../../contexts/appAttributesContext";

const StyledTestButton = styled(Button)`
  z-index: 2;
  cursor: pointer;
  padding: 1vw 1.5vw;
  position: relative;
  top: 15vh;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  color: #000000;
  font-weight: 500;
  font-size: var(--font-size-sm);

  & > .test-button-icon {
    color: #d32f2f; /* corporate red for accent */
    font-size: 1.2em;
  }

  &:hover {
    background-color: #f5f5f5;
    border-color: #b0b0b0;
  }

  &:hover > .test-button-icon {
    color: #900000; /* dark red on hover */
  }

  @media (max-width: 640px) {
    top: 50px;
    padding: 20px;
  }
`;

export default function TestButton() {
  const { setTestResult } = useTestResult();
  const { loading, setLoading, setError } = useAppAttributes();
 useEffect(() => {
   testSpeed(setTestResult, setLoading, setError);
 }, []); 
  return (
    <StyledTestButton
      size="sm"
      color="theme"
      circle={true}
      data-testid="test-button"
      disabled={loading}
      onClick={() => {
        testSpeed(setTestResult, setLoading, setError);
      }}
    >
      <span className="test-button-icon material-icons">replay</span>
    </StyledTestButton>
  );

  async function testSpeed(setTestResult, setLoading, setError) {
    setError(false);
    setLoading(true);

    await getData("")
      .then((res) => {
        setTestResult(res.data);
      })
      .catch((error) => {
        setError(true);
      });

    setLoading(false);
  }
}
