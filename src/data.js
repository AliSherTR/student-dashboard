import dashboardIcon from "./assets/dashboard.svg";
import paymentIcon from "./assets/payment.svg";
import registrationIcon from "./assets/registration.svg";
import coursesIcon from "./assets/courses.svg";
import dropSemesterIcon from "./assets/dropSemester.svg";
import resultIcon from "./assets/result.svg";
import noticeIcon from "./assets/notice.svg";
import scheduleIcon from "./assets/schedule.svg";
import coins from "./assets/coins.png";
import cash from "./assets/cash.png";
import chart from "./assets/chart.png";
export const SideBarLinks = [
    {
        id: 0,
        title: "Dashboard",
        destination: "/",
        img: dashboardIcon,
    },
    {
        id: 1,
        title: "Payment",
        destination: "/payment",
        img: paymentIcon,
    },
    {
        id: 2,
        title: "Registration",
        destination: "/registration",
        img: registrationIcon,
    },
    {
        id: 3,
        title: "Courses",
        destination: "/courses",
        img: coursesIcon,
    },
    {
        id: 4,
        title: "Drop Semester",
        destination: "/drop-semester",
        img: dropSemesterIcon,
    },
    {
        id: 5,
        title: "Result",
        destination: "/result",
        img: resultIcon,
    },
    {
        id: 6,
        title: "Notice",
        destination: "/notice",
        img: noticeIcon,
    },
    {
        id: 7,
        title: "Schedule",
        destination: "/schedule",
        img: scheduleIcon,
    },
];

export const financeCardData = [
    {
        id: 0,
        image: coins,
        amount: 1000,
        text: "Total Payable",
    },
    {
        id: 1,
        image: cash,
        amount: 5000,
        text: "Total Paind",
    },
    {
        id: 2,
        image: chart,
        amount: 300,
        text: "Others",
    },
];
