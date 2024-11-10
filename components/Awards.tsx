import Image from 'next/image';
import editor_choice_award from '@/public/assests/EditorsChoiceAward.webp';
import appstore_rating_award from '@/public/assests/AppstoreRatingAward.webp';
import best_self_improvement_app_award from '@/public/assests/BestSelfImprovementAppAward.webp';
import playstore_rating_award from '@/public/assests/PlaystoreRatingAward.webp';

const Awards = () => {
    return (
        <section className="mt-20 space-y-20 px-6 md:mt-40 md:px-10 lg:mt-20 xl:mt-40">
            <div className="grid w-full grid-cols-1 items-center justify-items-center gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                <Image
                    alt="Editors choice award"
                    loading="lazy"
                    width={220}
                    height={104}
                    decoding="async"
                    className="object-contain"
                    // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEditorsChoiceAward.07207b91.png&amp;w=256&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEditorsChoiceAward.07207b91.png&amp;w=640&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 2x"
                    src= {editor_choice_award}
                />
                <Image
                    alt="Appstore rating of 4.9"
                    loading="lazy"
                    width={220}
                    height={104}
                    decoding="async"
                    className="object-contain"
                    // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAppstoreRatingAward.ea27fb6f.png&amp;w=256&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAppstoreRatingAward.ea27fb6f.png&amp;w=640&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 2x"
                    src= {appstore_rating_award}
                />
                <Image
                    alt="Best self-improvement app award"
                    loading="lazy"
                    width={220}
                    height={104}
                    decoding="async"
                    className="object-contain"
                    // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBestSelfImprovementAppAward.0a800ad4.png&amp;w=256&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBestSelfImprovementAppAward.0a800ad4.png&amp;w=640&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 2x"
                    src={best_self_improvement_app_award}
                />
                <Image
                    alt="Playstore rating of 4.7"
                    loading="lazy"
                    width={220}
                    height={104}
                    decoding="async"
                    className="object-contain"
                    // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPlaystoreRatingAward.d2db3a66.png&amp;w=256&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPlaystoreRatingAward.d2db3a66.png&amp;w=640&amp;q=75&amp;dpl=dpl_3UK5bzLL5ib16KhARpBcTo31W9Tb 2x"
                    src={playstore_rating_award}
                />
            </div>
        </section>
    );
};

export default Awards;
