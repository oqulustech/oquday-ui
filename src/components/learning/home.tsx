'use client';
import Image from "next/image";
import React from 'react';
export default function LearningHome() {
    return (
        <div className="row">
            <div className="col-2"> </div>
            <div className="col-10">
                <div className="row mt-5">
                    <h4> What will you learn Today</h4>
                </div>
                <div className="row mt-3 mb-3">
                    <h5> Highlights</h5>
                    <div className="col col-12">
                        <div className="col-3 mt-2 ">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <Image
                                        className="w-100"
                                        src="/banerImage.jpg"
                                        alt="Baner"
                                        width={100}
                                        height={150}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h6> Elevetave your impact</h6>
                                    <h6> Navigating new role</h6>
                                </div>
                                <div className="card-footer">
                                    <a> View Lession</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <h5> Meet Our Leaders</h5>
                    <div className="row">
                        <div className="col-3 mt-2 ">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <Image
                                        className="w-100"
                                        src="/banerImage.jpg"
                                        alt="Baner"
                                        width={100}
                                        height={150}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h6> Elevetave your impact</h6>
                                    <h6> Navigating new role</h6>
                                </div>
                                <div className="card-footer">
                                    <a> View Lession</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-2 ">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <Image
                                        className="w-100"
                                        src="/banerImage.jpg"
                                        alt="Baner"
                                        width={100}
                                        height={150}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h6> Elevetave your impact</h6>
                                    <h6> Navigating new role</h6>
                                </div>
                                <div className="card-footer">
                                    <a> View Lession</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-2 ">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <Image
                                        className="w-100"
                                        src="/banerImage.jpg"
                                        alt="Baner"
                                        width={100}
                                        height={150}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h6> Elevetave your impact</h6>
                                    <h6> Navigating new role</h6>
                                </div>
                                <div className="card-footer">
                                    <a> View Lession</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-2 ">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <Image
                                        className="w-100"
                                        src="/banerImage.jpg"
                                        alt="Baner"
                                        width={100}
                                        height={150}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h6> Elevetave your impact</h6>
                                    <h6> Navigating new role</h6>
                                </div>
                                <div className="card-footer">
                                    <a> View Lession</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}