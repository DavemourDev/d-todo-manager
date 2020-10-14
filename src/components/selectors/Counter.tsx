import React, { useEffect, useReducer } from 'react';

import { ACTIONS, reducer } from '../../config/counter-actions'
import { ToolbarElement } from "../layout/toolbar/ToolbarElement";

type CounterProps = {
    value: number,
    minValue?: number,
    maxValue?: number,
    onChange: (newValue: number) => void,
};

const Counter = ({ value, minValue, maxValue, onChange }: CounterProps) => {

    const [ count, dispatch ] = useReducer(reducer, value );
  
    const increment = (): void => {
        const payload: {[key: string]: any} = {};
        if (maxValue != null) {
            payload.maxValue = maxValue;
        }
        dispatch({ type: ACTIONS.INCREMENT, payload });
    };
    
    const decrement = (): void => {
        const payload: {[key: string]: any} = {};
        if (minValue != null) {
            payload.minValue = minValue;
        }
        dispatch({ type: ACTIONS.DECREMENT, payload });
    };

    useEffect(() => {
        if (onChange != null) {
            onChange(count);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <div className="counter-box">
            <div className="toolbar-item-container">
                <ToolbarElement
                    title="Disminuir"
                    icon="minus-square"
                    handler={ decrement }
                    disabled={ minValue == null ? false : count <= minValue }
                />
                <div className="counter">{count}</div>
                <ToolbarElement
                    title="Incrementar"
                    icon="plus-square"
                    handler={ increment }
                    disabled={ maxValue == null ? false : count >= maxValue }
                />
            </div>
        </div>
    )
}

export { Counter };