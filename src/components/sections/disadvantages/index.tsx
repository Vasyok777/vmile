import { cn } from "@/lib/utils";

export const Disadvantages = () => {
  const disadvantagesData = [
    {
      type: 'advantages',
      title: 'Zalety',
      color: 'green',
      items: [
        {
          title: 'Łatwy w obsłudze hosting wordpress',
          description: 'Hostinger oferuje łatwy w obsłudze hosting WordPress. Możliwość łatwej instalacji jednym przyciskiem oraz automatycznym instalatorem WordPress. Można również skorzystać z kreatora stron internetowych, co czyni zarządzanie stroną internetowe jeszcze aplikacje za pomocą instalatora SoftScript. Ponadto hostingu obsługa wpływanie techniczne procedurów co WordPress przez całą dobę przez chat na żywo lub e-mail.'
        },
        {
          title: 'Najszybszy hosting wordpress',
          description: 'możesz szyklo, popularny instalator obsługujący najnowszych technologii, takich jak LiteSpeed Cache, CloudFlare CDN, HTTP/2 czy PHP 7.4. Według naszych testów, strona www oparta na WordPress utworzona na Hostinger w średnio 1.5 sekundy, co jest znacznie szybciej niż średnia rynkowa wynosząca 3.2 sekundy.'
        }
      ]
    },
    {
      type: 'disadvantages',
      title: 'Wady',
      color: 'red',
      items: [
        {
          title: 'Łatwy w obsłudze hosting wordpress',
          description: 'Elastiger oferuje łatwy w obsłudze hosting wordpress, istnieję problemem z błędycowym panelem zarządzania łanego oraz automatycznym instalatorem WordPress. Można również skorzystać z kreatora stron internetowych, Żywo łub zarządzanie stroną internetowe żywo lub pojadanie instalatora SoftScript. Ponadto hostingu obsługa techniczna specjaliści co WordPress przez całą dobę przez chat na żywo lub e-mail.'
        },
        {
          title: 'Najszybszy hosting wordpress',
          description: 'możesz szykło, popularny instalator obsługujący najnowszych technologii, takich jak LiteSpeed Cache, CloudFlare CDN, HTTP/2 czy PHP 7.4. Według naszych testów, strona www oparta na WordPress kursora serią w co jest znacznie szybciej niż średnia rynkowa wynosząca 3.2 sekundy.'
        }
      ]
    }
  ];

  return (
    <section className="">
      <div className="min-container">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-5">
          {disadvantagesData.map((section, sectionIndex) => {
            const isGreen = section.color === 'green' ? true : false
            return (
              <div 
                key={sectionIndex}
                className={`rounded-[24px] p-4 md:p-6 bg-[#FAFAFF] shadow-[0_0_16px_0_rgba(50,53,231,0.10)]`}
              >
                <div className="flex items-center gap-4 mb-2 md:gap-6 md:mb-4">
                  <div className={`w-5 h-5 rounded-full`}>
                    {
                        isGreen ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99998 0C4.47555 0 0 4.47555 0 9.99998C0 15.5244 4.47555 20 9.99998 20C15.5244 20 20 15.5244 20 9.99998C20 4.47555 15.5244 0 9.99998 0ZM16.2756 8.86667L13.16 11.8044L14.1111 15.2133C14.3022 15.9022 13.9645 16.1645 13.3466 15.7956L9.99998 13.7778L6.64889 15.7911C6.03554 16.16 5.67557 15.8978 5.84888 15.2L6.76888 11.4933L3.75109 8.83112C3.21333 8.35556 3.35997 7.97333 4.07555 7.97333H7.7422L9.48441 3.92001C9.76886 3.26222 10.2222 3.26222 10.4977 3.92444L12.1999 7.97333H15.9155C16.6355 7.97779 16.7956 8.37776 16.2756 8.86667Z" fill="#008000"/>
                            </svg> 
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C15.5244 9.615e-06 20 4.47558 20 10C20 15.5244 15.5244 20 10 20C4.47558 20 9.61471e-06 15.5244 0 10C0 4.47557 4.47557 0 10 0ZM10.252 9.07422L7.01172 5.83301L5.83301 7.01172L9.07422 10.252L5.83301 13.4941L7.01172 14.6719L10.252 11.4307L13.4941 14.6719L14.6719 13.4941L11.4307 10.252L14.6719 7.01172L13.4941 5.83301L10.252 9.07422Z" fill="#C50003"/>
                            </svg>
                    }
                  </div>
                  <h3 className={`text-lg font-semibold md:text-[32px] leading-none`}>
                    {section.title}
                  </h3>
                </div>
                <div className="h-[1px] mb-2 bg-line w-full md:mb-4"></div>
                <ul className="text-[14px] md:text-base md:leading-[1.32] leading-[1.48] text-title tracking-[0.14px] flex flex-col gap-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={cn("mr-2 font-bold text-[20px] leading-none md:text-[24px]", isGreen ? 'text-green' : "text-red")}>•</span>
                      <div>
                        <strong className="font-semibold">{item.title}</strong>
                        <span className="ml-1">- {item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};