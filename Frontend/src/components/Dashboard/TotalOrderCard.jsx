import React, {useState, useEffect} from 'react'
import axios from "axios"

function TotalOrderCard() {
  const [orderData, setOrderData] = useState({
    totalOrders: 0,
    countsByType: {}
  });

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/orders/count'); // Adjust the endpoint URL as needed
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []);


  const orderCardsData = [
    {
      id: 1,
      icon: "📦",  // Example: You can replace this with an icon component or SVG path
      title: "Total Orders",
      number: orderData.totalOrders || 0,
      additionalInfo: "Updated 5 mins ago",
      css: {
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-800",
        borderColor: "border-blue-200",
      }
    },
    {
      id: 2,
      icon: "✅",  // Example: You can replace this with an icon component or SVG path
      title: "Completed Orders",
      number: orderData.countsByType.Completed || 0,
      additionalInfo: "Updated today",
      css: {
        backgroundColor: "bg-green-100",
        textColor: "text-green-800",
        borderColor: "border-green-200",
      }
    },
    {
      id: 3,
      icon: "⏳",  // Example: You can replace this with an icon component or SVG path
      title: "Pending Orders",
      number: orderData.countsByType["In Process"] || 0,
      additionalInfo: "Updated 2 hours ago",
      css: {
        backgroundColor: "bg-yellow-100",
        textColor: "text-yellow-800",
        borderColor: "border-yellow-200",
      }
    },
    {
      id: 4,
      icon: "🚨",  // Example: You can replace this with an icon component or SVG path
      title: "Emergency Orders",
      number: orderData.countsByType.Emergency || 0,
      additionalInfo: "Updated 10 mins ago",
      css: {
        backgroundColor: "bg-red-100",
        textColor: "text-red-800",
        borderColor: "border-red-200",
      }
    }
  ];

  return (
    <div className="px-5 py-5">
      <div className='grid grid-cols-4 p-4 gap-5'>
        {orderCardsData.map((card) => (
          <div
            key={card.id}
            className={`${card.css.backgroundColor} ${card.css.textColor} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center`}
          >
            <div className='text-center grid gap-2'>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-4xl font-bold">{card.number}</p>
              <p className="text-sm mt-1">{card.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TotalOrderCard
