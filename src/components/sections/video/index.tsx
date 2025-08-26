'use client'
import { Title } from "@/components/ui"
import Image from "next/image"
import { useState } from "react"

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section>
      <div className="min-container">
        <Title className="md:mb-8 mb-4">
          Najlepsze PL firmy hostingowe według branży lub usługi
        </Title>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div className="relative w-full h-full max-h-[480px] group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <Image
                  src="/thumbnail.jpg"
                  alt="Laptop with hosting code"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" className="md:w-[106px] md:h-[106px] w-[56px] h-[56px]" viewBox="0 0 106 106" fill="none">
                    <rect x="35" y="33" width="44" height="43" fill="white"/>
                    <path d="M101.868 22.1049C98.0421 17.5565 90.9778 15.7012 77.4863 15.7012H28.5126C14.7125 15.7012 7.52839 17.6762 3.7165 22.5187C0 27.2401 0 34.1968 0 43.825V62.1764C0 80.8293 4.4096 90.2999 28.5126 90.2999H77.4867C89.1863 90.2999 95.6694 88.6627 99.8636 84.6487C104.165 80.5325 106 73.8117 106 62.1764V43.825C106 33.6712 105.712 26.6735 101.868 22.1049ZM68.0523 55.5343L45.8135 67.157C45.3164 67.4169 44.7727 67.5458 44.2297 67.5458C43.6149 67.5458 43.0015 67.3803 42.4581 67.0513C41.4351 66.4314 40.8103 65.3225 40.8103 64.1264V40.9555C40.8103 39.7615 41.4333 38.6536 42.4544 38.0333C43.4757 37.413 44.746 37.3706 45.8057 37.9212L68.0445 49.469C69.1759 50.0565 69.8865 51.2245 69.8882 52.4989C69.8896 53.7743 69.1821 54.9441 68.0523 55.5343Z" fill="#FF0000"/>
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fpEUML4CRx8?autoplay=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}