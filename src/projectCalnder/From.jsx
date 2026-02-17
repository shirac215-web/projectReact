import React, { useState, useEffect } from "react";

export const From = ({ setCalander, send, list, setCalanderIndex, calander }) => {
    const [isOpen, setIsOpen] = useState(true);
    // משתנה מקומי לשם כדי לאפשר הקלדה חלקה בלי הפרעות מה-State הראשי
    const [tempName, setTempName] = useState(calander?.name || "");

    // עדכון השם המקומי אם הלוח שנבחר מהרשימה משתנה
    useEffect(() => {
        setTempName(calander?.name || "");
    }, [calander]);

    if (!isOpen) return null;

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setTempName(newName); // עדכון התצוגה בתוך ה-input
        setCalander(prev => ({ ...prev, name: newName })); // עדכון הלוח הראשי
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                
                <h2 className="modal-title">
                    {tempName ? `לוח השנה של ${tempName}` : "עיצוב לוח שנה חדש"}
                </h2>
                <p className="modal-subtitle">התאימו אישית את המראה של הלוח שלכם</p>

                <div className="form-sections">
                    <div className="input-group">
                        <label>בחר לוח שנה מהרשימה:</label>
                        <select className="styled-select" onChange={(e) => { 
                            setCalander(list[e.target.value]); 
                            setCalanderIndex(e.target.value);
                        }}>
                            <option disabled selected>בחר לוח שנה...</option>
                            {list.map((cal, index) => <option key={index} value={index}>{cal.name}</option>)}
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="CN">שם הלוח שלך:</label>
                        <input 
                            className="styled-input" 
                            id="CN" 
                            placeholder="הקלד שם כאן..." 
                            value={tempName}
                            onChange={handleNameChange} 
                        />
                    </div>

                    <div className="colors-grid">
                        <div className="color-card">
                            <span className="color-label">רקע כללי</span>
                            <input type="color" className="color-picker" 
                                value={calander?.style?.backgroundColor || "#ffffff"}
                                onChange={(e) => setCalander(prev => ({ ...prev, style: { ...prev.style, backgroundColor: e.target.value } }))} />
                        </div>
                        <div className="color-card">
                            <span className="color-label">צבע ימים</span>
                            <input type="color" className="color-picker" 
                                value={calander?.style?.backgroundColorSlot || "#ffffff"}
                                onChange={(e) => setCalander(prev => ({ ...prev, style: { ...prev.style, backgroundColorSlot: e.target.value } }))} />
                        </div>
                        <div className="color-card">
                            <span className="color-label">מסגרת</span>
                            <input type="color" className="color-picker" 
                                value={calander?.style?.borderFrame || "#000000"}
                                onChange={(e) => setCalander(prev => ({ ...prev, style: { ...prev.style, borderFrame: e.target.value } }))} />
                        </div>
                        <div className="color-card">
                            <span className="color-label">טקסט</span>
                            <input type="color" className="color-picker" 
                                value={calander?.style?.textColor || "#000000"}
                                onChange={(e) => setCalander(prev => ({ ...prev, style: { ...prev.style, textColor: e.target.value } }))} />
                        </div>
                    </div>
                </div>

                <button className="main-save-btn" onClick={() => { send(); setIsOpen(false); }}>
                    שמור ופתח את הלוח
                </button>
            </div>
        </div>
    );
}