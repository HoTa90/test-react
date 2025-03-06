import './Card.css'
export default function Card({ card, handleChoice, flipped, disabled }) {
   console.log("Card data:", card)
   const handleClick = () => {
      if (!disabled) {

         handleChoice(card)
      }
   }

   return (
      <div className={`card ${flipped ? 'flipped' : ''}`}>
         <div>
            <img
               className="front"
               alt="card-front"
               src={`${import.meta.env.BASE_URL}${card.src}`}
            />
            <img
               onClick={handleClick}
               className="back"
               alt="card-back"
               src={`${import.meta.env.BASE_URL}img/Cover.jpg`}
            />
         </div>
      </div>
   );
}