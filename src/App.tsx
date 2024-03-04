import "./App.css";
import { RecoilRoot } from "recoil";
import HorizontalTabs from "../src/components/Pages/Tabs";
import Footer from "../src/components/Organisms/Footer";
import Header from "../src/components/Organisms/Header";

function App() {
  return (
    <>
      <RecoilRoot>
        <div>
          <Header />
          <HorizontalTabs />
          <Footer />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
