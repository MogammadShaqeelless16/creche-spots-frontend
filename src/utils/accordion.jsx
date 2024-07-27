import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "Step 1",
    detail:
      "To simplify and enhance the childcare journey for families by connecting them with quality creche options, ensuring peace of mind and support for every child's development.",
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
      "Our aim is to become the go-to platform for families seeking reliable childcare solutions and to continuously improve the standards of care across all creche facilities.",
  },
];
export default data;