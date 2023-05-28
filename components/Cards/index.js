import Card from "./Card";

function Cards({ allCounts }) {
  const cardList = [
    {
      title: "Balance",
      count: "---",
      link: "/#balance",
    },
    {
      title: "User Balance",
      count: "---",
      link: "/#user-balance",
    },
    {
      title: "Total Account",
      count: allCounts?.total_user || "---",
      link: "/#total-account",
    },
    {
      title: "Today Sell",
      count: allCounts?.today_sell || "---",
      link: "/#today-sell",
    },
    {
      title: "Monthly Sell",
      count: allCounts?.monthly_sell || "---",
      link: "/#monthly-sell",
    },
    {
      title: "Today SMS Sent",
      count: allCounts?.today_sent || "---",
      link: "/#today-sms-sent",
    },
    {
      title: "This Month SMS Sent",
      count: allCounts?.monthly_sent || "---",
      link: "/#this-month-sms-sent",
    },
    {
      title: "Total Sent",
      count: allCounts?.total_sent,
      link: "/#total-sent",
    },
  ];

  return (
    <>
      {cardList.map((card, i) => (
        <Card key={i} title={card.title} count={card.count} link={card.link} />
      ))}
    </>
  );
}

export default Cards;
