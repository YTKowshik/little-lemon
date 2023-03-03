const Categories = () => {
    const arrItems = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials'].map(x => {
        return <li className={x==="Lunch"?"active category":"category"} key={x}>
            {x}
        </li>;
    });
    return <div className="categories d-flex flex-column m-2">
        <h4 className="m-0">Order for delivery!</h4>
        <ul className="list-style-none d-flex p-0 m-0">{arrItems}</ul>
    </div>
}

export default Categories;