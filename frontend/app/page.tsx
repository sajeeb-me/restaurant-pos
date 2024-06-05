import HomePage from "@/components/HomePage";
import Image from "next/image";
import backgroundImage from "@/assets/images/pexels-codioful-6985128.jpg"

export default function Home() {
  return (
    <main className="max-h-screen text-white">
      <HomePage />
      <Image
        src={backgroundImage}
        alt={"Background Image"}
        fill={true}
        style={{zIndex:-1}}
      />
    </main>
  );
}
