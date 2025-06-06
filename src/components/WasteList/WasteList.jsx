import "./WasteList.css";
import React, { useState } from 'react';
import SkipDialog from "../SkipDialog/SkipDialog";

const data = [
    {
      "id": 17933,
      "size": 4,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 278,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.813",
      "allowed_on_road": true,
      "allows_heavy_waste": true,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
    },
    {
      "id": 17934,
      "size": 6,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 305,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:52.992",
      "allowed_on_road": true,
      "allows_heavy_waste": true,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
    },
    {
      "id": 17935,
      "size": 8,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 375,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.171",
      "allowed_on_road": true,
      "allows_heavy_waste": true,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg"
    },
    {
      "id": 17936,
      "size": 10,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 400,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.339",
      "allowed_on_road": false,
      "allows_heavy_waste": false,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg"
    },
    {
      "id": 17937,
      "size": 12,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 439,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.516",
      "allowed_on_road": false,
      "allows_heavy_waste": false,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg"
    },
    {
      "id": 17938,
      "size": 14,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 470,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.69",
      "allowed_on_road": false,
      "allows_heavy_waste": false,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg"
    },
    {
      "id": 17939,
      "size": 16,
      "hire_period_days": 14,
      "transport_cost": null,
      "per_tonne_cost": null,
      "price_before_vat": 496,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:46.897146",
      "updated_at": "2025-04-07T13:16:53.876",
      "allowed_on_road": false,
      "allows_heavy_waste": false,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg"
    },
    {
      "id": 15124,
      "size": 20,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.434",
      "allowed_on_road": false,
      "allows_heavy_waste": true,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
    },
    {
      "id": 15125,
      "size": 40,
      "hire_period_days": 14,
      "transport_cost": 248,
      "per_tonne_cost": 248,
      "price_before_vat": 992,
      "vat": 20,
      "postcode": "NR32",
      "area": "",
      "forbidden": false,
      "created_at": "2025-04-03T13:51:40.344435",
      "updated_at": "2025-04-07T13:16:52.603",
      "allowed_on_road": false,
      "allows_heavy_waste": false,
      "image_url" : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
    }
  ]

  const WasteList = () => {
    const [selectedSkipId, setSelectedSkipId] = useState(null); // final confirmed selection
    const [dialogItem, setDialogItem] = useState(null);         // currently open dialog item
    const [tempSelectedSkipId, setTempSelectedSkipId] = useState(null); // temporary selection when dialog is open
  
    const handleSelect = (item) => {
      setDialogItem(item);
      setTempSelectedSkipId(item.id); // temporarily mark as selected
    };
  
    const handleCloseDialog = () => {
      setDialogItem(null);
      setTempSelectedSkipId(null); // revert selection on cancel
    };
  
    const handleContinue = () => {
      setSelectedSkipId(dialogItem.id); // finalize selection
      setDialogItem(null);
      setTempSelectedSkipId(null); // clear temporary state
    };
  
    const isItemSelected = (itemId) =>
      itemId === selectedSkipId || itemId === tempSelectedSkipId;
  
    return (
      <div className="page-wrapper">
        <header className="page-header">
          <h1>Choose Your Skip Size</h1>
          <p>Select the skip size that best suits your needs</p>
        </header>
        <div className="table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Size</th>
                <th>Hire Period</th>
                <th>Price (excl. VAT)</th>
                <th>VAT (%)</th>
                <th>Postcode</th>
                <th>On Road</th>
                <th>Heavy Waste</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td data-label="Image">
                    <img src={item.image_url} alt={`Item ${item.id}`} />
                  </td>
                  <td data-label="Size">{item.size} yard</td>
                  <td data-label="Hire Period">{item.hire_period_days} days</td>
                  <td data-label="Price (excl. VAT)" className="price">£{item.price_before_vat}</td>
                  <td data-label="VAT (%)">{item.vat}%</td>
                  <td data-label="Postcode">{item.postcode}</td>
                  <td data-label="On Road">{item.allowed_on_road ? "✅" : "❌"}</td>
                  <td data-label="Heavy Waste">{item.allows_heavy_waste ? "✅" : "❌"}</td>
                  <td>
                    <button
                      onClick={() => handleSelect(item)}
                      className={isItemSelected(item.id) ? 'selected-btn' : ''}
                    >
                      {isItemSelected(item.id) ? "Selected" : "Select this skip"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <SkipDialog
          item={dialogItem}
          onClose={handleCloseDialog}
          onContinue={handleContinue}
        />
      </div>
    )}

export default WasteList;