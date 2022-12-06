import React from 'react';

export default function ItemComponent(props){
    const status = props.status ;
    return <li>
        { props.name } 
        <div>Status:{status ? <div>Feito</div> : <div>A Fazer</div>} </div> 
    </li>
}