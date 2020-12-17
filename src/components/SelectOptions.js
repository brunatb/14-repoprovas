import React from 'react';
import {
    FormControl, 
    InputLabel, 
    Select,
    MenuItem
} from '@material-ui/core';

export default function SelectOptions({ state, setState, label }){

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
                <MenuItem value = {1}>OI</MenuItem>
            </Select>
        </FormControl>
    )
}