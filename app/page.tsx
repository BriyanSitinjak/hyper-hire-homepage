import { HomeScreen } from '@/components/templates/HomeScreen';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { getHomePageData } from '@/lib/dataService';

export default async function Home() {
  // Fetch data on the server for SSR
  const homePageData = await getHomePageData();

  const backgroundImage = '/hyper-hire-bg-img.png';

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HomeScreen data={homePageData} backgroundImage={backgroundImage} />
      <Footer />
    </div>
  );
}
