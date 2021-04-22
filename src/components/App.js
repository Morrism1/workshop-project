import Navbar from './Navbar';
import GenericPage from './GenericPage';
import Button from './Button';
import { pageTwoH2, pageTwoDownpart } from './PageTwo';
import { pageThreeH2, pageThreeDownpart } from './PageThree';
import { pageFourH2, pageFourDownContent } from './PageFour';
import { pageFiveH2, pageFiveDownContent } from './PageFive';
import { pageSixH2, pageSixDownpart } from './PageSix';
import { PageSevenH2, PageSevenDownContent } from './PageSeven';
import { pageEightH2, pageEightDownContent } from './PageEight';
import { pageNineH2 } from './PageNine';

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
      <div>
        <GenericPage
          header={pageSixH2}
          body={pageSixDownpart}
          bg={'bg-white'}
        />
      </div>
      <div>
        <GenericPage
          header={PageSevenH2}
          body={PageSevenDownContent}
          bg={'bg-primary'}
        />
      </div>
      <div className="page-three">
        <GenericPage
          header={pageEightH2}
          body={pageEightDownContent}
          bg={'bg-white'}
        />
      </div>
      <div>
        <GenericPage
          header={pageNineH2}
          body={<Button text={'info@betahills.com'} />}
          bg={'bg-primary'}
        />
      </div>
    </>
  );
}

export default App;
