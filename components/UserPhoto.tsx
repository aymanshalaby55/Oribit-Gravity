import Image from "next/image";


export default function UserPhoto() {

  return (
    <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-lg shadow-white/20">
      <Image
        src="/photo.jpg"
        alt="profile"
        className="w-32 h-32 rounded-full object-cover"
        quality={75}
        width={112}
        height={112}
        loading="eager"
        priority
      />
    </div>
  );
}
