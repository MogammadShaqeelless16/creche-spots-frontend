import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "Step 1",
    detail:
      "Click Register to create your account, verify your email, then log in with your credentials to access your personal dashboard.",
  },
  {
    icon: <MdCancel />,
    heading: "Step 2",
    detail: (
      <>
        Download the <a href="https://i.ayo.ba/aJBy?pid=organic&c=organic" target="_blank" rel="noopener noreferrer"style={{ color: 'blue', fontWeight: 'bold' }}>Ayoba App</a>.
        
        The app is also available FREE on the Google Play Store, AppStore [iOS], and Huawei App Gallery.
      </>
    ),
  },
  {
    icon: <MdAnalytics />,
    heading: "Step 3",
    detail:
      "Browse our available programs and services, select the creche that suits your needs, and complete the application form to enroll.",
  },
];
export default data;