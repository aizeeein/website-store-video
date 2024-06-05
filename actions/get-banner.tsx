import { Banner } from "@/types"

const URL = `${process.env.PUBLIC_API_URL}/banners`

const getBanner = async (id:string): Promise<Banner> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json()
}

export default getBanner;