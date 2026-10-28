function DessertCard(props) {
  return (
    <div className="dessert-card">

      <div className="dessert-image">
        <img
          src={props.dessert.image}
          alt={props.dessert.name}
        />
      </div>

      <div className="dessert-info">

        <div className="dessert-header">
          <span className="dessert-category">
            {props.dessert.category}
          </span>

          {props.dessert.isFavorite && (
            <span className="dessert-favorite">♥</span>
          )}
        </div>

        <h3>{props.dessert.name}</h3>

        <div className="dessert-details">
          <span>⏱ {props.dessert.prepTime} min</span>

          <span className={`difficulty ${props.dessert.difficulty.toLowerCase()}`}>
            {props.dessert.difficulty}
          </span>
        </div>

        <button
          className="dessert-remove"
          onClick={() => props.handleRemove(props.index)}
        >
          Remove Recipe
        </button>

      </div>
    </div>
  );
}

export default DessertCard;