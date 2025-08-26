import { Title } from "@/components/ui"

export const Neteasy = () => {
  const listItems = [
    { id: 1, text: "szybkość działania strony" },
    { id: 2, text: "szybkość działania strony" },
    { id: 3, text: "szybkość działania strony" },
    { id: 4, text: "szybkość działania strony" },
    { id: 5, text: "szybkość działania strony" }
  ];

  return (
    <section className="">
        <div className="min-container">
            <Title>Neteasy Hosting: Analiza Opinii i Recenzji od Użytkowników</Title>
            <div className="flex flex-col gap-2">
                <p className="max-w-[727px]">Renomowana firma hostingowa, która cieszy się dużym zainteresowaniem użytkowników. Gromadzenie opinii i recenzji od ludzi stało się nieodłącznym elementem dzisiejszego rynku usług hostingowych. W zakresie ecenzjii i opini są zróżnicowane – od entuzjastycznych po bardziej krytyczne. Różnorodność opinii jest naturalnym zjawiskiem, biorąc pod uwagę zróżnicowane oczekiwania i potrzeby.</p>
                <ul className="flex flex-col gap-2 text-title">
                  {listItems.map((item) => (
                    <li key={item.id} className="flex gap-2 items-center leading-none text-[14px] md:text-base">
                      <span className="text-link">•</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <p className="max-w-[727px]">Na podstawie tych kryteriów wybraliśmy 10 najlepszych hostingów , które spełniają potrzeby różnych typów stron internetowych, od prostych blogów po rozbudowane portale internetowe. W rankingu znajdziesz zarówno polskie jak i zagraniczne firmy hostingowe , które oferują usługi na terenie Polski. Przedstawimy Ci również zalety i wady każdego z nich, a także podpowiemy, dla kogo są najlepsze.</p>
            </div>
        </div>
    </section>
  );
};