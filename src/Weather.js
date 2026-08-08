import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          
'https://api.open-meteo.com/v1/forecast?latitude=-6.20&longitude=106.80&current_weather=true'
        );
        if (!response.ok) {
          throw new Error('Gagal mengambil data cuaca');
        }
        const data = await response.json();
        setWeather(data.current_weather);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);
if (loading) return (
  <div style={{ margin: '20px 0', padding: '15px', background: 
'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
    <p>⏳ Memuat data cuaca...</p>
  </div>
);
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div style={{ margin: '20px 0', padding: '15px', background: 
'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
      <h3>🌤️ Cuaca Hari Ini</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' 
}}>{weather.temperature}°C</p>
      <p>Jakarta, Indonesia</p>
    </div>
  );
}

export default Weather;
