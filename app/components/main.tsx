import { Link } from "@remix-run/react";

export default function Main() {
  return (
    <>
      <main className="mx-auto font-extralight">
        <div className="mx-4 flex flex-col items-center justify-center bg-inherit lg:mx-10 lg:flex-row lg:gap-20 lg:py-20">
          <div className="lg:h-[55rem]">
            <img
              className="max-h-full object-contain lg:h-[55rem]"
              alt="main my portrait"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="m-5 text-xl leading-10 lg:max-w-lg lg:text-3xl">
              <b>Cześć!</b> Witaj na mojej stronie - nazywam się{" "}
              <b>Joanna Otmianowska</b>. Lubię szukać pretekstów do rozmyślań i
              rozmów. I zrobiłam z tego projekt, w którego skład wchodzi{" "}
              <b>podcast "Pod Pretekstem"</b> i{" "}
              <b>newsletter "Pretekst do rozmyślań"</b>.
            </h5>
            <hr></hr>
            <h5 className="m-5 text-xl leading-10 lg:max-w-lg lg:text-3xl">
              Odcinki podcastu i notatki do nich znajdziesz{" "}
              <Link
                to="/podcasts"
                className="cursor-pointer font-[400] underline underline-offset-4 duration-500 hover:underline-offset-2"
              >
                tutaj
              </Link>
              , a newslettery poczytasz{" "}
              <Link
                to="/posts"
                className="cursor-pointer font-[400] underline underline-offset-4 duration-500 hover:underline-offset-2"
              >
                w archiwum
              </Link>
              . Chcesz dostawać je na bieżąco?{" "}
              <Link
                to="https://www.subscribepage.com/pretekst"
                target="_blank"
                className="cursor-pointer font-[400] underline underline-offset-4 duration-500 hover:underline-offset-2"
              >
                Dołącz do listy.
              </Link>
            </h5>
            <hr></hr>
            <h5 className="m-5 text-xl leading-10 lg:max-w-lg lg:text-3xl">
              Poza tym <b>programuję</b>, piszę, robię kreatywne rzeczy, ćwiczę,
              staram się łapać balans i miewam{" "}
              <b>sto nowych pomysłów na minutę</b>. Obecnie jestem na{" "}
              <b>urlopie macierzyńskim.</b>
            </h5>
          </div>
        </div>
        <div className="flex flex-col bg-inherit p-5 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
          <hr></hr>
          <p className="m-5 text-xl">
            kontakt:{" "}
            <Link
              to="mailto:joanna@wakeupandcode.pl"
              className="cursor-pointer underline underline-offset-4 duration-500 hover:underline-offset-2"
            >
              joanna@wakeupandcode.pl
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
