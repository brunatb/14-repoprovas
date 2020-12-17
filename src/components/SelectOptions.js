import React from 'react';
import {
    FormControl, 
    InputLabel, 
    Select,
    MenuItem
} from '@material-ui/core';

export default function SelectOptions({ state, setState, label, options }){

    return(
        <FormControl>
            <InputLabel id="classes">{label}</InputLabel>
            <Select
              labelId="classes"
              id="classes"
              value={state}
              onChange={e =>{
                  setState(e.target.value);
              }}
            >
                {
                    options.length !== 0 ?
                    options.map(o => <MenuItem key={o.id} value = {o.id}>{o.name}</MenuItem>):
                    null
                }
                
            </Select>
        </FormControl>
    )
}