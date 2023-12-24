# The app is running on Localhost:3001

Entry point api : https://hallbooking-oqxt.onrender.com/

List of all available end points:

1. List all available rooms
2. List all available customers
3. Creating a room
4. Booking a room
5. List all rooms with booked data
6. List all customers with booked data
7. List how many times a customer has booked the room

---

1. List all available rooms
   {
   Endpoint: 1,
   End point Name: rooms
   api: https://hallbooking-oqxt.onrender.com/
   Method: GET
   Description: The api is used all available rooms in the entire app,
   }
   ############################################################################

2. List all available customers
   {
   api: https://hallbooking-oqxt.onrender.com/api/customers
   Method: GET
   Description: The api is used all available customers in the entire app,
   }
   ############################################################################

3. Creating a room
   {
   api: https://hallbooking-oqxt.onrender.com/api/rooms
   Method: POST
   Description: The api is used to create a room,
   Payload: {
   seats: Number,
   amenities: [],
   price: Number
   }
   }
   ############################################################################

4. Booking a room
   {
   api: https://hallbooking-oqxt.onrender.com/api/bookings
   Method: POST,
   Payload:{
   customerName: "Kumar"
   date: "12/12/2023"
   startTime: "01.00 PM"
   endTime: "04.00 PM"
   roomId: 2
   }
   Description: The api is used to book a room,
   }
   ############################################################################

5. List all rooms with booked data
   {
   api: https://hallbooking-oqxt.onrender.com/api/rooms/bookings
   Method: GET,
   Description: The api is used to show booked data
   }
   ############################################################################

6. List all customers with booked data
   {
   api: https://hallbooking-oqxt.onrender.com/api/customers/bookings
   Method: GET,
   Description: The api is used to show customers data woth booking details
   }
   ############################################################################

7. List how many times a customer has booked the room
   {
   api: https://hallbooking-oqxt.onrender.com/api/customers/booking-count
   Method: GET,
   Description: The api is used to show customers data with booking counts
   }
   ############################################################################
