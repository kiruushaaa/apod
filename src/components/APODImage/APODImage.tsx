import type { APODResponseShape } from '../../app/api';

import './APODImage.css';

type APODImageProps = Pick<APODResponseShape, 'title' | 'url'>

export const APODImage = ({ title, url }: APODImageProps) => {
    return (
        <div className='img-container'>
            <img title={ title  } src={ url } />
        </div>
    );
};