import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHomeTitle, useItisTitle } from './usetitle';


export default function Inventory() {
  useItisTitle("Inventory");
  // Extracting table data into an array makes it much easier to manage in React
  const inventoryItems = [
    { id: 1, name: '4-Person Dome Tent', brand: 'Coleman', category: 'Shelter', status: 'Available', rowClass: 'available', rateClass: 'three' },
    { id: 2, name: 'Mummy Sleeping Bag', brand: 'The North Face', category: 'Bedding', status: 'Available', rowClass: 'available', rateClass: 'two' },
    { id: 3, name: 'Flash Cooking System', brand: 'Jetboil', category: 'Cooking', status: 'In Use', rowClass: 'in-use', rateClass: 'one' },
    { id: 4, name: 'Spot 400 Headlamp', brand: 'Black Diamond', category: 'Lighting', status: 'Available', rowClass: 'available', rateClass: 'three' },
    { id: 5, name: 'Ultralight First Aid Kit', brand: 'Adventure Medical Kits', category: 'Safety', status: 'Available', rowClass: 'available', rateClass: 'three' },
    { id: 6, name: 'Explorer 300 Power Station', brand: 'Jackery', category: 'Electronics', status: 'In Use', rowClass: 'in-use', rateClass: 'two' },
    { id: 7, name: 'Chair Zero', brand: 'Helinox', category: 'Furniture', status: 'Available', rowClass: 'available', rateClass: 'two' },
    { id: 8, name: 'BV500 Bear Canister', brand: 'BearVault', category: 'Storage', status: 'In Use', rowClass: 'in-use', rateClass: 'one' },
    { id: 9, name: 'Water Filtration System', brand: 'Sawyer', category: 'Hydration', status: 'Unavailable', rowClass: 'wishlist', rateClass: '' },
    { id: 10, name: 'Wave+ Multitool', brand: 'Leatherman', category: 'Tools', status: 'Unavailable', rowClass: 'wishlist', rateClass: '' },
  ];

  return (
    <>
      <header>
        <h1>Trevor Bercher's Tenacious Bear | ITIS3135 | Inventory Project</h1>
      </header>
      
      
      <Header />

      <main>
        <h2>Camping Supply Rental Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Status</th>
              <th>Condition Rating</th>
            </tr>
          </thead>

          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id} className={item.rowClass}>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td><span className="status">{item.status}</span></td>
                <td>
                  {/* .trim() is used here to avoid leaving an empty trailing space if rateClass is empty */}
                  <span className={`rate ${item.rateClass}`.trim()}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer /> 
    </>
  );
}