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
  ]

  return (
    <div>
      <br />
      {/* <Panel items= {items} /> */}
      <Search />
    </div>
  );
}

export default App;
