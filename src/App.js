import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar2 from './pages/Navbar2';
import Navbar3 from './pages/Navbar3';
import Carousel from './pages/Carousel';
import Content1 from './pages/Content1';
import Popular from './pages/Popular';
import Traditional from './pages/Traditional';
import Service from './pages/Service';
import Video from './pages/Video';
import Collection from './pages/Collection';
import Collection1 from './pages/Collection1';
import Footer from './pages/Footer';
import Rings from './page2/Rings';
import Mangalsutra from './page2/Mangalsutra';
import Earring from './page2/Earring';
import Necklace from './page2/Necklace';
import Bangles from './page2/Bangles';
import Bracelet from './page2/Bracelet';
import Pins from './page2/Pins';
import Cufflinks from './page2/Cufflinks';
import Pendents from './page2/Pendents';
import Form from './page2/Form';
// import ScrollToTop from './pages/ScrollToTop';
import Rings4 from './page3/Rings4';
import Rings2 from './page3/Rings2';
import Rings3 from './page3/Rings3';
import Rings5 from './page3/Rings5';
import Rings6 from './page3/Rings6';
import Rings7 from './page3/Rings7';
import Rings8 from './page3/Rings8';
import Mangalsutra2 from './page3/Mangalsutra2'
import Mangalsutra3 from './page3/Mangalsutra3'
import Mangalsutra4 from './page3/Mangalsutra4'
import Mangalsutra5 from './page3/Mangalsutra5'
import Mangalsutra6 from './page3/Mangalsutra6'
import Mangalsutra7 from './page3/Mangalsutra7'
import Mangalsutra8 from './page3/Mangalsutra8'
import Mangalsutra9 from './page3/Mangalsutra9'
import Earring2 from './page3/Earring2'
import Earring3 from './page3/Earring3'
import Earring4 from './page3/Earring4'
import Earring5 from './page3/Earring5'
import Earring6 from './page3/Earring6'
import Earring7 from './page3/Earring7'
import Earring8 from './page3/Earring8'
import Earring9 from './page3/Earring9'
import Nacklace2 from './page3/Nacklace2'
import Nacklace3 from './page3/Nacklace3'
import Nacklace4 from './page3/Nacklace4'
import Nacklace5 from './page3/Nacklace5'
import Nacklace6 from './page3/Nacklace6'
import Nacklace7 from './page3/Nacklace7'
import Nacklace8 from './page3/Nacklace8'
import Nacklace9 from './page3/Nacklace9'
import Bangles2 from './page3/Bangles2'
import Bangles3 from './page3/Bangles3'
import Bangles4 from './page3/Bangles4'
import Bangles5 from './page3/Bangles5'
import Bangles6 from './page3/Bangles6'
import Bangles7 from './page3/Bangles7'
import Bangles8 from './page3/Bangles8'
import Bangles9 from './page3/Bangles9'
import Bangles10 from './page3/Bangles10';
import Bangles11 from './page3/Bangles11';
import Bangles12 from './page3/Bangles12';
import Bangles13 from './page3/Bangles13';
import Colorstone from './page2/Colorstone';
import Form3 from './page4/Form3';



function App() {
  return (
    
    <>
   
    <Router>
      {/* <ScrollToTop /> */}
      <Navbar3 />
      <Navbar2 />
      <ConditionalLayout>
        
        <Routes>
        
          <Route path="/form" element={<Form />} />
          <Route path="/ring" element={<Rings />} />
          <Route path="/mangalsutra" element={<Mangalsutra />} />
          <Route path="/earrings" element={<Earring />} />
          <Route path="/nacklace" element={<Necklace />} />
          <Route path="/bangles" element={<Bangles />} />
          <Route path="/bracelat" element={<Bracelet />} />
          <Route path="/pins" element={<Pins />} />
          <Route path="/cufflinks" element={<Cufflinks />} />
          <Route path="/pendents" element={<Pendents />} />
          <Route path="/color" element={<Colorstone />} />
          <Route path="/order" element={<Form3 />} />
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/" component={Form} /> */}
          {/* <Redirect to="/" /> */}
          <Route path="/r1" element={<Rings2 />} />
          <Route path="/r2" element={<Rings3 />} />
          <Route path="/r3" element={<Rings4 />} />
          <Route path="/r4" element={<Rings5 />} />
          <Route path="/r5" element={<Rings6 />} />
          <Route path="/r6" element={<Rings7 />} />
          <Route path="/r7" element={<Rings8 />} />
          <Route path="/m1" element={<Mangalsutra2 />} />
          <Route path="/m2" element={<Mangalsutra3 />} />
          <Route path="/m3" element={<Mangalsutra4 />} />
          <Route path="/m4" element={<Mangalsutra5 />} />
          <Route path="/m5" element={<Mangalsutra6 />} />
          <Route path="/m6" element={<Mangalsutra7 />} />
          <Route path="/m7" element={<Mangalsutra8 />} />
          <Route path="/m8" element={<Mangalsutra9 />} />
          <Route path="/e1" element={<Earring2 />} />
          <Route path="/e2" element={<Earring3 />} />
          <Route path="/e3" element={<Earring4 />} />
          <Route path="/e4" element={<Earring5 />} />
          <Route path="/e5" element={<Earring6 />} />
          <Route path="/e6" element={<Earring7 />} />
          <Route path="/e7" element={<Earring8 />} />
          <Route path="/e8" element={<Earring9 />} />
          <Route path="/n1" element={<Nacklace2 />} />
          <Route path="/n2" element={<Nacklace3 />} />
          <Route path="/n3" element={<Nacklace4 />} />
          <Route path="/n4" element={<Nacklace5 />} />
          <Route path="/n5" element={<Nacklace6 />} />
          <Route path="/n6" element={<Nacklace7 />} />
          <Route path="/n7" element={<Nacklace8 />} />
          <Route path="/n8" element={<Nacklace9 />} />
          <Route path="/b1" element={<Bangles2 />} />
          <Route path="/b2" element={<Bangles3 />} />
          <Route path="/b3" element={<Bangles4 />} />
          <Route path="/b4" element={<Bangles5 />} />
          <Route path="/b5" element={<Bangles6 />} />
          <Route path="/b6" element={<Bangles7 />} />
          <Route path="/b7" element={<Bangles8 />} />
          <Route path="/b8" element={<Bangles9 />} />
          <Route path="/b9" element={<Bangles10 />} />
          <Route path="/b10" element={<Bangles11 />} />
          <Route path="/b11" element={<Bangles12 />} />
          <Route path="/b12" element={<Bangles13 />} />
        </Routes>
      </ConditionalLayout>
    </Router>
    </>
  );
}

function ConditionalLayout({ children }) {
  const location = useLocation();
  const showLayout = location.pathname === '/';

  return (
    <div>
      {children}
      {showLayout && <Carousel />}
      {showLayout && <Popular />}
      {showLayout && <Content1 />}
      {showLayout && <Traditional />}
      {showLayout && <Service />}
      {showLayout && <Video />}
      {showLayout && <Collection />}
      {showLayout && <Collection1 />}
      {showLayout && <Footer />}
      {/* {showLayout && <Form3/>} */}
    </div>
  );
}

export default App;
