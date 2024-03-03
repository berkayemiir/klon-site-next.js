import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="py-2 bg-[#ededed]">
      <div className="container flex flex-wrap justify-end gap-2 mx-auto px-4">
        <Link
          href={"https://www.facebook.com/Prof.NevzatTarhan"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaFacebookF />
        </Link>

        <Link
          href={"https://twitter.com/drnevzattarhan"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaInstagram />
        </Link>

        <Link
          href={"https://www.instagram.com/prof.dr.nevzat.tarhan/"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaTwitter />
        </Link>

        <Link
          href={"https://www.youtube.com/channel/UC4ppatPJ6mOFMtEf8k6KkLQ"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaYoutube />
        </Link>

        <Link
          href={"https://tr.pinterest.com/profdrnevzattarhan/"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaPinterestP />
        </Link>

        <Link
          href={"https://www.tiktok.com/@profdrnevzattarhan"}
          className="flex items-center justify-center border border-gray-400 rounded-full w-7 h-7 text-gray-900"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
