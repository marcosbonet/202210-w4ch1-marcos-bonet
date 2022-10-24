import { pointingMen } from "./data";
export function Gentleman() {
  return (
    <>
      {pointingMen.map((men) => (
        <li className="gentleman">
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={"img." + men.picture}
              alt={men.alternativeText}
            />
            <span className="gentleman__initial">{men.name.slice(4, 5)}</span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{men.name.slice(4, 5)}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">{men.profession}</span>
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">{men.status}</span> RIP
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">{men.twitter}</span>{" "}
                Pending
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      ))}
      ;
    </>
  );
}
