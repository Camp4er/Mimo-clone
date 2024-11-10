import Image from 'next/image';
import tech_crunch_logo from "@/public/assests/techcrunch.webp";
import washington_post_logo from "@/public/assests/washingtonpost.webp";
import new_york_times_logo from "@/public/assests/newyorktimes.webp";
import boston_globe_logo from "@/public/assests/bostonglobe.webp";
import lifehacker_logo from "@/public/assests/Lifehacker.webp";
import gizmodo_logo from "@/public/assests/Gizmodo.webp";
import forbes_logo from "@/public/assests/Forbes.webp";

const companies = [
    {
        alt: 'TechCrunch logo',
        src: tech_crunch_logo,
        width: 124,
        height: 18,
        className: "mt-6 h-[18px] w-auto object-contain",
    },
    {
        alt: 'Washington Post logo',
        src: washington_post_logo,
        width: 154,
        height: 23,
        className: "h-[23px] w-auto object-contain",
    },
    {
        alt: 'New York Times logo',
        src: new_york_times_logo,
        width: 124,
        height: 18,
        className: "h-[20px] w-auto object-contain",
    },
    {
        alt: 'Boston Globe logo',
        src: boston_globe_logo,
        width: 124,
        height: 18,
        className: "h-[17px] w-auto object-contain",
    },
    {
        alt: 'Lifehacker logo',
        src: lifehacker_logo,
        width: 124,
        height: 18,
        className: "h-[20px] w-auto object-contain",
    },
    {
        alt: 'Gizmodo logo',
        src: gizmodo_logo,
        width: 124,
        height: 18,
        className: "h-[12px] w-auto object-contain",
    },
    {
        alt: 'Forbes logo',
        src: forbes_logo,
        width: 63,
        height: 17,
        className: "h-[17px] w-auto object-contain",
    },
];

const Companies = () => {
    return (
        <section className="mt-4 space-y-20 px-6 sm:mt-10 sm:px-10 lg:px-10">
            <div className="mt-6 flex w-full flex-wrap items-center justify-center space-x-4 space-y-6 lg:space-x-14">
                {companies.map((company, index) => (
                    <Image
                        key={index}
                        alt={company.alt}
                        loading="lazy"
                        width={company.width}
                        height={company.height}
                        className={company.className}
                        src={company.src}
                        style={{ color: 'transparent' }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Companies;
