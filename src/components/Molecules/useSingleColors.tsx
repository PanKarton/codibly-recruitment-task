import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleColorResponse } from './../../../types/single-color-response';
export const useSingleColor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [colorData, setColorData] = useState<SingleColorResponse | null | undefined>();
  const { colorId } = useParams();

  useEffect(() => {
    const loadColors = async () => {
      try {
        setIsLoading(true);
        if (!colorId) return setColorData(null);

        const response = await fetch(`https://reqres.in/api/products?id=${colorId}`);
        const data = (await response.json()) as SingleColorResponse;

        setIsLoading(false);
        setColorData(data);
      } catch {
        setIsLoading(false);
        setColorData(null);
      }
    };
    loadColors();
  }, [colorId]);

  return {
    isLoading,
    colorData,
  };
};
