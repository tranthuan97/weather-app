import React from 'react';
import './banner.styles.css';
import { Button } from 'antd';

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <div style={{ color: 'white', flex: 1, maxWidth: 1024, padding: 15 }}>
        <h1 style={{ fontWeight: 700 }}>Vietnam</h1>
        <h2 style={{ fontWeight: 600 }}>Weather for the next 7 days</h2>
        <Button type="primary">Remove City</Button>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
