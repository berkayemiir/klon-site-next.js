import Topbar from "./Topbar";
import MiddleBar from "./MiddleBar";
import Navbar from "./Navbar";
import getMenu from "../../app/services/getMenu";
import getSitemap from "../../app/services/getSiteMap";
export default async function Header() {
  const { topbars } = await getMenu();
  const { sitemaps } = await getSitemap();

  return (
    <header className="bg-white">
      <Topbar />
      <MiddleBar />
      <Navbar data={topbars} searchData={sitemaps} />
    </header>
  );
}
