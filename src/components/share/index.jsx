"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Share = () => {
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [currentUrl]);

  return (
    <div className="flex items-center gap-3 text-xl">
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        className="transition-all hover:text-[#b6e0dc]"
      >
        <FaFacebook />
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=${currentUrl}`}
        target="_blank"
        className="transition-all hover:text-[#b6e0dc]"
      >
        <FaTwitter />
      </Link>
      <Link
        href={`https://wa.me/send?text=${currentUrl}`}
        target="_blank"
        className="transition-all hover:text-[#b6e0dc]"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Share;
