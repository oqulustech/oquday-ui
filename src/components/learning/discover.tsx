'use client';
import Image from "next/image";
import React from 'react';
export default function Discovery() {
    return (
        <div className="row">
            <div className="row mt-5">
                <h4> Discover</h4>
            </div>
            <div className="row mt-2">
                <div className="col mt-2 ">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <div className="card-body">
                            <h6> Explore The Learning Catalog</h6>
                            <small> Browse and filter content to find what you need.</small>
                            <br></br>
                            <button
                                type='button'
                                className='btnBg btn btn-primary  ms-auto mt-2'
                            >
                                Browse Learning
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <h5> Recently Added  &nbsp; <button type="button" className="btn border-radius  btn-sm btn-outline-secondary">View More</button></h5>
            </div>
            <div className="row mt-3 mb-3">

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
            <div className="row mt-3">
                <div className="col mt-2 ">

                    <h6> Based on Your Interests</h6>
                    <small> customize your learning pages by choosing multiple topics that interest you.</small>
                    <br></br>
                    <button
                        type='button'
                        className='btnBg btn btn-primary  ms-auto mt-2'
                    >
                        Add Preferences
                    </button>


                </div>
            </div>
        </div>


    );
}