import DishCard from "../components/dish-card-component";

const Dishes = () => {
    const dishes = [{ dishname: "Greek Salad", dishImage: "greek salad.jpg", dishDescription: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: 12.99 },
    { dishname: "Brushetta", dishImage: "bruchetta.svg", dishDescription: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: 7.99 },
    { dishname: "Grilled Fish", dishImage: "lemon dessert.jpg", dishDescription: "Grilled Fish", price: 10.99 }];
    return <div className="d-flex flex-column dishes">
        {dishes.map((x, i) => {
            return <DishCard key={`dish_${i}`} dish={x} ></DishCard>
        })}
    </div>
}
export default Dishes;