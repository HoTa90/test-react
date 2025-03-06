import './Card.css'
export default function Card({ card, handleChoice, flipped, disabled }) {

   const handleClick = () => {
      if (!disabled) {

         handleChoice(card)
      }
   }

   return (
      <div className={`card ${flipped ? 'flipped' : ''}`}>
         <div>
            <img className='front' alt='card-front' src={card.src} />
            <img onClick={handleClick} className='back' alt='card-back' src='./img/Cover.jpg' />
         </div>
      </div>
   );
}