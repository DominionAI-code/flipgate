import Image from "next/image";

export default function Gallery() {
  const mediaItems = [
    {
      title: "Community Town Hall Session",
      type: "Field Photo",
      caption:
        "Direct community engagement layout detailing regional governance reorientation.",
      image: "/townhall.png", // Replace with your image file name in public/
    },
    {
      title: "Civic Literacy Materials Distribution",
      type: "Advocacy Print",
      caption:
        "Handing out legal toolkits to citizens to empower localized awareness.",
      image: "/civic.png", // Replace with your image file name in public/
    },
    {
      title: "Syllables of Change: Creative Arts Event",
      type: "Cultural Meetup",
      caption:
        "Advocacy performance sessions blending social critique with transformative poetry.",
      image: "/creative-arts.png", // Replace with your image file name in public/
    },
    {
      title: "Skills Hub Launch Event",
      type: "Youth Empowerment",
      caption:
        "Orientation program for incoming training, technical certification, and mentorship tracks.",
      image: "/skillhub.png", // Replace with your image file name in public/
    },
    {
      title: "Strategic Advisory Session",
      type: "Corporate Governance",
      caption:
        "FLIPGATE executive leaders organizing the operational framework for Phase 2 architectures.",
      image: "/advisory.png", // Replace with your image file name in public/
    },
    {
      title: "Media Broadcast and Outreach",
      type: "Podcast & Campaign",
      caption:
        "Broadcasting messages tracking societal orientation paradigms across regional airwaves.",
      image: "/media.png", // Replace with your image file name in public/
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4FDF9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#046A55] mb-4">
            Official Media Library
          </h1>
          <div className="h-1 w-20 bg-[#00E63A] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            A visual repository tracking our steps, campaigns, community
            presence, and creative deployments.
          </p>
        </div>

        {/* Responsive Equal Aspect Ratio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Image Container with Fixed 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden border-b border-gray-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Accent Ribbon overlay */}
                <div className="absolute top-4 left-4 z-10 bg-[#046A55] text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {item.type}
                </div>
              </div>

              {/* Text Meta Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#046A55] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
