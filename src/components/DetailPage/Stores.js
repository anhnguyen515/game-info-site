import React from "react";
import { Row, Col } from "react-bootstrap";
import StoreButton from "../../components/StoreButton";
import { getStoreIcon } from "../../common/utils";

export default function Stores({ gameStores }) {
  const layout = {
    xs: 1,
    sm: 2,
    lg: 1,
    xl: 2,
  };
  return (
    <>
      <h4>Where to buy</h4>
      <Row {...layout}>
        {gameStores.map((store) => (
          <Col key={store.store_id}>
            <a href={`${store.url}`} target="_blank" rel="noreferrer">
              <StoreButton>{getStoreIcon(store.store_id)}</StoreButton>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
}
