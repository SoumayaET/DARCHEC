import './recommended.css'
import Buttons from '../components/buttons'
export default function Recommended({handleClick}) {
    return (
        <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-flex">
                <button className='btns'>Tout</button>
                <Buttons onClickHandler={handleClick} value="femme" title="Femme" />
                <Buttons onClickHandler={handleClick} value="homme" title="Homme" />

            </div>
        </div>
        </>
    )
}
