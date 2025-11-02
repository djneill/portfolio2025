import { conferencePhotos } from "../../data/conferences";
import SectionTitle from "../ui/SectionTitle";

export default function Conferences() {
  return (
    <section className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Conferences & Meetups"
          subtitle="Sharing knowledge and connecting with the community"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {conferencePhotos.map((photo) => (
            <div key={photo.id} className="polaroid-wrapper ">
              {/* Thumbtack */}
              <div className="thumbtack">
                <img
                  src="/images/blueThumbTack.png"
                  alt="thumbtack"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Polaroid */}
              <div
                className="polaroid group cursor-pointer"
                style={{
                  transform: `rotate(${(Math.random() - 0.5) * 6}deg)`,
                }}
              >
                <div className="polaroid-inner">
                  <div className="polaroid-image">
                    <img src={photo.image} alt={photo.caption} />
                  </div>
                  <div className="polaroid-caption">
                    <p className="font-handwriting text-slate-800 text-center">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
