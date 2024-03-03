import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Share from "../../components/share";
import Image from "next/image";
import Gallery from "@/components/gallery";

export async function generateMetadata({ params }) {
  let result = {};

  try {
    const { slug } = params;

    const { content } = await fetchPost(slug);

    result = {
      metadataBase: new URL("http://localhost:3000"),
      title: content.meta_title ?? "Nevzat Tarhan",
      description:
        content.meta_description ??
        "Nevzat Tarhan tarafından yazılmış içerikler.",
      twitter: {
        title: content.meta_title ?? "Nevzat Tarhan",
        description:
          content.meta_description ??
          "Nevzat Tarhan tarafından yazılmış içerikler.",
        image: content.image ?? "",
      },
      openGraph: {
        title: content.meta_title ?? "Nevzat Tarhan",
        description:
          content.meta_description ??
          "Nevzat Tarhan tarafından yazılmış içerikler.",
        images: content.image ?? "",
      },
    };
  } catch (error) {
    console.error("Metadata oluşturulurken hata oluştu.", error);
  }

  return result;
}

export async function generateStaticParams() {
  const postsResponse = await fetch(
    "https://yp.uskudar.dev/api/content/slugs/4?token=1"
  );

  const posts = await postsResponse.json();

  return posts.contents.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug) {
  const postResponse = await fetch(
    `https://yp.uskudar.dev/api/content/detail/4/${slug}/tr?token=1`
  );

  return postResponse.json();
}

export default async function Post({ params }) {
  const { slug } = params;

  const { content } = await fetchPost(slug);

  const generateHtml = (data) => {
    return { __html: data };
  };

  const dateString = content?.created_at;
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("tr-TR", options);

  return (
    <div className="container mx-auto px-4 md:px-0 md:flex md:gap-10">
      <div className="dtt md:w-8/12">
        <h1 className="text-xl font-bold mb-5">{content?.title}</h1>

        {content && (
          <div className="bg-white flex justify-between items-center flex-wrap mb-4 border-b pb-6">
            <div className="flex items-center gap-2">
              <ul className="flex items-center">
                {content?.breadcrumbs.map((item, index) =>
                  item.url === "/" ? (
                    <li
                      className="inline-flex items-center text-xs"
                      key={index}
                    >
                      <Link href={item?.url} className="text-black">
                        <FaHome />
                      </Link>
                      {index !== content?.breadcrumbs.length - 1 && (
                        <span className="mx-2 h-auto text-gray-400 font-medium">
                          /
                        </span>
                      )}
                    </li>
                  ) : (
                    <li
                      className="inline-flex items-center text-xs"
                      key={index}
                    >
                      <Link href={item.url} className="text-black">
                        {item?.name}
                      </Link>
                      {index !== content?.breadcrumbs.length - 1 && (
                        <span className="mx-2 h-auto text-gray-400 font-medium">
                          /
                        </span>
                      )}
                    </li>
                  )
                )}
              </ul>
              {formattedDate && (
                <span className="text-xs">
                  <b>| {formattedDate}</b>
                </span>
              )}
            </div>

            <Share />
          </div>
        )}

        {content?.post && (
          <div  dangerouslySetInnerHTML={generateHtml(content?.post)} />
        )}
      </div>

      <div className="md:w-4/12">
        {content?.content_relationships.length > 0 && (
          <div className="mb-4">
            <h2 className="border-b pb-2 text-md font-medium mb-4">
              <b>Önerilen İçerikler</b>
            </h2>

            <div className="flex flex-col gap-4">
              {content?.content_relationships.map((item) => (
                <Link href={item.slug} key={item.id}>
                  <div className="flex gap-3 mb-3 group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={180}
                      height={180}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-sm font-bold mb-1 group-hover:text-[#1f354d]">
                        {item.title}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={generateHtml(item.spot)}
                        className="prose prose-p:text-xs prose-p:!font-sans line-clamp-3"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mb-32">
          <h2 className="border-b pb-2 text-md font-medium mb-4">
            <b>Fotoğraf Galerisi</b>
          </h2>

          <Gallery />
        </div>
      </div>
    </div>
  );
}
