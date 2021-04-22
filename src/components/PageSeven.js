import coffeeLogo from '../assets/images/CoffeeCircleimage1.png';
import coformaticLogo from '../assets/images/Coformatiqueimage1.png';
import daliaLogo from '../assets/images/Dalia-Logo-1-whiteimage1.png';
import folkdaysLogo from '../assets/images/FOLKDAYS_Logo_2-zeilig_Quadrat_bimage1.png';
import globalexcelLogo from '../assets/images/GlobalExcel_white11.png';
import jibuLogo from '../assets/images/Jibuimage1.png';

const logos = [
  coffeeLogo,
  coformaticLogo,
  daliaLogo,
  folkdaysLogo,
  globalexcelLogo,
  jibuLogo,
];

const PageSevenH2 =
  'We have successfully partnered with a variety of companies from all over the world.';

const PageSevenDownContent = (
  <div className="flex flex-wrap w-6/7 mr-0 mt-12 ml-auto">
    {logos.map((logo, index) => {
      return (
        <div className="w-48 logo-height my-12 flex items-center" key={index}>
          <img src={logo} alt="" />
        </div>
      )
    })}
  </div>
);

export { PageSevenH2, PageSevenDownContent }