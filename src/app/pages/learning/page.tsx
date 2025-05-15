import Image from "next/image";
import styles from "../../page.module.css";
import NavHeader from '../../../components/Navbar/Navbar';
import LearningHome from "../../../components/learning/home";
import MyLearning from "@/components/learning/myLearning";

export default function LearningPage() {
    return (
        <div className={styles.dashboardContainer}>
            <div className="row">
                <NavHeader />
            </div>
            <div className="container-fluid">
                {/* <LearningHome /> */}
                <MyLearning />
            </div>
        </div >
    );
}