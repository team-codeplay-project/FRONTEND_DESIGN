import React, { useState } from "react";
import "../SeatSelection.css";

function TicketBookingPage({ account }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (row, seat) => {
    const seatKey = `${row}-${seat}`;
    const isSelected = selectedSeats.includes(seatKey);

    if (isSelected) {
      const updatedSeats = selectedSeats.filter((seat) => seat !== seatKey);
      setSelectedSeats(updatedSeats);
    } else {
      const updatedSeats = [...selectedSeats, seatKey];
      setSelectedSeats(updatedSeats);
    }
  };

  const renderSeatMap = () => {
    const seatMap = [
      { row: 1, seats: 13 },
      { row: 2, seats: 15 },
      { row: 3, seats: 15 },
      { row: 4, seats: 16 },
    ];

    return seatMap.map(({ row, seats }) => {
      const rowSeats = [];

      for (let seat = 1; seat <= seats; seat++) {
        const seatKey = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatKey);

        rowSeats.push(
          <div
            key={seatKey}
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => handleSeatSelection(row, seat)}>
            {/* 숫자 표시를 주석 처리 */}
            {/* {isSelected ? "" : seat} */}
          </div>
        );
      }

      return (
        <div key={`row-${row}`} className="row">
          {rowSeats}
        </div>
      );
    });
  };

  return (
    <div className="iphone13">
      <div className="header">
        <h1>테이블석</h1>
      </div>
      <div className="seat-map">{renderSeatMap()}</div>
      <div className="footer">
        <h2>선택된 좌석</h2>
        <p>
          {selectedSeats.length === 0
            ? "선택된 좌석이 없습니다."
            : selectedSeats.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default TicketBookingPage;
