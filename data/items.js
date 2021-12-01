import faker from "faker";

const seed = ( add = 1 ) => {
  const now = Date.now();
  const dayOfMonth = new Date(now).getDate();
  return dayOfMonth + add;
};

export const getItems = ( count = 20 ) => {
    const items = [];
    while ( items.length < count ) {
        items.push({
            title: faker.company.companyName(),
            image: `https://picsum.photos/seed/${seed(items.length)}/300/300`,
            description: faker.lorem.paragraph(),
        });
    }

    return items;
}

export const items = getItems();

export const kits = [
        {
            "title": "Art Museum",
            "image": "https://library.elementor.com/art-museum/wp-content/uploads/sites/174/2021/11/Home_400_380.jpg",
            "url": "https://library.elementor.com/art-museum/"
        },
        {
            "title": "Urban Clothing Shop",
            "image": "https://library.elementor.com/urban-clothing-shop/wp-content/uploads/sites/175/2021/11/Urban-Clothing-Shop-Home-page.jpg",
            "url": "https://library.elementor.com/urban-clothing-shop/"
        },
        {
            "title": "Black Friday",
            "image": "https://library.elementor.com/black-friday/wp-content/uploads/sites/171/2021/10/Neon-Abstract-Vibe-1.jpg",
            "url": "https://library.elementor.com/black-friday/"
        },
        {
            "title": "Halloween",
            "image": "https://library.elementor.com/halloween/wp-content/uploads/sites/172/2021/11/Its-Alive-Thriving.jpg",
            "url": "https://library.elementor.com/halloween/"
        },
        {
            "title": "Bread Bakery",
            "image": "https://library.elementor.com/bread-bakery/wp-content/uploads/sites/155/2021/07/Homepage.jpg",
            "url": "https://library.elementor.com/bread-bakery/"
        },
        {
            "title": "Wedding Photographer",
            "image": "https://library.elementor.com/wedding-photographer/wp-content/uploads/sites/154/2021/07/Homepage.jpg",
            "url": "https://library.elementor.com/wedding-photographer/"
        },
        {
            "title": "Painting Company",
            "image": "https://library.elementor.com/painting-company/wp-content/uploads/sites/157/2021/07/Home.jpg",
            "url": "https://library.elementor.com/painting-company/"
        },
        {
            "title": "Eco-Friendly Water Bottles",
            "image": "https://library.elementor.com/eco-friendly-water-bottles/wp-content/uploads/sites/165/2021/07/Homepage.jpg",
            "url": "https://library.elementor.com/eco-friendly-water-bottles/"
        },
        {
            "title": "Ceramic Studio",
            "image": "https://library.elementor.com/ceramic-workshops/wp-content/uploads/sites/164/2021/07/Home.jpg",
            "url": "https://library.elementor.com/ceramic-workshops/"
        },
        {
            "title": "Private Tours",
            "image": "https://library.elementor.com/travel-private-tours/wp-content/uploads/sites/74/2021/05/Home.jpg",
            "url": "https://library.elementor.com/travel-private-tours/"
        },
        {
            "title": "Law Firm",
            "image": "https://library.elementor.com/law/wp-content/uploads/sites/70/2021/04/Home.jpg",
            "url": "https://library.elementor.com/law/"
        },
        {
            "title": "UX/UI Designer Portfolio",
            "image": "https://library.elementor.com/designer-portfolio/wp-content/uploads/sites/68/2020/03/Home_ux.jpg",
            "url": "https://library.elementor.com/designer-portfolio/"
        },
        {
            "title": "Interior Design Firm",
            "image": "https://library.elementor.com/interior-design-company/wp-content/uploads/sites/87/2021/05/Home.jpg",
            "url": "https://library.elementor.com/interior-design-company/"
        },
        {
            "title": "Gym",
            "image": "https://library.elementor.com/gym-club/wp-content/uploads/sites/65/2021/04/Home.jpg",
            "url": "https://library.elementor.com/gym-club/"
        },
        {
            "title": "Digital Marketing Agency",
            "image": "https://library.elementor.com/marketing-digital-agency/wp-content/uploads/sites/63/2021/04/Home.jpg",
            "url": "https://library.elementor.com/marketing-digital-agency/"
        },
        {
            "title": "Online Magazine",
            "image": "https://library.elementor.com/lifestyle-magazine/wp-content/uploads/sites/77/2021/05/Home.jpg",
            "url": "https://library.elementor.com/lifestyle-magazine/"
        },
        {
            "title": "Nature & Wildlife Photography",
            "image": "https://library.elementor.com/nature-photographer/wp-content/uploads/sites/80/2021/05/Home.jpg",
            "url": "https://library.elementor.com/nature-photographer/"
        },
        {
            "title": "Luxury Real Estate Agency",
            "image": "https://library.elementor.com/real-estate/wp-content/uploads/sites/91/2021/05/Home.jpg",
            "url": "https://library.elementor.com/real-estate/"
        },
        {
            "title": "Travel Blog",
            "image": "https://library.elementor.com/travel-blog/wp-content/uploads/sites/109/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/travel-blog/"
        },
        {
            "title": "Illustrator Portfolio",
            "image": "https://library.elementor.com/illustrator-portfolio/wp-content/uploads/sites/85/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/illustrator-portfolio/"
        },
        {
            "title": "Music Festival",
            "image": "https://library.elementor.com/electronic-music-festival/wp-content/uploads/sites/67/2021/04/Home.jpg",
            "url": "https://library.elementor.com/electronic-music-festival/"
        },
        {
            "title": "Health & Beauty Spa",
            "image": "https://library.elementor.com/spa/wp-content/uploads/sites/81/2021/05/Home.jpg",
            "url": "https://library.elementor.com/spa/"
        },
        {
            "title": "Environmental Organization",
            "image": "https://library.elementor.com/ngo-environment/wp-content/uploads/sites/88/2021/05/Home.jpg",
            "url": "https://library.elementor.com/ngo-environment/"
        },
        {
            "title": "Wedding Planner",
            "image": "https://library.elementor.com/wedding-planning/wp-content/uploads/sites/71/2021/04/Home-1.jpg",
            "url": "https://library.elementor.com/wedding-planning/"
        },
        {
            "title": "Italian Restaurant",
            "image": "https://library.elementor.com/italian-cuisine/wp-content/uploads/sites/89/2021/05/Home.jpg",
            "url": "https://library.elementor.com/italian-cuisine/"
        },
        {
            "title": "Technology Conference",
            "image": "https://library.elementor.com/tech-design-event/wp-content/uploads/sites/90/2021/05/Home.jpg",
            "url": "https://library.elementor.com/tech-design-event/"
        },
        {
            "title": "Tattoo Studio",
            "image": "https://library.elementor.com/tattoo-shop/wp-content/uploads/sites/73/2021/04/Home.jpg",
            "url": "https://library.elementor.com/tattoo-shop/"
        },
        {
            "title": "Dental Clinic",
            "image": "https://library.elementor.com/dentist-clinic/wp-content/uploads/sites/75/2021/04/Home.jpg",
            "url": "https://library.elementor.com/dentist-clinic/"
        },
        {
            "title": "Construction Company",
            "image": "https://library.elementor.com/construction/wp-content/uploads/sites/76/2021/04/Home.jpg",
            "url": "https://library.elementor.com/construction/"
        },
        {
            "title": "Online Fashion Shop",
            "image": "https://library.elementor.com/fashion-shop/wp-content/uploads/sites/97/2021/05/Home.jpg",
            "url": "https://library.elementor.com/fashion-shop/"
        },
        {
            "title": "Digital and Technology Design School",
            "image": "https://library.elementor.com/digital-design-courses/wp-content/uploads/sites/95/2021/04/Home.jpg",
            "url": "https://library.elementor.com/digital-design-courses/"
        },
        {
            "title": "Makeup Artist",
            "image": "https://library.elementor.com/makeup/wp-content/uploads/sites/92/2021/05/Home.jpg",
            "url": "https://library.elementor.com/makeup/"
        },
        {
            "title": "Basketball Academy",
            "image": "https://library.elementor.com/basketball-coaching/wp-content/uploads/sites/61/2021/04/Home.jpg",
            "url": "https://library.elementor.com/basketball-coaching/"
        },
        {
            "title": "Flower Shop",
            "image": "https://library.elementor.com/boutique-flower-shop/wp-content/uploads/sites/78/2021/04/Home.jpg",
            "url": "https://library.elementor.com/boutique-flower-shop/"
        },
        {
            "title": "Veterinary Clinic",
            "image": "https://library.elementor.com/animals-veterinary-clinic/wp-content/uploads/sites/57/2021/04/Homepage.png",
            "url": "https://library.elementor.com/animals-veterinary-clinic/"
        },
        {
            "title": "Barbershop",
            "image": "https://library.elementor.com/boutique-barbershop/wp-content/uploads/sites/79/2021/04/Home.jpg",
            "url": "https://library.elementor.com/boutique-barbershop/"
        },
        {
            "title": "Health and Fitness eBook",
            "image": "https://library.elementor.com/ebook-health/wp-content/uploads/sites/93/2021/05/Home.jpg",
            "url": "https://library.elementor.com/ebook-health/"
        },
        {
            "title": "Online Marketing Courses",
            "image": "https://library.elementor.com/online-course/wp-content/uploads/sites/94/2021/05/Home.jpg",
            "url": "https://library.elementor.com/online-course/"
        },
        {
            "title": "Online Marketing Courses",
            "image": "https://library.elementor.com/business-consulting-services/wp-content/uploads/sites/60/2021/04/Home.jpg",
            "url": "https://library.elementor.com/business-consulting-services/"
        },
        {
            "title": "Japanese Restaurant & Bar",
            "image": "https://library.elementor.com/japanese-fusion-restaurant/wp-content/uploads/sites/62/2021/04/Home.jpg",
            "url": "https://library.elementor.com/japanese-fusion-restaurant/"
        },
        {
            "title": "Handyman",
            "image": "https://library.elementor.com/handyman-service/wp-content/uploads/sites/82/2021/04/Home.jpg",
            "url": "https://library.elementor.com/handyman-service/"
        },
        {
            "title": "Luxury Hotel",
            "image": "https://library.elementor.com/resort-hotel/wp-content/uploads/sites/64/2021/04/Home.jpg",
            "url": "https://library.elementor.com/resort-hotel/"
        },
        {
            "title": "Baby Sleep Consultant",
            "image": "https://library.elementor.com/baby-sleep-consultant/wp-content/uploads/sites/52/2021/04/Home.jpg",
            "url": "https://library.elementor.com/baby-sleep-consultant/"
        },
        {
            "title": "Personal Trainer",
            "image": "https://library.elementor.com/fitness-trainer/wp-content/uploads/sites/66/2021/04/Home.jpg",
            "url": "https://library.elementor.com/fitness-trainer/"
        },
        {
            "title": "Design Conference",
            "image": "https://library.elementor.com/creative-conference/wp-content/uploads/sites/69/2021/04/Home.jpg",
            "url": "https://library.elementor.com/creative-conference/"
        },
        {
            "title": "Handmade Ceramics Shop",
            "image": "https://library.elementor.com/handmade-ceramics-shop/wp-content/uploads/sites/83/2021/04/Home.jpg",
            "url": "https://library.elementor.com/handmade-ceramics-shop/"
        },
        {
            "title": "Classic Car Restoration Company",
            "image": "https://library.elementor.com/classic-car-restoration/wp-content/uploads/sites/86/2021/04/Home.jpg",
            "url": "https://library.elementor.com/classic-car-restoration/"
        },
        {
            "title": "Life Coach",
            "image": "https://library.elementor.com/life-coaching/wp-content/uploads/sites/99/2021/05/Home.jpg",
            "url": "https://library.elementor.com/life-coaching/"
        },
        {
            "title": "Merchandise Shop",
            "image": "https://library.elementor.com/swag-online-shop/wp-content/uploads/sites/72/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/swag-online-shop/"
        },
        {
            "title": "Flooring Company",
            "image": "https://library.elementor.com/unique-flooring-company/wp-content/uploads/sites/58/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/unique-flooring-company/"
        },
        {
            "title": "Non-Governmental Organization",
            "image": "https://library.elementor.com/ngo-independent-living/wp-content/uploads/sites/96/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/ngo-independent-living/"
        },
        {
            "title": "Clinical Psychologist",
            "image": "https://library.elementor.com/psychologists/wp-content/uploads/sites/102/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/psychologists/"
        },
        {
            "title": "VR Headsets & Gaming Equipment",
            "image": "https://library.elementor.com/vr-headset/wp-content/uploads/sites/111/2021/05/Home.jpg",
            "url": "https://library.elementor.com/vr-headset/"
        },
        {
            "title": "Family Doctor",
            "image": "https://library.elementor.com/family-doctor/wp-content/uploads/sites/56/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/family-doctor/"
        },
        {
            "title": "Sports Blog",
            "image": "https://library.elementor.com/sport-blog/wp-content/uploads/sites/105/2021/04/Home.jpg",
            "url": "https://library.elementor.com/sport-blog/"
        },
        {
            "title": "Event DJ",
            "image": "https://library.elementor.com/dj-events/wp-content/uploads/sites/59/2021/05/Home.jpg",
            "url": "https://library.elementor.com/dj-events/"
        },
        {
            "title": "Portrait Photography",
            "image": "https://library.elementor.com/portrait-photography/wp-content/uploads/sites/104/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/portrait-photography/"
        },
        {
            "title": "English Pub",
            "image": "https://library.elementor.com/english-pub/wp-content/uploads/sites/101/2021/04/Home.jpg",
            "url": "https://library.elementor.com/english-pub/"
        },
        {
            "title": "Skate Shop",
            "image": "https://library.elementor.com/urban-shop/wp-content/uploads/sites/112/2021/05/Home_featured_image.jpg",
            "url": "https://library.elementor.com/urban-shop/"
        },
        {
            "title": "Cleaning Company",
            "image": "https://library.elementor.com/cleaning-company/wp-content/uploads/sites/100/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/cleaning-company/"
        },
        {
            "title": "Dance Studio",
            "image": "https://library.elementor.com/dance-floor-studio/wp-content/uploads/sites/114/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/dance-floor-studio/"
        },
        {
            "title": "Carpenter",
            "image": "https://library.elementor.com/carpenter/wp-content/uploads/sites/107/2021/04/Home.jpg",
            "url": "https://library.elementor.com/carpenter/"
        },
        {
            "title": "Save The Date Invitation",
            "image": "https://library.elementor.com/save-the-date/wp-content/uploads/sites/108/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/save-the-date/"
        },
        {
            "title": "Yoga Studio",
            "image": "https://library.elementor.com/yoga-studio/wp-content/uploads/sites/110/2021/04/Home.jpg",
            "url": "https://library.elementor.com/yoga-studio/"
        },
        {
            "title": "Pet Care Company",
            "image": "https://library.elementor.com/pet-care/wp-content/uploads/sites/118/2021/04/Home.jpg",
            "url": "https://library.elementor.com/pet-care/"
        },
        {
            "title": "Online Coffee Shop",
            "image": "https://library.elementor.com/coffee-roasters/wp-content/uploads/sites/115/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/coffee-roasters/"
        },
        {
            "title": "Singer",
            "image": "https://library.elementor.com/music-artist/wp-content/uploads/sites/116/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/music-artist/"
        },
        {
            "title": "Moving and Storage Company",
            "image": "https://library.elementor.com/moving-company/wp-content/uploads/sites/117/2021/05/Home.jpg",
            "url": "https://library.elementor.com/moving-company/"
        },
        {
            "title": "Drone",
            "image": "https://library.elementor.com/drone-product/wp-content/uploads/sites/119/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/drone-product/"
        },
        {
            "title": "Fashion Stylist Portfolio",
            "image": "https://library.elementor.com/fashion-stylist-portfolio/wp-content/uploads/sites/120/2021/05/Home.jpg",
            "url": "https://library.elementor.com/fashion-stylist-portfolio/"
        },
        {
            "title": "Business Growth Advisor Blog",
            "image": "https://library.elementor.com/growth-advisor-blog/wp-content/uploads/sites/122/2021/05/Home.jpg",
            "url": "https://library.elementor.com/growth-advisor-blog/"
        },
        {
            "title": "Landscape Design",
            "image": "https://library.elementor.com/landscape-design/wp-content/uploads/sites/125/2021/05/Home.jpg",
            "url": "https://library.elementor.com/landscape-design/"
        },
        {
            "title": "Architecture Photography",
            "image": "https://library.elementor.com/architectural-photographer/wp-content/uploads/sites/123/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/architectural-photographer/"
        },
        {
            "title": "Speech-Language Therapist",
            "image": "https://library.elementor.com/speech-therapist/wp-content/uploads/sites/126/2021/04/Home.jpg",
            "url": "https://library.elementor.com/speech-therapist/"
        },
        {
            "title": "Winery",
            "image": "https://library.elementor.com/boutique-vineyard/wp-content/uploads/sites/128/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/boutique-vineyard/"
        },
        {
            "title": "Beauty Salon",
            "image": "https://library.elementor.com/hair-salon/wp-content/uploads/sites/124/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/hair-salon/"
        },
        {
            "title": "Nutritionist",
            "image": "https://library.elementor.com/dietitian-nutritionist/wp-content/uploads/sites/130/2021/04/Home.jpg",
            "url": "https://library.elementor.com/dietitian-nutritionist/"
        },
        {
            "title": "App & SaaS",
            "image": "https://library.elementor.com/product-app-tech/wp-content/uploads/sites/134/2021/04/Home.jpg",
            "url": "https://library.elementor.com/product-app-tech/"
        },
        {
            "title": "CV Portfolio",
            "image": "https://library.elementor.com/cv-portfolio/wp-content/uploads/sites/129/2021/04/Home.jpg",
            "url": "https://library.elementor.com/cv-portfolio/"
        },
        {
            "title": "Handmade Cupcakes",
            "image": "https://library.elementor.com/cupcake-bakeshop/wp-content/uploads/sites/131/2021/05/Home.jpg",
            "url": "https://library.elementor.com/cupcake-bakeshop/"
        },
        {
            "title": "Virtual Assistant",
            "image": "https://library.elementor.com/virtual-personal-assistant/wp-content/uploads/sites/133/2021/05/Home.jpg",
            "url": "https://library.elementor.com/virtual-personal-assistant/"
        },
        {
            "title": "Personal Chef",
            "image": "https://library.elementor.com/personal-chef/wp-content/uploads/sites/138/2021/04/Home.jpg",
            "url": "https://library.elementor.com/personal-chef/"
        },
        {
            "title": "Fashion Blog",
            "image": "https://library.elementor.com/fashion-blogger/wp-content/uploads/sites/132/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/fashion-blogger/"
        },
        {
            "title": "Food Truck",
            "image": "https://library.elementor.com/cool-food-truck/wp-content/uploads/sites/135/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/cool-food-truck/"
        },
        {
            "title": "Private Tutor",
            "image": "https://library.elementor.com/online-private-lessons/wp-content/uploads/sites/137/2021/05/Home.jpg",
            "url": "https://library.elementor.com/online-private-lessons/"
        },
        {
            "title": "Tennis Academy",
            "image": "https://library.elementor.com/tennis-academy/wp-content/uploads/sites/140/2021/04/Home.jpg",
            "url": "https://library.elementor.com/tennis-academy/"
        },
        {
            "title": "Shared Workspace",
            "image": "https://library.elementor.com/shared-workspace/wp-content/uploads/sites/141/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/shared-workspace/"
        },
        {
            "title": "Art Gallery",
            "image": "https://library.elementor.com/art-gallery/wp-content/uploads/sites/139/2021/04/Home.jpg",
            "url": "https://library.elementor.com/art-gallery/"
        },
        {
            "title": "Hiking Tours Company",
            "image": "https://library.elementor.com/trekking-tour-company/wp-content/uploads/sites/144/2021/04/Homepage.jpg",
            "url": "https://library.elementor.com/trekking-tour-company/"
        },
        {
            "title": "Music Band",
            "image": "https://library.elementor.com/music-band/wp-content/uploads/sites/146/2021/05/Home.jpg",
            "url": "https://library.elementor.com/music-band/"
        },
        {
            "title": "Computer Technician",
            "image": "https://library.elementor.com/computer-technician/wp-content/uploads/sites/145/2021/04/Home.jpg",
            "url": "https://library.elementor.com/computer-technician/"
        },
        {
            "title": "3D Designer Portfolio",
            "image": "https://library.elementor.com/3d-designer-portfolio/wp-content/uploads/sites/156/2021/07/Home.jpg",
            "url": "https://library.elementor.com/3d-designer-portfolio/"
        },
        {
            "title": "Eco Shop",
            "image": "https://library.elementor.com/eco-shop/wp-content/uploads/sites/159/2021/07/Home.jpg",
            "url": "https://library.elementor.com/eco-shop/"
        },
        {
            "title": "Health & Mindfulness Blog",
            "image": "https://library.elementor.com/health-and-mindfulness-blog/wp-content/uploads/sites/162/2021/07/Hero.jpg",
            "url": "https://library.elementor.com/health-and-mindfulness-blog/"
        },
        {
            "title": "Delivery Company",
            "image": "https://library.elementor.com/delivery-company/wp-content/uploads/sites/158/2021/07/Home.jpg",
            "url": "https://library.elementor.com/delivery-company/"
        },
        {
            "title": "Industrial Design Portfolio",
            "image": "https://library.elementor.com/industrial-design-portfolio/wp-content/uploads/sites/121/2021/04/Home.jpg",
            "url": "https://library.elementor.com/industrial-design-portfolio/"
        }
    ];

export default items;