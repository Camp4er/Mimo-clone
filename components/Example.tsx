import Image from 'next/image';
import zuzana_b from '@/public/assests/zuzana_b.webp';
import luca from "@/public/assests/luca_p.webp";
import charlotte from "@/public/assests/charlotte_s.webp";
import qrowdsy from "@/public/assests/qrowdsy_light.svg";
import designdough from "@/public/assests/designdough.webp";
import boots from "@/public/assests/boots.webp";

const testimonials = [
    {
        name: 'Zuzana B.',
        testimonial: "Mimo's learning path provided a stable, sustainable pace for several months of constant progress.",
        position: 'Front-End Developer',
        companyLogo: qrowdsy,
        authorImg: zuzana_b,
    },
    {
        name: 'Luca P.',
        testimonial: "What I gained from the course was the ability to better understand coding and how to work on a project.",
        position: 'Front-End Developer',
        companyLogo: designdough,
        authorImg: luca,
    },
    {
        name: 'Charlotte S.',
        testimonial: "I highly recommend Mimo to anyone looking to learn web development. I promise you will not regret it.",
        position: 'Front-End Developer',
        companyLogo: boots,
        authorImg: charlotte,
    },
];

const Example = () => {
    return (
        <section className="mt-4 space-y-20 sm:mt-10 lg:px-10">
            <div className="hidden px-8 sm:block">
                <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] sm:text-[24px] sm:leading-[32px] mb-8 text-center text-white">
                    Join 25+ million learners & start a career you’ll love
                </h5>
                <div className="flex flex-col gap-6 sm:flex-row">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-1 flex-col rounded-3xl border-2 border-product2-border-secondary p-6 last:hidden md:last:block"
                        >
                            <div className="flex items-end justify-between">
                                <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                                    {testimonial.name}
                                </p>
                                <Image
                                    alt="author"
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    decoding="async"
                                    className="h-10 w-10 rounded-full"
                                    src={testimonial.authorImg}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                            <h4 className="font-mimopro text-[18px] leading-[28px] mt-4 text-product2-content-primary">
                                "{testimonial.testimonial}"
                            </h4>
                            <div className="mt-auto flex items-end justify-between pt-10">
                                <p className="font-mimopro text-[16px] leading-[24px] text-product2-content-secondary">
                                    {testimonial.position}
                                </p>
                                <Image
                                    alt="company"
                                    loading="lazy"
                                    width={120}
                                    height={26}
                                    decoding="async"
                                    className="max-w-[80px]"
                                    src={testimonial.companyLogo}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Example;
