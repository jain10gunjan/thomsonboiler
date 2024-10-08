// import Faqs from "@/components/Faq";
import Header from "@/components/Header";
// import OurClients from "@/components/OurClient";
import Products from "@/components/Products";
import OurMotto from "@/components/OurMotto";
import ContactUs from "@/components/ContactUs";
import Stats from "@/components/Stats";
// import Industry from "@/components/Industry";

export default function Home() {
  return (
    <div>
      <Header />
      <OurMotto />
      <Products />
      {/* <Industry /> */}
      <Stats />
      {/* <OurClients /> */}
      <ContactUs />
    </div>
  );
}
