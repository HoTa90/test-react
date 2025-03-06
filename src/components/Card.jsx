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
               className='front'
               alt='card-front'
               src={`${process.env.PUBLIC_URL}${card.src}`}
            />
            <img
               onClick={handleClick}
               className='back'
               alt='card-back'
               src={`${process.env.PUBLIC_URL}/img/cover.jpg`}
            />

         </div>
      </div>
   );
}