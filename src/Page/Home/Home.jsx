import Banner from '../../components/Home/Banner'
import CompanyOverview from '../../components/Home/CompanyOverview'
import DevelopedProjects from '../../components/Home/DevelopedProjects'
import DigitalMarketing from '../../components/Home/DigitalMarketing'
import Products from '../../components/Home/Products'
import Service from '../../components/Home/Service'

function Home() {
  return (
    <div>
        <Banner></Banner>
        <CompanyOverview></CompanyOverview>
        <Service></Service>
        <Products></Products>
        <DevelopedProjects></DevelopedProjects>
          <DigitalMarketing></DigitalMarketing>
    </div>
  )
}

export default Home