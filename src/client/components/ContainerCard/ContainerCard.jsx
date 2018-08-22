import React from "react";

import ContainerSubCards from "../ContainerSubCards/ContainerSubCards";
import "./ContainerCard.scss";

const ContainerCard = props => (
    <div className="card-container">
        <ContainerSubCards />
    </div>
);

export default ContainerCard;
