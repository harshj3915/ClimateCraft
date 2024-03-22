"use client"
import { useState, useEffect } from 'react';
import INTRO from "@/components/intro";
import NavbarDark from "@/components/navbar";
import WeatherPage from '@/components/tempinfo';

export default function Home({ params }) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      setLoading(true); // Set loading to true when a new search is triggered

      try {
        const response = await fetch(`https://pixabay.com/api/?key=42994632-d0786b121de2f8255a448a2e6&safesearch=true&q=${params.SN.replace(/ /g, '+')}&image_type=illustration&category=background&per_page=3&orientation=horizontal&colors="gray","black","brown","red","orange","yellow","green","turquoise","blue","lilac","pink","grayscale"`);
        if (!response.ok) {
          throw new Error('Failed to fetch background image');
        }
        const data = await response.json();
        const { hits } = data;
        if (hits.length > 0 && hits[0].largeImageURL) {
          setBackgroundImage(hits[0].largeImageURL);
        } else {
          setBackgroundImage('/trial1.png'); // Use default background image
        }
      } catch (error) {
        console.error('Error fetching background image:', error);
        setBackgroundImage('/trial1.png'); // Use default background image
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=717b2ead64cd49d39c995712242103&q=${params.SN}&aqi=yes`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null); // Clear weather data if there's an error
      }
    };

    fetchBackgroundImage();
    fetchWeatherData();
  }, [params.SN]); // Add params.SN as a dependency

  return ( <div style={{ position: 'absolute' }} className="absolute inset-0 bg-cover bg-center bg-no-repeat">
  {loading ? (
    <div className="flex justify-center items-center h-full">
      <p>Loading...</p>
    </div>
  ) : (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(4,47,102,0.7), rgba(4,47,102,1))',
          zIndex: -2,
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          zIndex: -1,
          backgroundSize: 'cover',
        }}
      ></div>
      <NavbarDark />
      {weatherData ? (
        <WeatherPage weatherData={weatherData} />
      ) : (
        <div className="text-white">
          <p>No weather data available</p>
        </div>
      )}
    </>
  )}
</div>
);
};