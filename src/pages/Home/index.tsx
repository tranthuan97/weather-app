import React from 'react';
import Banner from 'src/components/Banner';
import Header from 'src/components/Header';
import WeatherCard from 'src/components/WeatherCard';

const Home: React.FC = () => {
  return (
    <div>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <Header />
      </div>
      <div style={{ marginBottom: 15 }}>
        <Banner />
      </div>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: 1, maxWidth: 1024, padding: 15 }}>
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
