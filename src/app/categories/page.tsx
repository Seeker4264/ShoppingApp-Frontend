import { getCategoriesInfo } from "@/lib/get-categories";
import categoryCard from "@/components/category-card";
import { Category } from "@/Types/Category";

export default async function Categories() {
    const categories: Category[] = await getCategoriesInfo();

    const renderCats = () => {
        let cats = [];
        if(categories.length === 0) return (
            <h2 className="text-slate-900">
                Nothing found right now...
            </h2>
        );
        for (let index = 0; index < categories.length; index++) {
            cats.push(
                <li key={index}>
                    {categoryCard(categories[index])}
                </li>
            );
        };
        return cats;
    };

    return (
        <main>

            <section id="categories" className="group p-12">
                <h1 className="w-fit text-5xl text-slate-900 font-semibold mb-4 duration-100 group-hover:text-slate-500 group-hover:scale-110  group-hover:translate-x-[48px]  group-hover:font-bold">Check out our entire catalogue</h1>
                <div className="rounded-full w-[36rem] h-1 mb-6 bg-slate-700 duration-150 group-hover:w-[56rem] group-hover:bg-slate-400" />
                <ul className="grid grid-cols-4 gap-12 text-white">
                    {renderCats()}
                </ul>
            </section>

            {/*<section id="smallContact" className="flex flex-col gap-5 p-6 bg-[#e9e9e8]">

            </section>*/}

        </main>
    );
};
