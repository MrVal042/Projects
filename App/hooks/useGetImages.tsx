import React from 'react';
import {API_URL, PEXELS_API_KEY} from '@constant';

export type GalleryImageProps = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: false;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  url: string;
  width: number;
};

type IData = {
  next_page: string;
  page: number;
  per_page: number;
  photos: GalleryImageProps[];
  total_results: number;
};
type IResponse = {
  isLoading: boolean;
  data: IData | null;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
};
const initValues = {
  data: null,
  error: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export default function useGetImages() {
  const [response, setResponse] = React.useState<IResponse>(initValues);

  React.useEffect(() => {
    try {
      const fetchImages = async () => {
        setResponse({
          ...initValues,
          isLoading: true,
        });
        const data = await fetch(API_URL, {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        });
        const results = await data.json();
        setResponse({
          ...initValues,
          data: results,
          isLoading: false,
          isSuccess: true,
        });
      };
      fetchImages();
    } catch (error) {
      setResponse({
        ...initValues,
        isError: true,
        error: JSON.stringify(error),
      });
    }
  }, []);

  return {...response};
}
