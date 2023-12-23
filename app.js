const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.json());

// Data
const rooms = [
  {
    id: 1,
    seats: 20,
    name: "luxury",
    amenities: ["Wi-Fi", "Projector"],
    price: 1500,
  },
];
const bookings = [
  {
    customerName: "Ayyappan",
    date: "2023-01-01",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    roomId: 1,
  },
];

// List all available rooms
app.get("/", (req, res) => {
  res.status(200).json(rooms);
});

// Creating a room
app.post("/api/rooms", (req, res) => {
  const { seats, amenities, price } = req.body;
  const room = {
    id: rooms.length + 1,
    seats,
    amenities,
    price,
  };
  rooms.push(room);
  // 201 code - used for resource successfull creation
  res.status(201).json(room);
});

// Booking a room
app.post("/api/bookings", (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const room = rooms.find((r) => r.id === parseInt(roomId));
  if (!room) return res.status(404).json({ error: "Room not found" });

  const booking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId: room.id,
    roomName: room.name,
  };

  bookings.push(booking);
  // 201 api code - used for resource successfull creation
  res.status(201).json(booking);
});

// List all rooms with booked data
app.get("/api/rooms/bookings", (req, res) => {
  const result = rooms.map((room) => {
    const booking = bookings.find((b) => b.roomId === room.id);
    return {
      roomName: room.name,
      booked: !!booking,
      customerName: booking ? booking.customerName : null,
      date: booking ? booking.date : null,
      startTime: booking ? booking.startTime : null,
      endTime: booking ? booking.endTime : null,
    };
  });

  res.status(200).json(result);
});

// List all customers with booked data
app.get("/api/customers/bookings", (req, res) => {
  const result = bookings.map((booking) => {
    const room = rooms.find((r) => r.id === booking.roomId);
    return {
      customerName: booking.customerName,
      roomName: room.name,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
  });

  res.status(200).json(result);
});

// List how many times a customer has booked the room
app.get("/api/customers/booking-count", (req, res) => {
  const result = {};
  bookings.forEach((booking) => {
    const key = `${booking.customerName}_${booking.roomId}`;
    result[key] = result[key] ? result[key] + 1 : 1;
  });

  const formattedResult = Object.entries(result).map(([key, count]) => {
    const [customerName, roomId] = key.split("_");
    return {
      customerName,
      roomId: parseInt(roomId),
      count,
    };
  });

  res.status(200).json(formattedResult);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
