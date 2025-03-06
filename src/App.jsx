import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

const cardImages = [
	{ 'src': '/img/pav-1.jpg', matched: false },
	{ 'src': '/img/pav-2.jpg', matched: false },
	{ 'src': '/img/pav-3.jpg', matched: false },
	{ 'src': '/img/pav-4.jpg', matched: false },
	{ 'src': '/img/pav-5.jpg', matched: false },
	{ 'src': '/img/pav-6.jpg', matched: false },
]


function App() {

	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)
	const [disabled, setDisabled] = useState(false)
	const [isShuffling, setIsShuffling] = useState(false);






	const shuffleCards = () => {
		setIsShuffling(true);
		const shuffled = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		// Reset and update state
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffled);
		setTurns(0);

		// Remove shuffling state after animation
		setTimeout(() => setIsShuffling(false), 500);
	};


	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	const resetChoice = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(prev => prev + 1)
		setDisabled(false)
	}

	useEffect(() => {
		shuffleCards()
	}, [])

	useEffect(() => {

		if (choiceOne && choiceTwo) {
			setDisabled(true)
			if (choiceOne.src === choiceTwo.src) {
				setCards(prevCards => prevCards.map(card => card.src === choiceOne.src ? { ...card, matched: true } : card))
				resetChoice()
			} else {

				setTimeout(() => {
					resetChoice()
				}, 1000)
			}
		}


	}, [choiceOne, choiceTwo])

	return (
		<div className="App">
			<h1>Find Fuji</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className='card-grid' >
				{cards.map(card => (
					<Card
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	)
}

export default App
