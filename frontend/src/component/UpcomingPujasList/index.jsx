import pujaImg from "../../assets/img/puja_img.webp";
import UpcomingPujaItem from "../UpcomingPujaItem";

const pujaDetailsList = [
  {
    id: 1,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 2,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 3,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 4,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 5,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
];

const UpcomingPujasList = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Upcoming Pujas on Sri Mandir.</h1>
      <p className="text-gray-90 text-xl mt-4">
        Book online puja with Sri Mandir in more than 500+ temples across India.
        Receive video of the puja along with the Prasad and receive blessings
        from the divine for prosperity and well-being of you and your family
      </p>

      <ul className="flex flex-row justify-center flex-wrap">
        {pujaDetailsList.map((pujaDetails) => (
          <UpcomingPujaItem {...pujaDetails} key={pujaDetails.id} />
        ))}
      </ul>
    </div>
  );
};

export default UpcomingPujasList;
