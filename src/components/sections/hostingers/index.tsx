import { Title } from "@/components/ui"
import { hostingData } from "./data/hostingers.data";
import { HostingData } from "./type/hostingers.type";
import { HostingItem } from "./hostingItem";

export const Hostingers = () => {
  return (
    <section className="">
        <div className="min-container">
            <Title className="mb-4">Ranking hostingów 2025 - top 10 najlepszych hostingów</Title>
            <p className="mb-8">Na podstawie powyższych kryteriów przygotowaliśmy ranking najlepszych hostingów 2025, który przedstawia topowe firmy hostingowe. Oto nasze zestawienie:</p>
            <div className="flex flex-col">
              {hostingData.map((hosting: HostingData, index: number) => (
                  <div 
                      key={hosting.id} 
                      className={`
                          pb-8 
                          ${index < hostingData.length - 1 ? 'border-b border-gray-200 mb-8' : ''}
                      `}
                  >
                      <HostingItem hosting={hosting} />
                  </div>
              ))}
          </div>
        </div>
    </section>
  );
};