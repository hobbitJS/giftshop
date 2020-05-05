import React from "react";

import { DeliveryDetailsContainer } from "./delivery-details.styles";

const DeliveryDetails = () => (
  <DeliveryDetailsContainer>
    <div className="delivery-details-introduction">
      <h2>Florist Delivered - Fresh Flowers and Plants</h2>
      <p>
        We can deliver flowers, plants, and specialty gifts to almost 100% of
        the United States and Canada. We can also deliver flowers, worldwide, to
        more than 150 countries across the globe. To place an international
        order, or for more specific information on the 150 countries we serve,
        please visit our International Shop. Unfortunately, we cannot guarantee
        delivery at a specific time of day. Substitution may be necessary to
        ensure your gift is delivered on the day you requested. Taxes are based
        on prevailing rates in the delivery area. In most areas of the United
        States and Canada, orders placed as late as 2p.m. in the recipient's
        time zone can be delivered that day (earlier times may apply to some
        areas and during holidays). Saturday and Sunday deliveries are available
        in some areas for orders placed by 1p.m. in the recipient's time zone.
      </p>
    </div>
    <div className="funeral-arrangements">
      <h3>FUNERAL ARRANGEMENTS</h3>
      <p>
        Funeral arrangements may require additional lead-time. If your sympathy
        or funeral order requires delivery at a specific time of day see below:.
      </p>
      <p>
        <b>Monday Morning Delivery</b> - Order by Saturday at 12 noon in the
        recipient's time zone
      </p>
      <p>
        <b>Morning Delivery Tuesday through Saturday</b> - Order by 3p.m. in the
        recipient's time zone on the day before
      </p>
      <p>
        <b>Afternoon Delivery Monday through Saturday</b> - Orders must be
        placed with a 3 hour lead-time
      </p>
      <p>
        <b>Sunday Delivery is available in some areas</b> - In those areas,
        orders placed before 1p.m. in the recipient's time zone can be delivered
        on that same day. The availability of Sunday delivery will be determined
        during order checkout
      </p>
    </div>
    <div className="exotic-flowers">
      <h3>EXOTIC FLOWERS AND PLANTS</h3>
      <p>
        Due to the limited availability of exotic flowers and plants, Next-Day
        delivery is required. Delivery is available Monday through Saturday.
      </p>
    </div>
    <div className="international-deliveries">
      <h3>INTERNATIONAL DELIVERIES</h3>
      <p>
        Outside the United States and Canada, flower and plant orders placed by
        2p.m. Eastern Time can be delivered the next business day. Floral
        arrangements delivered internationally may vary due to current exchange
        rates, or regional and seasonal availability. Prices may be subject to
        change for certain countries. You will be contacted if additional funds
        are required.
      </p>
    </div>
    <div className="service-fees">
      <h3>SERVICE FEES</h3>
      <p>
        A service fee is applied to orders delivered by an FTD florist, however
        the actual service fees charged may vary. For example, same day
        deliveries, weekend and holiday service fees may be higher.
      </p>
      <p>
        For residential deliveries, if the recipient is not available at the
        time of delivery, the delivery person may leave the floral arrangement
        for the recipient to retrieve when they return or attempt delivery the
        next day. During major holidays, deliveries may be made as late as 9 pm.
      </p>
      <p>
        For business deliveries, if the business is closed or not accepting
        deliveries, delivery will be attempted the next business day. During
        holidays, deliveries may be made as late as 5pm. Please note: Florists
        may call the recipient to schedule delivery.
      </p>
      <div className="hospital-deliveries">
        <p>
          <b>Hospital deliveries:</b> - please make sure the recipient is still
          in the hospital before scheduling the delivery.
        </p>
        <p>
          All pricing, fees and order total will be disclosed on the Billing and
          Review step of the checkout process, above the "Place Your Order"
          button.
        </p>
      </div>
    </div>
    <div className="order-details">
      <h3>ORDER DETAILS</h3>
      <p>
        When you place an order with FTD, details of your order, including
        personal information about order recipients, may be shared with a local
        FTD® Florist to fulfill your order.
      </p>
    </div>
  </DeliveryDetailsContainer>
);

export default DeliveryDetails;
