import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import React, { useState } from "react";

import { donationRecord } from "../data/DonationData";
import { styles } from "../styles/widget";

function DonationWidget() {
  const [donationState, updatedonationState] = useState(donationRecord);
  const { paidAmount, requiredAmount } = donationState;
  const paidPercentage = `${
    paidAmount ? (paidAmount / requiredAmount) * 100 : 0
  }%`;
  const [formInput, setFormInput] = useState(localStorage.getItem("formInput"));
  const [error, setError] = useState(null);
  const remainingDays = () => {
    const currentDate = new Date();
    const lastDate = new Date(2022, 2, 1);
    const oneDay = 24 * 60 * 60 * 1000;

    const diffDays = Math.round(Math.abs((currentDate - lastDate) / oneDay));
    return diffDays;
  };
  const donate = () => {
    if (Math.floor(formInput) < 0) {
      setError("Invalid input add a positive number");
    } else if (
      Math.floor(paidAmount) + Math.floor(formInput) >
      requiredAmount
    ) {
      setError("Your amount is exceeding the budget");
    } else {
      setError(null);
      updatedonationState({
        ...donationState,
        paidAmount: paidAmount
          ? Math.floor(paidAmount) + Math.floor(formInput)
          : formInput,
      });
    }
  };
  return (
    <Row className="App">
      <Col style={styles.widgetContainer}>
        <div>
          {paidAmount && (
            <div style={styles.notificationContainer}>
              <div style={styles.notificationRectangle}>
                <strong style={{ marginRight: 5 }}>
                  {`$${requiredAmount - paidAmount}`}{" "}
                </strong>{" "}
                still needed for this project
              </div>
              <div style={styles.bottomTriangle}></div>
            </div>
          )}
          <Card style={styles.topBar}>
            <div
              style={{ ...styles.topBarFilled, width: paidPercentage }}
            ></div>
          </Card>
          <Card style={styles.mainCard}>
            <Card.Body>
              <div style={styles.flex}>
                <strong style={styles.coloredText}>
                  {`Only ${remainingDays()} days left`}
                </strong>
                <p style={{ color: "#828282" }}> to fund this project</p>
              </div>
              <div style={styles.flex}>
                <p style={styles.mainText}>
                  Join the
                  <strong style={styles.boldNumber}>42</strong>
                  other donors who have already supported this project. Every
                  dollar helps
                </p>
              </div>
              <Row>
                <Col xs={7}>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      size="lg"
                      type="number"
                      placeholder={formInput}
                      onChange={(event) => {
                        setFormInput(event.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Button
                    style={styles.donateButton}
                    onClick={donate}
                  >
                    Give Now
                  </Button>
                </Col>
              </Row>
              <div style={styles.textContainer}>
                {error && <p style={styles.errorText}>{error}</p>}
                <i style={styles.italicText}>Why give $50</i>
              </div>
            </Card.Body>
          </Card>
          <Row style={styles.buttonContainer}>
            <Col>
              <Button
                variant="outline-secondary"
                style={styles.button1}
                onClick={() => {
                  localStorage.setItem("formInput", formInput);
                }}
              >
                Save for Later
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" style={styles.button2}>
                Tell your friends
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default DonationWidget;
