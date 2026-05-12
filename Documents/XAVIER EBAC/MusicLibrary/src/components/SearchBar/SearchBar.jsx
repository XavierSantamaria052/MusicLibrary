import { useState } from "react";
import { Form, Input, Button } from "./SearchBar.styles";
    
    const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (trimmed) onSearch(trimmed);
    };
    
    return (
        <Form onSubmit={handleSubmit}>
        <Input
            type="text"
            placeholder="Buscar artista... (ej: Coldplay, Oasis)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Nombre del artista"
        />
        <Button type="submit">Buscar</Button>
        </Form>
    );
    };
    
export default SearchBar;