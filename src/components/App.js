import Navbar from './Navbar';
import GenericPage from './GenericPage';
import Button from './Button';
import { pageTwoH2, pageTwoDownpart } from './PageTwo';
import { pageThreeH2, pageThreeDownpart } from './PageThree';
import { pageFourH2, pageFourDownContent } from './PageFour';
import { pageFiveH2, pageFiveDownContent } from './PageFive';

function App() {
  const h2 = (
    <>
      <p>We do software testing</p>
      <p>for flawless products.</p>
      <p>With a purpose.</p>
    </>
  );

  return (
    <>
      <Navbar />
      <div>
        <GenericPage
          header={h2}
          body={<Button text={'Get in touch'} />}
          bg={'bg-primary'}
        />
      </div>
      <div className="mb-12 page-two">
        <GenericPage
          header={pageTwoH2}
          body={pageTwoDownpart}
          bg={'bg-white'}
        />
      </div>
      <div className="bg-primary page-three">
        <GenericPage
          header={pageThreeH2}
          body={pageThreeDownpart}
          bg={'bg-primary'}
        />
      </div>
      <div>
        <GenericPage
          header={pageFourH2}
          body={pageFourDownContent}
          bg={'bg-white'}
        />
      </div>
      <div>
        <GenericPage
          header={pageFiveH2}
          body={pageFiveDownContent}
          bg={'bg-white'}
        />
      </div>
    </>
  );
}

export default App;
