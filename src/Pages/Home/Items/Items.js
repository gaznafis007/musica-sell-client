import { useQuery } from "@tanstack/react-query";
import React from "react";
import Item from "./Item";

const Items = () => {
  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("https://musica-sell-server.vercel.app/items");
      const data = res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-center text-4xl text-blue-600 my-4">
        Your recycle category
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-2">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
