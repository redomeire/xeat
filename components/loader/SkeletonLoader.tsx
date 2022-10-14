import ContentLoader, { Instagram } from "react-content-loader";

const SkeletonLoader = () => {
    return (
        <div className="p-10 rounded-xl bg-white h-fit">
            <ContentLoader>
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
        </div>
    );
}

const InstagramLoader = (props: Instagram) => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
            // className="md:w-[400px] w-full md:h-[460px]"
        >
            <circle cx="31" cy="31" r="15" />
            <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
            <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
        </ContentLoader>
    );
}

const FacebookLoader = () => {
    return (
        <>
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <circle cx="20" cy="20" r="20" />
        </>
    )
}

interface Props {
    props?: any
}

interface Instagram {
    className?: string
}

export { SkeletonLoader, InstagramLoader };