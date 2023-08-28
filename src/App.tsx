import "./App.css";

function App() {
  return (
    <div className="App relative min-h-screen overflow-hidden ">
      <header className="App-header flex flex-row gap-2 justify-between p-4 h-16">
        <div className="flex flex-row gap-2 items-center">
          <img src="logo.png" className="h-full" />
          <p className="text-lg font-bold w-[50px] leading-4">Timelike Systems</p>
        </div>
        <></>
      </header>
      <section className="px-4 md:px-12 xl:px-48 flex flex-col items-center justify-start gap-8 h-full overflow-y-scroll">
        {/* <h1>TimeLike.Systems</h1> */}
        <div className="flex flex-row gap-4 items-center justify-center h-[200px]">
          <h1 className=" text-[120px] md:text-[160px] ">AIMS</h1>
          <div className="flex flex-col items-start h-full justify-center">
            <p className="animate-fade-in delay-0 text-sm md:text-base">
              <span className="font-black">A</span>ctive
            </p>
            <p className="animate-fade-in text-sm  md:text-base">
              <span className="font-black">I</span>nference
            </p>
            <hr className="w-full h-[1px] bg-white  my-1 md:my-2 text-lg md:text-xl" />
            <p className="animate-fade-in  text-sm  md:text-base">
              <span className="font-black">M</span>odel
            </p>
            <p className="animate-fade-in text-sm  md:text-base">
              <span className="font-black">S</span>haring
            </p>
          </div>
        </div>
        <h2 className="animate-fade-in ">Trustworthy AI for High Stakes Decision-Making</h2>
        <h3 className="-mt-4 font-normal animate-fade-in text-xs md:text-2xl">
          in collaboration with{" "}
          <a href="https://www.digitalgaia.earth/" target="_blank">
            Digital Gaia
          </a>{" "}
          and the{" "}
          <a href="http://gaiaconsortium.org" target="_blank">
            Gaia Consortium
          </a>
        </h3>
        <p className=" w-full xl:2/3 animate-fade-in ">
          "AIMS" is not just an acronym; it is also an allusion to the fact that the technology is designed to help
          users advance their specific aims, using model-based multi-objective dynamic optimization. AIMS supports both
          single-agent and multi-agent decision-making, and, in the multi-agent case, helps users find and exploit
          win-win opportunities and spot and avoid lose-lose traps through{" "}
          <a
            className="no-underline"
            href="https://foresightinstitute.substack.com/s/intelligent-voluntary-cooperation"
            target="_blank">
            intelligent voluntary cooperation
          </a>
          .
        </p>
        <a href="https://forms.gle/sKxFe6Sun6yyXr4g6" target="_blank">
        <button className="animate-fade-in delay-[6000ms]">Connect</button>

        </a>
        <img
          src="/globe.png"
          alt=""
          className=" absolute inset-0 object-cover w-full -z-50 object-top  scale-125 md:scale-[200%] 2xl:scale-100 3xl:-"
          style={{ height: "calc(100% + 11rem)" }}
        />
      </section>

      <footer className=" p-4 w-full absolute h-fit  bottom-0 bg-slate-950/50 text-xs md:text-base backdrop-blur-sm -z-30">
        Attention US government personnel: Because this technology builds upon work done under a Phase II SBIR, any US
        government agency can fund a Phase III follow-on as a sole source contract.
      </footer>
    </div>
  );
}

export default App;
