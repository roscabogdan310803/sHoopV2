import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";


async function getData() {
  const query ="*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);
  
  return data;
}

export default async function Hero() {
  const data = await getData()

  return (
   <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-porto1 sm:text-5xl md:mb-8 md:text-6xl">
            The ultimate sneakers that everyone should own!
        </h1>
        <p className="max-w-md leading-relaxed text-porto2 xl:text-lg">
            Discover the epitome of exclusivity and quality in our selection of sneakers. Elevate your style with the best – shop with us and experience
        </p>
      </div>
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
        <Image
              id="image"
              src={urlFor(data.image2).url()}
              alt="Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
        </div>
        <div id="poza" className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              id="image"
              src={urlFor(data.image1).url()}
              alt="Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <Link href="/Men" className="flex w-1/3 items-center justify-center text-porto1 transition duration-100 hover:bg-brn active:bg-blk">
          Men
        </Link>
        <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-porto1 transition duration-100 hover:bg-brn active:bg-blk"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-porto1 transition duration-100 hover:bg-brn active:bg-blk"
          >
            Teens
          </Link>
      </div>
    </div>
   </section>
  )
}

