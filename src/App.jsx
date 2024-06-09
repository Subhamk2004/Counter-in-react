import {useState} from 'react'
// imported a hook called useState
// useState is used to propagate the changes
import './app.css'

function App() {

    // let useState(15)

    // useState returns two things in an array so we have to define variables like array,

    // the first thing is the variable, and the second thing is the functions below:

    let [counter, setCounter] = useState(5);

    let increase_counter = () => {
        counter++;
        setCounter(counter);
        // in the above we applied our function and then passed the var to the setCounter
        // we could have also done as below:
        // setCounter(counter + 1);

        // the method of the useState will set the new value to the variable, and will
        // update it everywhere

        // by doing this wherever we have counter-variable, it will automatically get updated

    };

    let decrease_counter = () => {
        counter--;
        setCounter(counter);
    }

    // by above we initialised a variable named counter, and a function named setCounter,
    // always name the methods or functions as if var is counter, then method is setCounter
    // if var is logger, then method or func is setLogger, it's not mandatory but a convention


    // in this useState we can pass anything, like variables, objects, arrays, functions also


    // let counter = 5;
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

    //😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳
    // currently we are using the counter variables in just one line, but if weh ave to use
    // it on so many lines or elements, then by classic js, we have to select so many elements
    // by id or class or tag and then individually update all of them on an event,
    // but in react, we don't have to do those individually, we will be using (hooks) &
    // states to solve that issue
// 😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳
  return (
      <div id='main_div' className='main_div'>
          <h1>Counter</h1>
          <p className='count_num_para'>Count number: {counter}</p>
          <button onClick={increase_counter} id='cc1' className='count_changer'>
              Increase value
          </button>
          <br/>
          <button onClick={decrease_counter} id='cc2' className='count_changer'>
              Decrease value
          </button>
      </div>
  )
}

// we will be using useState hook and is imported at the top pf this code

export default App
