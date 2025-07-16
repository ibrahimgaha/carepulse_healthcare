import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flexh h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image  src="/assets/icons/logo-full.svg" height={1000} width={1000} alt="Logo" className="mb-12 h-10 w-fit" />
          </div>
        </div>
      </section>
    </div>
  );
}
