import { useQuery } from "@tanstack/react-query";
import { BING_BASE_URL } from "@constants/index";

interface ImgProps {
    src: string;
}

export default function useImageUrl(): ImgProps {
    const { data } = useQuery({
        queryKey: ["background-image"],
        queryFn: async () => {
            return fetch(
                `${window.isServer ? process.env.APP_URL : ""}/get-image`
            ).then((res) => res.json());
        },
        suspense: true,
        refetchOnWindowFocus: false,
    });
    return { src: `${BING_BASE_URL}${data.url}` };
}
