import "./App.css";

function App() {
  return (
    <div className="App relative min-h-screen h-fit overflow-hidden">
      <header className="App-header flex flex-row gap-2 justify-between p-4 h-20">
        <div className="flex flex-row gap-2 items-center">
          <img src="logo.png" className="h-full" />
          <p className=" text-2xl font-bold w-[50px]">Timelike Systems</p>
        </div>
        <></>
      </header>
      <section className="px-4 md:px-48 flex flex-col items-center justify-start md:justify-center gap-8 ">
        {/* <h1>TimeLike.Systems</h1> */}
        <div className="flex flex-row h-[200px] gap-4 items-center">
          <h1 className=" text-[110px] md:text-[200px]">AIMS</h1>
          <div className="flex flex-col items-start h-full justify-center">
            <p className="animate-fade-in delay-0 text-lg md:text-xl">
              <span className="font-black">A</span>ctive
            </p>
            <p className="animate-fade-in delay-[1000ms] text-lg md:text-xl">
              <span className="font-black">I</span>nference
            </p>
            <hr className="w-full h-[1px] bg-white  my-1 md:my-2 text-lg md:text-xl" />
            <p className="animate-fade-in delay-[2000ms] text-lg md:text-xl">
              <span className="font-black">M</span>odel
            </p>
            <p className="animate-fade-in delay-[3000ms] text-lg md:text-xl">
              <span className="font-black">S</span>haring
            </p>
          </div>
        </div>
        <h2 className="animate-fade-in delay-[4000ms]">Trustworthy AI for High Stakes Decision-Making</h2>
        <h3 className="-mt-4 font-normal animate-fade-in delay-[4200ms] text-xs md:text-2xl">
          in collaboration with{" "}
          <a href="https://www.digitalgaia.earth/" target="_blank">
            Digital Gaia
          </a>{" "}
          and the{" "}
          <a href="http://gaiaconsortium.org" target="_blank">
            Gaia Consortium
          </a>
        </h3>
        {/* <h2>Active Inference & Model Sharing</h2> */}
        <p className=" w-full md:w-2/3 animate-fade-in delay-[5000ms]">
          "AIMS" is not just an acronym; it is also an allusion to the fact that the technology is designed to help
          users advance their specific aims, using model-based multi-objective dynamic optimization. AIMS supports both
          single-agent and multi-agent decision-making, and, in the multi-agent case helps users find and exploit
          win-win opportunities and spot and avoid lose-lose traps through <span className="italic font-black">intelligent voluntary cooperation</span>.
        </p>
        <button className="animate-fade-in delay-[6000ms]">Connect</button>
      </section>
      <img
        src="/globe.png"
        alt=""
        className=" absolute inset-0 object-cover w-full -z-50 object-top md:-mt-44 scale-125 md:scale-100"
        style={{ height: "calc(100% + 11rem)" }}
      />
      {/* </div> */}
      <footer className=" p-4 w-full absolute bottom-0 h-fit bg-slate-950/50 text-xs md:text-base backdrop-blur-sm">
        Note to US government personnel: The AIMS technology, incorporates technology developed under a recent Phase II
        SBIR, TimeLike™, an Enabling Technology for Digital Transformation. This means that any US government agency can
        award a Phase III follow-on as a sole source contract.
      </footer>
    </div>
  );
}

export default App;
