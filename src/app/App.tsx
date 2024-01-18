import { useState } from 'react';

import { APODImageBlock } from '../components/APODImageBlock/APODImageBlock';
import { DateControls } from '../components/DateControls/DateControls';

import type { DateInput } from './api';

import './App.css';

const T_INDEX = 10;

function App() {
    // used for both maxDate and current date
    const ISOToday = new Date().toISOString().slice(0, T_INDEX);

    const [date, setDate] = useState<DateInput>({
        start_date: ISOToday,
        end_date: ISOToday
    });

    return (
        <div className='container'>
            <APODImageBlock date={ date } /> 
            <DateControls setDate={ setDate } today={ ISOToday } />
        </div>
    );
}

export default App;