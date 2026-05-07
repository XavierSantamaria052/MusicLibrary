import { useState, useEffect, useCallback } from "react";
    
    const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = useCallback(async () => {
        if (!url) return;
    
        setLoading(true);
        setError(null);
    
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        } catch (err) {
        setError(err.message || "Error desconocido al obtener datos.");
        } finally {
        setLoading(false);
        }
    }, [url]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return { data, loading, error, refetch: fetchData };
    };
    
export default useFetch;