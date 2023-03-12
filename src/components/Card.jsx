import { useEffect, useState } from 'react';

export default function Card({ card, removeCard }) {

  return (
    <div className='card'>
      <span className='remove' onClick={() => removeCard(card.id)}>❌</span>
      <span>{card.content}</span>
    </div>    
  );
}