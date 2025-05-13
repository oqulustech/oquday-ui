'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
import React from 'react';
import NavHeader from '../../../components/Navbar/Navbar';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const initialHour = new Date().getHours();
  return (
    <div className={styles.dashboardContainer}>
      <div className="row">
        <NavHeader />
      </div>
      <div className='row'>
        <Image
          className=""
          src="/banerImage.jpg"
          alt="Baner"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h4> Let's Get Started</h4>
          </div>
          <div className="col">  </div>

        </div>
        <div className="row mt-3">
          <div className="col col-8">
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <h6 className="card-title">Awaiting  Your Action</h6>
                <div className="row mt-3">
                  <div className="col col-1 text-center pt-3">
                    <i className="bi bi-box2 h5"></i>
                  </div>
                  <div className="col">
                    <p>Legal Name Change : Rosalind Panda (c) <br />
                      <small> My Tasks -20 day(s)ago<br />
                        DUE 04/10/2025 </small></p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col col-1 text-center pt-3">
                    <i className="bi bi-box2 h5"></i>
                  </div>
                  <div className="col">
                    <p>Legal Name Change : Rosalind Panda (c) <br />
                      <small> My Tasks -20 day(s)ago<br />
                        DUE 04/10/2025 </small></p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col col-1 text-center pt-3">
                    <i className="bi bi-box2 h5"></i>
                  </div>
                  <div className="col">
                    <p>Legal Name Change : Rosalind Panda (c) <br />
                      <small> My Tasks -20 day(s)ago<br />
                        DUE 04/10/2025 </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4 shadow-lg mb-4">
              <div className="card-body">
                <h6 className="card-title">Timely Suggetiosn</h6>

                <p className="card-text text-center">Some quick example text to build the card's content.</p>

              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card  shadow-lg mb-4">
              <div className="card-body">
                <h6 className="card-title">Announcements</h6>
                <div className="row mt-2">
                  <div className="col col-4 text-center pt-3">
                    <Image
                      className=""
                      src="/mike.png"
                      alt="Baner"
                      width={70}
                      height={70}
                      priority
                    />
                  </div>
                  <div className="col col-8">
                    <p> <small> Some quick example text to build  </small> </p>

                  </div>
                </div>

              </div>
            </div>
            <div className="card mt-4 shadow-lg mb-4">
              <div className="card-body">
                <h6 className="card-title">Timely Suggetiosn</h6>
                <p className="card-text"> <small> Some quick example text to build on the card title and make up the bulk of the card's content. </small></p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div >


  );
}