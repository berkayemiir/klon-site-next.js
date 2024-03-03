import Link from "next/link";
import Image from "next/image";

const Middlebar = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <Link href={"/"}>
        <Image src="/logo.png" width={400} height={100} alt="Nevzat Tarhan" />
      </Link>
    </div>
  );
};

export default Middlebar;
