"use client";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="grid grid-cols-3 gap-2"
    >
      <Link href={"/gallery-1.jpeg"}>
        <Image
          src={"/gallery-1.jpeg"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 1"
          className="rounded-lg"
        />
      </Link>
      <Link href={"/gallery-2.jpeg"}>
        <Image
          src={"/gallery-2.jpeg"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 2"
          className="rounded-lg"
        />
      </Link>
      <Link href={"/gallery-3.jpeg"}>
        <Image
          src={"/gallery-3.jpeg"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 3"
          className="rounded-lg"
        />
      </Link>
      <Link href={"/gallery-4.jpeg"}>
        <Image
          src={"/gallery-4.jpeg"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 4"
          className="rounded-lg"
        />
      </Link>
      <Link href={"/gallery-5.jpeg"}>
        <Image
          src={"/gallery-5.jpeg"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 5"
          className="rounded-lg"
        />
      </Link>
      <Link href={"/gallery-6.png"}>
        <Image
          src={"/gallery-6.png"}
          width={800}
          height={600}
          alt="Galeri Fotoğraf 6"
          className="rounded-lg"
        />
      </Link>
    </LightGallery>
  );
};

export default Gallery;
