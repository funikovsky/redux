
import { Provider, useSelector } from 'react-redux';

import { RootState, store, toggleTheme, useAppDispatch } from './redux/index'
import './App.css';


function App() {

  const dispatch = useAppDispatch()
  //  const [currentTheme, setCurrentTheme] = useState<Themes>('light')

  const currentTheme = useSelector((state: RootState) => state.theme)
  return (

    <Provider store={store}>

      <div className="App">

        <div style={{backgroundColor: currentTheme.backgroundColors.div}}> Hello World</div>
        <button onClick={() => { dispatch(toggleTheme()) }}>
          Change Theme
        </button>


      </div>



    </Provider>

  );
}

export default App;


