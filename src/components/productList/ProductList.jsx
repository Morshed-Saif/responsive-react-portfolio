import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">Create & inspire. It's mSaif</h1>
				<p className="pl-desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nulla mollitia voluptas repellendus aliquam at. Ab?
				</p>
			</div>
			<div className="pl-list">
				{products.map((product) => (
					<Product
						key={product.id}
						img={product.img}
						link={product.link}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
