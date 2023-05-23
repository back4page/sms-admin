import Card from "./Card";

function Cards() {
  const cardList = [
    {
      title: "Balance",
      count: 10,
      link: "/#balance",
    },
    {
      title: "User Balance",
      count: 20,
      link: "/#user-balance",
    },
    {
      title: "Total Account",
      count: 30,
      link: "/#total-account",
    },
    {
      title: "Today Sell",
      count: 40,
      link: "/#today-sell",
    },
    {
      title: "Monthly Sell",
      count: 40,
      link: "/#monthly-sell",
    },
    {
      title: "Today SMS Sent",
      count: 40,
      link: "/#today-sms-sent",
    },
    {
      title: "This Month SMS Sent",
      count: 40,
      link: "/#this-month-sms-sent",
    },
    {
      title: "Total Sent",
      count: 40,
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
