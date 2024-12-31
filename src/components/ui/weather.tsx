import React from "react"

interface WeatherData {
    location: {
        name: string
        region: string
        country: string
        localtime: string
    }
    current: {
        temp_c: number
        condition: {
            text: string
            icon: string
        }
        wind_kph: number
        wind_dir: string
        humidity: number
        feelslike_c: number
    }
}

interface WeatherDisplayProps {
    data: WeatherData
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
    const { location, current } = data

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl font-semibold">{location.name}</h2>
                    <p className="text-gray-600">{`${location.region}, ${location.country}`}</p>
                </div>
                <img
                    src={current.condition.icon}
                    alt={current.condition.text}
                    className="w-16 h-16"
                />
            </div>
            <div className="mb-4">
                <p className="text-4xl font-bold">{current.temp_c}°C</p>
                <p className="text-gray-600">{current.condition.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-600">Feels like</p>
                    <p className="font-semibold">{current.feelslike_c}°C</p>
                </div>
                <div>
                    <p className="text-gray-600">Wind</p>
                    <p className="font-semibold">{`${current.wind_kph} km/h ${current.wind_dir}`}</p>
                </div>
                <div>
                    <p className="text-gray-600">Humidity</p>
                    <p className="font-semibold">{current.humidity}%</p>
                </div>
                <div>
                    <p className="text-gray-600">Local time</p>
                    <p className="font-semibold">{location.localtime}</p>
                </div>
            </div>
        </div>

    )
}