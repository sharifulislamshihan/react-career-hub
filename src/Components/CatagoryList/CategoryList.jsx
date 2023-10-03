import { useEffect, useState } from "react";
import CategoryCart from "./CategoryCart";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])

    return (
        <div>
            <div>
                <h2 className="text-5xl text-center font-bold">Job Category List</h2>
                <p className=" text-base text-slate-500 text-center my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 gap-10 my-20 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    categories.map(category => <CategoryCart key={category.id} category = {category}></CategoryCart>)
                }
            </div>
        </div>
    );
};

export default CategoryList;