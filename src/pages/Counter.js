import CharCounter from '../components/CharCounter';
import Counter from '../components/Counter'

function CounterPage() {
  return (
    <div className="text-center">
      <Counter />
      <hr />
      <CharCounter />
    </div>
  );
}

export default CounterPage;
