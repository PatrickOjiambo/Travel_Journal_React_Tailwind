const travelData = [
    {
      imagelink: "https://source.unsplash.com/M0klKdlzSr8",
      heading: "Exploring the Enchanting Mountains",
      experience: "I embarked on a journey to the breathtaking mountains,  where the crisp air filled my lungs and the majestic peaks left me in awe. The serenity of nature rejuvenated my soul. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Mount Travel",
      name: "John Doe"
    },
    {
      imagelink: "https://source.unsplash.com/m8oAzXoedho",
      heading: "Unforgettable Solo Adventure",
      experience: "Setting out on my own, I embarked on a solo adventure that pushed me out of my comfort zone. I met incredible people, discovered hidden gems, and learned so much about myself along the way. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Solo Travel",
      name: "Jane Smith"
    },
    {
      imagelink: "https://source.unsplash.com/2bQHH9K4K_U",
      heading: "Lost in the Jungle",
      experience: "Venturing into the dense jungle was both thrilling and nerve-wracking. The sounds of wildlife and the vibrant foliage created an immersive experience that I'll never forget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Jungle Travel",
      name: "Michael Johnson"
    },
    {
      imagelink: "https://source.unsplash.com/tQpypKA92k8",
      heading: "Road Trip to Remember",
      experience: "Hitting the open road with friends was the perfect way to explore new places. The wind in my hair, the scenic routes, and the laughter-filled moments made it an epic road trip adventure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Road Travel",
      name: "Emily Brown"
    },
    {
      imagelink: "https://source.unsplash.com/nFCeea9zrBs",
      heading: "Sailing the Ocean Blues",
      experience: "Sailing across the vast ocean was a humbling experience. The endless horizons, tranquil waters, and breathtaking sunsets made it a journey of self-discovery and serenity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Ocean Travel",
      name: "William Davis"
    },
    {
      imagelink: "https://source.unsplash.com/9AMJN_7HuMM",
      heading: "Discovering the Charms of an Old City",
      experience: "Wandering through the narrow streets of an old city transported me back in time. The rich history, architectural marvels, and the local culture captivated my senses at every turn. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Old City Travel",
      name: "Olivia Wilson"
    },
    {
      imagelink: "https://source.unsplash.com/WTYwuUYIdOE",
      heading: "Journey through the Magnificent Desert",
      experience: "Trekking through the vast desert dunes was like stepping into another world. The golden sands, starlit nights, and the silence of the desert created a profound sense of peace within me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Desert Travel",
      name: "Daniel Thompson"
    },
    {
      imagelink: "https://source.unsplash.com/WJDR8_QxVR8",
      heading: "Solo Expedition to the Mountains",
      experience: "Embarking on a solo expedition to the mountains was a challenging yet rewarding experience. The breathtaking views, solitude, and personal growth made it an unforgettable journey. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Mount Travel",
      name: "Sophia Martinez"
    },
    {
      imagelink: "https://source.unsplash.com/qtbV_8P_Ksk",
      heading: "Lost in the Wilderness",
      experience: "Venturing deep into the untouched wilderness was a thrilling adventure. The untamed beauty, encounters with wildlife, and the rawness of nature left an indelible mark on my soul. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Jungle Travel",
      name: "Ethan Anderson"
    },
    {
      imagelink: "https://source.unsplash.com/_dH-oQF9w-Y",
      heading: "Road Trip to Paradise",
      experience: "Embarking on a road trip to paradise was a blissful escape. The scenic drives, hidden gems, and the freedom of the open road created memories that will last a lifetime. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Road Travel",
      name: "Isabella Taylor"
    },
    {
      imagelink: "https://source.unsplash.com/C_92skHqacc",
      heading: "Sailing the Azure Waters",
      experience: "Setting sail on the azure waters was a surreal experience. The gentle waves, salty breeze, and the feeling of freedom on the open sea made it a voyage of tranquility and wonder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Ocean Travel",
      name: "James Harris"
    },
    {
      imagelink: "https://source.unsplash.com/jCSjOKNJkU4",
      heading: "Exploring the Ancient City",
      experience: "Getting lost in the narrow alleys of the ancient city was like stepping back in time. The historical landmarks, cultural treasures, and the vibrant atmosphere were truly captivating. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Old City Travel",
      name: "Ava Clark"
    },
    {
      imagelink: "https://source.unsplash.com/D1fs2x11_jk",
      heading: "Journey into the Endless Dunes",
      experience: "Embarking on a journey into the endless dunes of the desert was a surreal experience. The vastness, solitude, and the ever-changing landscape painted a mesmerizing picture of nature's grandeur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Desert Travel",
      name: "Noah Turner"
    },
    {
      imagelink: "https://source.unsplash.com/MRc3pofrhPg",
      heading: "A Mountain Adventure to Remember",
      experience: "Embarking on a mountain adventure was an exhilarating experience. The challenging trails, panoramic vistas, and the sense of achievement at the summit made it a journey of triumph and beauty. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Mount Travel",
      name: "Mia Rodriguez"
    },
    {
      imagelink: "https://source.unsplash.com/HZmib_jXphw",
      heading: "Into the Heart of the Jungle",
      experience: "Venturing into the heart of the jungle was an immersive experience. The lush greenery, exotic wildlife, and the sounds of nature created a symphony of beauty and wilderness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Jungle Travel",
      name: "Liam White"
    },
    {
      imagelink: "https://source.unsplash.com/o2SN1Dm46ds",
      heading: "A Road Trip to Remember",
      experience: "Embarking on a road trip with loved ones was a journey filled with laughter and memories. The open road, spontaneous detours, and the joy of shared experiences made it an unforgettable adventure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Road Travel",
      name: "Charlotte Lewis"
    },
    {
      imagelink: "https://source.unsplash.com/A5rCN8626Ck",
      heading: "Sailing into the Horizon",
      experience: "Sailing into the horizon was a magical experience. The vastness of the ocean, the gentle sway of the waves, and the sense of freedom on the open water created a feeling of boundless possibilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Ocean Travel",
      name: "Benjamin Young"
    },
    {
      imagelink: "https://source.unsplash.com/G0OnHccvwcA",
      heading: "Lost in Time in an Ancient City",
      experience: "Getting lost in the ancient city was like stepping into a time capsule. The architectural wonders, rich history, and the mystical charm of the past made it a captivating journey of exploration. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Old City Travel",
      name: "Harper Moore"
    },
    {
      imagelink: "https://source.unsplash.com/zmczGfz1C9s",
      heading: "A Desert Adventure of a Lifetime",
      experience: "Embarking on a desert adventure was an unforgettable experience. The vast desert landscapes, golden sunsets, and the silence of the dunes created a sense of awe and wonder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ligula ut turpis tincidunt, id semper mauris fringilla.",
      travelType: "Desert Travel",
      name: "Alexander Hill"
    }
]
export default travelData