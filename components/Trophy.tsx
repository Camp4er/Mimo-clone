import Image from 'next/image';

const Trophy = () => {
    return (
        <section className="mt-10 hidden tablet:block">
            <div className="z-[11] flex w-full justify-center px-6 tablet:px-10">
                <div className="relative flex h-[220px] w-full flex-col items-center space-y-4 overflow-hidden rounded-[32px] bg-product-accent-warning-light p-6 tablet:h-[134px] tablet:flex-row tablet:justify-between tablet:space-y-0 tablet:pl-14 tablet:pr-[130px]">
                    <Image
                        alt="editors choice"
                        loading="lazy"
                        width={186}
                        height={40}
                        decoding="async"
                        className="z-10 h-10 tablet:h-12"
                        src="/_next/static/media/editorsChoiceTitle.cfd51ed8.svg"
                    />
                    <Image
                        alt="editors choice"
                        loading="lazy"
                        width={120}
                        height={120}
                        decoding="async"
                        className="z-10 h-[120px] w-[120px] tablet:h-[100px] tablet:w-[100px]"
                        src="/_next/static/media/editorsChoiceGooglePlay.0ca7a0c6.svg"
                    />
                    <Image
                        alt="editors choice stars"
                        loading="lazy"
                        width={42}
                        height={80}
                        decoding="async"
                        className="absolute bottom-6 right-6 z-10 h-[80px] tablet:bottom-4 tablet:right-4 tablet:h-[100px]"
                        src="/_next/static/media/editorsChoiceStars.bd5c856b.svg"
                    />
                    {/* Background elements */}
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className={`absolute -top-[100px] ${
                                index % 2 === 0 ? 'left-[15%]' : 'left-[calc(15%+40px)]'
                            } h-[500px] w-${index % 2 === 0 ? '20' : '60'} rotate-[30deg] bg-white/20`}
                        />
                    ))}
                    {/* Tablet-specific background elements */}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={`absolute -top-[100px] hidden h-[500px] ${
                                index % 2 === 0 ? 'w-[20px]' : 'w-[60px]'
                            } rotate-[30deg] bg-white/20 tablet:block left-[calc(40%+${index * 37}px)]`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trophy;
