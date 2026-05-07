import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (trimmed) {
        onSearch(trimmed);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        handleSubmit(e);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
        <input
            type="text"
            className="search-input"
            placeholder="Buscar artista... (ej: Coldplay, Oasis)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Nombre del artista"
        />
        <button type="submit" className="search-button">
            Buscar
        </button>
        </form>
    );
};

export default SearchBar;