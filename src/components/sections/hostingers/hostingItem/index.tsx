import Image from "next/image";
import { HostingItemProps } from "../type/hostingers.type";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";

export const HostingItem: React.FC<HostingItemProps> = ({ hosting }) => {
    const parseTextWithBold = (text: string) => {
        const parts = text.split(' - ');
        if (parts.length > 1) {
            return (
            <>
                <strong className="font-semibold">{parts[0]}</strong>
                {' - '}
                {parts.slice(1).join(' - ')}
            </>
            );
        }
    return text;
    };
  return (
    <div>
        <div className="mb-4 md:mb-6">
            <h2 className="text-link text-[26px] font-[590] leading-none mb-2 md:text-[40px]">{hosting.title}</h2>
            <p className="mb-2 line-clamp-2 md:line-clamp-none">
                {hosting.description}
            </p>
            <a href="#" className="link text-[14px] font-medium leading-none md:text-[16px] md:leading-[1.4]">
                Przeczytaj recenzję {hosting.logo} →
            </a>
        </div>
        <div className="bg-background p-4 rounded-[24px] shadow-[0_0_16px_0_rgba(50,53,231,0.10)]">

            <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col w-full md:flex-row gap-4">
                    <div className="w-full md:w-[265px] bg-background p-4 h-[128px] flex justify-center items-center rounded-[8px] shadow-[0_0_16px_0_rgba(50,53,231,0.10)]">
                        <Image src={hosting.logo} width={142} height={80} className="" alt={hosting.title}/>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-1 md:grid-cols-1 mt-3">
                            <div className="flex flex-col gap-2 md:flex-row">
                                <div className="flex gap-2">
                                    <span className="text-title text-[18px] font-[590] leading-none">{hosting.rank}</span>
                                    <span className="text-link text-[18px] font-[590] leading-none">Hostinger</span>
                                </div>
                                <div className="flex gap-1">
                                    <Image src='/inside-star.svg' width={18} height={18} className="" alt="Star"/>
                                    <Image src='/inside-star.svg' width={18} height={18} className="" alt="Star"/>
                                    <Image src='/inside-star.svg' width={18} height={18} className="" alt="Star"/>
                                    <Image src='/inside-star.svg' width={18} height={18} className="" alt="Star"/>
                                    <Image src='/star.svg' width={18} height={18} className="" alt="Star"/>
                                </div>
                            </div>
                            <div className="text-gray-custom mt-auto">
                                <div >Ocena: <span className="font-bold">{hosting.rating}</span>/10</div>
                            </div>
                        <Link href={'#'} className="text-link underline hover:underline cursor-pointer">
                            {hosting.website}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="p-4 bg-link rounded-[12px] mb-4 !md:text-[24px] hover:cursor-pointer hover:!no-underline !flex gap-3 items-center justify-center !text-background font-[590] w-full hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.4727 6.36328H16.9453V5.83594C16.9453 5.54446 16.7094 5.30859 16.418 5.30859C16.1265 5.30859 15.8906 5.54446 15.8906 5.83594V6.36328H15.3633C15.0718 6.36328 14.8359 6.59914 14.8359 6.89062C14.8359 7.18211 15.0718 7.41797 15.3633 7.41797H15.8906V7.94531C15.8906 8.23679 16.1265 8.47266 16.418 8.47266C16.7094 8.47266 16.9453 8.23679 16.9453 7.94531V7.41797H17.4727C17.7641 7.41797 18 7.18211 18 6.89062C18 6.59914 17.7641 6.36328 17.4727 6.36328Z" fill="#FAFAFF"/>
                <path d="M15.3281 4.25391C15.6194 4.25391 15.8555 4.01781 15.8555 3.72656C15.8555 3.43532 15.6194 3.19922 15.3281 3.19922C15.0369 3.19922 14.8008 3.43532 14.8008 3.72656C14.8008 4.01781 15.0369 4.25391 15.3281 4.25391Z" fill="#FAFAFF"/>
                <path d="M13.2188 7.41797C13.51 7.41797 13.7461 7.18187 13.7461 6.89062C13.7461 6.59938 13.51 6.36328 13.2188 6.36328C12.9275 6.36328 12.6914 6.59938 12.6914 6.89062C12.6914 7.18187 12.9275 7.41797 13.2188 7.41797Z" fill="#FAFAFF"/>
                <path d="M8.62713 12.8459C8.83311 12.6399 9.16685 12.6399 9.37283 12.8459L9.52734 13.0004V8.47266H8.47266V13.0004L8.62713 12.8459Z" fill="#FAFAFF"/>
                <path d="M14.2734 8.47266H10.582V14.2734C10.582 14.4866 10.4538 14.6792 10.2565 14.7606C10.1911 14.7878 10.1226 14.8007 10.0546 14.8007C9.91768 14.8007 9.78275 14.7472 9.68182 14.6462L8.99997 13.9644L8.31812 14.6462C8.1667 14.7977 7.94114 14.8424 7.74338 14.7606C7.54616 14.6792 7.41791 14.4866 7.41791 14.2734V8.47266H7.12225L3.19922 10.7377V17.4726C3.19922 17.7641 3.43508 17.9999 3.72656 17.9999H14.2734C14.5649 17.9999 14.8007 17.7641 14.8007 17.4726V9C14.8007 8.70852 14.5649 8.47266 14.2734 8.47266Z" fill="#FAFAFF"/>
                <path d="M13.0342 3.2323L11.9796 1.40559C11.9096 1.28458 11.7942 1.19599 11.6593 1.15995C11.5249 1.12441 11.3802 1.14297 11.2592 1.21248L9.63677 2.14918C9.63807 1.78123 9.55085 1.38225 9.36196 1.05529C9.08025 0.567083 8.62555 0.217948 8.08119 0.072191C7.53789 -0.0725113 6.96882 0.00163284 6.48064 0.282811C5.80448 0.673676 5.40022 1.40134 5.42698 2.18205L5.4306 2.29328C5.4306 2.29739 5.4306 2.30101 5.43113 2.30513L5.48263 3.86275L4.18231 3.05251L4.18024 3.05096L4.08549 2.99172C3.4222 2.57924 2.59101 2.56377 1.91383 2.95464C1.42562 3.23634 1.07649 3.69105 0.93073 4.2354C0.784973 4.77976 0.85968 5.34827 1.14135 5.83648C1.33383 6.16923 1.60478 6.42795 1.91633 6.60672L0.263785 7.54057C0.0115051 7.68625 -0.0748733 8.00874 0.070743 8.26102L1.1604 10.0879C1.30602 10.3401 1.62851 10.4265 1.88079 10.2809L12.8412 3.95268C13.0935 3.8071 13.1798 3.48458 13.0342 3.2323ZM3.49522 5.69508C2.99112 5.98502 2.3452 5.81265 2.05488 5.30918C1.76393 4.80553 1.93746 4.15869 2.4411 3.86827C2.77945 3.67206 3.19608 3.68029 3.52722 3.8868L5.0179 4.81594L3.49522 5.69508ZM8.55397 2.41805C8.48141 2.6897 8.30696 2.91712 8.06319 3.05771L6.54005 3.93711L6.48064 2.14598C6.46777 1.75511 6.67017 1.39153 7.00798 1.19634C7.25105 1.05473 7.53532 1.01817 7.80827 1.09077C8.08017 1.16389 8.30781 1.33848 8.44839 1.58257C8.58951 1.82672 8.62709 2.14562 8.55397 2.41805Z" fill="#FAFAFF"/>
            </svg>
            {hosting.bonus}
        </a>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/uptime.svg' width={16} height={16} className="" alt="Uptime"/> UPTIME
                </div>
                <div className="text-link font-[590] leading-none">{hosting.features.uptime}</div>
            </div>
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/wida.svg' width={16} height={16} className="" alt="WYDAJNOŚĆ"/> WYDAJNOŚĆ</div>
                <div className="text-link font-[590] leading-none">{hosting.features.wydajnosc}</div>
            </div>
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/cena.svg' width={16} height={16} className="" alt="CENA"/> CENA (ROK)</div>
                <div className="text-link font-[590] leading-none">{hosting.features.cena}</div>
            </div>
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/support.svg' width={16} height={16} className="" alt="SUPPORT"/> SUPPORT</div>
                <div className="text-link font-[590] leading-none">{hosting.features.support}</div>
            </div>
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/oferta.svg' width={16} height={16} className="" alt="OFERTA"/> OFERTA</div>
                <div className="text-link font-[590] leading-none">{hosting.features.oferta}</div>
            </div>
            <div className="">
                <div className="flex gap-2 text-[12px] leading-none text-gray-custom mb-2 items-center">
                    <Image src='/bez.svg' width={16} height={16} className="" alt="BEZPIECZEŃSTWO"/> BEZPIECZEŃSTWO</div>
                <div className="text-link font-[590] leading-none">{hosting.features.bezpieczenstwo}</div>
            </div>
        </div>

        {hosting.pros && hosting.cons && (
            
            <div className="grid md:grid-cols-2 gap-6">
            <div>
                <Accordion  type="single" collapsible className="border border-border rounded-[8px] px-4">
                    <AccordionItem className=" data-[state=open]:before:-left-[0vw] data-[state=open]:before:-right-[0vw] data-[state=open]:before:transparent" value="item-1">
                        <AccordionTrigger className="flex items-center justify-baseline text-[18px] text-title leading-none font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 0C5.37066 0 0 5.37066 0 12C0 18.6293 5.37066 24 12 24C18.6293 24 24 18.6293 24 12C24 5.37066 18.6293 0 12 0ZM19.5307 10.64L15.792 14.1653L16.9333 18.256C17.1627 19.0827 16.7574 19.3974 16.016 18.9547L12 16.5333L7.97867 18.9493C7.24264 19.392 6.81069 19.0773 7.01866 18.24L8.12266 13.792L4.50131 10.5973C3.85599 10.0267 4.03197 9.56799 4.89066 9.56799H9.29064L11.3813 4.70402C11.7226 3.91467 12.2666 3.91467 12.5973 4.70933L14.6399 9.56799H19.0986C19.9626 9.57334 20.1547 10.0533 19.5307 10.64Z" fill="#008000"/>
                            </svg>
                            Zalety
                            <svg className="ml-auto custom-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.2866 16.7345C11.6753 17.0885 12.3246 17.0885 12.7143 16.7345L21.7048 8.56729C22.0984 8.20878 22.0984 7.62739 21.7048 7.26979C21.3111 6.91129 20.6718 6.91129 20.2782 7.26979L12 14.7882L3.72285 7.26888C3.32822 6.91037 2.68985 6.91037 2.29522 7.26888C1.90159 7.62738 1.90159 8.20878 2.29522 8.56638L11.2866 16.7345Z" fill="#020220"/>
                            </svg>
                        </AccordionTrigger>
                        <AccordionContent className="md:pl-0">
                        <div className="border-b border-border mb-4"></div>
                        <ul className="flex flex-col gap-2">
                            {hosting.pros.map((pro:string, index:number) => (
                                <li key={index} className="bg-[#CAFFCA] font-normal p-2 rounded-[8px] text-[12px] leading-[132%] text-title"> {parseTextWithBold(pro)}</li>
                            ))}
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <Accordion  type="single" collapsible className="border border-border rounded-[8px] px-4">
                    <AccordionItem className=" data-[state=open]:before:-left-[0vw] data-[state=open]:before:-right-[0vw] data-[state=open]:before:transparent" value="item-1">
                        <AccordionTrigger className="flex items-center justify-baseline text-[18px] text-title leading-none font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 0C18.6293 1.18471e-05 24 5.37069 24 12C24 18.6293 18.6293 24 12 24C5.37069 24 1.18467e-05 18.6293 0 12C0 5.37069 5.37069 0 12 0ZM12.3027 10.8887L8.41406 7L7 8.41406L10.8887 12.3027L7 16.1924L8.41406 17.6064L12.3027 13.7168L16.1924 17.6064L17.6064 16.1924L13.7168 12.3027L17.6064 8.41406L16.1924 7L12.3027 10.8887Z" fill="#C50003"/>
                            </svg>
                            Wady
                            <svg className="ml-auto custom-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.2866 16.7345C11.6753 17.0885 12.3246 17.0885 12.7143 16.7345L21.7048 8.56729C22.0984 8.20878 22.0984 7.62739 21.7048 7.26979C21.3111 6.91129 20.6718 6.91129 20.2782 7.26979L12 14.7882L3.72285 7.26888C3.32822 6.91037 2.68985 6.91037 2.29522 7.26888C1.90159 7.62738 1.90159 8.20878 2.29522 8.56638L11.2866 16.7345Z" fill="#020220"/>
                            </svg>
                        </AccordionTrigger>
                        <AccordionContent className="md:pl-0">
                        <div className="border-b border-border mb-4"></div>
                        <ul className="flex flex-col gap-2">
                            {hosting.cons.map((pro:string, index:number) => (
                                <li key={index} className="bg-[#FFD4D5] font-normal p-2 rounded-[8px] text-[12px] leading-[132%] text-title"> {parseTextWithBold(pro)}</li>
                            ))}
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            
            </div>
        )}

        </div>
    </div>
  );
};