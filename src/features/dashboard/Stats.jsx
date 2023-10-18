import React from "react";
import Stat from "./Stat";
import { BiShoppingBag, BiCalendar } from "react-icons/bi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { BsBarChart } from "react-icons/bs";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const totalStays = confirmedStays.length;

  // 4.
  const occupancyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  console.log(occupancyRate);

  return (
    <>
      <Stat
        color="blue"
        title="Bookings"
        value={numBookings}
        icon={<BiShoppingBag />}
      />
      <Stat
        color="green"
        title="Sales"
        value={formatCurrency(totalSales)}
        icon={<LiaMoneyBillSolid />}
      />
      <Stat
        color="indigo"
        title="Check-ins"
        value={totalStays}
        icon={<BiCalendar />}
      />
      <Stat
        color="yellow"
        title="Occupancy Rate"
        value={Math.floor(occupancyRate * 100) + "%"}
        icon={<BsBarChart />}
      />
    </>
  );
};

export default Stats;
