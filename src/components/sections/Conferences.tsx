import { motion } from "motion/react";
import { useMemo } from "react";
import { conferencePhotos } from "../../data/conferences";
import SectionTitle from "../ui/SectionTitle";

export default function Conferences() {
  const rotations = useMemo(
    () => conferencePhotos.map(() => (Math.random() - 0.5) * 6),
    []
  );

  return (
    <section id="conferences" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Conferences & Meetups"
          subtitle="Sharing knowledge and connecting with the community"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {conferencePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="polaroid-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover="hover"
            >
              {/* Thumbtack */}
              <motion.div
                className="thumbtack"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: "backOut",
                  },
                }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                variants={{
                  hover: {
                    y: -5,
                    scale: 1.05,
                  },
                }}
              >
                <img
                  src="/images/blueThumbTack.png"
                  alt="thumbtack"
                  className="w-16 h-16 object-contain"
                />
              </motion.div>

              {/* Polaroid */}
              <motion.div
                className="polaroid group"
                style={{
                  rotate: rotations[index],
                }}
                variants={{
                  hover: {
                    rotate: 0,
                    scale: 1.05,
                    y: -5,
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.3)",
                    zIndex: 10,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="polaroid-inner">
                  <div className="polaroid-image">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="polaroid-caption">
                    <p className="font-handwriting text-slate-800 text-center">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
