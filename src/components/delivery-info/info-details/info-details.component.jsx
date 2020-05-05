import React, { useState } from "react";
import { connect } from "react-redux";

import {
  showDeliveryDetails,
  showSubstitutionPolicy,
} from "../../../redux/product/product.actions";

import {
  InfoDetailsContainer,
  InfoDetailContainer,
  InfoDetailIcon,
  InfoDetailDescriptionContainer,
  InfoDetailDescription,
} from "./info-details.styles";

import { ReactComponent as CarIcon } from "../../../assets/delivery-info/car.svg";
import { ReactComponent as FlowerIcon } from "../../../assets/delivery-info/flower.svg";
import { ReactComponent as PotIcon } from "../../../assets/delivery-info/pot.svg";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";

const InfoDetails = ({ showDeliveryDetails, showSubstitutionPolicy }) => {
  const [details] = useState([
    {
      icon: <CarIcon />,
      title: `FRESH & SAFE DELIVERY
  `,
      description: `The health and safety of our customers, florists and growers is top priority. During this time, we will not require a signature for delivery. All orders will no longer be hand delivered, but be left at the front door with no contact and (as always) ready to delight.`,
      isDeliveryDetails: true,
    },
    {
      icon: <PotIcon />,
      title: `FRESHNESS FIRST`,
      description: `Our bouquets are made of fresh cut flowers. To ensure your bouquet is fresh and high quality, occasionally our expert florists may make substitutions of color or flower variety.`,
      isSubstitutionPolicy: true,
    },
    {
      icon: <FlowerIcon />,
      title: `OUR GUARANTEE`,
      description: `Our experts ensure your bouquets are fresh and will last at least 7 days.`,
    },
  ]);

  const openModal = (modal) => {
    document.body.classList.add("open-modal");
    modal();
  };

  return (
    <InfoDetailsContainer>
      {details.map(
        ({
          icon,
          title,
          description,
          isDeliveryDetails,
          isSubstitutionPolicy,
        }) => (
          <InfoDetailContainer key={title}>
            <InfoDetailIcon>{icon}</InfoDetailIcon>
            <InfoDetailDescriptionContainer>
              <CustomTextSpan weight={`bold`} text={title} />
              <InfoDetailDescription>{description}</InfoDetailDescription>
              {isDeliveryDetails || isSubstitutionPolicy ? (
                <CustomTextSpan
                  color={`#8e7329`}
                  weight={`bold`}
                  cursor={`pointer`}
                  onClick={
                    isDeliveryDetails
                      ? () => openModal(showDeliveryDetails)
                      : () => openModal(showSubstitutionPolicy)
                  }
                >
                  {isDeliveryDetails
                    ? `See Delivery Details`
                    : `See Substitution Policy`}
                </CustomTextSpan>
              ) : null}
            </InfoDetailDescriptionContainer>
          </InfoDetailContainer>
        )
      )}
    </InfoDetailsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showDeliveryDetails: () => dispatch(showDeliveryDetails()),
  showSubstitutionPolicy: () => dispatch(showSubstitutionPolicy()),
});

export default connect(null, mapDispatchToProps)(InfoDetails);
