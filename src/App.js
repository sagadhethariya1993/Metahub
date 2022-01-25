//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation ,MainFooter} from './Components/Layout';
import {
  Home,Explore ,Blog, ProductV2 ,
  ExploreCollectors,ExploreV2, 
  ItemVersions ,ExploreCreators,Spotlight,
  ProductV1,ProductV3 ,NotFound,ClassicBlog, BlogPostSideBar, BlogPostCentered, Profile
} from './Pages'

import { Routes, Route ,Navigate } from "react-router-dom";
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

          <Route path="/blog" element={<Blog />} />
          <Route path="/classicblog" element={<ClassicBlog />} />
          <Route path="/blogpostcentered" element={<BlogPostCentered />} />
          <Route path="/blogpostslidebar" element={<BlogPostSideBar />} />
          <Route path="/spotlight" element={<Spotlight />} />

          <Route path="/profile" element={<Profile />} />
          
        

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <MainFooter/>
      </div>
  );
}

export default App;
