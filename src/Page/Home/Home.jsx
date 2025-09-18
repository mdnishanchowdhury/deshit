import Banner from '../../components/Home/Banner'
import ClientsSection from '../../components/Home/ClientsSection'
import CompanyOverview from '../../components/Home/CompanyOverview'
import ContactSection from '../../components/Home/ContactSection'
import DevelopedProjects from '../../components/Home/DevelopedProjects'
import DigitalMarketing from '../../components/Home/DigitalMarketing'
import Products from '../../components/Home/Products'
import Service from '../../components/Home/Service'
import TechnologySection from '../../components/Home/TechnologySection'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <CompanyOverview></CompanyOverview>
      <Service></Service>
      <Products></Products>
      <DevelopedProjects></DevelopedProjects>
      <DigitalMarketing></DigitalMarketing>
      <ClientsSection></ClientsSection>
      <TechnologySection></TechnologySection>
      <ContactSection></ContactSection>
    </div>
  )
}
export default Home