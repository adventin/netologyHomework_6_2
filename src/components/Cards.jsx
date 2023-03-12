import Card from "./Card";
import { useEffect } from "react";

export default function Cards(props) {
  const { cards, setCards, loadCards } = props;

  const onClickRefresh = () => {
    loadCards();
  };

  const removeCard = (cardId) => {
    // 
    fetch(`http://localhost:7777/notes/${cardId}`, {
      method: 'DELETE',
    })
      .then(response => {

        if (response.ok) setCards(cards.filter(item => item.id !== cardId));
      })
      .finally(() => loadCards());
  };

  return (
    <>
      <h1>
        <span>Notes</span>
        <i className="refresh" onClick={onClickRefresh}>🗘</i>
      </h1>

      <div className="card-list">
        {cards.map((card) => (
          <Card {...props} key={card.id} card={card} removeCard={removeCard} />
        ))}
      </div>
    </>
  );
}