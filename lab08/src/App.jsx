import AuthComponent from './features/Auth/AuthComponent';
import CounterApp from './features/CounterApp/CounterApp';
import ShoppingCart from './features/ShoppingCart/ShoppingCart';
import ThemeToggle from './features/ThemeToggle/ThemeToggle';
import TodoApp from './features/TodoApp/TodoApp';
import ClassicCounter from './reduxClassic/ClassicCounter';
import ToolkitCounter from './reduxToolkit/ToolkitCounter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>So sánh Redux Thường vs Redux Toolkit</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ClassicCounter />
        <ToolkitCounter />
        <CounterApp/>
        <TodoApp/>
        <ThemeToggle/>
        <ShoppingCart/>
        <AuthComponent/>
      </div>
    </div>
  );
}

export default App;
