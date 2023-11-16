import Image from "next/image";

const HeaderImage = () => {
  return (
    <>
      <div className="w-full mx-auto mt-1">
        <Image
          src="/KV.jpg"
          alt="Center Image"
          width={600}
          height={300}
          layout="responsive"
        />
      </div>
    </>
  );
};
export default HeaderImage;
