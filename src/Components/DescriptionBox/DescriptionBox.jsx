import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Imagine you have a big box of toys. You want to share these toys with your friends, but you don't want to carry the whole box around. So, you create a smaller, special box. You put all the toys inside this smaller box. Now, whenever your friends want to play with the toys, they can just ask for the special box. This special box is like the ShopContextProvider. It holds the all_product data (which is like the toys). Components in your React app can ask for this special box and get the all_product data. This way, you don't have to pass the data around from component to component.</p>
                <p>In this version, the props.children property is rendered within the ShopContext.Provider. This means that any child components passed to the ShopContextProvider as props will be rendered within the context provider.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;