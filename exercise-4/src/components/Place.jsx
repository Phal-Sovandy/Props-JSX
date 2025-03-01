export default function Place({placeItem}) {
  return (
    <li key={placeItem.id} className="place-item">
      <button>
        <img src={placeItem.image.src} alt={placeItem.image.alt} />
        <h3>{placeItem.title}</h3>
      </button>
    </li>
  );
}
