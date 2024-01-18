import { useEffect, useState } from 'react';

import { fetchAPOD } from '../../app/api';

import type { DateInput, APODResponseShape } from '../../app/api';
import { APODImage } from '../APODImage/APODImage';

import './APODImageBlock.css';

type APODImageBlockProps = {
    date: DateInput
}

export const APODImageBlock = ({ date }: APODImageBlockProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState<APODResponseShape[] | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchAPOD(date)
            .then(data => setItems(data))
            .finally(() => setIsLoading(false));
    }, [date]);

    return (
        <div className='apod'>
            {
                isLoading
                    ? 'Loading...'
                    : items!.map(item => (
                        <APODImage key={ item.title } title={ item.title } url={ item.url } />
                    ))
            }
        </div>
    );
};
