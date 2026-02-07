import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

interface UseApiOptions<T> {
  initialData?: T;
  manual?: boolean;
}

export function useApi<T>(
  url: string, 
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | undefined>(options.initialData);
  const [loading, setLoading] = useState(!options.manual);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.get(url);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.message || 'Erro na requisição');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!options.manual) {
      fetchData();
    }
  }, [fetchData, options.manual]);

  return { data, loading, error, refetch: fetchData };
}