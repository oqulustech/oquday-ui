'use client';
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';
import styles from "../page.module.css";
import { HouseCheck, Person, Folder, Save, ArrowBarRight } from 'react-bootstrap-icons';
import LearningHome from "@/components/learning/home";
import NavHeader from "@/components/Navbar/Navbar";
import MyLearning from "@/components/learning/myLearning";
import Discovery from "@/components/learning/discover";
export default function LearningPage() {
    return (
        <div className={styles.dashboardContainer}>
            <div className="row">
                <NavHeader />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <p> Learning Sub menu</p>
                    </div>
                    <div className="col-10">
                        {/* <LearningHome /> */}
                        {/* <MyLearning /> */}
                        <Discovery />
                    </div>

                </div>

            </div>
        </div >
    );
}