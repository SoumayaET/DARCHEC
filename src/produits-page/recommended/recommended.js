import './recommended.css';
import Buttons from '../components/buttons';

export default function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <button
            className='btns'
            value=""
            onClick={(e) => handleClick(e, 'genre')}
          >
            Tout
          </button>
          <Buttons onClickHandler={handleClick} value="femme" title="Femme" type="genre" />
          <Buttons onClickHandler={handleClick} value="homme" title="Homme" type="genre" />
        </div>
      </div>
    </>
  );
}