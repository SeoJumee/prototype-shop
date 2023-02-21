import useActions from '../Hooks/useActions';
import usePrototypes from '../Hooks/usePrototypes';

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  const click = (id) => {
    addToOrder(id);
  };
  return (
    <main>
      <div className="prototypes">
        {prototypes.map(({ id, thumbnail, title, price, desc, pieUrl }) => (
          <div className="prototype" key={id}>
            <a href={pieUrl} target="_blank" rel="noreferrer">
              <div
                style={{
                  padding: '25px 0 33px 0',
                }}
              >
                <video
                  autoPlay
                  loop
                  playsInline
                  className="prototype__artwork prototype__edit"
                  src={thumbnail}
                  muted="muted"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </a>
            <div className="prototype__body">
              <div className="prototype__title">
                <div
                  className="btn btn--primary float--right"
                  onClick={click(id)}
                >
                  <i className="icon icon--plus" />
                </div>
                {title}
              </div>
              <p className="prototype__price">${price}</p>
              <p className="prototype__desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
