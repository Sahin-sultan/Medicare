import DoctorCard from "@/components/DoctorCard";

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    specialization: "Cardiologist",
    degrees: ["MBBS", "MD", "DM"],
    experience: 12,
    schedule: [
      { day: "Monday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 2:00 PM", "5:00 PM - 9:00 PM"] },
      { day: "Friday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] }
    ],
    consultationFee: 1500
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    specialization: "Pediatrician",
    degrees: ["MBBS", "MD"],
    experience: 8,
    schedule: [
      { day: "Tuesday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] },
      { day: "Thursday", times: ["10:00 AM - 2:00 PM", "5:00 PM - 9:00 PM"] },
      { day: "Saturday", times: ["9:00 AM - 2:00 PM"] }
    ],
    consultationFee: 1200
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    specialization: "Dermatologist",
    degrees: ["MBBS", "MD", "DVL"],
    experience: 10,
    schedule: [
      { day: "Monday", times: ["2:00 PM - 6:00 PM"] },
      { day: "Wednesday", times: ["2:00 PM - 6:00 PM"] },
      { day: "Saturday", times: ["10:00 AM - 2:00 PM", "3:00 PM - 7:00 PM"] }
    ],
    consultationFee: 1800
  }
];

const DoctorsPage = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Our Specialists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;