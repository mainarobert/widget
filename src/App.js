import Dropdown from './components/Dropdown';
import Panel from './components/Panel'
import Search from './components/Search';

function App() {
  const items = [
    {
        question: 'what is React?',
        answer: 'React is a frontend javascript library'
    },
    {
        question: 'why use React?',
        answer: 'React is popular among engineers'
    },
    {
        question: 'how do you use React?',
        answer: 'by building components'
    }
  ];

  const options = [
    {
      label: 'color red',
      value: 'red'
    },
    {
      label: 'color black',
      value: 'black'
    },
    {
      label: 'color green',
      value: 'green'
    }
  ];

  return (
    <div>
      <br />
      {/* <Panel items= {items} /> */}
      {/* <Search /> */}
      <Dropdown options= {options} />
    </div>
  );
}

export default App;
