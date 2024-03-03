import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t mt-9">
      <div className="container mx-auto flex justify-center gap-2 py-5 ">
        <Link
          href={"https://www.facebook.com/Prof.NevzatTarhan"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900  " target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          href={"https://twitter.com/drnevzattarhan"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900"  target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"https://www.instagram.com/prof.dr.nevzat.tarhan/"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900"  target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UC4ppatPJ6mOFMtEf8k6KkLQ"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900"  target="_blank"
        >
          <FaYoutube />
        </Link>
        <Link
          href={"https://tr.pinterest.com/profdrnevzattarhan/"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900"  target="_blank"
        >
          <FaPinterestP />
        </Link>
        <Link
          href={"https://www.tiktok.com/@profdrnevzattarhan"}
          className="flex items-center justify-center border rounded-full w-8 h-8 text-gray-900"  target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </div>
      <div className="bg-[#efefef]">
        <div className="container mx-auto py-8">
          <div className="w-full max-w-[450px] mx-auto text-center text-xs text-gray-500">
            <p>2024 © Dijital Teknolojiler ve Yazılım Daire Başkanlığı</p>
            <p>
              Bu sitede yer alan bilgiler bir hekime danışmanın yerine geçmez.
            </p>
            <p>
              These pages may be reused under either the GFDL 1.2 or CC-BY-SA
              3.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
