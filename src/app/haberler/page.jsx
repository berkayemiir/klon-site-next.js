import getNews from "../services/getNews";
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { Pagination } from "../../components/pagination";

export default async function Page({ searchParams }) {
  const currentPage = searchParams.page || 1;
  const { contents, total } = await getNews({ page: currentPage, tag_id: 288 });

  const formattedDate = ({ dateData }) => {
    const dateString = dateData;
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return date.toLocaleDateString("tr-TR", options);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="">
        <h1 className="text-xl font-light tracking-wider relative mb-8 before:contents-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-14 before:h-[2px] before:bg-[#02b0ae]">
          DUYURULAR VE HABERLER
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contents.map((item) => (
            <Link href={item.slug} key={item.id}>
              <div className="relative">
                <Image
                  src={item.image}
                  width={400}
                  height={300}
                  alt="Home Slider"
                  className="mb-2"
                />

                <div className="absolute bg-black bottom-0 left-0 text-xs font-light text-white px-4 py-2">
                  {formattedDate({ dateData: item.created_at })}
                </div>
              </div>
              <h2 className="text-gray-900 font-semibold leading-5 mb-1 line-clamp-2">
                {item.title}
              </h2>

              <div className="text-gray-800 font-light text-sm line-clamp-6">
                {sanitizeHtml(item.spot, {
                  allowedTags: [],
                  allowedAttributes: {},
                })}
              </div>
            </Link>
          ))}
        </div>

        <Pagination total={total} perpage={15} currentPage={currentPage} />
      </div>
    </div>
  );
}
