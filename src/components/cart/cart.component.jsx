import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsCount,
  selectIsHidden,
} from "../../redux/cart/cart.selectors";

import { clearItem, showCart, hideCart } from "../../redux/cart/cart.actions";

import {
  CartContainer,
  CartIconContainer,
  CartCounter,
  CartHeader,
  CartItemsContainer,
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemQuantityPriceContainer,
  RemoveCartItemContainer,
} from "./cart.styles";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove-button.svg";
import { ReactComponent as XButton } from "../../assets/x-button.svg";
import CustomTextSpan from "../custom-text-span/custom-text-span.component";
import CustomButton from "../custom-button/custom-button.component";

const Cart = ({
  cartItems,
  cartItemsCount,
  isHidden,
  clearItem,
  showCart,
  hideCart,
}) => (
  <CartContainer>
    <CartIconContainer onClick={() => showCart()}>
      <CartCounter>{cartItemsCount}</CartCounter>
      <CartIcon className="cart-icon" title="Cart" />
    </CartIconContainer>
    {!isHidden ? (
      <CartItemsContainer>
        <CartHeader>
          <CustomTextSpan weight="bold">
            My Bag,
            {cartItemsCount === 0
              ? ` is empty`
              : cartItemsCount > 1
              ? ` ${cartItemsCount} items`
              : ` ${cartItemsCount} item`}
          </CustomTextSpan>
          <XButton onClick={() => hideCart()} />
        </CartHeader>
        {/*MESSAGE WHEN A PRODUCT IS ADDED TO CART*/}

        {cartItems.map((el) => (
          <CartItemContainer>
            <CartItemImage image={el.image} />
            <CartItemDetailsContainer>
              <CustomTextSpan size="16" weight="bold">
                {el.title}
              </CustomTextSpan>
              <CustomTextSpan size="15">
                {el.selectedOption.attribute}
              </CustomTextSpan>
              <CartItemQuantityPriceContainer>
                <CustomTextSpan size="15">
                  Quantity: <b>{el.quantity}</b>
                </CustomTextSpan>
                <CustomTextSpan weight="bold" size="16">
                  $
                  {el.selectedOption.price > el.selectedOption.discountPrice
                    ? el.selectedOption.discountPrice * el.quantity
                    : el.selectedOption.price * el.quantity}
                </CustomTextSpan>
              </CartItemQuantityPriceContainer>
            </CartItemDetailsContainer>
            <RemoveCartItemContainer
              onClick={() =>
                clearItem({ id: el.id, attribute: el.selectedOption.attribute })
              }
            >
              <RemoveIcon />
            </RemoveCartItemContainer>
          </CartItemContainer>
        ))}

        {cartItemsCount > 0 ? (
          <CustomButton
            isText
            width={`70%`}
            color={`white`}
            bgColor={`black`}
            bgColorHover={`rgba(142,115,41,1)`}
          >
            <Link to="/checkout">GO TO CHECKOUT</Link>
          </CustomButton>
        ) : null}
      </CartItemsContainer>
    ) : null}
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  isHidden: selectIsHidden,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (itemToClear) => dispatch(clearItem(itemToClear)),
  showCart: () => dispatch(showCart()),
  hideCart: () => dispatch(hideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
