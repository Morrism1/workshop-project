import Navbar from './Navbar';
import GenericPage from './GenericPage';
import Button from './Button';


function App() {
  const h2 = (<><p>We do software testing</p><p>for flawless products.</p><p>With a purpose.</p></>);

  return (
    <>
      <Navbar />
      <GenericPage header={h2} body={<Button text={'Get in touch'} />} bg={'bg-primary'} />
    </>
  );
}

export default App;
