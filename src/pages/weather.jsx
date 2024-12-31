
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import WeatherDisplay from '../components/ui/weather.tsx'


export default function WeatherPage() {

    const [weather, setWeather] = useState(null)
    const query = location.state?.query;
    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                try {
                    const response = await axios.get(`http://localhost:8080/location?queries=${query}`);
                    console.log("Data received from API:", response.data);

                    if (response.data && Array.isArray(response.data.data)) {
                        setData(response.data.data);
                    } else {
                        console.error("Expected data to be an array, but got:", response.data);
                        setData([]);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Weather Forecast</h1>
                {loading && <p className="text-center mt-4">Loading...</p>}
                {!loading && weatherData && <WeatherDisplay data={weatherData} />}
                {!loading && !weatherData && city && (
                    <p className="text-center mt-4">No weather data found for {city}</p>
                )}
            </div>
        </div>
    )
}