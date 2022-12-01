import React from 'react';
import { Col, Row } from 'antd';
import './weather-card.styles.css';

const WeatherCard: React.FC = () => {
  return (
    <div
      className="weather-card-container"
      style={{ textAlign: 'center', width: 'fit-content', padding: 15, borderRadius: 10 }}
    >
      <div>Friday</div>
      <div>25</div>
      <img src="https://openweathermap.org/img/wn/04d@2x.png" />
      <div>Vietnam</div>
      <div>Overcast clouds</div>
      <div style={{ background: 'rgba(255, 255, 255, 0.36)', padding: 5, borderRadius: 15 }}>
        <Row gutter={[16, 16]}>
          <Col style={{}}>
            <div>Current Temp.</div>
            <div>18 ºC</div>
          </Col>
          <Col>
            <div>Current Temp.</div>
            <div>18 ºC</div>
          </Col>
          <Col>
            <div>Current Temp.</div>
            <div>18 ºC</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
