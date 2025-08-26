export const ComparisonTable = () => {
  const comparisonData = [
    {
      id: 1,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 2,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 3,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 4,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 5,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 6,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 7,
      left: "Lorem ipsum dolor sit amet consectetur.",
      right: "Lorem ipsum dolor sit amet consectetur."
    }
  ];

  return (
    <section>
      <div className="min-container">
          <div className="rounded-[8px] bg-background border font-[590] md:font-medium text-[12px] md:text-base leading-none border-line overflow-hidden">
            {comparisonData.map((item) => (
              <div key={item.id} className="grid md:grid-cols-[0.35fr_0.65fr] grid-cols-[0.42fr_0.58fr] last:border-b-0 border-b border-line">
                <div className="bg-link text-background md:p-4 p-2">
                  {item.left}
                </div>
                <div className="text-title md:p-4 p-2">
                  {item.right}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};