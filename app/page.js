import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="bg-[#b3dff0]">
        <section className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center mx-5">
            <p className="font-bold text-3xl">The best url shortener in the Market</p>
            <p className="text-start md:ml-17 my-2">We are the most straightforward URL shortener in the world.Most of the URL shortener websites will track you or ask you to give your details for login. We understand your needs and hence we have created this  URL shortener</p>
            <div className="mt-5">
            <Link className='p-1.5 font-bold text-sm text-white mx-2 px-2 border-2  border-[#436bc2] bg-[#436bc2] rounded-lg' href="/Shorten">Try Now</Link>
            <Link className='p-1.5 font-bold text-white text-sm px-2 mx-2 border-2 border-[#436bc2] bg-[#436bc2] rounded-lg' href="/github">GitHub</Link>
            </div>
          </div>
          <div className="mx-auto mt-5 bg-transparent relative">
            <img className="w-120 h-50 mix-blend-darken" src="workshop.png" alt="workshop" />
          </div>
        </section>
      </main>
    </>
  );
}
