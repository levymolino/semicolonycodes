import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import BusData from "./busdata";

jest.mock("axios");

let availablebus = [
    {
      id: 1,
      location: "Manila City",
      destination: "Vigan City",
      date: "2022-07-27T01:03:25Z",
      fare: 109.95,
      departure: "2:15 A.M",
      image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      location: "Makati City",
      destination: "Iloilo City",
      date: "2022-08-02T01:03:25Z",
      fare: 22.3,
      departure: "2:15 A.M",
      image:
      "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      location: "Pasig City",
      destination: "Dumaguete City",
      date: "2022-08-2T01:03:25Z",
      fare: 55.99,
      departure: "2:15 A.M",
      image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
];

test("bus list", async () => {
axios.get.mockResolvedValue({ data: availablebus });
render(<BusData />);

const BusData = await waitFor(() => screen.findAllByTestId("BusData"));

expect(BusData).toHaveLength(3);
});