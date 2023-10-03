const CategoryCart = ({category}) => {

    const {logo, category_name, availability} = category;
    return (
        <div>
            <div className=" h-60 p-10 shadow-lg">
                <img src={logo} alt="" />
                <h2 className="text-2xl text-black font-bold mt-8">{category_name}</h2>
                <p className="text-base pt-1 text-slate-500 mt-1">{availability}</p>
            </div>
        </div>
    );
};
// category.propTypes ={
//     logo: PropTypes.img.isRequired,
//     category_name: PropTypes.string.isRequired,
//     availability: PropTypes.string.isRequired,
// }


export default CategoryCart;