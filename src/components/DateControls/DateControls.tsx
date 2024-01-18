import { useState, Dispatch, SetStateAction } from 'react';

import type { DateInput } from '../../app/api';

import './DateControls.css';

type DateControlsProps = {
    setDate: Dispatch<SetStateAction<DateInput>>
    today: string
}

export const DateControls = ({ setDate, today }: DateControlsProps) => {
    const [isRange, setIsRange] = useState(false);
    const isRangeChanged = () => {
        setIsRange(prevIsRange => !prevIsRange);
    };
    const formSubmitted: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const dateObject = Array
            .from(form.querySelectorAll('input'))
            .reduce((data, input) => {
                data[input.name as keyof DateInput] = input.value;
                return data;
            }, {} as DateInput);

        if (!dateObject['start_date']) {
            dateObject['start_date'] = dateObject['end_date'];
        }
        

        setDate(dateObject);
    }; 

    return (
        <div className='controls'>
            <div className='range-picker'>
                <label htmlFor='is-range'>Date range: </label>
                <input id='is-range' type='checkbox' checked={ isRange } onChange={ isRangeChanged } />
            </div>
            <form onSubmit={ formSubmitted }>
                <div className='date-input'>
                    <input 
                        name='start_date' 
                        type='date' 
                        max={ today } 
                        required 
                        defaultValue={ today }
                    />
                    {
                        isRange && (
                            <>
                                <span> - </span>
                                <input 
                                    name='end_date' 
                                    type='date' 
                                    max={ today } 
                                    required 
                                    defaultValue={ today } 
                                />
                            </>
                        )
                    }
                </div>
                <button type='submit'>Show</button>
            </form>
        </div>
    );
};