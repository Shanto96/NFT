import React from "react";
import "./auction.css";

import NftBid from "../NftBid/NftBid";
function Auction() {
  return (
    <div className="auction d-flex d-col">
      <div className="au-info">
        <span className="heading">Live Auction</span>
        <span>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
      </div>
      <div className="d-flex auction-items">
        <NftBid />
        <NftBid />
        <NftBid />
      </div>
    </div>
  );
}

export default Auction;
