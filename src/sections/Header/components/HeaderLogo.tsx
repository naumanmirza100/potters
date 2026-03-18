import { useNavigate } from 'react-router-dom';

export const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <h2 className="text-neutral-800 text-[21px] box-border caret-transparent col-end-[heading] col-start-[heading] row-end-[heading] row-start-[heading] justify-self-center tracking-[0.63px] leading-[0px] min-h-[auto] min-w-[auto] text-center md:text-[25.2px] md:justify-self-start md:text-start">
      <button
        onClick={() => navigate('/')}
        className="text-sm box-border caret-transparent inline-block col-end-[heading] col-start-[heading] row-end-[heading] row-start-[heading] justify-self-center text-center underline-offset-[3px] ml-0 p-[7.5px] md:justify-self-start md:ml-[-7.5px] md:text-start"
      >
        <div className="box-border caret-transparent inline-block text-center underline-offset-[3px] w-full md:text-start">
          <img
            src="https://c.animaapp.com/mmu1yta2SFboEj/assets/55.png"
            alt="Arraish"
            sizes="(max-width: 300px) 50vw, 150px"
            className="aspect-[auto_150_/_47.9253] box-border caret-transparent inline max-w-full text-center underline-offset-[3px] align-baseline w-[150px] md:text-start"
          />
        </div>
      </button>
    </h2>
  );
};
