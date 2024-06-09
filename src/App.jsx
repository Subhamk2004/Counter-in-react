import './app.css'

function App() {
    let counter = 5;
    // let increament = document.getElementById('cc1');
    // let decreament = document.getElementById('cc2');
    //
    // increament.addEventListener('click', () => {
    //     console.log(counter);
    //     counter++;
    // });
    // decreament.addEventListener('click', () => {
    //     counter--;
    // })

    // the above traditional approach will create problems, and it will not even do the work
    // it was supposed to do,
    // so to solve this, we will be needing the hooks and states
  return (
      <div id='main_div' className='main_div'>
          <h1>Counter</h1>
          <p className='count_num_para'>Count number: {counter}</p>
          <button id='cc1' className='count_changer'>
              Increase value
          </button>
          <br/>
          <button id='cc2' className='count_changer'>
              Decrease value
          </button>
      </div>
  )
}


export default App
