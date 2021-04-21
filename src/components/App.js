import Navbar from './Navbar';
import GenericPage from './GenericPage';
import Button from './Button';
import { pageTwoH2, pageTwoDownpart } from './PageTwo';


function App() {
  const h2 = (<><p>We do software testing</p><p>for flawless products.</p><p>With a purpose.</p></>);

  return (
    <>
      <Navbar />
      <GenericPage header={h2} body={<Button text={'Get in touch'} />} bg={'bg-primary'} />
      <GenericPage header={pageTwoH2} body={pageTwoDownpart} bg={'bg-white'} />

    </>
  );
}

export default App;
