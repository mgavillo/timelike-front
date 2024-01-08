import "./App.css";

function App() {
  return (
    <div className="App relative min-h-screen overflow-hidden ">
      <header className="App-header flex flex-row gap-2 justify-between p-4">
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src="logo.svg" className="h-8 md:h-10 xl:h-12" />
          <p className="md:text-xl xl:text-2xl font-bold w-[50px] leading-4 md:leading-5 xl:leading-6 segoe">Timelike Systems</p>
        </div>
        <></>
      </header>
      <section className="px-4 md:px-12 xl:px-48 flex flex-col items-center justify-start gap-8 h-full overflow-y-scroll pb-24">
        <h1 className="animate-fade-in">TimeLike™</h1>
        {/* <div className="flex flex-row gap-4 items-center justify-center h-[200px]">
          <h1 className=" text-center text-[120px] md:text-[160px]">AIMS</h1>
          <div className="flex flex-col items-start h-full justify-center ">
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
        </div> */}
        <h2 className="animate-fade-in delay-500 whitespace-normal ">
          Trustworthy AI for High Stakes <span className="w-fit whitespace-nowrap">Decision-Making</span>
        </h2>
        {/* <h3 className="-mt-4 font-normal animate-fade-in text-xs md:text-2xl">
          in collaboration with{" "}
          <a href="https://www.digitalgaia.earth/" target="_blank">
            Digital Gaia
          </a>{" "}
          and the{" "}
          <a href="http://gaiaconsortium.org" target="_blank">
            Gaia Consortium
          </a>
        </h3> */}
        <p>
          {/* TimeLike™ is a cloud-based software platform designed to provide general-purpose model-based decision support. */}
        </p>
        <p className="w-full xl:w-2/3">
          TimeLike™ is an AI cloud platform for all-purpose model-based decision support.
          TimeLike supports both single-agent and multi-agent decision-making, and,
          in the multi-agent case, helps users find and exploit win-win opportunities and spot
          and avoid lose-lose traps through <a
            href="https://foresightinstitute.substack.com/s/intelligent-voluntary-cooperation"
            target="_blank">
            intelligent voluntary cooperation
          </a>. <br />
          {/* TimeLike™ is an AI cloud platform that provides an all purpose decision making tool.
          It supports both single-agent and multi-agent decision-making, and, in the multi-agent case, helps users
        find and <strong>exploit win-win opportunities</strong> and spot and <strong>avoid lose-lose traps</strong> through {"  "}. */}
        </p>
        <p className="w-full xl:w-2/3">
          Potential applications range from AI-enabled <a href="https://www.gatesnotes.com/AI-agents" target="_blank">intelligent personal assistants</a>
          , as described by Bill Gates,
          all the way up to a planetary-scale life-centered self-regulating system along the lines of Gaia 2.0, as proposed in this 2018 {" "}
          <a href="http://www.bruno-latour.fr/sites/default/files/158-SCIENCE_LENTON-pdf.pdf" target="_blank">article</a> in Science.
        </p>
        {/* <p>
          Potential applications for SECHI range from intelligent personal assistants, as described by Bill Gates, to a
          planetary-scale self-regulating humans-in-the-loop cybernetic system along the lines of Gaia 2.0, as described by
          Timothy Lenton and Bruno Latour.  At intermediate scales, SECHI could be used to support much more effective cooperative
          decision-making in informal groups, such as families or clubs, in for-profit companies and nonprofit organizations, in
          governments and government agencies, and even between and among independent nation-states.
        </p> */}
        <a className="hover-effect text-white" href="https://forms.gle/sKxFe6Sun6yyXr4g6" target="_blank">
          <button className="">Connect</button>
        </a>
        <img
          src="/globe.png"
          alt=""
          className=" absolute inset-0 object-cover w-full -z-50 object-top  scale-125 md:scale-[200%] 2xl:scale-100 2xl:-mt-40  3xl:-mt-56"
          style={{ height: "calc(100% + 11rem)" }}
        />
      </section>

      <footer className=" p-4 w-full fixed h-fit  bottom-0 bg-slate-950/50 text-xs md:text-base backdrop-blur-sm -z-30">
        Attention US government personnel: Because this technology builds upon work done under a Phase II SBIR, any US
        government agency can fund a Phase III follow-on as a sole source contract.
      </footer>
    </div>
  );
}

export default App;
