
function Card({ card }) {
    return (
        <div class="card">
          <img src={card.image.src} alt={card.image.alt} />
          <h4>{card.name}</h4>
          <small>{card.title}</small>
          <p>
            {card.description}
          </p>
        </div>
    )
}

export default Card