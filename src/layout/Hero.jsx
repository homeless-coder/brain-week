const menu = []

const Hero = ({ searchValue, onHandleChange }) => {
  return (
    <section className="w-full mt-15">
        <div className="flex flex-col sm:flex-row sm:justify-center gap-x-5 py-8">
            <div className="font-extrabold w-full text-center">
                <p style={{ textShadow: '0 2.1px 3.1px rgba(0, 0, 0, 0.18)' }} className="shadow-none mb-4.5 font-[1000] text-gray-800 text-md lg:text-md">TE INVITAMOS A DISFRUTAR DE:</p>
                <h1 style={{ textShadow: '0 2.1px 3.1px rgba(0, 0, 0, 0.30)' }} className="shadow-none font-monomakh tracking-widest mb-1.5 text-3xl lg:text-4xl font-black tracking-tight leading-none text-gray-800">LA SEMANA DEL</h1>
                <p style={{ textShadow: '0 0.5px 2.35px rgba(75, 74, 74, 1)' }} className="shadow-none font-monomakh tracking-wider mb-4 font-black text-[#f22323] text-5xl">CEREBRO</p>
                <p style={{ textShadow: '0 2.1px 4px rgba(0, 0, 0, 0.18)' }} className="shadow-none mb-4.5 font-[1000] text-black tracking-wide lg:text-md">DEL 17 AL 22 DE MARZO</p>
                <h2 style={{ textShadow: '0 2.1px 3.1px rgba(0, 0, 0, 0.21)' }} className="shadow-none font-monomakh tracking-wider mb-7.5 text-2xl lg:text-2xl font-extrabold tracking-tight leading-none text-gray-800">¡VEN Y DIVIÉRTETE!</h2>
            </div>
            <div className="flex justify-center sm:justify-end sm:items-center lg:justify-center w-full">
                <img className="cursor-pointer ease-in-out duration-200 max-h-[10rem] sm:max-h-[14rem] lg:max-h-[14.95rem] hover:drop-shadow-[0_8px_3px_rgba(0,0,0,0.15)]" src="/cerebrito.png" alt="Cerebrito" />
            </div>                
        </div>
    </section>
  );
};

export default Hero;