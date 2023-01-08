import './App.css';
import people from "./Data"
import Review from './Review';
function App() {
  return(
<main>
<section className='container'>
  <div className='title'>
    <h2> Our Reviews</h2>
      <div className='underline'></div>
   
  </div>
  <Review className="title_container"/>
</section>

</main>
  )
}

export default App;
