import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="bg-gradient-to-bl from-cyan-500 to-primary2 h-screen w-full flex justify-center items-center font-title">
        <div className="bg-white flex flex-col justify-center items-center w-[300px] h-[300px] rounded-[20px] shadow-2xl">
          <h1 className=" text-2xl mb-[10px] ">LOGIN</h1>
          <div className="flex flex-col  mb-[40px]">
            <input
              className="w-[250px] h-[35px] p-[1px] text-lg border outline-none rounded-lg mb-[15px]"
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan Email"
            ></input>
            <input
              className="w-[250px] h-[35px] p-[1px] text-lg border outline-none rounded-lg mb-[15px]"
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan Password"
            ></input>
            <button className="bg-secondary2 text-white border border-2 border-secondary2 rounded-lg hover:border-secondary">
              MASUK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
