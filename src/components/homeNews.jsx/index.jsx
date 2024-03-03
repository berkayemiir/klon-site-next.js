import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import getNews from "../../app/services/getNews";

const HomeNews = async () => {
  const newsData = getNews({ tag_id: 288 });

  const news = await newsData;

  const topNews = news.contents.slice(0, 8);

  const formattedDate = ({ dateData }) => {
    const dateString = dateData;
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return date.toLocaleDateString("tr-TR", options);
  };

  return (
    <div className="container mx-auto bg-gray-50 px-4 py-5 mb-10">
      <div>
        <div className="flex items-center justify-between mb-5 gap-4">
          <h1 className="text-xl font-light tracking-wider relative before:contents-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-14 before:h-[2px] before:bg-[#02b0ae]">
            HABERLER
          </h1>
          <Link
            href={"/haberler"}
            className="flex items-center justify-center text-sm gap-1"
          >
            Tümünü Gör
            <FaChevronRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {topNews.map((item) => (
            <Link href={item.slug} key={item.id}>
              <Image
                src={item.image}
                width={400}
                height={300}
                alt="Home Slider"
                className="mb-2"
              />
              <h2 className="text-gray-900 font-semibold leading-5 mb-1 line-clamp-2">
                {item.title}
              </h2>

              <div className="text-xs font-light text-gray-400 mb-3">
                {formattedDate({ dateData: item.created_at })}
              </div>

              <div className="text-gray-800 font-light text-sm line-clamp-6">
                {sanitizeHtml(item.spot, {
                  allowedTags: [],
                  allowedAttributes: {},
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
