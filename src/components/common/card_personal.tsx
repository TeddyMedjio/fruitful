import Image from "next/image";

interface PropsCards {
  image: string;
  name: string;
  video: string;
}

export default function CardPersonal({ image, name, video }: PropsCards) {
  return (
    <div className=" h-full w-full bg-rose-200 rounded-2xl relative overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt="picture naima"
        fill={true}
        className="absolute w-full h-full object-cover z-10 hover:hidden"
      />
      <video
        loop
        muted
        playsInline={true}
        autoPlay
        className="absolute w-full h-full object-cover z-10 opacity-0 hover:opacity-100"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
        <p className="text-white/90 text-xs lg:text-sm mb-1">{name}</p>
        <div className="flex items-start flex-wrap gap-1">
          <p className="bg-white/30 py-1 px-2 rounded-full text-[5px] md:text-[8px] text-white">
            Cheerful
          </p>{" "}
          <p className="bg-white/30 py-1 px-2 rounded-full text-[5px] md:text-[8px] text-white">
            Collaborative
          </p>
          <p className="bg-white/30 py-1 px-2 rounded-full text-[5px] md:text-[8px] text-white">
            Empathatic
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
