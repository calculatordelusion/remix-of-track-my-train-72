export interface PopularRoute {
  from: string;
  to: string;
  trainCount: number;
  duration: string;
  fare: string;
  trains: string[];
}

export const popularRoutes: PopularRoute[] = [
  { from: "Karachi", to: "Lahore", trainCount: 12, duration: "18-22 hours", fare: "Rs. 3,750 - 14,600", trains: ["Tezgam", "Green Line", "Shalimar Express", "Karakoram Express"] },
  { from: "Lahore", to: "Rawalpindi", trainCount: 8, duration: "4-5 hours", fare: "Rs. 1,100 - 4,700", trains: ["Rawal Express", "Tezgam", "Green Line", "Subak Raftar"] },
  { from: "Karachi", to: "Peshawar", trainCount: 6, duration: "24-28 hours", fare: "Rs. 4,200 - 13,300", trains: ["Khyber Mail", "Awam Express", "Rehman Baba Express"] },
  { from: "Lahore", to: "Multan", trainCount: 10, duration: "5-6 hours", fare: "Rs. 1,100 - 5,800", trains: ["Awam Express", "Hazara Express", "Jaffar Express"] },
  { from: "Quetta", to: "Rawalpindi", trainCount: 2, duration: "20-24 hours", fare: "Rs. 2,050 - 8,650", trains: ["Jaffar Express", "Bolan Mail"] },
  { from: "Karachi", to: "Hyderabad", trainCount: 8, duration: "2-3 hours", fare: "Rs. 370 - 2,700", trains: ["Shalimar Express", "Mehran Express", "Green Line"] },
  { from: "Multan", to: "Lahore", trainCount: 10, duration: "5-6 hours", fare: "Rs. 1,100 - 5,800", trains: ["Awam Express", "Tezgam", "Shalimar Express"] },
  { from: "Rawalpindi", to: "Peshawar", trainCount: 6, duration: "3-4 hours", fare: "Rs. 750 - 2,000", trains: ["Khyber Mail", "Awam Express", "Jaffar Express"] },
  { from: "Faisalabad", to: "Lahore", trainCount: 5, duration: "3-3.5 hours", fare: "Rs. 600 - 2,500", trains: ["Thal Express", "Mianwali Express"] },
  { from: "Karachi", to: "Multan", trainCount: 8, duration: "14-17 hours", fare: "Rs. 2,750 - 12,000", trains: ["Awam Express", "Tezgam", "Khyber Mail"] },
  { from: "Lahore", to: "Peshawar", trainCount: 6, duration: "7-9 hours", fare: "Rs. 1,950 - 4,800", trains: ["Khyber Mail", "Tezgam", "Awam Express"] },
  { from: "Karachi", to: "Quetta", trainCount: 2, duration: "12-14 hours", fare: "Rs. 2,050 - 4,200", trains: ["Jaffar Express", "Bolan Mail"] },
];
