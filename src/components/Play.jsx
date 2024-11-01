import React, { useState } from 'react';
import './bootstrap.css';
import './style.css';

const Play = () => {
    const [val, setVal] = useState(0);
    const [total, setTotal] = useState(0);
    const [rolledValue, setRolledValue] = useState(0);
    const [toggle, changeToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function randomval() {
        const a = Math.floor(Math.random() * 6 + 1);
        setRolledValue(a);
        a === val ? ValSame(a) : ValDiff();
    }

    function setValue(num) {
        setVal(num);
    }

    function ValSame(rolledValue) {
        const newTotal = total + rolledValue;
        setTotal(newTotal);
    }

    function ValDiff() {
        const newTotal = total - 2;
        setTotal(newTotal);
    }

    function clearr() {
        setTotal(0);
        setRolledValue(0);
        setVal(0);
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 text-center mb-3">
                        <p className="score">
                            Score: {total}
                        </p>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        <div className="row text-center justify-content-center">
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <button
                                    key={num}
                                    className="col-4 col-md-2 box justify-content-center align-items-center d-flex m-1 btn"
                                    onClick={() => setValue(num)}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        <p className="select-number mt-2">Select Number</p>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-column align-items-center mt-3">
                <p className="selected-number rolledValue my-2">Selected Number: {val}</p>
                <button className="btn p-0" onClick={randomval}>
                    <img src="/images/cube.png" alt="Cube Image" className="img-fluid" style={{ maxHeight: '12rem', width: 'auto' }} />
                </button>
                <p className="note mt-2">Click on the Dice to roll</p>
                <p className="rolledValue">Rolled Value: {rolledValue}</p>
            </div>

            <div className="d-flex flex-column align-items-center mt-3">
                <button className="btn blackButton mb-2" onClick={clearr}>
                    Clear Score
                </button>
                <button className="btn blackButton" onClick={() => { changeToggle(!toggle); setShowModal(true); }}>
                    How to Play?
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" aria-hidden={!showModal}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">How to Play?</h5>
                                <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p><b>Step 1:</b> Select any number</p>
                                <p><b>Step 2:</b> Click on the Dice</p>
                                <p><b>Note:</b> If the Selected Number is equal to Rolled Number, the Rolled Number will be added to the Total Score; otherwise, 2 points will be deducted</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn blackButton" onClick={() => setShowModal(false)}>Let's Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Play;
