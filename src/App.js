import './App.css';
import icon from './img/Fill-213.png';
import TravelCard from './TravelCard';
import data from './data';

export default function App() {
  const travelCard = data.map(item => {
    return (
      <TravelCard 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='App'>
      <header>
        <img 
        src={icon}
        className="travel-icon"
        alt='mini-icon'/>
        <h1>My Travel Journal</h1>
      </header>
      <section className='card-section'>
        {travelCard}
      </section>
    </div>
  )
}
