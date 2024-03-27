
import Head from 'next/head';
import "../public/assets/css/style.css"

const WeatherPage = ({ weatherData }) => {
    const { location, current } = weatherData;

    let d = current.air_quality['us-epa-index'];
    if (isNaN(d) || d < 1 || d > 5) {
        d = 5;
    }

    const getAqiMessage = (index) => {
        if (index === 1) {
            return 'Good';
        } else if (index === 2 || index === 3) {
            return 'Medium';
        } else if (index === 5 || index === 4) {
            return 'Bad';
        } else {
            return 'Bad';
        }
    };
    return (
        <>
            <Head>
                <title>Weather</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
            </Head>
            <main className=' mt-10'>
                <article className="container text-sm">
                    <div className="content-left">
                        <section className="section current-weather" aria-label="current-weather" data-current-weather>
                            <div className="card card-lg current-weather-card mt-10">
                                <h2 className="title-2 card-title">Now</h2>
                                <div className="wrapper">
                                    <p className="heading">{current.temp_c}<sup>°c</sup></p>
                                    <img src={current.condition.icon} width="64" height="64" alt="Overcast Clouds" className="weather-icon" />
                                </div>
                                <p className="body-3">{current.condition.text}</p>
                                <ul className="meta-list">
                                    <li className="meta-item">
                                        <span className="m-icon">calendar_today</span>
                                        <p className="title-2 meta-text font-bold">{location.localtime.slice(-5)}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                        <p className="title-2 meta-text font-bold">{location.localtime.slice(0,-5)}</p>
                                        
                                    </li>
                                    <li className="meta-item">
                                        <span className="m-icon pr-10">location_on</span>
                                        <p className="title-2 meta-text font-bold">
                                            {location.name},   {location.region},   {location.country}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="content-right">
                        <section className="section highlights" aria-labelledby="highlights-label" data-highlights>
                            <div className="card card-lg">
                                <h2 className="title-2" id="highlights-label">Today's Highlights</h2>
                                <div className="highlight-list">
                                    <div class="highlight-list">
                                        <div class="card card-sm highlight-card one">
                                            <h3 class="title-3">Air Quality Index</h3>
                                            <div class="wrapper">
                                                <span class="m-icon">air</span>
                                                <ul class="card-list">
                                                    <li class="card-item">
                                                        <p class="title-1">{current.air_quality.pm2_5}</p>
                                                        <p class="label-1">PM <sub>2.5</sub></p>

                                                    </li>
                                                    <li class="card-item">
                                                        <p class="title-1">{current.air_quality.pm10}</p>
                                                        <p class="label-1">PM <sub>10</sub></p>
                                                    </li>
                                                    <li class="card-item">
                                                        <p class="title-1">{current.air_quality.no2}</p>
                                                        <p class="label-1">NO <sub>2</sub></p>
                                                    </li>
                                                    <li class="card-item">
                                                        <p class="title-1">{current.air_quality.so2}</p>
                                                        <p class="label-1">SO <sub>2</sub></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={`badge aqi-${d} label-${d}`} label="Aqi Message">{getAqiMessage(d)}</span>
                                        </div>

                                        <div class="card card-sm highlight-card two">
                                            <h3 class="title-3">Cloud Coverage & UV Index</h3>
                                            <div class="card-list">
                                                <div class="card-item">
                                                    <span class="m-icon">cloud</span>
                                                    <div>
                                                        <p class="label-1">Cloud Coverage</p>
                                                        <p class="title-1">{current.cloud}<sub>%</sub></p>
                                                    </div>
                                                </div>
                                                <div class="card-item">
                                                    <span class="m-icon">flare</span>
                                                    <div>
                                                        <p class="label-1">UV Index</p>
                                                        <p class="title-1">{current.uv}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card card-sm highlight-card">
                                            <h3 class="title-3">Humidity</h3>
                                            <div class="wrapper">
                                                <span class="m-icon">humidity_percentage</span>
                                                <p class="title-1">{current.humidity}<sub>%</sub></p>
                                            </div>
                                        </div>
                                        <div class="card card-sm highlight-card">
                                            <h3 class="title-3">Pressure</h3>
                                            <div class="wrapper">
                                                <span class="m-icon">airwave</span>
                                                <p class="title-1">{current.pressure_mb}<sub>hPa</sub></p>
                                            </div>
                                        </div>
                                        <div class="card card-sm highlight-card">
                                            <h3 class="title-3">Visibility</h3>
                                            <div class="wrapper">
                                                <span class="m-icon">visibility</span>
                                                <p class="title-1">{current.vis_km}<sub>km</sub></p>
                                            </div>
                                        </div>
                                        <div class="card card-sm highlight-card">
                                            <h3 class="title-3">Feels like</h3>
                                            <div class="wrapper">
                                                <span class="m-icon">thermostat</span>
                                                <p class="title-1">{current.feelslike_c}&deg;<sup>c</sup></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            </main>
        </>
    );
};

export default WeatherPage;
