//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation ,MainFooter} from './Components/Layout';
import {Home,Explore, ExploreCollectors,ExploreV2, ItemVersions ,ExploreCreators,ProductV2 ,ProductV1,ProductV3} from './Pages'
import { Routes, Route } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
  return (
      <div className="App">
        <Navigation/>
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explorecollectors" element={<ExploreCollectors />} />
          <Route path="/explorev2" element={<ExploreV2 />} />
          <Route path="/itemversions" element={<ItemVersions />} />
          <Route path="/exploreCreators" element={<ExploreCreators />} />
          <Route path="/productv1" element={<ProductV1 />} />
          <Route path="/productv2" element={<ProductV2 />} />
          <Route path="/productv3" element={<ProductV3 />} />
        </Routes>
        <MainFooter/>
      </div>
  );
}

export default App;
