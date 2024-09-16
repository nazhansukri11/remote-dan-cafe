import Link from "next/link";
import CafeCard from "@/components/CafeCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4lg:px-8">
        <h1 className="text-3xl font-bold my-6 text-center">Welcome to Remote dan Cafe</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />

        </div>
      </div>

    </>
  );
}
