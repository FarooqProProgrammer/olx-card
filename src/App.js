
import './App.css';
import { Cards } from './components/cards/Cards';


function App() {
  const img = 'https://images.olx.com.pk/thumbnails/304979866-240x180.webp'
  const img1 = 'https://images.olx.com.pk/thumbnails/304980976-240x180.webp'
  const img2 = 'https://images.olx.com.pk/thumbnails/304981004-240x180.webp'
  const img3 = 'https://images.olx.com.pk/thumbnails/304980970-240x180.webp'
  return (
    <div className="App w-full h-screen flex justify-around items-center">
       
    <Cards className="" price="2,000"  image={img} title="ps5 latest" featured={true} address = 'clifton'/>
    <Cards className="" price="85,000"  image={img1} title="Sumsung zflip 5g"featured={false} address = 'lahore gulberg'/>
    <Cards className="" price="165,000"  image={img2} title="8 seat dining table"featured={true} address = 'allama iqbal town lahore'/>
    <Cards className="" price="46,000"  image={img3} title="I Phone X"featured={false} address = 'rana shoukat road lahore'/>


    </div>
  );
}

export default App;
