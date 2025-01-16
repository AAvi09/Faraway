import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <em className="bg-blue-700 h-20 text-black font-semibold">{`Add some items for your trip`}</em>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <div className="bg-blue-700 h-20 ">
      <em className="text-black font-semibold">
        {percentage === 100
          ? `you are ready to go for your trip✈👩‍✈️👨‍✈️🌍🌎🌏`
          : ` You have packed ${packedItems} out of ${numItems} (${percentage}%) items for
        your trip`}
      </em>
    </div>
  );
};

export default Stats;
