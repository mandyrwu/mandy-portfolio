import FlipCard from "@/components/flip-card";

const PHOTOS = [
  { id: "photo01",      src: "/images/about/photo01.png",      top: 296.01,  left: 879.29,  width: 261.81, rotation:  4.578, zIndex: 359 },
  { id: "photo02",      src: "/images/about/photo02.png",      top: 438.30,  left: 735.65,  width: 160.46, rotation:  4,     zIndex: 334 },
  { id: "photo03",      src: "/images/about/photo03.png",      top: 245.35,  left: 202.08,  width: 154.29, rotation:  5.158, zIndex: 368 },
  { id: "photo04",      src: "/images/about/photo04.png",      top: 249.47,  left: 749.36,  width: 146.32, rotation: -1.351, zIndex: 349 },
  { id: "photo05",      src: "/images/about/photo05.png",      top: 506.93,  left: 469.59,  width: 133.77, rotation: -0.956, zIndex: 288 },
  { id: "photo06",      src: "/images/about/photo06.png",      top: -46.76,  left: 356.94,  width: 149.95, rotation:  5.699, zIndex: 374 },
  { id: "photo07",      src: "/images/about/photo07.png",      top: -31.36,  left: 510.84,  width: 243.05, rotation: -6.669, zIndex: 354 },
  { id: "photo09",      src: "/images/about/photo09.png",      top:  98,     left: 891.56,  width: 150.11, rotation: -4.288, zIndex: 358 },
  { id: "photo10",      src: "/images/about/photo10.png",      top:  75.89,  left:  75.05,  width: 273.59, rotation: -4,     zIndex: 366 },
  { id: "photo11",      src: "/images/about/photo11.png",      top: 465.87,  left: 156.83,  width: 296.26, rotation: -2.564, zIndex: 302 },
  { id: "photo13",      src: "/images/about/photo13.png",      top: 210.47,  left:  41.16,  width: 147.91, rotation: -4.900, zIndex: 364 },
  { id: "photo14",      src: "/images/about/photo14.png",      top: 399.95,  left:  14.64,  width: 178.27, rotation:  7.157, zIndex: 365 },
  { id: "photo15",      src: "/images/about/photo15.png",      top:  59.38,  left: 742.70,  width: 144.34, rotation:  2.362, zIndex: 356 },
  { id: "photo16",      src: "/images/about/photo16.png",      top: 452.92,  left: 891.64,  width: 213.95, rotation: -1.627, zIndex: 353 },
  { id: "photo18",      src: "/images/about/photo18.png",      top: 495.68,  left: 602.75,  width: 132.04, rotation:  6.966, zIndex: 360 },
];

const CENTER = { src: "/images/about/large-center.png", top: 117.25, left: 360.59, width: 399.85, rotation: 0.224, zIndex: 375 };

export default function PhotoGallery() {
  return (
    <div style={{ position: "relative", height: "820px" }}>
      {PHOTOS.map(({ id, src, top, left, width, rotation, zIndex }) => (
        <div
          key={id}
          style={{
            position: "absolute",
            top,
            left,
            backgroundColor: "#FFFFFF",
            padding: "8px",
            border: "1px solid #E0E0E0",
            borderRadius: "10px",
            zIndex,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            style={{ width: `${width}px`, height: "auto", display: "block", borderRadius: "4px" }}
          />
        </div>
      ))}

      <FlipCard
        src={CENTER.src}
        alt="Mandy Wu"
        width={CENTER.width}
        top={CENTER.top}
        left={CENTER.left}
        zIndex={CENTER.zIndex}
        rotation={CENTER.rotation}
      />
    </div>
  );
}
