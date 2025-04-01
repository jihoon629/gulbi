import React, { useState } from 'react';
import './Gulbi.css'; // CSS 파일 import

export default function Gulbi() {
  const [gulbi, setGulbi] = useState('');
  const [seraItem, setSeraItem] = useState('');
  const [auctionGold, setAuctionGold] = useState('');
  const [result, setResult] = useState(null);

  function Ssal(Gulbi, seraItem, auctionGold) {
    const inGameGold = 100;
    const SsalMukgold = (inGameGold * seraItem) / Gulbi;
    const efficiency = (auctionGold * 0.97) / (SsalMukgold * 0.97);
    return efficiency * 100;
  }

  const handleCalculate = () => {
    if (gulbi && seraItem && auctionGold) {
      const efficiency = Ssal(Number(gulbi), Number(seraItem), Number(auctionGold));
      setResult(efficiency.toFixed(2)); // 소수점 2자리까지 표시
    } else {
      alert('모든 값을 입력해주세요!');
    }
  };

  return (
    <div className="container">
      <h1 className="title">굴비 세라 효율</h1>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={gulbi}
            onChange={(e) => setGulbi(e.target.value)}
            placeholder="굴비 값"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          
          <input
            type="number"
            value={seraItem}
            onChange={(e) => setSeraItem(e.target.value)}
            placeholder="세라템 가격"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={auctionGold}
            onChange={(e) => setAuctionGold(e.target.value)}
            placeholder="경매장 판매가 (만)"
          />
        </label>
      </div>
      <button className="button" onClick={handleCalculate}>
        계산
      </button>
      {result !== null && (
        <div className="result">
          <strong>굴비 효율:</strong> {result}%
        </div>
      )}
    </div>
  );
}