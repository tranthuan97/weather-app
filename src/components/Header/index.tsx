import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 1024,
        padding: 15
      }}
    >
      <div>
        <h2 style={{ fontWeight: 700, marginBottom: 0 }}>Weather App</h2>
      </div>
      <div>
        <Button type="primary" icon={<MenuOutlined />} />
      </div>
    </div>
  );
};

export default Header;
