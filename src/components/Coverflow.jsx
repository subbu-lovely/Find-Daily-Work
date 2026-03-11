import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/400/300?1",
  "https://picsum.photos/400/300?2",
  "https://picsum.photos/400/300?3",
  "https://picsum.photos/400/300?4",
  "https://picsum.photos/400/300?5"
];

function Coverflow() {

  const [active, setActive] = useState(2);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 overflow-hidden">

      <div className="flex items-center gap-6">

        {images.map((img, index) => {

          const offset = index - active;

          return (
            <motion.img
              key={index}
              src={img}
              onClick={() => setActive(index)}
              className="w-64 h-40 object-cover rounded-xl cursor-pointer shadow-xl"
              
              animate={{
                scale: index === active ? 1.2 : 0.8,
                rotateY: offset * -40,
                x: offset * 120,
                zIndex: images.length - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1
              }}

              transition={{ duration: 0.5 }}
            />
          );
        })}

      </div>

    </div>
  );
}

export default Coverflow;