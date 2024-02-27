import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function App() {
  const sliderImages = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Custom/GW/Personalised/Feb/GIFT-STORE-2._CB580997665_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/GW_PC_1500x600._CB572878474_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/feb/hero/PC-2_1dd._CB582888721_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
    },
    {
      url: " https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/UNREC_-_CURTAINS_-_3000._CB582938668_.jpg",
    },

  ];
  return (
    <div>

      <SimpleImageSlider
        width={1550}
        height={600}
        images={sliderImages}
        showNavs={true}

      />





    </div>
  );
}