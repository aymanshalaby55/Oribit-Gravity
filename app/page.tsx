import UserPhoto from "@/components/UserPhoto";
import OrbitImages from "@/components/OrbitImages";

const images = [
  "https://cdn.simpleicons.org/prisma/color",
  "https://cdn.simpleicons.org/typescript/color",
  "https://cdn.simpleicons.org/react/color",
  "https://cdn.simpleicons.org/nextdotjs/color",
  "https://cdn.simpleicons.org/tailwindcss/color",
  "https://cdn.simpleicons.org/postgresql/color",

];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        <UserPhoto />
        <div className="absolute" style={{ width: 400, height: 400 }}>
          <OrbitImages
            images={images}
            shape="circle"
            radius={200}
            rotation={-8}
            duration={30}
            itemSize={40}
            responsive={true}
            baseWidth={400}
            direction="normal"
            paused={false}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}