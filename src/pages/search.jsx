
import { useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from 'react-router-dom';
import '../css/button.css';
import '../css/search.css';
export default function SearchPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('')

    const handleClick = () => {
        navigate('/result', { state: { query: query } })
    }

    const handleChange = (text) => {
        setQuery(text)
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Page</h1>

            <div className="flex gap-2 mb-4">
                <Input
                    type="text"
                    onChange={(event) => handleChange(event.target.value)}
                    placeholder="Enter your search query"
                    value={query}
                    className="search-input"
                />
                <Button className='button' variant="destructive" size="default" onClick={handleClick}>Search</Button>
            </div>
        </div>
    )
}
