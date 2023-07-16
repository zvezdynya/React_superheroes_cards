import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './Supers.css';

function Superheroes(props) {
    return (
        <div className="card-item">
            <div className="card flipper">
                <div className="front card-body">
                    <img src={props.url}
                        alt={props.name} className="avatar" />
                    <h2 className="bold name">{props.name}</h2>
                    <p className="bold universe">Вселенная: <span>{props.universe}</span></p>
                    <p className="bold alterego">Альтерэго: <span>{props.alterego}</span></p>
                    <p className="bold occupation">Род деятельности: <span>{props.occupation}</span>
                    </p>
                    <p className="bold friends">Друзья: <span>{props.friends}</span></p>
                    <p className="bold superpower">Суперсила: <span>{props.superpowers}</span></p>
                </div>
                <Accordion>
                    <AccordionItem header="Больше информации">
                        <p className="info">{props.info}</p>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default Superheroes;