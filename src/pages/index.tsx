import WeatherForecast from "@/components/WeatherForecast";
import * as S from "@/styles";

export default function Home({ imageURL }: { imageURL?: string }) {
    return (
        <S.Wrapper imageURL={imageURL}>
            <WeatherForecast />
        </S.Wrapper>
    );
}

type BingImageResponse = {
    images: [{ url: string }];
} | null;

export async function getServerSideProps() {
    try {
        const res = await fetch(`${process.env.HOSTNAME}/background`);
        const data: BingImageResponse = await res.json();
        const imageURL = data
            ? `https://www.bing.com/${data?.images[0].url}`
            : null;

        return {
            props: { imageURL },
        };
    } catch (error) {
        throw new Error("Unable to get Bing image of the day");
    }
}
